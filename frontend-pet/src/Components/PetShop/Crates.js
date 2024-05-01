// Crates.js

import React from "react";
import "./Crates.css";

// Import crate images
import crate1Image from "../images/metal.jpeg";
import crate2Image from "../images/travel.jpeg";
import crate3Image from "../images/wooden.jpeg";
import crate4Image from "../images/soft.jpeg";
import crate5Image from "../images/colasible.jpeg";
import crate6Image from "../images/steel.jpeg";
import crate7Image from "../images/mesh.jpeg";
import crate8Image from "../images/divide.jpeg";

const Crates = () => {
  const crateItems = [
    {
      name: "Metal Wire Crate",
      image: crate1Image,
      description: "Sturdy metal wire crate for dogs",
      price: 59.99,
      size: "Medium",
    },
    {
      name: "Plastic Travel Crate",
      image: crate2Image,
      description: "Portable plastic travel crate for pets",
      price: 39.99,
      size: "Small",
    },
    {
      name: "Wooden Dog Crate",
      image: crate3Image,
      description: "Elegant wooden dog crate for indoor use",
      price: 89.99,
      size: "Large",
    },
    {
      name: "Soft-Sided Fabric Crate",
      image: crate4Image,
      description: "Soft-sided fabric crate suitable for cats and small dogs",
      price: 49.99,
      size: "Medium",
    },
    {
      name: "Collapsible Metal Crate",
      image: crate5Image,
      description: "Collapsible metal crate for easy storage and transport",
      price: 69.99,
      size: "Large",
    },
    {
      name: "Heavy-Duty Steel Crate",
      image: crate6Image,
      description: "Heavy-duty steel crate for large and strong dogs",
      price: 99.99,
      size: "Extra Large",
    },
    {
      name: "Wire Mesh Crate",
      image: crate7Image,
      description: "Wire mesh crate suitable for puppies and small dogs",
      price: 29.99,
      size: "Small",
    },
    {
      name: "Soft Crate with Divider",
      image: crate8Image,
      description: "Soft crate with divider for crate training",
      price: 54.99,
      size: "Medium",
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
    <div className="crates-container">
      {crateItems.map((item, index) => (
        <div key={index} className="crate-item">
          <img src={item.image} alt={item.name} className="crate-image" />
          <div className="crate-details">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Size: {item.size}</p>
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

export default Crates;
