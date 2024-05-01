import React, { useState } from "react";
import "./UserProfile.css";
import userProfileImage from "../images/user.png"; // Import the user profile image

const UserProfile = () => {
  const [username, setUsername] = useState("Jane_doe123");
  const [email, setEmail] = useState("jane@example.com");
  const [address, setAddress] = useState("123 Main Street, City");
  const [contactNumber, setContactNumber] = useState("123-456-7890");

  const handleContactClick = () => {
    // Handle logic to open live chat or redirect to another page
    console.log("Contact clicked");
  };

  return (
    <div className="user-profile-container">
      <div className="user-profile-box">
        <h2 className="center">User Profile</h2>
        <div className="profile-details">
          {/* User profile image */}
          <img
            src={userProfileImage}
            alt="User Profile"
            className="profile-image"
          />

          <div className="detail">
            <label>Username:</label>
            <input type="text" value={username} readOnly />
          </div>
          <div className="detail">
            <label>Email:</label>
            <input type="email" value={email} readOnly />
          </div>
          <div className="detail">
            <label>Address:</label>
            <input type="text" value={address} readOnly />
          </div>
          <div className="detail">
            <label>Contact Number:</label>
            <span className="contact-number" onClick={handleContactClick}>
              {contactNumber}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
