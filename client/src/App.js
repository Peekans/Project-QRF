import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<Home />} />
          
          {/* Other pages with the same header with just the logo */}
          <Route path="/signin" element={<Home />} />
          <Route path="/certifications" element={<Home />} />
          <Route path="/employer-postings" element={<Home />} />
          <Route path="/job-postings" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );  
}

export default App;