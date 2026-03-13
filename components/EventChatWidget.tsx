"use client";

import { useState } from "react";

type ChatMessage = {
  role: "user" | "ai";
  content: string;
};

export default function EventChatWidget() {
  const suggestions = [
    "Tech events",
    "Dance events",
    "Events in May",
    "Events this week",
    "Music events",
  ];

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const handleSuggestion = (text: string) => {
    setMessage(text);
  };

  const sendMessage = async () => {
    if (!message) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: message,
    };

    setChat((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("/api/event-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      const aiMessage: ChatMessage = {
        role: "ai",
        content: data.reply,
      };

      setChat((prev) => [...prev, aiMessage]);

      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
  <>
    {/* Floating Button */}
    {!open && (
      <button
        onClick={() => setOpen(true)}
        className="btn blue-btn chat-float-btn"
      >
        💬
      </button>
    )}

    {/* Chat Window */}
    {open && (
      <div className="chat-widget card shadow">

        {/* Header */}
        <div className="card-header bg-blue text-white d-flex justify-content-between">
          <span>Event Assistant</span>
          <button
            className="btn btn-sm btn-light"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Suggestions */}
        {chat.length === 0 && (
          <div className="p-3 border-bottom">

            <small className="text-muted">Try asking:</small>

            <div className="d-flex flex-wrap gap-2 mt-2">

              {suggestions.map((item, index) => (
                <button
                  key={index}
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => handleSuggestion(item)}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>
        )}

        {/* Messages */}
        <div className="card-body chat-messages">

          {chat.map((msg, index) => (
            <div
              key={index}
              className={`d-flex mb-2 ${
                msg.role === "user"
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              <div
                className={`p-2 rounded ${
                  msg.role === "user"
                    ? "bg-dark text-white"
                    : "bg-light"
                }`}
                style={{ maxWidth: "70%" }}
              >
                {msg.content}
              </div>
            </div>
          ))}

        </div>

        {/* Input */}
        <div className="card-footer d-flex gap-2">

          <input
            type="text"
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about events..."
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />

          <button onClick={sendMessage} className="btn blue-btn">
            Send
          </button>

        </div>

      </div>
    )}
  </>
);
}
