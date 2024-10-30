import React from 'react';
import './Features.css';

const Features = () => (
  <section className="features" id="features">
    <h2>Our Features</h2>
    <div className="feature-cards">
      <div className="feature-card">
        <h3>Easy to Use Resume</h3>
        <p>Our builder is easy to navigate for all users.</p>
      </div>
      <div className="feature-card">
        <h3>Customizable Templates</h3>
        <p>Choose from a variety of professional templates.</p>
      </div>
      <div className="feature-card">
        <h3>Instant Download</h3>
        <p>Download your resume in PDF format instantly.</p>
      </div>
    </div>
  </section>
);

export default Features;
