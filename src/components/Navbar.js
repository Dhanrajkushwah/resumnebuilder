import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const handleLoginClick = () => {
    navigate('/login'); // Redirect to the login page
  };

  const handleSignupClick = () => {
    navigate('/signup'); // Redirect to the signup page
  };

  const showDropdown = (menu) => setDropdownVisible(menu);
  const hideDropdown = () => setDropdownVisible(null);

  const isDropdownOpen = (menu) => dropdownVisible === menu;

  return (
    <nav className="navbar">
      <div className="navbar-logo">NextStepCV</div>
      <div className="navbar-menu">
        <a href="#features">Features</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#pricing">Pricing</a>

        <div
          className="navbar-item"
          onMouseEnter={() => showDropdown('tools')}
          onMouseLeave={hideDropdown}
        >
          <span>Tools <span className={`dropdown-icon ${isDropdownOpen('tools') ? 'open' : ''}`}>▼</span></span>
          {isDropdownOpen('tools') && (
            <div className="dropdown-menu">
              <a href="#resume-checker">Resume Checker</a>
              <a href="#cv-maker">CV Maker</a>
              <a href="#cover-letter-builder">Cover Letter Builder</a>
            </div>
          )}
        </div>

        <div
          className="navbar-item"
          onMouseEnter={() => showDropdown('resume-cv')}
          onMouseLeave={hideDropdown}
        >
          <span>Resume and CV <span className={`dropdown-icon ${isDropdownOpen('resume-cv') ? 'open' : ''}`}>▼</span></span>
          {isDropdownOpen('resume-cv') && (
            <div className="dropdown-menu">
              <a href="#resume-template">Resume Templates</a>
              <a href="#cv-templates">CV Templates</a>
            </div>
          )}
        </div>

        <div
          className="navbar-item"
          onMouseEnter={() => showDropdown('cover-letter')}
          onMouseLeave={hideDropdown}
        >
          <span>Cover Letter <span className={`dropdown-icon ${isDropdownOpen('cover-letter') ? 'open' : ''}`}>▼</span></span>
          {isDropdownOpen('cover-letter') && (
            <div className="dropdown-menu">
              <a href="#cover-letter-samples">Cover Letter Samples</a>
              <a href="#cover-letter-builder">Cover Letter Builder</a>
            </div>
          )}
        </div>

        <div className="navbar-item">
          <a href="#about">About</a>
        </div>
      </div>

      <div className="navbar-buttons">
        <button className="login-btn" onClick={handleLoginClick}>Login</button>
        <button className="signup-btn" onClick={handleSignupClick}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
