// PetDetailsPage.js
import React from "react";
import "./PetDetailsPage.css"; // Import CSS file

const PetDetailsPage = ({ pet }) => {
  return (
    <div className="pet-details-container">
      <h3>Pet Details</h3>
      <div className="details-item">
        <p>
          <strong>Pet Name:</strong> {pet.name}
        </p>
        <p>
          <strong>Pet ID:</strong> {pet.id}
        </p>
        <p>
          <strong>Condition:</strong> {pet.condition}
        </p>
        <p>
          <strong>Species:</strong> {pet.species}
        </p>
        <p>
          <strong>Breed:</strong> {pet.breed}
        </p>
        <p>
          <strong>Age:</strong> {pet.age}
        </p>
        <p>
          <strong>Gender:</strong> {pet.gender}
        </p>
        <p>
          <strong>Color:</strong> {pet.color}
        </p>
        <p>
          <strong>Weight:</strong> {pet.weight}
        </p>
        <p>
          <strong>Medical History:</strong> {pet.medicalHistory}
        </p>
        <p>
          <strong>Pet Owner Id:</strong> {pet.ownerId}
        </p>
      </div>
    </div>
  );
};

export default PetDetailsPage;
