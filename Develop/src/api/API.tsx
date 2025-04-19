const searchGithub = async (searchTerm: string) => {
  try {
    // For example, use the searchTerm in a query. This is just an example endpoint.
    const response = await fetch(
      `https://api.github.com/search/users?q=${encodeURIComponent(searchTerm)}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    console.log('an error occurred', err);
    return [];
  }
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
     console.log('an error occurred', err);
    return {};
  }
};

export { searchGithub, searchGithubUser };
