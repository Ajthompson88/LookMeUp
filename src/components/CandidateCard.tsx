// src/components/CandidateCard.tsx
import { GithubUserDetail } from '../api/API';

export default function CandidateCard({
  candidate,
}: {
  candidate: GithubUserDetail;
}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={candidate.avatar_url} alt={candidate.login} />
      </div>
      <div className="card-body">
        <h2>
          {candidate.name ?? candidate.login}{' '}
          <small>({candidate.login})</small>
        </h2>

        {/* Always show these fields, falling back if empty */}
        <p>Location: {candidate.location ?? 'Not specified'}</p>

        <p>
          Email:{' '}
          {candidate.email ? (
            <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
          ) : (
            'Not specified'
          )}
        </p>

        <p>Company: {candidate.company ?? 'Not specified'}</p>

        <p>Bio: {candidate.bio ?? 'Not specified'}</p>
      </div>
    </div>
  );
}
