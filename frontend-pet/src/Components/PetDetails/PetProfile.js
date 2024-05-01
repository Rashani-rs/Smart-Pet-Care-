import React from "react";
import "./PetProfile.css";
import profilePicture from "../images/rot.jpeg";

const PetProfile = () => {
  return (
    <div className="pet-profile">
      <div className="profile-picture-container">
        <img
          src={profilePicture}
          alt="Pet Profile"
          className="profile-picture"
        />
      </div>
      <div className="profile-details">
        <div className="detail-box">
          <label htmlFor="profile-ID">ID:</label>
          <p id="profile-ID">D-123</p>
        </div>
        <div className="detail-box">
          <label htmlFor="profile-Name">Name:</label>
          <p id="profile-Name">Max Timir</p>
        </div>
        <div className="detail-box">
          <label htmlFor="profile-Species">Species:</label>
          <p id="profile-Species">Dog</p>
        </div>
        <div className="detail-box">
          <label htmlFor="profile-Breed">Breed:</label>
          <p id="profile-Breed">Golden Retriever</p>
        </div>
        <div className="detail-box">
          <label htmlFor="profile-Age">Age:</label>
          <p id="profile-Age">2 Years</p>
        </div>
        <div className="detail-box">
          <label htmlFor="profile-Gender">Gender:</label>
          <p id="profile-Gender">Male</p>
        </div>
        <div className="detail-box">
          <label htmlFor="profile-Color">Color:</label>
          <p id="profile-Color">Brown</p>
        </div>
        <div className="detail-box">
          <label htmlFor="profile-MedicalHistory">Medical History:</label>
          <p id="profile-MedicalHistory">Good</p>
        </div>
        <div className="detail-box">
          <label htmlFor="profile-Weight">Weight:</label>
          <p id="profile-Weight">35 Kg</p>
        </div>
        <div className="detail-box">
          <label htmlFor="profile-OwnerID">Owner ID:</label>
          <p id="profile-OwnerID">D-124</p>
        </div>
        {/* Add more profile details as needed */}
      </div>
    </div>
  );
};

export default PetProfile;
