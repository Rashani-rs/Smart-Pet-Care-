// Sidebar.js
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Pet Details</h2>
      <ul>
        <li>
          <Link to="/pet-details">Pet Details</Link>
        </li>
        <li>
          <Link to="/add-new-pet">Add New Pet</Link>
        </li>
        <li>
          <Link to="/delete-pet">Delete Pet</Link>
        </li>
        <li>
          <Link to="/update-pet-details">Update Pet Details</Link>
        </li>
        <li>
          <Link to="/pet-profile"> Pet Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
