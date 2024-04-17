const AuthService = {
    login: async (username, password) => {
      // Make API request to authenticate user and obtain token
      const response = await fetch('YOUR_LOGIN_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json();
      return data.token; // Assuming the server responds with a token
    }
  };
  
  export default AuthService;
  