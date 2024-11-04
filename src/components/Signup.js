import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '', 
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) { 
      newErrors.fullName = 'Full Name is required'; 
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validate();
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/register', formData);
        console.log('User Signed Up:', response.data);
        navigate('/dashboard');
      } catch (error) {
        console.error('Signup error:', error.response?.data || error.message);
        setErrors({ general: error.response?.data?.message || 'An error occurred during signup' });
      }
    }
  };

  const handleSocialLogin = (platform) => {
    console.log(`Sign up with ${platform}`);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Sign Up</h1>
        <p>Create your account to start building your resume</p>
        <form onSubmit={handleSignup} className="signup-form">
          <input
            type="text"
            name="fullName" 
            placeholder="Full Name"
            value={formData.fullName} 
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
            className={touched.fullName && errors.fullName ? 'input-error' : ''} 
          />
          {touched.fullName && errors.fullName && <p className="error-message">{errors.fullName}</p>} 

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
            className={touched.email && errors.email ? 'input-error' : ''}
          />
          {touched.email && errors.email && <p className="error-message">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
            className={touched.password && errors.password ? 'input-error' : ''}
          />
          {touched.password && errors.password && <p className="error-message">{errors.password}</p>}

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
          {errors.general && <p className="error-message">{errors.general}</p>}
        </form>

        <div className="social-login">
          <p>or sign up with</p>
          <button className="social-btn apple" onClick={() => handleSocialLogin('Apple')}>
            <i className="fab fa-apple"></i> Sign up with Apple
          </button>
          <button className="social-btn google" onClick={() => handleSocialLogin('Google')}>
            <i className="fab fa-google"></i> Sign up with Google
          </button>
          <button className="social-btn facebook" onClick={() => handleSocialLogin('Facebook')}>
            <i className="fab fa-facebook-f"></i> Sign up with Facebook
          </button>
        </div>

        <p className="login-redirect">
          Already have an account? <span onClick={() => navigate('/login')}>Log In</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
