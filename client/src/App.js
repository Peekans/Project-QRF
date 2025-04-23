import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn'

function App() {
  return (
    <Router>
      <div className="App">
        <SignIn />
      </div>
    </Router>
  );
}

export default App;