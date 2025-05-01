// src/pages/SavedCandidates.tsx
import { useState, useEffect } from 'react';
import { GithubUserDetail } from '../api/API';
import { getSavedCandidates, removeCandidate } from '../utils/localStorage';

export default function SavedCandidates() {
  const [saved, setSaved] = useState<GithubUserDetail[]>([]);

  useEffect(() => {
    setSaved(getSavedCandidates());
  }, []);

  // Don’t show an empty table
  if (saved.length === 0) {
    return <p>No candidates saved yet.</p>;
  }

  return (
    <>
      <h1>Potential Candidates</h1>
      <table className="saved-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {saved.map(c => (
            <tr key={c.id}>
              <td>
                <img
                  src={c.avatar_url}
                  alt={c.login}
                  className="thumb"
                />
              </td>
              <td>
                <strong>{c.name ?? c.login}</strong><br/>
                <em>({c.login})</em>
              </td>
              <td>{c.location ?? '—'}</td>
              <td>
                {c.email
                  ? <a href={`mailto:${c.email}`}>{c.email}</a>
                  : '—'
                }
              </td>
              <td>{c.company ?? '—'}</td>
              <td className="bio">{c.bio ?? '—'}</td>
              <td>
                <button
                  className="btn-reject"
                  onClick={() => {
                    removeCandidate(c.id);
                    setSaved(getSavedCandidates());
                  }}
                >
                  &minus;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
