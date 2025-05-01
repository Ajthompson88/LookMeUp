// src/pages/CandidateSearch.tsx

import { useEffect, useState } from 'react';
import { searchGithub } from '../api/API';
import { CandidateCard } from '../components/CandidateCard';

interface Result {
  login: string;
  avatar_url: string;
  html_url: string;
}

const CandidateSearch = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSearch = async () => {
    const data: Result[] = await searchGithub();
    setResults(data);
    setCurrentIndex(0); // Reset to the first candidate when new results are fetched
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : results.length - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex < results.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div>
      <h1>Candidate Search</h1>
      {results.length > 0 ? (
        <>
          <CandidateCard
            candidate={results[currentIndex]}
            key={results[currentIndex].login}
          />
          <div style={{ marginTop: '1rem' }}>
            <button onClick={prev} disabled={results.length < 2}>
              -
            </button>
            <button onClick={next} disabled={results.length < 2} style={{ marginLeft: '0.5rem' }}>
              +
            </button>
          </div>
        </>
      ) : (
        <p>Loading candidates…</p>
      )}
      <div>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default CandidateSearch;
