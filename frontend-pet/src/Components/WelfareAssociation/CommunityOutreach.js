// CommunityOutreach.js
import React, { useState } from "react";
import "./CommunityOutreach.css";

const CommunityOutreach = () => {
  const [programs, setPrograms] = useState([
    {
      id: 1,
      name: "Pet Adoption Event",
      date: "2024-05-15",
      location: "City Park",
      description: "Join us for a day of pet adoptions!",
    },
    {
      id: 2,
      name: "Pet Health Seminar",
      date: "2024-06-10",
      location: "Community Center",
      description: "Learn about pet health and wellness.",
    },
    // Add more programs here...
  ]);

  const [newProgram, setNewProgram] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
  });

  const handleAddProgram = () => {
    setPrograms([...programs, { ...newProgram, id: programs.length + 1 }]);
    setNewProgram({ name: "", date: "", location: "", description: "" });
    alert(`${newProgram.name} added successfully!`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProgram({ ...newProgram, [name]: value });
  };

  return (
    <div className="community-outreach-container">
      <h2>Community Outreach Programs</h2>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <strong>Name:</strong> {program.name}
            <br />
            <strong>Date:</strong> {program.date}
            <br />
            <strong>Location:</strong> {program.location}
            <br />
            <strong>Description:</strong> {program.description}
          </li>
        ))}
      </ul>
      <div className="add-program-form">
        <h2>Add New Program</h2>
        <div className="form-border">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newProgram.name}
            onChange={handleChange}
          />
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={newProgram.date}
            onChange={handleChange}
          />
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={newProgram.location}
            onChange={handleChange}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={newProgram.description}
            onChange={handleChange}
          ></textarea>
          <button onClick={handleAddProgram}>Add Program</button>
        </div>
      </div>
    </div>
  );
};

export default CommunityOutreach;
