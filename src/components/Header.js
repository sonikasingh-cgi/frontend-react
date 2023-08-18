import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">My App</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
