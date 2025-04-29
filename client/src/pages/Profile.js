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
    skills: [
      { name: "Python (Programming Language)", institution: "" },
      { name: "C++", institution: "University of Nevada-Las Vegas", logo: "/unlv-logo.png" }
    ],
    certifications: [
      {
        name: "FAA Part 107 - Commercial Drone Pilot",
        issuer: "Federal Aviation Administration",
        date: "March 2024",
        status: "Active"
      },
      {
        name: "Drone Aerial Photography",
        issuer: "Gold Mind Academy",
        date: "January 2024",
        status: "Active"
      }
    ],
    applications: [
      {
        position: "Drone Real Estate Photographer",
        company: "Desert View Properties",
        date: "April 10, 2025",
        status: "Under Review"
      }
    ],
    courses: [
      {
        name: "Advanced Drone Piloting Techniques",
        provider: "Gold Mind Academy",
        progress: 75,
        enrollmentDate: "February 15, 2025"
      },
      {
        name: "Aerial Mapping and Surveying",
        provider: "Gold Mind Academy",
        progress: 40,
        enrollmentDate: "March 22, 2025"
      }
    ],
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
        {/* Career Checklist Section */}
        <div className="profile-section checklist-section">
          <div className="section-header">
            <h2>Career Preparation Checklist</h2>
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
        {/* Certifications Section */}
        <div className="profile-section">
          <div className="section-header">
            <h2>Certifications</h2>
            <div className="section-actions">
              <button className="icon-button add-button">+</button>
              <button className="icon-button edit-button">✏️</button>
            </div>
          </div>
          <div className="certifications-list">
            {user.certifications.map((certification, index) => (
              <div key={index} className="certification-item">
                <div className="certification-icon">
                  <span className="certificate-badge">🏆</span>
                </div>
                <div className="certification-details">
                  <h3>{certification.name}</h3>
                  <p>{certification.issuer}</p>
                  <p className="issue-date">Issued {certification.date}</p>
                  <span className={`status-badge ${certification.status.toLowerCase()}`}>
                    {certification.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Status Section */}
        <div className="profile-section">
          <div className="section-header">
            <h2>Application Status</h2>
            <div className="section-actions">
              <button className="icon-button view-all-button">View All</button>
            </div>
          </div>
          <div className="applications-list">
            {user.applications.map((application, index) => (
              <div key={index} className="application-item">
                <div className="application-icon">
                  <span className="application-badge">📋</span>
                </div>
                <div className="application-details">
                  <h3>{application.position}</h3>
                  <p>{application.company}</p>
                  <p className="application-date">Applied on {application.date}</p>
                  <span className={`status-badge ${application.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {application.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div className="profile-section">
          <div className="section-header">
            <h2>Courses</h2>
            <div className="section-actions">
              <button className="icon-button view-all-button">View All</button>
            </div>
          </div>
          <div className="courses-list">
            {user.courses.map((course, index) => (
              <div key={index} className="course-item">
                <div className="course-icon">
                  <span className="course-badge">📚</span>
                </div>
                <div className="course-details">
                  <h3>{course.name}</h3>
                  <p>{course.provider}</p>
                  <p className="enrollment-date">Enrolled on {course.enrollmentDate}</p>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{course.progress}% Complete</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;