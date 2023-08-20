import React, { useState } from 'react';
import config from '../config';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // TODO: Send registration request to backend API

    try{
        const response = await fetch(`${config.apiUrl}/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key' : `${config.apiKey}`
            },
            body: JSON.stringify({ email, password }),
          });
          const data = await response.json();
          if (response.ok) {
            // Handle successful registration
          } else {
            setError(data.message);
          }
    } catch(error){
        console.error(error)
    }
    // Example mock API response
    


    
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
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
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default RegisterForm;
