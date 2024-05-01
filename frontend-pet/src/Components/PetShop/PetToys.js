// PetToys.js

import React from "react";
import "./PetToys.css";

// Import toy images
import toy1Image from "../images/ball.jpeg";
import toy2Image from "../images/bone.jpeg";
import toy3Image from "../images/fether.jpeg";
import toy4Image from "../images/toys.jpeg";
import toy5Image from "../images/rop.jpeg";
import toy6Image from "../images/toysa.jpeg";
import toy7Image from "../images/rubbring.jpeg";
import toy8Image from "../images/puzz.jpeg";

const PetToys = () => {
  const toyItems = [
    {
      name: "Squeaky Ball",
      image: toy1Image,
      description: "Rubber squeaky ball for dogs",
      price: 9.99,
    },
    {
      name: "Chew Bone",
      image: toy2Image,
      description: "Durable nylon chew bone for heavy chewers",
      price: 12.99,
    },
    {
      name: "Feather Teaser",
      image: toy3Image,
      description: "Interactive feather teaser toy for cats",
      price: 7.99,
    },
    {
      name: "Plush Toy",
      image: toy4Image,
      description: "Soft plush toy for small dogs and puppies",
      price: 8.99,
    },
    {
      name: "Tug Rope",
      image: toy5Image,
      description: "Tug rope toy for interactive play with dogs",
      price: 11.99,
    },
    {
      name: "Rubber Ball",
      image: toy6Image,
      description: "Set of Doga Teeth",
      price: 6.99,
    },
    {
      name: "Rubber Ring",
      image: toy7Image,
      description: "Durable rubber ring toy for dogs",
      price: 10.99,
    },
    {
      name: "Interactive Puzzle Toy",
      image: toy8Image,
      description: "Interactive puzzle toy to stimulate pet's mind",
      price: 14.99,
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
    <div className="toy-container">
      {toyItems.map((toy, index) => (
        <div key={index} className="toy-item">
          <img src={toy.image} alt={toy.name} className="toy-image" />
          <div className="toy-details">
            <h3>{toy.name}</h3>
            <p>{toy.description}</p>
            <p>Price: ${toy.price}</p>
            <button onClick={() => handleBuyNow(toy)} className="buy-button">
              Buy Now
            </button>
            <button
              onClick={() => handleAddToCart(toy)}
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

export default PetToys;
