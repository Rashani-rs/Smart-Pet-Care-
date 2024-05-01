import React, { useState, useRef, useEffect } from "react";
const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const chatboxRef = useRef(null);

  const displayMessage = (sender, message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: sender, text: message },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      displayMessage("Customer", inputValue);
      setInputValue("");

      setTimeout(() => {
        displayMessage(
          "Staff",
          "Thank you for your message. We will get back to you soon."
        );
      }, 1000);
    }
  };

  useEffect(() => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <strong>Live Chat</strong>
            </div>
            <div className="card-body">
              <div
                ref={chatboxRef}
                id="chatbox"
                style={{
                  height: "400px",
                  border: "1px solid #ccc",
                  overflowY: "scroll",
                  padding: "10px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className="message alert alert-info"
                    style={{ marginBottom: "10px" }}
                  >
                    <strong>{message.sender}:</strong> {message.text}
                  </div>
                ))}
              </div>
              <form
                onSubmit={handleSubmit}
                id="messageForm"
                style={{ marginTop: "10px" }}
              >
                <div className="input-group">
                  <input
                    type="text"
                    id="messageInput"
                    className="form-control"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
