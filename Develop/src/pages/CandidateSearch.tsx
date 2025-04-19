import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {

  const [searchTerm, setSearchTerm] = useState('');
  interface Candidate {
    id: string;
    firstName: string;
    lastName: string;
  }

  const [results, setResults] = useState<Candidate[]>([]);
  interface SelectedCandidate {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    skills: string[];
    experience: number;
    githubUsername: string;
    linkedInUrl: string;
    resumeUrl?: string;
  }

  const [selectedCandidate, setSelectedCandidate] = useState<SelectedCandidate | null>(null);

  useEffect(() => {
    if (searchTerm) {
      searchGithub(searchTerm)
        .then((data) => {
          setResults(data.items);
        })
        .catch((error) => {
          console.error('Error fetching candidates:', error);
        });
    }
  }, [searchTerm]);

  const handleCandidateClick = (candidateId: string ) => {
    searchGithubUser(candidateId.toString())
      .then((data) => {
        setSelectedCandidate(data);
      })
      .catch((error) => {
        console.error('Error fetching candidate details:', error);
      });
  };

  return (
  <div>
  <h1>CandidateSearch</h1>;
  {/* Input field for search term */}
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder="Search for candidates"
  />
  {/* Display the list of candidates */}
  <ul>
    {results.map((candidate) => (
      <li key={candidate.id} onClick={() => handleCandidateClick(candidate.id)}>
        {candidate.firstName} {candidate.lastName}
      </li>
    ))}
  </ul>
  {/* Display selected candidate details */} 
  {selectedCandidate && (
    <div>
      <h2>Candidate Details</h2>
      <p>Name: {selectedCandidate.firstName} {selectedCandidate.lastName}</p>
      <p>Email: {selectedCandidate.email}</p>
      <p>Phone: {selectedCandidate.phone}</p>
      <p>Skills: {selectedCandidate.skills.join(', ')}</p>
      <p>Experience: {selectedCandidate.experience} years</p>
      <p>GitHub: {selectedCandidate.githubUsername}</p>
      <p>LinkedIn: {selectedCandidate.linkedInUrl}</p>
      {selectedCandidate.resumeUrl && (
        <a href={selectedCandidate.resumeUrl} target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      )}
      <button onClick={() => setSelectedCandidate(null)}>Close</button>

    </div>
  )}
  </div>
  );
};



export default CandidateSearch;

