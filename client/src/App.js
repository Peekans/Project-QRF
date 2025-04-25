import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
// For Home, make more unique, run text by Steven and rest of team. Maybe change Hero...
// Keep 3 Flashcard container
// Research on whether or not I can find any API keys related to job postings in local Nevada
// For navbar, change Employers/posting to Continued education
// For job postings, just reference oxford or harvard mba job report and hopefully filter for Nevada?
// Add a check list to profile on the 10 week plan from Goldmind plan i think??
// Harvard MBA JOB REPORT
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Home /> */}
        {/* <SignIn /> */}
        <Navbar />
        <Profile />
      </div>
    </Router>
  );
}

export default App;