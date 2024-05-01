import React from "react";
import "./About.css";
import petCareImage from "./images/dogn.jpeg";
import backgroundImg from "./images/8137a19da3bd4951bec78983340f56d1.jpeg";

export const About = () => {
  return (
    <div
      className="about-container"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="content">
        <h2>Welcome to PetCare Management System</h2>
        <p>
          PetCare Management System is dedicated to providing top-notch care for
          your beloved pets. Our team of professionals is passionate about
          animals and committed to ensuring the health and happiness of every
          furry friend.
        </p>
        <div className="box">
          <p>
            We offer a wide range of services including pet grooming, veterinary
            care, pet boarding, and much more. Whether you need a check-up for
            your pet or simply want to pamper them with a spa day, we've got you
            covered.
          </p>
        </div>
        <button onClick={() => (window.location.href = "/pet-details")}>
          See More
        </button>{" "}
      </div>
      <img className="pet-care-img" src={petCareImage} alt="Pet Care" />
    </div>
  );
};
