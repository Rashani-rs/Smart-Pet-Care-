// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Welfare Association</h2>
      <ul>
        <li>
          <Link to="/animal-records">Animal Records</Link>
        </li>
        <li>
          <Link to="/adoption-program">Adoption Program</Link>
        </li>
        <li>
          <Link to="/volunteers-staff">Volunteers and Staff</Link>
        </li>
        <li>
          <Link to="/medical-resources">Medical Resources</Link>
        </li>
        <li>
          <Link to="/community-outreach">Community Outreach</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
