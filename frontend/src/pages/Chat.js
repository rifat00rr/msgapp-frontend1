// src/pages/Chat.js - Chat Page
import React, { useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message..." required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
