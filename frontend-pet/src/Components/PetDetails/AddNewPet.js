import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./AddNewPet.css";

const AddNewPet = () => {
  const [newPetName, setNewPetName] = useState("");
  const [petList, setPetList] = useState([]);
  const [showMessageBox, setShowMessageBox] = useState(false);

  const handleAddPet = () => {
    if (newPetName.trim() !== "") {
      setPetList([...petList, newPetName]);
      setNewPetName("");
    }
  };

  const handleSavePetDetails = () => {
    // Save pet details logic goes here
    setShowMessageBox(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save pet details goes here
    alert("Pet details saved successfully!");
  };

  return (
    <div className="add-new-pet-page">
      <Sidebar />
      <div className="content">
        <h3 className="pet-profile-topic">Add New Pet</h3>
        <div className="button">
          <button
            type="button"
            onClick={() => alert("Pet details added successfully!")}
          >
            Add
          </button>
        </div>
        <div className="select-pet-type">
          <button className="pet-type-button">
            <i className="fas fa-dog"></i> Dog
          </button>
          <button className="pet-type-button">
            <i className="fas fa-cat"></i> Cat
          </button>
        </div>
        <div className="pet-details">
          <label htmlFor="pet-id">Pet ID - </label>
          <input type="text" id="pet-id" />
          <label htmlFor="pet-name">Pet Name - </label>
          <input type="text" id="pet-name" />
          <label htmlFor="species">Species - </label>
          <input type="text" id="species" />
          <label htmlFor="breed">Breed - </label>
          <input type="text" id="breed" />
          <label htmlFor="age">Age - </label>
          <input type="text" id="age" />
          <label htmlFor="gender">Gender - </label>
          <input type="text" id="gender" />
          <label htmlFor="color">Color - </label>
          <input type="text" id="color" />
          <label htmlFor="weight">Weight - </label>
          <input type="text" id="weight" />
          <label htmlFor="medical-history">Medical History - </label>
          <input type="text" id="medical-history" />
          <label htmlFor="owner-id">Pet Owner ID - </label>
          <input type="text" id="owner-id" />
        </div>
        {showMessageBox && (
          <div className="message-box">
            <p>Pet details saved!</p>
          </div>
        )}
        <button type="submit" className="bottom-button">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNewPet;
