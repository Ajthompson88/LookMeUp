// src/components/CandidateCard.tsx
import React from 'react';

interface Candidate {
  login: string;
  avatar_url: string;
  html_url: string;
}

export const CandidateCard: React.FC<{ candidate: Candidate }> = ({ candidate }) => (
  <div className="card">
    <img
      className="avatar"
      src={candidate.avatar_url}
      alt={`${candidate.login} avatar`}
    />
    <div className="card-body">
      <h2>{candidate.login}</h2>
      <a
        href={candidate.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Profile
      </a>
    </div>
  </div>
);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            