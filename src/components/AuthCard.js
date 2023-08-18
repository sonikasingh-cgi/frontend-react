import React from 'react';
import '../styles/AuthCard.css';

const AuthCard = ({ title, children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default AuthCard;
