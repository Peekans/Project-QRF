import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  // Placeholder user data
  const user = {
    name: "Stanly Zhang",
    education: {
      school: "University of Nevada-Las Vegas",
      degree: "none. Computer Science",
      years: "2022 - 2026",
      logo: "/unlv-logo.png"
    },
    // Initial checklist items - this would be fetched from user data in a real app
    checklist: [
      { id: 1, text: "Complete profile information", checked: false },
      { id: 2, text: "Upload profile photo", checked: false },
      { id: 3, text: "Add education details", checked: true },
      { id: 4, text: "List key skills", checked: true },
      { id: 5, text: "Upload certification documents", checked: false },
      { id: 6, text: "Connect social profiles", checked: false },
      { id: 7, text: "Set job preferences", checked: false },
      { id: 8, text: "Complete drone safety course", checked: false },
      { id: 9, text: "Apply to first job posting", checked: true },
      { id: 10, text: "Download drone flight log template", checked: false },
      { id: 11, text: "Schedule practice flight session", checked: false },
      { id: 12, text: "Review industry regulations", checked: false },
      { id: 13, text: "Join drone pilot community", checked: false }
    ]
  };

  // State to manage checklist items
  const [checklistItems, setChecklistItems] = useState(user.checklist);
  
  // Function to toggle checkbox state
  const toggleCheckbox = (id) => {
    setChecklistItems(checklistItems.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
    // In a real app, this would also update the user data in the database
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Hello, {user.name}</h1>
      </div>
      <div className="profile-content">
        {/* Student Resources Section */}
        <div className="profile-section resources-section">
          <div className="section-header">
            <h2>Student Resources</h2>
            <div className="section-actions">
              <button className="primary-button">View Resources</button>
            </div>
          </div>
        </div>

        {/* Career Checklist Section (CDP Program Tracker) */}
        <div className="profile-section checklist-section">
          <div className="section-header">
            <h2>CDP Program Tracker (10-week milestone tracker)</h2>
            <div className="section-actions">
              <button className="icon-button edit-button">✏️</button>
            </div>
          </div>
          <div className="checklist-container">
            {checklistItems.map((item) => (
              <div key={item.id} className="checklist-item">
                <label className="checkbox-container">
                  <input 
                    type="checkbox" 
                    checked={item.checked} 
                    onChange={() => toggleCheckbox(item.id)}
                  />
                  <span className="checkmark"></span>
                  <span className="checklist-text">{item.text}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Course Documents Section */}
        <div className="profile-section">
          <div className="section-header">
            <h2>Course Documents</h2>
            <div className="section-actions">
              <button className="primary-button">View Courses</button>
            </div>
          </div>
          <p className="section-description">Access pilot institute courses and related materials</p>
        </div>

        {/* Certify Course Completion Section */}
        <div className="profile-section">
          <div className="section-header">
            <h2>Certify Course Completion</h2>
            <div className="section-actions">
              <button className="upload-button">Upload Certificate</button>
            </div>
          </div>
          <p className="section-description">Upload your course completion certificates</p>
        </div>

        {/* Certify Part 107 License Section */}
        <div className="profile-section">
          <div className="section-header">
            <h2>Certify Part 107 License</h2>
            <div className="section-actions">
              <button className="upload-button">Upload License</button>
            </div>
          </div>
          <p className="section-description">Upload your FAA Part 107 license documentation</p>
        </div>

        {/* Career Coaching Section */}
        <div className="profile-section">
          <div className="section-header">
            <h2>Career Coaching</h2>
            <div className="section-actions">
              <button className="primary-button">Sign Up</button>
            </div>
          </div>
          <p className="section-description">Schedule 1:1 interview prep or mock interview sessions</p>
        </div>

        {/* Schedule Drone Flight Training Section */}
        <div className="profile-section">
          <div className="section-header">
            <h2>Schedule Drone Flight Training</h2>
            <div className="section-actions">
              <button className="primary-button">View Calendar</button>
            </div>
          </div>
          <p className="section-description">Book your drone flight training sessions</p>
        </div>

        {/* Additional Assistance Section */}
        <div className="profile-section">
          <div className="section-header">
            <h2>Additional Assistance</h2>
          </div>
          <div className="assistance-container">
            <div className="assistance-item">
              <h3>Need Help?</h3>
              <p>Contact the Gold Mind team via our embedded email box</p>
              <button className="secondary-button">Contact Support</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;