import React from "react";
import ChatSystem from "./Components/ChatSystem";
import ChatProvider from "./Components/ChatContext";

const App = () => {
  return (
    <ChatProvider>
      <ChatSystem />
    </ChatProvider>
  );
};
export default App;
