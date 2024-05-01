// Diseases.js

import React from "react";
import Diseaseside from "./Diseasesside";
import "./Diseases.css"; // Import CSS file
import diseasesImage from "../images/skin.jpeg"; // Import diseases image

export const Diseases = () => {
  return (
    <div className="diseases-container">
      <Diseaseside />
      <div className="diseases-content">
        <h1>Diseases Information</h1>
        <img src={diseasesImage} alt="Diseases" />

        {/* Add other content */}
      </div>
    </div>
  );
};

export default Diseases;
