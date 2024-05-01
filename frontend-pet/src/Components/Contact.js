// Contact.js
import React, { useState } from "react";
import "./Contact.css";
import petImage from "./images/Contact.png";

export const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic to handle form submission goes here
    console.log("Form submitted!");
    setIsSubmitted(true);
  };

  return (
    <div className="contact-container">
      <div className="top-section">
        <img src={petImage} alt="Pet" />
        <p>
          Welcome to our pet contact page! Please fill out the form below and
          we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="contact-content">
        <h2>Contact Us</h2>
        <h5> How can we help? We're here to answer any questions you have</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Your Name*</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number*</label>
            <input
              type="text"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject*</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        {isSubmitted && <p>Thank you for your submission!</p>}
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <div className="info-item">
          <h1>
            {" "}
            <p>Corporate Enquires</p>
          </h1>
          <p>800 738 7467 (Toll Free)</p>
          <p>050 419 5967 (WhatsApp)</p>
        </div>
        <div className="info-item">
          <h1>
            {" "}
            <p>For Queries</p>
          </h1>
          <p>customerservice@dubaipetfood.com</p>
          <p>9:00 am to 6:00 pm (Mon - Sun)</p>
        </div>
        <div className="info-item">
          <h1>
            {" "}
            <p>For Careers</p>
          </h1>
          <p>career@dubaipetfood.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
