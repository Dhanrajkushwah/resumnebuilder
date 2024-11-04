import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLoginClick = () => navigate('/login');
  const handleSignupClick = () => navigate('/signup');

  const showDropdown = (menu) => setDropdownVisible(menu);
  const hideDropdown = () => setDropdownVisible(null);

  const isDropdownOpen = (menu) => dropdownVisible === menu;
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">NextStepCV</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#features">Features</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#pricing">Pricing</a>

        {/* Dropdown menus */}
        <div
          className="navbar-item"
          onMouseEnter={() => showDropdown('tools')}
          onMouseLeave={hideDropdown}
        >
          <span><a>Tools</a> <span className={`dropdown-icon ${isDropdownOpen('tools') ? 'open' : ''}`}>▼</span></span>
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
          <span><a>Resume and CV</a> <span className={`dropdown-icon ${isDropdownOpen('resume-cv') ? 'open' : ''}`}>▼</span></span>
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
          <span><a>Cover Letter</a><span className={`dropdown-icon ${isDropdownOpen('cover-letter') ? 'open' : ''}`}>▼</span></span>
          {isDropdownOpen('cover-letter') && (
            <div className="dropdown-menu">
              <a href="#cover-letter-samples">Cover Letter Samples</a>
              <a href="#cover-letter-builder">Cover Letter Builder</a>
            </div>
          )}
        </div>

        <div className="about">
          <a className="about" href="#about">About</a>
        </div>
        <div className="navbar-buttons">
        <button className="login-btn" onClick={handleLoginClick}>Login</button>
        <button className="signup-btn" onClick={handleSignupClick}>Sign Up</button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
