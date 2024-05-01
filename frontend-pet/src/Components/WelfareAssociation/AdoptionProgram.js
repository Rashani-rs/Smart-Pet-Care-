import React, { useState } from "react";
import "./AdoptionProgram.css";

const AdoptionProgram = () => {
  const [donorDetails, setDonorDetails] = useState({
    donorName: "",
    donationAmount: "",
    donationDate: "",
  });
  const [receiptGenerated, setReceiptGenerated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonorDetails({ ...donorDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to issue receipt
    console.log("Receipt issued:", donorDetails);
    // Reset form fields
    setDonorDetails({
      donorName: "",
      donationAmount: "",
      donationDate: "",
    });
    setReceiptGenerated(true);
  };

  const handleDownloadReceipt = () => {
    // Logic to generate and download receipt
    console.log("Receipt downloaded:", donorDetails);
    // For demonstration purposes, let's simulate a download
    alert("Receipt downloaded!");
  };

  return (
    <div className="adoption-donation-container">
      <h2>Adoption Donation</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="donorName">Donor Name:</label>
        <input
          type="text"
          id="donorName"
          name="donorName"
          value={donorDetails.donorName}
          onChange={handleChange}
          required
        />
        <label htmlFor="donationAmount">Donation Amount:</label>
        <input
          type="text"
          id="donationAmount"
          name="donationAmount"
          value={donorDetails.donationAmount}
          onChange={handleChange}
          required
        />
        <label htmlFor="donationDate">Donation Date:</label>
        <input
          type="date"
          id="donationDate"
          name="donationDate"
          value={donorDetails.donationDate}
          onChange={handleChange}
          required
        />
        <button type="submit">Issue Receipt</button>
      </form>
      {receiptGenerated && (
        <button onClick={handleDownloadReceipt}>Download Receipt</button>
      )}
    </div>
  );
};

export default AdoptionProgram;
