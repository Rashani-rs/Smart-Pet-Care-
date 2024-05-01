// ComSidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./ComSidebar.css";

const ComSidebar = () => {
  return (
    <div className="com-sidebar">
      <h3>Communication</h3>
      <ul>
        <li>
          <a href="owner">Pet Owners</a>
        </li>
        <li>
          <a href="user">User Profile</a>
        </li>
        <li>
          <a href="live">Live Chat</a>
        </li>
      </ul>
    </div>
  );
};

export default ComSidebar;
