// Communication.js
import React from "react";
import ComSidebar from "./ComSidebar";
import communicationImage from "../images/com.jpeg"; // Import image
import "./Communication.css"; // Import CSS file

const Communication = () => {
  return (
    <div className="communication-container">
      <h1>Communicate with Others</h1>
      <img src={communicationImage} alt="Communication" />
      <ComSidebar />

      {/* Other components for Pet Owners, User Profile, Live Chat */}
    </div>
  );
};

export default Communication;
