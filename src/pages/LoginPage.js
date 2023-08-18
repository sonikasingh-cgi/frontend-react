import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ onLogin }) => {

  return (
    <div className="card-container">
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
