"use client";
import { useState, useEffect, useRef } from "react";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "That's interesting! Tell me more.", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="absolute z-20 bottom-10 left-10 w-[380px] bg-white shadow-xl rounded-xl flex flex-col overflow-hidden border border-gray-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 text-lg font-semibold flex justify-between items-center">
        <span>Chat with Us</span>
        <span className="text-xs opacity-70">Online</span>
      </div>

      {/* Messages */}
      <div className="p-4 h-[350px] overflow-y-auto space-y-3 scrollbar-hide">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-3 max-w-[75%] text-sm rounded-lg shadow-md ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-200 text-black rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Field */}
      <div className="border-t border-gray-300 p-3 flex items-center bg-gray-50">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full transition hover:bg-blue-600"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}
