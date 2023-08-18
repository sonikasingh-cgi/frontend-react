import React from 'react';
import RegisterForm from '../components/RegisterForm';
import AuthCard from '../components/AuthCard';

const RegisterPage = () => {
  return (
    <div className="card-container">
        <AuthCard  title="Login">
            <RegisterForm />
        </AuthCard>
    </div>
  );
};

export default RegisterPage;
