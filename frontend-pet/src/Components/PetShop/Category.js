// Category.js

import React from "react";
import "./Category.css";

// Import images
import petFoodsImage from "../images/Alpo.jpeg";
import pharmacyItemsImage from "../images/treats.png";
import petCratesImage from "../images/crates.jpeg";
import petBedsImage from "../images/beds.jpeg";
import petFleaImage from "../images/Fleas.jpeg";
import petToyImage from "../images/toysa.jpeg";

export const Category = () => {
  return (
    <div className="category-container">
      <div className="category-box">
        <img src={petFoodsImage} alt="Pet Foods" className="category-image" />
        <h2>Pet Foods</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          ultricies massa. Fusce ac fringilla lorem, vel efficitur sem. Proin
          aliquet odio vitae nisi feugiat, eget ultrices neque feugiat.
        </p>
        <button onClick={() => (window.location.href = "/foods")}>
          View More
        </button>{" "}
      </div>
      <div className="category-box">
        <img
          src={pharmacyItemsImage}
          alt="Pharmacy Items"
          className="category-image"
        />
        <h2>Pharmacy Items</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          ultricies massa. Fusce ac fringilla lorem, vel efficitur sem. Proin
          aliquet odio vitae nisi feugiat, eget ultrices neque feugiat.
        </p>
        <button onClick={() => (window.location.href = "/pharmacy")}>
          View More
        </button>{" "}
      </div>

      <div className="category-box">
        <img src={petCratesImage} alt="Crates" className="category-image" />
        <h2>Crates</h2>
        <p>
          Crates provide a safe and secure space for your pet to rest, sleep, or
          travel. They come in various sizes and designs to accommodate
          different breeds and preferences. Crates can be used for house
          training, as a cozy den for relaxation, or for transporting your pet
          comfortably.
        </p>
        <button onClick={() => (window.location.href = "/crates")}>
          View More
        </button>{" "}
      </div>
      <div className="category-box">
        <img src={petBedsImage} alt="Pet Beds" className="category-image" />
        <h2>Beds</h2>
        <p>
          Pet beds offer a comfortable and cozy spot for your furry friend to
          rest and sleep. They come in a variety of styles, including orthopedic
          beds for older pets, bolster beds for extra support, and heated beds
          for added warmth during colder seasons. A good quality bed can improve
          your pet's overall comfort and promote better sleep.
        </p>
        <button onClick={() => (window.location.href = "/beds")}>
          View More
        </button>{" "}
      </div>
      <div className="category-box">
        <img src={petFleaImage} alt="Flea" className="category-image" />
        <h2>Flea & Tick</h2>
        <p>
          Fleas and ticks are common pests that can cause discomfort and health
          issues for your pet. Flea and tick products, such as topical
          treatments, collars, and sprays, help to prevent infestations and
          protect your pet from these parasites. Regular use of flea and tick
          products is essential for maintaining your pet's health and
          well-being.
        </p>
        <button onClick={() => (window.location.href = "/flea")}>
          View More
        </button>{" "}
      </div>
      <div className="category-box">
        <img src={petToyImage} alt="Pet Toys" className="category-image" />
        <h2>Pet Toys</h2>
        <p>
          Toys are essential for keeping your pet mentally stimulated and
          physically active. They come in a variety of shapes, sizes, and
          textures to suit different preferences and play styles. From chew toys
          and interactive puzzles to balls and plush toys, there's something for
          every pet to enjoy. Toys also provide an outlet for excess energy and
          can help prevent boredom and destructive behavior.
        </p>
        <button onClick={() => (window.location.href = "/toy")}>
          View More
        </button>{" "}
      </div>

      {/* Add more categories */}
    </div>
  );
};

export default Category;
