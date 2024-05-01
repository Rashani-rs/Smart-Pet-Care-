import React from "react";
import WelfareSide from "./WelfareSide";
import welfareImage from "../images/welf.jpeg";
import "./WelfareAssociation.css";

export const WelfareAssociation = () => {
  return (
    <div>
      <WelfareSide />
      <div className="welfare-association-container">
        <h1>Welcome to the Welfare Association</h1>
        <img src={welfareImage} alt="Welfare Association" />

        <p>We are dedicated to promoting the welfare of animals.</p>
      </div>
    </div>
  );
};
