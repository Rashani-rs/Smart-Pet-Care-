import React, { useState } from "react";
import "./AddtoCart.css";

import petFoodImage from "../images/download (1) 1.png";
import petToyImage from "../images/toys.jpeg";
import petBedImage from "../images/bed.jpeg";
import petCollarImage from "../images/collar.png";
import petTreatsImage from "../images/treats.png";
import petShampooImage from "../images/sha.jpeg";

const AddtoCart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Pet Food", price: 10.99, image: petFoodImage },
    { id: 2, name: "Pet Toy", price: 5.99, image: petToyImage },
    { id: 3, name: "Pet Bed", price: 25.99, image: petBedImage },
    { id: 4, name: "Pet Collar", price: 8.99, image: petCollarImage },
    { id: 5, name: "Pet Treats", price: 3.49, image: petTreatsImage },
    { id: 6, name: "Pet Shampoo", price: 12.99, image: petShampooImage },
    // Add more items here...
  ]);

  const [cart, setCart] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    setConfirmationMessage(`Added ${item.name} to cart.`);
    setTimeout(() => {
      setConfirmationMessage("");
    }, 2000);
  };

  const handleBuyNow = () => {
    setShowReceipt(true);
  };

  const handleDownloadReceipt = () => {
    // Logic to generate and download receipt
    alert("Receipt downloaded!");
    // Clear the cart and hide the receipt section
    setCart([]);
    setShowReceipt(false);
  };

  return (
    <div className="buy-pets-needs-container">
      <h2>Buy Pet's Needs</h2>
      {confirmationMessage && (
        <p className="confirmation">{confirmationMessage}</p>
      )}
      <div className="items-list">
        {items.map((item) => (
          <div key={item.id} className="item">
            <img src={item.image} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button
              className={
                item.name.includes("Food")
                  ? "food-button"
                  : item.name.includes("Toy")
                  ? "toy-button"
                  : "other-button"
              }
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h3>Shopping Cart</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <button onClick={handleBuyNow}>Buy Now</button>
        {showReceipt && (
          <div className="receipt">
            <h3>Receipt</h3>
            <button onClick={handleDownloadReceipt}>Download Receipt</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddtoCart;
