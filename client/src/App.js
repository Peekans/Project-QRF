import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<div>Home Page Content</div>} />
            <Route path="/signin" element={<div>Sign In Page</div>} />
            <Route path="/certification" element={<div>Certifications</div>} />
            <Route path="/employer-postings" element={<div>Employer Postings</div>} />
            <Route path="/job-postings" element={<div>Job Postings</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;