import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./PetshopSide.css";

export const PetshopSide = () => {
  return (
    <div className="sidebar">
      <h2>Pet Shop</h2>
      <ul>
        <li>
          <Link to="/Add-accessories">Add Accessories</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
        <li>
          <Link to="/delete-accessories">Delete Accessories</Link>
        </li>
        <li>
          <Link to="/add-cart">Add to Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default PetshopSide;
