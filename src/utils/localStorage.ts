// src/utils/localStorage.ts
import { GithubUserDetail } from '../api/API';

const KEY = 'savedCandidates';

export const getSavedCandidates = (): GithubUserDetail[] => {
  const raw = localStorage.getItem(KEY);
  return raw ? (JSON.parse(raw) as GithubUserDetail[]) : [];
};

export const saveCandidate = (c: GithubUserDetail) => {
  const list = getSavedCandidates();
  if (!list.find(x => x.id === c.id)) {
    localStorage.setItem(KEY, JSON.stringify([...list, c]));
  }
};

export const removeCandidate = (id: number) => {
  const filtered = getSavedCandidates().filter(c => c.id !== id);
  localStorage.setItem(KEY, JSON.stringify(filtered));
};
