import React, { useState } from "react";
import "./PetOwner.css";
import ownerProfileImage from "../images/user.png"; // Import the user profile image

const PetOwner = () => {
  const [ownerName, setOwnerName] = useState("John Doe");
  const [ownerId, setOwnerId] = useState("12345");
  const [petName, setPetName] = useState("Buddy");
  const [address, setAddress] = useState("123 Main Street, City");
  const [numOfPets, setNumOfPets] = useState(1);
  const [contactNumber, setContactNumber] = useState("123-456-7890");

  const handleContactClick = () => {
    // Handle logic to open live chat or redirect to another page
    console.log("Contact clicked");
  };

  return (
    <div className="pet-owner-container">
      <div className="pet-owner-box">
        <h2 className="center">Pet Owner Details</h2>
        <div className="owner-details">
          {/* User profile image */}
          <img
            src={ownerProfileImage}
            alt="Owner Profile"
            className="profile-image"
          />
          <div className="detail">
            <label>Owner Name:</label>
            <input type="text" value={ownerName} readOnly />
          </div>
          <div className="detail">
            <label>Owner ID:</label>
            <input type="text" value={ownerId} readOnly />
          </div>
          <div className="detail">
            <label>Pet's Name:</label>
            <input type="text" value={petName} readOnly />
          </div>
          <div className="detail">
            <label>Address:</label>
            <input type="text" value={address} readOnly />
          </div>
          <div className="detail">
            <label>No of Pets:</label>
            <input type="number" value={numOfPets} readOnly />
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

export default PetOwner;
