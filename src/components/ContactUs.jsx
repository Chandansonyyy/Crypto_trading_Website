import React from 'react';
import './ContactUs.css';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, please don't hesitate to reach out to us. We're here to help!</p>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit">Submit</button>
        
      </form>
      
    </div>
  );
}

export default ContactUs;
