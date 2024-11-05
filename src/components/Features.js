import React from 'react';
import '../styles/Features.css';
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
    <br></br>
    <div className="grid promoBannerGrid">
    <div className="promoBannerContent">
      <h2 className="promoBannerTitle">Try Our Easy-To-Use Resume Builder</h2>
      <p className="promoBannerDescription">
        Experience our intuitive resume builder and take a shortcut to your dream career. Discover why thousands of job seekers and HR experts trust us. Create your best resume quickly and easily today.
      </p>
      <a href="/resume-builder" className="button button--medium button--whiteBlue">Build Your Resume Now</a>
    </div>
    <div className="promoBannerImageWrapper">
      <picture>
        <source
          media="(min-width: 1140px)"
          srcSet="https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-desktop-@3x.webp 1710w, https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-desktop-@2x.webp 1282w, https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-desktop-@1x.webp 641w"
          sizes="(min-width: 1140px) 1920px, (min-width: 768px) 768px"
        />
        <source
          srcSet="https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-mobile-@3x.webp 767w, https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-mobile-@3x.webp 682w, https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-mobile-@2x.webp 341w"
          sizes="(max-width: 767px) 360px, 720px"
        />
        <img
          className="promoBannerImage"
          decoding="auto"
          src="https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-desktop-@3x.webp"
          srcSet="https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-desktop-@1x.webp, https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-desktop-@2x.webp 2x, https://cdn-images.zety.com/images/zety/landings/home/full-widht-banner-desktop-@3x.webp 3x"
          sizes="(min-width: 1140px) 1920px, (min-width: 768px) 768px"
          loading="lazy"
          alt="Zety resume builder in action"
          width="872"
         
        />
      </picture>
    </div>
  </div>
  </section>
);

export default Features;
