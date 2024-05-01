// Petshop.js

import React from "react";
import PetshopSide from "./PetshopSide";
import "./Petshop.css"; // Import CSS file
import petshopImage from "../images/istockphoto-1197037573-612x612.jpeg"; // Import petshop image
import { Foods } from "./Foods";

export const Petshop = () => {
  return (
    <div>
      <PetshopSide />
      <div className="petshop-container">
        <h1>Welcome to the Petshop</h1>
        <img src={petshopImage} alt="Petshop" />
        <Foods />

        {/* Add other content */}
      </div>
    </div>
  );
};

export default Petshop;
