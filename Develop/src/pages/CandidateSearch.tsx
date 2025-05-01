// src/pages/CandidateSearch.tsx
import { useState, useEffect, useCallback } from 'react';
import {
  fetchRandomUser,
  fetchUserByLogin,
  GithubUserDetail,
} from '../api/API';
import CandidateCard from '../components/CandidateCard';
import { saveCandidate } from '../utils/localStorage';
import '../../src/index.css';

export default function CandidateSearch() {
  const [candidate, setCandidate] = useState<GithubUserDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  // Function to load a random candidate
  const loadRandom = useCallback(() => {
    setLoading(true);
    fetchRandomUser()
      .then(u => {
        if (!u?.login) throw new Error('Invalid user data');
        setCandidate(u);
        setHistory(prev => {
          // Avoid adding duplicate candidates to history
          if (prev.includes(u.login)) return prev;
          return [...prev, u.login];
        });
      })
      .catch(err => {
        console.error('Error fetching random user:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  // Load a candidate when the component mounts
  useEffect(() => {
    loadRandom();
  }, [loadRandom]);

  // Load a candidate from history when the index changes
  useEffect(() => {
    if (!history[index]) return;
    setLoading(true);
    fetchUserByLogin(history[index])
      .then(u => {
        if (!u) throw new Error('Invalid user data');
        setCandidate(u);
      })
      .catch(err => {
        console.error('Error fetching user by login:', err);
      })
      .finally(() => setLoading(false));
  }, [index, history]);

  // Handle rejecting a candidate
  const handleReject = () => {
    setIndex(prevIndex => {
      if (prevIndex < history.length - 1) {
        return prevIndex + 1; // Move to the next candidate in history
      } else {
        loadRandom(); // Load a new random candidate
        return prevIndex; // Keep the index the same
      }
    });
  };

  // Handle accepting a candidate
  const handleAccept = () => {
    if (!candidate) return;
    saveCandidate(candidate); // Save the candidate to local storage
    handleReject(); // Move to the next candidate
  };

  return (
    <>
      <h1>Candidate Search</h1>

      {loading ? (
        <p>Loading…</p>
      ) : candidate ? (
        <CandidateCard candidate={candidate} />
      ) : (
        <p>Error loading candidate</p>
      )}

      <div className="controls">
        <button className="btn-next" onClick={handleAccept} title="Accept">
          Save
        </button>
        <button className="btn-prev" onClick={handleReject} title="Reject">
          Reject
        </button>
      </div>
    </>
  );
}
