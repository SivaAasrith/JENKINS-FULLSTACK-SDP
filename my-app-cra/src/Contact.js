import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>🎮 Tournament Support</h1>
        <p>
          Have a question about a tournament or need help with your account? 
          Fill the form below and our team will get back to you.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Gamer Tag / Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Tournament Name / Game" />
          <select>
            <option value="">Select Platform</option>
            <option value="pc">PC</option>
            <option value="ps">PlayStation</option>
            <option value="xbox">Xbox</option>
            <option value="mobile">Mobile</option>
          </select>
          <textarea placeholder="Describe your issue / question" rows="5"></textarea>
          <button type="submit">Send Support Request</button>
        </form>
        <p className="contact-note">
          Our support team is active 24/7 to assist gamers worldwide! 🌐
        </p>
      </div>
    </div>
  );
}

export default Contact;
