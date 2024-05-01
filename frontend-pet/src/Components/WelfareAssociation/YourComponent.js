// YourComponent.js
import React from "react";
import AdoptionProgram from "./AdoptionProgram";

const YourComponent = () => {
  // Assuming you have a donation object defined here
  const donation = {
    donorName: "John Doe",
    amount: 50,
    date: "2024-04-15",
    message: "Thank you for supporting our adoption program!",
  };

  return (
    <div>
      <AdoptionProgram donation={donation} />
    </div>
  );
};

export default YourComponent;
