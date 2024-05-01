// Foods.js

import React from "react";
import "./Foods.css";

// Import food images
import food1Image from "../images/Kibble.jpeg";
import food2Image from "../images/salmon.jpeg";
import food3Image from "../images/turk.jpeg";
import food4Image from "../images/tuna.jpeg";
import food5Image from "../images/beef.jpeg";
import food6Image from "../images/duck.jpeg";
import food7Image from "../images/helthy.jpeg";
import food8Image from "../images/mixed.jpeg";

export const Foods = () => {
  const foodItems = [
    {
      name: "Chicken Flavored Kibble",
      image: food1Image,
      description: "Dry dog food with chicken flavor",
      price: 19.99,
    },
    {
      name: "Salmon and Rice Formula",
      image: food2Image,
      description: "Wet dog food with salmon and rice",
      price: 15.99,
    },
    {
      name: "Grain-Free Turkey Recipe",
      image: food3Image,
      description: "Grain-free turkey recipe for dogs",
      price: 24.99,
    },
    {
      name: "Tuna and Shrimp Entree",
      image: food4Image,
      description: "Wet cat food with tuna and shrimp",
      price: 12.99,
    },
    {
      name: "Beef and Vegetable Stew",
      image: food5Image,
      description: "Canned dog food with beef and vegetables",
      price: 17.99,
    },
    {
      name: "Turkey and Duck Pate",
      image: food6Image,
      description: "Wet cat food pate with turkey and duck",
      price: 14.99,
    },
    {
      name: "Healthy Weight Formula",
      image: food7Image,
      description: "Dry dog food for maintaining healthy weight",
      price: 21.99,
    },
    {
      name: "Mixed Grill Entree",
      image: food8Image,
      description: "Wet paw food with mixed grill flavors",
      price: 13.99,
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
    <div className="food-container">
      {foodItems.map((food, index) => (
        <div key={index} className="food-item">
          <img src={food.image} alt={food.name} className="food-image" />
          <div className="food-details">
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p>Price: ${food.price}</p>
            <button onClick={() => handleBuyNow(food)} className="buy-button">
              Buy Now
            </button>
            <button
              onClick={() => handleAddToCart(food)}
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

export default Foods;
