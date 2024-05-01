// PetDetails.js

import React from "react";
import Sidebar from "./Sidebar";
import "./PetDetails.css"; // Import CSS file
import petDetailsImage from "../images/set.webp"; // Import pet details image

export const PetDetails = () => {
  return (
    <div className="pet-details-page">
      <Sidebar />
      <div className="pet-details-container">
        <h1>Pet Details</h1>
        <img src={petDetailsImage} alt="Pet Details" />

        {/* Add other content */}
      </div>
    </div>
  );
};

export default PetDetails;
