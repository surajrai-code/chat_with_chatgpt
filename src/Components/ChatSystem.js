import React, { useContext, useState } from "react";
import { ChatContext } from "./ChatContext";
import "./ChatSystem.css";

const ChatSystem = () => {
  const { userInput, handleChange, simulateResponse, chatHistory } =
    useContext(ChatContext);
  const [isChatActive, setIsChatActive] = useState(false);

  const toggleChat = () => {
    setIsChatActive(!isChatActive);
  };

  const closeChat = () => {
    setIsChatActive(false);
  };

  return (
    <div className={`chat-container ${isChatActive ? "active" : ""}`}>
      {!isChatActive ? (
        <button className="chat-toggle-button" onClick={toggleChat}>
          Activate Chat
        </button>
      ) : (
        <>
          <div className="chat-history">
            <div className="chat-header">CHAT_AI</div>
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.type === "user" ? "user-message" : "bot-message"
                }`}
              >
                <span className="sender">
                  {message.type === "user" ? "User: " : "Bot: "}
                </span>
                {message.content}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={userInput}
              onChange={handleChange}
              className="input"
            />
            <button onClick={simulateResponse} className="button">
              Send
            </button>
            <button onClick={closeChat} className="close-button">
              Deactivate
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatSystem;
