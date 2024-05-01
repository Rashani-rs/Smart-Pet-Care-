// Flea.js

import React from "react";
import "./Flea&Tick.css";

// Import flea and tick images
import flea1Image from "../images/collr.jpeg";
import flea2Image from "../images/shamp.jpeg";
import flea3Image from "../images/spry.jpeg";
import flea4Image from "../images/images (2).jpeg";
import flea5Image from "../images/col.jpeg";
import flea6Image from "../images/ftab.jpeg";
import flea7Image from "../images/comb.jpeg";
import flea8Image from "../images/fsp.jpeg";

const Flea = () => {
  const fleaItems = [
    {
      name: "Flea Collar",
      image: flea1Image,
      description: "Long-lasting flea collar for dogs and cats",
      price: 9.99,
    },
    {
      name: "Flea and Tick Shampoo",
      image: flea2Image,
      description: "Effective shampoo to eliminate fleas and ticks",
      price: 12.99,
    },
    {
      name: "Flea Spray",
      image: flea3Image,
      description: "Spray to kill fleas and ticks on contact",
      price: 14.99,
    },
    {
      name: "Flea and Tick Drops",
      image: flea4Image,
      description: "Topical treatment to prevent flea and tick infestations",
      price: 19.99,
    },
    {
      name: "Flea and Tick Collar",
      image: flea5Image,
      description: "Adjustable collar to repel fleas and ticks",
      price: 8.99,
    },
    {
      name: "Flea and Tick Tablets",
      image: flea6Image,
      description: "Oral tablets to kill fleas and ticks",
      price: 17.99,
    },
    {
      name: "Flea Comb",
      image: flea7Image,
      description: "Comb to remove fleas and ticks from your pet's fur",
      price: 6.99,
    },
    {
      name: "Flea and Tick Home Spray",
      image: flea8Image,
      description: "Spray to eliminate fleas and ticks from your home",
      price: 21.99,
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
    <div className="flea-container">
      {fleaItems.map((flea, index) => (
        <div key={index} className="flea-item">
          <img src={flea.image} alt={flea.name} className="flea-image" />
          <div className="flea-details">
            <h3>{flea.name}</h3>
            <p>{flea.description}</p>
            <p>Price: ${flea.price}</p>
            <button onClick={() => handleBuyNow(flea)} className="buy-button">
              Buy Now
            </button>
            <button
              onClick={() => handleAddToCart(flea)}
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

export default Flea;
