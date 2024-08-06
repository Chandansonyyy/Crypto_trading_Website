import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>Welcome to Crypto Trader! We are dedicated to providing the best trading experience for cryptocurrencies. Our platform offers a variety of tools and resources to help you succeed in the crypto market.</p>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>Our mission is to make cryptocurrency trading accessible to everyone by providing a user-friendly platform with all the necessary tools and resources.</p>
        </div>
        <div className="about-section">
          <h2>Our Team</h2>
          <p>Our team consists of experienced professionals in the field of finance and technology, dedicated to helping you navigate the world of cryptocurrencies.</p>
        </div>
        <div className="about-section">
          <h2>Contact Us</h2>
          <p>If you have any questions or need assistance, feel free to reach out to us at csony603@.com or call us at 8299762041.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
