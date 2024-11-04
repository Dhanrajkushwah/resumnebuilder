import React, { useState } from 'react';  
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error messages
    setEmailError('');
    setPasswordError('');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    // Validate email
    if (!email) {
      setEmailError('Please enter your email address.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError('Please enter your password.');
      isValid = false;
    }

    // If validation fails, do not proceed
    if (!isValid) return;

    // Log data and navigate to dashboard on successful validation
    console.log('Form submitted:', { email, password });
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Sign In</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error-message">{emailError}</p>}

          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}

          <button type="submit" className="login-submit-btn">
            Sign In
          </button>
        </form>
        
        <div className="disclaimer-text">
          <p className="login-divider">
            By clicking on Sign In you also agree to our
            <a href="https://www.zety.com/terms-of-service" target="_blank" className="nav-url"> Terms of Use</a> and
            <a href="https://www.zety.com/privacy-policy" target="_blank" className="nav-url"> Privacy Policy</a>
          </p>
        </div>
        <p className="login-divider">or</p>

        <div className="social-login">
          <button className="social-btn apple-btn">
            <i className="fab fa-apple"></i> Sign in with Apple
          </button>
          <button className="social-btn google-btn">
            <i className="fab fa-google"></i> Sign in with Google
          </button>
          <button className="social-btn facebook-btn">
            <i className="fab fa-facebook-f"></i> Sign in with Facebook
          </button>
        </div>
        <p className="forgot-password">Forgot your password?</p>
        <p className="login-redirect">
          Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
