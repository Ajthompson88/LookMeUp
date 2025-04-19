// TODO: Create an interface for the Candidate objects returned by the API

export interface Candidate {
    id: number | string; // Unique identifier for the candidate
    firstName: string;   // Candidate's first name
    lastName: string;    // Candidate's last name
    email: string;       // Contact email
    phone?: string;      // Optional phone number
    skills: string[];    // List of skills
    experience: number;  // Years of experience
    resumeUrl?: string;  // Optional link to the candidate's resume
    githubUsername?: string; // Optional GitHub username
    linkedInUrl?: string; // Optional LinkedIn profile URL
  }
  