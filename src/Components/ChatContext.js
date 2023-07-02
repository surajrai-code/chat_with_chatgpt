import React, { createContext, useEffect, useState } from "react";

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatActive, setIsChatActive] = useState(false);

  useEffect(() => {
    const storedChatHistory = localStorage.getItem("chatHistory");
    const initialChatHistory = storedChatHistory
      ? JSON.parse(storedChatHistory)
      : [];
    setChatHistory(initialChatHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
  }, [chatHistory]);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const simulateResponse = () => {
    const newChatEntry = { type: "user", content: userInput };
    setChatHistory((prevHistory) => [...prevHistory, newChatEntry]);
    setUserInput('');
    setTimeout(() => {
      const botResponseEntry = { type: "bot", content: userInput };
      setChatHistory((prevHistory) => [...prevHistory, botResponseEntry]);
    }, 1000);
  };

  const toggleChat = () => {
    setIsChatActive((prevState) => !prevState);
  };

  const chatData = {
    userInput,

    handleChange,
    simulateResponse,
    chatHistory,
    isChatActive,
    toggleChat,
  };

  return (
    <ChatContext.Provider value={chatData}>{children}</ChatContext.Provider>
  );
};

export default ChatProvider;
