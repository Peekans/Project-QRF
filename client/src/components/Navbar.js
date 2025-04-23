import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/logo.png" alt="Gold Mind Logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/Profile" className="nav-link">Profile</Link>
          <Link to="/certifications" className="nav-link">Certifications</Link>
          <Link to="/job-postings" className="nav-link">Job Postings</Link>
          <Link to="/employer-postings" className="nav-link">Employers/Postings</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;