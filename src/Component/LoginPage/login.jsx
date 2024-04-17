import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await handleLogin(username, password);
      if (token) {
        history.push('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
