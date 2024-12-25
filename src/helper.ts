interface LoginCredentials {
  email: string;
  username: string;
  password: string;
}

const fetchData = ({ password, username }: LoginCredentials) => {
  return fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30, // optional, defaults to 60
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((res) => {
      localStorage.setItem('user', JSON.stringify({ ...res }));
      return res; // Return the parsed response
    })
    .catch((error) => {
      console.error('Error during fetch:', error);
      return { error: 'Failed to fetch data', details: error.message }; // Optional: Return error details
    });
};

export default fetchData;
