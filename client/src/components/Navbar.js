import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaCog } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // This would typically come from authentication state or context
  const studentName = "John";
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logos">
          <img src="/logo.png" alt="Gold Mind Logo" className="logo" />
          <img src="/northvegaslogo.gif" alt="North Las Vegas Logo" className="nlv-logo" />
        </div>
        
        
        <div className="navbar-controls">
          <div className="hamburger-menu">
            <button className="menu-button" onClick={toggleMenu}>
              <FaBars />
              <span className="menu-label">Menu</span>
            </button>
            
            <div className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
              <Link to="/cdp-tracker" className="menu-item">CDP Program Tracker</Link>
              <Link to="/course-documents" className="menu-item">Course Documents</Link>
              <Link to="/job-marketplace" className="menu-item">Job Marketplace</Link>
              <Link to="/continued-education" className="menu-item">Continued Education</Link>
              <Link to="/success-tracker" className="menu-item">Success Tracker</Link>
              <Link to="/upload-resume" className="menu-item">Upload Resume</Link>
              <Link to="/career-coaching" className="menu-item">Career Coaching</Link>
            </div>
          </div>
          
          <div className="settings">
            <Link to="/settings" className="settings-button">
              <FaCog />
              <span className="settings-label">Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;