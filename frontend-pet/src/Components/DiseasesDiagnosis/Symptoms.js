// Symptoms.js

import React, { useState } from "react";
import "./Symptoms.css";

export const Symptoms = () => {
  const [symptoms, setSymptoms] = useState({
    fever: false,
    cough: false,
    headache: false,
    fatigue: false,
    others: "",
    earInfection: false, // New disease
    skinAllergy: false, // New disease
    dentalIssues: false, // New disease
  });
  const handleSearchClick = () => {
    // Add your search functionality here
    console.log("Searching for symptoms:", symptoms);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSymptoms((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="symptoms-container">
      <h2>Symptoms</h2>
      <div className="symptoms-inputs">
        <label>
          <input
            type="checkbox"
            name="fever"
            checked={symptoms.fever}
            onChange={handleInputChange}
          />
          Fever
        </label>
        <label>
          <input
            type="checkbox"
            name="cough"
            checked={symptoms.cough}
            onChange={handleInputChange}
          />
          Cough
        </label>
        <label>
          <input
            type="checkbox"
            name="headache"
            checked={symptoms.headache}
            onChange={handleInputChange}
          />
          Headache
        </label>
        <label>
          <input
            type="checkbox"
            name="fatigue"
            checked={symptoms.fatigue}
            onChange={handleInputChange}
          />
          Fatigue
        </label>

        {/* New diseases */}
        <label>
          <input
            type="checkbox"
            name="earInfection"
            checked={symptoms.earInfection}
            onChange={handleInputChange}
          />
          Ear Infection
        </label>
        <label>
          <input
            type="checkbox"
            name="skinAllergy"
            checked={symptoms.skinAllergy}
            onChange={handleInputChange}
          />
          Skin Allergy
        </label>
        <label>
          <input
            type="checkbox"
            name="dentalIssues"
            checked={symptoms.dentalIssues}
            onChange={handleInputChange}
          />
          Dental Issues
        </label>
        <label>
          Other Symptoms:
          <input
            type="text"
            name="others"
            value={symptoms.others}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={() => (window.location.href = "/diagnosis-tests")}>
          Search Symptoms
        </button>
      </div>
    </div>
  );
};

export default Symptoms;
