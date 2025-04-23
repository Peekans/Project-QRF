import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { GiDeliveryDrone } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { MdOutlinePersonPinCircle } from "react-icons/md";


const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <div className="logo-container">
          <img src="/logo.png" alt="Gold Mind Logo" className="logo" />
        </div>
      </div>
      <section className="hero">
        <div className="hero-content">
          <h1>Las Vegas Drone Training</h1>
          <p>Master the skies with Gold Mind's premier drone certification program</p>
          <div className="hero-buttons">
            <Link to="/certifications" className="btn btn-primary">Sign in</Link>
            <Link to="/job-postings" className="btn btn-secondary">Employe</Link>
          </div>
        </div>
      </section>

      <section className="class-options">
        <div className="section-header">
          <h2>Ready to start your drone career?</h2>
        </div>
        <div className="class-cards">
          <div className="class-card">
            <div className="icon-container">
            <MdComputer size={40}/>
            </div>
            <h3>Online Courses</h3>
            <p>Study for your Part 107 test from the comfort of your home</p>
            <Link to="/certifications" className="btn btn-outline">Browse Courses</Link>
          </div>
          
          <div className="class-card">
            <div className="icon-container">
            <MdOutlinePersonPinCircle size={50}/>
            </div>
            <h3>In-Person Training</h3>
            <p>Hands-on flight training with experienced FAA-certified instructors</p>
            <Link to="/certifications" className="btn btn-outline">Schedule Training</Link>
          </div>
          
          <div className="class-card">
            <div className="icon-container">
            <GiDeliveryDrone size={50}/>
            </div>
            <h3>Certification Prep</h3>
            <p>Comprehensive exam preparation with high success rates</p>
            <Link to="/certifications" className="btn btn-outline">Get Started</Link>
          </div>
        </div>
      </section>

      <section className="opportunities">
        <div className="section-header">
          <h2>Las Vegas Drone Opportunities</h2>
          <p>All local students who pass their Part 107 Test are encouraged to join the Gold Mind Las Vegas pilot network! We don't just train you - we take it a step further and welcome you to our local pilot network! It's completely free, and once you join, we'll send you drone job opportunities in your area that allow you to gain experience, build up a credibility, and make money!</p>
        </div>
          
        <div className="gallery">
          <div className="gallery-item large">
            <img src="/vegascon.webp" alt="Las Vegas Aerial Shot" />
          </div>
          <div className="gallery-item">
            <img src="/scaledveg.jpg" alt="Las Vegas Strip Aerial View" />
          </div>
          <div className="gallery-item">
            <img src="/vegasair.jpg" alt="Downtown Las Vegas Aerial View" />
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to launch your drone career?</h2>
          <p>Join Gold Mind today and take your first step toward becoming a certified drone pilot</p>
          <Link to="/signin" className="btn btn-cta">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;