import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');
    setGeneralError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (!email) {
      setEmailError('Please enter your email address.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      isValid = false;
    }

    if (!isValid) return;

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log('Login successful:', response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      setGeneralError(error.response?.data?.message || 'An error occurred during login');
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  const handleFacebookSignIn = () => {
    window.location.href = 'http://localhost:5000/api/auth/facebook';
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

          {generalError && <p className="error-message">{generalError}</p>}

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
          <button className="social-btn google-btn" onClick={handleGoogleSignIn}>
            <i className="fab fa-google"></i> Sign in with Google
          </button>
          <button className="social-btn facebook-btn" onClick={handleFacebookSignIn}>
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
