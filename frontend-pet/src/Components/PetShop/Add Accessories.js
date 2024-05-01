// PetShopAccessories.js

import React, { useState } from "react";
import Sidebar from "./PetshopSide";
import "./AddAccessories.css";

const AddAccessories = () => {
  const [searchText, setSearchText] = useState("");
  const [accessoryName, setAccessoryName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [showMessageBox, setShowMessageBox] = useState(false);

  const handleSaveAccessory = () => {
    // Logic to save accessory
    setShowMessageBox(true);
  };

  return (
    <div className="pet-shop-accessories-page">
      <Sidebar />
      <div className="content">
        <h3>Add Accessories</h3>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input"
          />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="add-accessory">
          <label htmlFor="accessoryName">Name:</label>
          <input
            type="text"
            id="accessoryName"
            value={accessoryName}
            onChange={(e) => setAccessoryName(e.target.value)}
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button className="add-button" onClick={handleSaveAccessory}>
            Add <i className="fas fa-plus"></i>
          </button>
        </div>
        {showMessageBox && (
          <div className="message-box">
            <p>Accessory added successfully!</p>
            <button onClick={() => setShowMessageBox(false)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddAccessories;
