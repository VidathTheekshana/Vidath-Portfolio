import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Interested in working together or have any questions? I’m just a message away —
            feel free to contact me!
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email" />
              <p>vidaththeekshana@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="phone" />
              <p>(+94) 788243686</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Piliyandala, Sri Lanka</p>
            </div>
          </div>
        </div>

        <form className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label>Your Message</label>
          <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
          <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;