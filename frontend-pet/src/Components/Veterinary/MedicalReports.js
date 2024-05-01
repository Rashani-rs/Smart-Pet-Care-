// MedicalReports.js
import React, { useState } from "react";
import PetDetailsPage from "./PetDetailsPage";
import "./MedicalReports.css";

const MedicalReports = () => {
  const [petReports, setPetReports] = useState([
    {
      id: 1,
      name: "Fluffy",
      condition: "Healthy",
      species: "Dog",
      breed: "Rottweiler",
      age: "1 year",
      gender: "Male",
      color: "Black",
      weight: "45 kg",
      medicalHistory: "No significant medical history",
      ownerId: "123",
    },
    {
      id: 2,
      name: "Bruno",
      condition: "Healthy",
      species: "Dog",
      breed: "Rottweiler",
      age: "2 year",
      gender: "Male",
      color: "Black",
      weight: "55 kg",
      medicalHistory: "No significant medical history",
      ownerId: "156",
    },
    {
      id: 3,
      name: "Max",
      condition: "Allergic",
      species: "Cat",
      breed: "Siamese",
      age: "2 years",
      gender: "Female",
      color: "White",
      weight: "5 kg",
      medicalHistory: "Allergic to certain foods",
      ownerId: "456",
    },
    {
      id: 4,
      name: "Bru",
      condition: "Allergic",
      species: "Dog",
      breed: "Rottweiler",
      age: "3 year",
      gender: "Female",
      color: "Black",
      weight: "60 kg",
      medicalHistory: "No significant medical history",
      ownerId: "177",
    },

    {
      id: 5,
      name: "Buddy",
      condition: "Injured",
      species: "Dog",
      breed: "Golden Retriever",
      age: "3 years",
      gender: "Male",
      color: "Golden",
      weight: "30 kg",
      medicalHistory: "Recent injury to hind leg",
      ownerId: "789",
    },
    {
      id: 6,
      name: "Bunny",
      condition: "Injured",
      species: "Dog",
      breed: "Hitzu",
      age: "3 years",
      gender: "Male",
      color: "Golden",
      weight: "15 kg",
      medicalHistory: "Recent injury to hind leg",
      ownerId: "789",
    },
  ]);
  const [selectedPet, setSelectedPet] = useState(null);

  const handlePetClick = (pet) => {
    setSelectedPet(pet);
  };

  // Separate pets into categories
  const healthyPets = petReports.filter((pet) => pet.condition === "Healthy");
  const allergicPets = petReports.filter((pet) => pet.condition === "Allergic");
  const injuredPets = petReports.filter((pet) => pet.condition === "Injured");

  return (
    <div className="pet-medical-reports-container">
      <h3 className="reports-title">Pet Medical Reports</h3>
      <div className="category">
        <h4>Healthy Pets</h4>
        <ul className="reports-list">
          {healthyPets.map((report) => (
            <li
              key={report.id}
              className="report-item"
              onClick={() => handlePetClick(report)}
            >
              <span className="pet-name">{report.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="category">
        <h4>Allergic Pets</h4>
        <ul className="reports-list">
          {allergicPets.map((report) => (
            <li
              key={report.id}
              className="report-item"
              onClick={() => handlePetClick(report)}
            >
              <span className="pet-name">{report.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="category">
        <h4>Injured Pets</h4>
        <ul className="reports-list">
          {injuredPets.map((report) => (
            <li
              key={report.id}
              className="report-item"
              onClick={() => handlePetClick(report)}
            >
              <span className="pet-name">{report.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="pet-details-box">
        {selectedPet && <PetDetailsPage pet={selectedPet} />}
      </div>
    </div>
  );
};

export default MedicalReports;
