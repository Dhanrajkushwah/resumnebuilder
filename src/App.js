// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

// Common components from both projects
import Navbar from './components/Navbar';
import Account from './components/Account';
import CoverLetterHelp from './components/CoverLetterHelp';
import CoverLetterBuilder from './components/CoverLetterBuilder';
import Contact from './components/Contact';
import HowToCoverLetter from './components/HowToCoverLetter';
import CoverLetter from './components/CoverLetter';
import Payment from './components/Payment';

// Additional components from the second project
import LandingPage from './pages/LandingPage';
import DashboardPage from './components/DashboardPage';
import Signup from './components/Signup';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Common Navbar for all pages */}

        <Routes>
          <Route path="/account" element={<Account />} />
          <Route path="/cover-letter-help" element={<CoverLetterHelp />} />
          <Route path="/cover-letter-builder" element={<CoverLetterBuilder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how-to-cover-letter" element={<HowToCoverLetter />} />
          <Route path="/cover-letter" element={<CoverLetter />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
