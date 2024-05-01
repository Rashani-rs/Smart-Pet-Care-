// Pharmacy.js

import React from "react";
import "./Pharmacy.css";

// Import pharmacy images
import pharmacy1Image from "../images/flee.jpeg";
import pharmacy2Image from "../images/heartwo.jpeg";
import pharmacy3Image from "../images/supp.jpeg";
import pharmacy4Image from "../images/dental.jpeg";
import pharmacy5Image from "../images/ear.jpeg";
import pharmacy6Image from "../images/eye.jpeg";
import pharmacy7Image from "../images/dsham.jpeg";
import pharmacy8Image from "../images/wound.jpeg";

const Pharmacy = () => {
  const pharmacyItems = [
    {
      name: "Flea and Tick Treatment",
      image: pharmacy1Image,
      description: "Topical treatment for flea and tick prevention",
      price: 29.99,
    },
    {
      name: "Heartworm Prevention Tablets",
      image: pharmacy2Image,
      description: "Monthly tablets for heartworm prevention in dogs",
      price: 39.99,
    },
    {
      name: "Joint Supplements",
      image: pharmacy3Image,
      description: "Supplements for joint health and mobility in pets",
      price: 24.99,
    },
    {
      name: "Dental Chews",
      image: pharmacy4Image,
      description: "Chews for dental health and tartar control in dogs",
      price: 12.99,
    },
    {
      name: "Ear Cleansing Solution",
      image: pharmacy5Image,
      description: "Solution for cleaning and maintaining ear hygiene",
      price: 9.99,
    },
    {
      name: "Eye Drops",
      image: pharmacy6Image,
      description: "Eye drops for soothing and cleansing pet eyes",
      price: 14.99,
    },
    {
      name: "Skin Care Shampoo",
      image: pharmacy7Image,
      description: "Shampoo for pets with sensitive skin or allergies",
      price: 19.99,
    },
    {
      name: "Wound Care Spray",
      image: pharmacy8Image,
      description: "Spray for cleaning and treating minor wounds",
      price: 16.99,
    },
  ];

  const handleBuyNow = (item) => {
    // Logic to handle buy now action
    console.log(`Bought: ${item.name}`);
  };

  const handleAddToCart = (item) => {
    // Logic to handle add to cart action
    console.log(`Added to cart: ${item.name}`);
  };

  return (
    <div className="pharmacy-container">
      {pharmacyItems.map((item, index) => (
        <div key={index} className="pharmacy-item">
          <img src={item.image} alt={item.name} className="pharmacy-image" />
          <div className="pharmacy-details">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleBuyNow(item)} className="buy-button">
              Buy Now
            </button>
            <button
              onClick={() => handleAddToCart(item)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pharmacy;
