import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { GiDeliveryDrone } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { MdOutlinePersonPinCircle } from "react-icons/md";

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section with Logos and Login */}
      <header className="site-header">
        <div className="logo-group">
          <img src="/logo.png" alt="Gold Mind Logo" className="logo" />
          <img src="/northvegaslogo.gif" alt="North Las Vegas Logo" className="nlv-logo" />
        </div>
        <div className="login-buttons">
          <Link to="/login" className="login-btn student-login">Student Login</Link>
          <Link to="/admin-login" className="login-btn admin-login">North Las Vegas Admin Login</Link>
        </div>
      </header>

      {/* Section 1: Welcome Banner */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h1>Welcome to North Las Vegas | Exclusive Chartered Drone Pilot Program</h1>
          <p>Master the skies with Gold Mind's premier drone certification program</p>
          <div className="welcome-buttons">
            <Link to="/learn-more" className="btn btn-primary">Learn More</Link>
            <Link to="/apply" className="btn btn-secondary">Apply Now</Link>
          </div>
        </div>
      </section>

      {/* Section 2: CDP Program Description */}
      <section className="cdp-section">
        <div className="section-container">
          <div className="cdp-description">
            <h2>CDP Program Description</h2>
            <p>The Chartered Drone Pilot (CDP) Program is a comprehensive training solution designed to prepare you for success in the growing drone industry. Our curriculum covers FAA regulations, flight operations, safety protocols, and specialized applications.</p>
          </div>
          <div className="cdp-image">
            <img src="faa.webp" alt="Faa logo" className='faa'></img>
          </div>
        </div>
      </section>

      {/* Section 3: Resource Boxes */}
      <section className="resources-section">
        <div className="section-container">
          <h2>Resources</h2>
          <div className="resource-boxes">
            <div className="resource-box">
              <div className="box-icon">
                <MdOutlinePersonPinCircle size={50} />
              </div>
              <h3>Student Tracker</h3>
              <p>Track your certification progress and access learning materials to stay on course with your drone education journey.</p>
              <Link to="/student-tracker" className="btn btn-outline">Access Tracker</Link>
            </div>
            
            <div className="resource-box">
              <div className="box-icon">
                <MdComputer size={50} />
              </div>
              <h3>Job Marketplace</h3>
              <p>Browse job opportunities exclusively available to certified drone pilots in the North Las Vegas area.</p>
              <Link to="/job-marketplace" className="btn btn-outline">View Jobs</Link>
            </div>
            
            <div className="resource-box">
              <div className="box-icon">
                <GiDeliveryDrone size={50} />
              </div>
              <h3>Continued Education</h3>
              <p>Access advanced courses and specialized training to further enhance your drone piloting skills.</p>
              <Link to="/continued-education" className="btn btn-outline">Explore Courses</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: News & Announcements */}
      <section className="news-section">
        <div className="section-container">
          <h2>Latest News & Announcements</h2>
          {/* Placeholder for news component */}
          <div className="news-placeholder">
            <h3>News</h3>
            <p>This space is reserved for the upcoming application deadlines and announcements component.</p>
          </div>
          <div className="news-buttons">
            <Link to="/learn-more" className="btn btn-primary">Learn More</Link>
            <Link to="/apply" className="btn btn-secondary">Apply Now</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <img src="/logo.png" alt="Gold Mind Logo" className="footer-logo" />
          <p>Copyright © 2025 Gold Mind Group. All Rights Reserved.</p>
          <p></p>
          <p>Gold Mind Group is a 509(a)(2) non-profit recognized by the IRS. Donations to Gold Mind Group may be tax deductible pursuant to the provisions</p>
          <p>of section 170(c) of the Internal Revenue Code of 1986, 26 U.S.C. Tax ID Number: 88-3937257</p>
          <a href="https://www.goldmindgroup.org/" target="_blank" rel="noopener noreferrer" className="footer-link">https://www.goldmindgroup.org/</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;