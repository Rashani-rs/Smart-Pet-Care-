// Beds.js
import React from "react";
import "./Beds.css";

// Import bed images
import bed1Image from "../images/foam.jpeg";
import bed2Image from "../images/plush.jpeg";
import bed3Image from "../images/elev.jpeg";
import bed4Image from "../images/lux.jpeg";
import bed5Image from "../images/cave.jpeg";
import bed6Image from "../images/out.jpeg";
import bed7Image from "../images/conver.jpeg";
import bed8Image from "../images/heat.jpeg";

const Beds = () => {
  const bedItems = [
    {
      name: "Orthopedic Memory Foam Bed",
      image: bed1Image,
      description: "Premium orthopedic memory foam bed for dogs",
      price: 49.99,
      size: "Medium",
    },
    {
      name: "Plush Donut Cuddler Bed",
      image: bed2Image,
      description: "Soft and cozy donut cuddler bed for cats and small dogs",
      price: 29.99,
      size: "Small",
    },
    {
      name: "Elevated Cooling Bed",
      image: bed3Image,
      description: "Elevated cooling bed for pets to keep them cool in summer",
      price: 39.99,
      size: "Large",
    },
    {
      name: "Luxury Sofa Bed",
      image: bed4Image,
      description: "Luxurious sofa bed with washable cover for dogs",
      price: 59.99,
      size: "Extra Large",
    },
    {
      name: "Cozy Cave Bed",
      image: bed5Image,
      description: "Cozy cave bed for pets who love to burrow and snuggle",
      price: 34.99,
      size: "Medium",
    },
    {
      name: "Waterproof Outdoor Bed",
      image: bed6Image,
      description: "Waterproof outdoor bed for pets to relax outdoors",
      price: 44.99,
      size: "Large",
    },
    {
      name: "Convertible Pet Bed",
      image: bed7Image,
      description: "Convertible pet bed that can be used as a sofa or bed",
      price: 49.99,
      size: "Medium",
    },
    {
      name: "Heated Thermal Bed",
      image: bed8Image,
      description: "Heated thermal bed to keep pets warm during winter",
      price: 69.99,
      size: "Large",
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
    <div className="beds-container">
      {bedItems.map((item, index) => (
        <div key={index} className="bed-item">
          <img src={item.image} alt={item.name} className="bed-image" />
          <div className="bed-details">
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

export default Beds;
