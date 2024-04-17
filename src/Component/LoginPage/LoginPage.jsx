import React from 'react';
import LoginForm from './login';
import AuthService from './AuthService';

const LoginPage = () => {
  const handleLogin = async (username, password) => {
    try {
      const token =  "abcd"; //await AuthService.login(username, password);
      localStorage.setItem('token', token); // Store token in localStorage
      return token;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
