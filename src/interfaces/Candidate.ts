export interface Candidate {
  id: string; // Added id property
  avatar_url: string;
  login: string;
  name?: string;
  location?: string;
  email?: string;
  company?: string;
  bio?: string;
}
