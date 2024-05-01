import React, { useState } from "react";
import "./Veterinarian.css";

const Veterinarian = () => {
  const [veterinarians, setVeterinarians] = useState([
    {
      id: 1,
      name: "Dr. Smith",
      category: "General Veterinary Services",
      specialist: false,
      active: true,
      profile: {
        experience: "10 years",
        education: "DVM from ABC University",
        location: "123 Main St, City, Country",
        contact: "123-456-7890",
      },
    },
    {
      id: 2,
      name: "Dr. Sam",
      category: "General Veterinary Services",
      specialist: false,
      active: true,
      profile: {
        experience: "10 years",
        education: "DVM from ABC University",
        location: "123 Main St, City, Country",
        contact: "123-456-7890",
      },
    },
    {
      id: 3,
      name: "Dr. Maala",
      category: "General Veterinary Services",
      specialist: false,
      active: true,
      profile: {
        experience: "10 years",
        education: "DVM from ABC University",
        location: "123 Main St, City, Country",
        contact: "123-456-7890",
      },
    },
    {
      id: 4,
      name: "Dr. Johnson",
      category: "Specialist",
      specialist: true,
      active: false,
      profile: {
        experience: "15 years",
        education: "DVM from XYZ University",
        location: "456 Elm St, City, Country",
        contact: "987-654-3210",
      },
    },
    // Add more veterinarians here...
  ]);

  const [selectedVet, setSelectedVet] = useState(null);

  const handleSelectVet = (vet) => {
    setSelectedVet(vet);
    const confirmation = window.confirm(
      `Are you sure you want to select ${vet.name}?`
    );
    if (confirmation) {
      // Add logic to handle confirmation
      console.log(`${vet.name} selected.`);
    } else {
      setSelectedVet(null); // Clear selection if canceled
    }
  };

  return (
    <div className="veterinarian-container">
      <h2>Veterinarians</h2>
      <div className="vet-list">
        {veterinarians.map((vet) => (
          <div key={vet.id} className="vet-item">
            <h3>{vet.name}</h3>
            <p>Category: {vet.category}</p>
            {vet.specialist && <p>Specialist</p>}
            <p>Status: {vet.active ? "Active" : "Inactive"}</p>
            <button onClick={() => handleSelectVet(vet)}>Select</button>
          </div>
        ))}
      </div>
      {selectedVet && (
        <div className="selected-vet-info">
          <h3>Selected Veterinarian:</h3>
          <p>{selectedVet.name}</p>
          <p>{selectedVet.category}</p>
          {selectedVet.specialist && <p>Specialist</p>}
          <p>{selectedVet.active ? "Active" : "Inactive"}</p>
        </div>
      )}
    </div>
  );
};

export default Veterinarian;
