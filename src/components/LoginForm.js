import React, { useState } from 'react';
import config from '../config';
import AuthCard from '../components/AuthCard';


const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // TODO: Send login request to backend API
    console.log(email)
    console.log(password)
    // Example mock API response
    const response = await fetch(`${config.apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'x-api-key' : `${config.apiKey}`
      },
      body: JSON.stringify({ 'email':email, 'password':password }),
    });

    const data = await response.json();

    if (response.ok) {
        console.log('user logged in suucessful');
      onLogin(data.token); // Assume the user object is returned from the API
    } else {
      setError(data.message);
    }
  };

  return (
    <AuthCard title="Login">
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
      {error && <p className="error-message">{error}</p>}
    </form>
    </AuthCard>

  );
};

export default LoginForm;
