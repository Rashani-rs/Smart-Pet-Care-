// MedicalResources.js
import React, { useState } from "react";
import "./MedicalResources.css";

const MedicalResources = () => {
  const [resources, setResources] = useState([
    { id: 1, name: "Veterinary Clinic", location: "Main Street" },
    { id: 2, name: "Pet Pharmacy", location: "Center Avenue" },
    // Add more resources here...
  ]);

  const [newResource, setNewResource] = useState({ name: "", location: "" });

  const handleAddResource = () => {
    setResources([...resources, { ...newResource, id: resources.length + 1 }]);
    setNewResource({ name: "", location: "" });
    alert(`${newResource.name} added successfully!`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewResource({ ...newResource, [name]: value });
  };

  return (
    <div className="medical-resources-container">
      <h2>Medical Resources</h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>
            <strong>Name:</strong> {resource.name}
            <br />
            <strong>Location:</strong> {resource.location}
          </li>
        ))}
      </ul>
      <div className="add-resource-form">
        <h2>Add New Resource</h2>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newResource.name}
          onChange={handleChange}
        />
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={newResource.location}
          onChange={handleChange}
        />
        <button onClick={handleAddResource}>Add Resource</button>
      </div>
    </div>
  );
};

export default MedicalResources;
