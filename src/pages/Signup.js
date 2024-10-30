import React, { useState } from 'react'; 
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
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

  const handleSignup = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      console.log('User Signed Up:', formData);
      navigate('/dashboard');
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
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
            className={touched.name && errors.name ? 'input-error' : ''}
          />
          {touched.name && errors.name && <p className="error-message">{errors.name}</p>}

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
        </form>

        <div className="social-login">
          <p>or sign up with</p>
          <button className="social-btn google" onClick={() => handleSocialLogin('Google')}>
            Sign up with Google
          </button>
          <button className="social-btn apple" onClick={() => handleSocialLogin('Apple')}>
            Sign up with Apple
          </button>
          <button className="social-btn facebook" onClick={() => handleSocialLogin('Facebook')}>
            Sign up with Facebook
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
