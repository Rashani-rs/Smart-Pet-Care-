import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Update.css";

const UpdatePet = () => {
  const [searchText, setSearchText] = useState("");
  const [petList, setPetList] = useState([
    { id: 1, name: "Fluffy" },
    { id: 2, name: "Max" },
    { id: 3, name: "Buddy" },
  ]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleUpdatePet = (id) => {
    // Implement update logic here
    console.log("Updating pet with ID:", id);
    setShowConfirmation(true);
  };

  return (
    <div className="update-pet-page">
      <Sidebar />
      <div className="content">
        <h3 className="update-pet-topic">Update Pet</h3>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input"
          />
          <button
            className="search-button"
            onClick={() => console.log("search clicked")}
          >
            <i className="fas fa-edit"></i> Search
          </button>
        </div>
        <div className="pet-list">
          {petList.map((pet) => (
            <div key={pet.id} className="pet-item">
              <span className="pet-name">{pet.name}</span>
              <button
                className="update-button"
                onClick={() => handleUpdatePet(pet.id)}
              >
                <i className="fas fa-edit"></i> Update
              </button>
            </div>
          ))}
        </div>
        {showConfirmation && (
          <div className="confirmation-box">
            <p>Are you sure you want to update?</p>
            <button onClick={() => (window.location.href = "/pet-profile")}>
              Update
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdatePet;
