import React from "react";
import Vetsidebar from "./VetSidebar";
import veterinaryImage from "../images/pets.jpeg"; // Import image
import "./VeterinaryServices.css"; // Import CSS file

export const VeterinaryServices = () => {
  return (
    <div className="veterinary-services-container">
      <h1>Veterinary Services</h1>
      <img src={veterinaryImage} alt="Veterinary Services" />
      <Vetsidebar />
    </div>
  );
};
