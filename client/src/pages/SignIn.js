import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="logo-container">
        <img src="/logo.png" alt="Gold Mind Logo" className="signin-logo" />
      </div>
      
      <div className="signin-form-container">
        <div className="signin-form">
          <h2>Sign In</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="signin-button">Sign In</button>
          </form>
          <div className="signin-links">
            <a href="#" className="forgot-password">Forgot Password?</a>
            <p>Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;