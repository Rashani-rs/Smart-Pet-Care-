// UpdateServices.js
import React, { useState } from "react";
import Sidebar from "./VetSidebar";
import "./UpdateServices.css";

const UpdateServices = () => {
  const [serviceID, setServiceID] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");

  const handleUpdateService = () => {
    // Logic to handle updating service
    const confirmed = window.confirm("Are you sure you want to update?");
    if (confirmed) {
      console.log("Updating service...");
    }
  };

  return (
    <div className="update-services-page">
      <Sidebar />
      <div className="content">
        <h3 className="update-services-topic">Update Services</h3>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="serviceID">Service ID:</label>
            <input
              type="text"
              id="serviceID"
              value={serviceID}
              onChange={(e) => setServiceID(e.target.value)}
              placeholder="Enter Service ID (e.g., 01)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Enter Duration"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Price"
            />
          </div>
          <div className="button-group">
            <button className="update-button" onClick={handleUpdateService}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateServices;
