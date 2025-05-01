// src/api/API.ts

export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface GithubUserDetail {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name?: string;
  location?: string;
  email?: string;
  company?: string;
  bio?: string;
}

/**
 * Build common headers for GitHub API calls, including a token if you’ve set it.
 */
function buildGitHubHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
  };

  // VITE_ prefix is required for import.meta.env in Vite
  const token = import.meta.env.VITE_GITHUB_TOKEN as string | undefined;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

/**
 * Fetch details for a single GitHub username.
 */
export async function fetchUserByLogin(
  username: string
): Promise<GithubUserDetail> {
  const res = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}`,
    { headers: buildGitHubHeaders() }
  );
  if (!res.ok) {
    throw new Error(`GitHub error ${res.status}: ${res.statusText}`);
  }
  return res.json() as Promise<GithubUserDetail>;
}

/**
 * Fetches one random GitHub user, then retrieves their full details.
 */
export async function fetchRandomUser(): Promise<GithubUserDetail> {
  const since = Math.floor(Math.random() * 10_000_000);
  const res = await fetch(
    `https://api.github.com/users?since=${since}&per_page=1`,
    { headers: buildGitHubHeaders() }
  );
  if (!res.ok) {
    throw new Error(`GitHub error ${res.status}: ${res.statusText}`);
  }
  const [user] = (await res.json()) as GithubUser[];
  return fetchUserByLogin(user.login);
}
