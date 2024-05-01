import React, { useState } from "react";
import "./EmergencyServices.css";

const EmergencyServices = () => {
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    phone: "",
    location: "",
  });
  const [receipt, setReceipt] = useState(null);

  const handleEmergencyService = () => {
    console.log("Emergency service requested...");
    setDetailsVisible(true);
  };

  const handleBookingConfirmation = () => {
    console.log("Booking confirmed...");
    setConfirmationVisible(true);
    generateReceipt(); // Generate receipt
  };

  const generateReceipt = () => {
    // Simulate generating receipt
    const receiptNumber = Math.floor(Math.random() * 1000) + 1;
    const receiptName = `${bookingDetails.name}_receipt.pdf`; // Example file name
    const receiptContent = `Receipt Number: ${receiptNumber}\nName: ${bookingDetails.name}\nPhone: ${bookingDetails.phone}\nLocation: ${bookingDetails.location}`;
    const blob = new Blob([receiptContent], { type: "text/plain" });
    setReceipt(blob);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({
      ...bookingDetails,
      [name]: value,
    });
  };

  const handleDownloadReceipt = () => {
    // Download receipt
    const url = window.URL.createObjectURL(receipt);
    const a = document.createElement("a");
    a.href = url;
    a.download = "emergency_receipt.pdf";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="emergency-services-container">
      <h3 className="emergency-services-title">Emergency Services</h3>
      <button className="emergency-button" onClick={handleEmergencyService}>
        Request Emergency Service
      </button>
      {detailsVisible && (
        <div className="emergency-details">
          <h4>Enter Booking Details:</h4>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={bookingDetails.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            value={bookingDetails.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Emergency Location"
            value={bookingDetails.location}
            onChange={handleChange}
          />
          <button className="book-button" onClick={handleBookingConfirmation}>
            Book Emergency Service
          </button>
        </div>
      )}
      {confirmationVisible && receipt && (
        <div className="confirmation-message">
          <p>Booking confirmed! Receipt details:</p>
          <p>Receipt Number: {receipt.name}</p>
          <p>Name: {bookingDetails.name}</p>
          <p>Phone: {bookingDetails.phone}</p>
          <p>Location: {bookingDetails.location}</p>
          <button className="download-button" onClick={handleDownloadReceipt}>
            Download Receipt
          </button>
        </div>
      )}
    </div>
  );
};

export default EmergencyServices;
