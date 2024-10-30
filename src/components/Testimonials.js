import React from 'react';
import './Testimonials.css';

const Testimonials = () => (
  <section className="testimonials" id="testimonials">
    <h2>What Our Users Say</h2>
    <div className="testimonials-container">
      <div className="testimonial">
        <p>"This resume builder helped me land my dream job!"</p>
        <span>- Alex M.</span>
      </div>
      <div className="testimonial">
        <p>"The templates are amazing and easy to use."</p>
        <span>- Sarah L.</span>
      </div>
    </div>
    
    {/* New Section: Press Room */}
    <div className="press-room">
      <img src="https://cdn-images.zety.com/images/zety/landings/templates/introduction-left.png" alt="Introduction Left" className="left-image" />
      <h3 className="press-room-title">Press Room</h3>
      <img src="https://cdn-images.zety.com/images/zety/landings/templates/introduction-right.png" alt="Introduction Right" className="right-image" />
    </div>
  </section>
);

export default Testimonials;
