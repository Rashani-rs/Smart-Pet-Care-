import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Delete.css";

const DeletePet = () => {
  const [searchText, setSearchText] = useState("");
  const [petList, setPetList] = useState([
    { id: 1, name: "Fluffy" },
    { id: 2, name: "Max" },
    { id: 3, name: "Buddy" },
  ]);

  const handleDeletePet = (id) => {
    const updatedPetList = petList.filter((pet) => pet.id !== id);
    setPetList(updatedPetList);
  };

  return (
    <div className="delete-pet-page">
      <Sidebar />
      <div className="content">
        <h3 className="delete-pet-topic">Delete Pet</h3>
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
                className="delete-button"
                onClick={() => handleDeletePet(pet.id)}
              >
                <i className="fas fa-trash-alt"></i> Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeletePet;
