import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import AuthCard from '../components/AuthCard';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUsername] = useState('');

  const handleLogin = (token) => {
    setIsLoggedIn(true);
    setUsername(userName);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Hi, {userName}! You are logged in.</p>
        </div>
      ) : (
        <div className="card-container">
        <AuthCard title={"Login"}>
        <LoginForm onLogin={handleLogin} />
        </AuthCard>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
