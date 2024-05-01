// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Vetsidebar = () => {
  return (
    <div className="sidebar">
      <h2>Pet Veterinary Services</h2>
      <ul>
        <li>
          <Link to="/add-new-services">Add New Services</Link>
        </li>
        <li>
          <Link to="/update-services">Update Services</Link>
        </li>
        <li>
          <Link to="/emergency-services">Emergency Services</Link>
        </li>
        <li>
          <Link to="/medical-reports">Medical Reports</Link>
        </li>
        <li>
          <Link to="/veterinarian">Veterinarian</Link>
        </li>
      </ul>
    </div>
  );
};

export default Vetsidebar;
