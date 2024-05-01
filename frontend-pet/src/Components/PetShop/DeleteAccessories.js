import React, { useState } from "react";
import "./DeleteAccessories.css";
import foodImage1 from "../images/Alpo.jpeg";
import foodImage2 from "../images/Food Pedigree.jpeg";
import foodImage3 from "../images/Jinx.jpeg";
import searchIcon from "../images/Search.png";

const DeleteAccessories = () => {
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "Food 1",
      description: "Description of food 1",
      brand: "Brand 1",
      type: "Type 1",
      price: 10,
      quantity: 5,
      image: foodImage1,
    },
    {
      id: 2,
      name: "Food 2",
      description: "Description of food 2",
      brand: "Brand 2",
      type: "Type 2",
      price: 15,
      quantity: 7,
      image: foodImage2,
    },
    {
      id: 3,
      name: "Food 3",
      description: "Description of food 3",
      brand: "Brand 3",
      type: "Type 3",
      price: 20,
      quantity: 10,
      image: foodImage3,
    },
  ]);

  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  const handleDeleteFood = (id) => {
    setConfirmDeleteId(id);
  };

  const handleConfirmDelete = () => {
    // Perform deletion logic here
    const updatedFoods = foods.filter((food) => food.id !== confirmDeleteId);
    setFoods(updatedFoods);
    setConfirmDeleteId(null);
  };

  const handleCancelDelete = () => {
    setConfirmDeleteId(null);
  };

  return (
    <div className="food-management">
      <h3 className="delete-foods-topic">Delete Foods</h3>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Food Items"
          className="search-input"
        />
        <img src={searchIcon} alt="Search" className="search-icon" />
      </div>
      <div className="food-list">
        {foods.map((food) => (
          <div key={food.id} className="food-item">
            <div className="food-info">
              <img src={food.image} alt={food.name} className="food-image" />
              <p>
                <strong>Food ID:</strong> {food.id}
              </p>
              <p>
                <strong>Name:</strong> {food.name}
              </p>
              <p>
                <strong>Description:</strong> {food.description}
              </p>
              <p>
                <strong>Brand:</strong> {food.brand}
              </p>
              <p>
                <strong>Type:</strong> {food.type}
              </p>
              <p>
                <strong>Price:</strong> ${food.price}
              </p>
              <p>
                <strong>Quantity:</strong> {food.quantity}
              </p>
            </div>
            <button
              className="delete-button"
              onClick={() => handleDeleteFood(food.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {confirmDeleteId && (
        <div className="confirmation-box">
          <p>Are you sure you want to delete this food item?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}
    </div>
  );
};

export default DeleteAccessories;
