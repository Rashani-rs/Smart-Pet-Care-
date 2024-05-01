// Home.js

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        {/* <img src={SmartPetImage} alt="Smart Pet" className="banner-image" /> */}
        <div className="banner-content">
          <h1>Happy Pets Happy care</h1>
          <p>
            Your one-stop solution for all your pet care needs. Join with us for
            your pets{" "}
          </p>
          <button onClick={() => (window.location.href = "/about")}>
            View More
          </button>
        </div>
      </div>
      <div className="other-includes">
        <h2> Features for your pets</h2>
        <p>Here are some of the features we offer:</p>
        <ul>
          <li>Pet Shop</li>
          <li>Veterinary Service</li>
          <li>Welfare Association</li>
          <li>Communication </li>
          <li>Diseases Diagnosis</li>

          {/* Add more features as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Home;
