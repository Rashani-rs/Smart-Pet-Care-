// Diseaseside.js

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Diseaseside = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptom, setSelectedSymptom] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const handleAddSymptom = () => {
    if (selectedSymptom !== "" && !symptoms.includes(selectedSymptom)) {
      setSymptoms([...symptoms, selectedSymptom]);
    }
  };

  const handleDiagnosis = () => {
    setDiagnosis("Diagnosis will be displayed here based on entered symptoms.");
  };

  return (
    <div className="disease-diagnosis-container">
      <div className="sidebar">
        <h3>Pet Diseases</h3>
        <ul>
          <li>
            <a href="#diseases">Diseases</a>
          </li>
          <li>
            <a href="symptoms">Symptoms</a>
          </li>
          <li>
            <a href="diagnosis-tests">Diagnosis Tests</a>
          </li>
          <li>
            <a href="treatment-plan">Treatment Plan</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Diseaseside;
