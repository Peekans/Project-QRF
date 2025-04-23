import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Profile />
        
      </div>
    </Router>
  );
}

export default App;