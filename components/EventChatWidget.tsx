"use client";

import { useState } from "react";

export default function EventChatWidget() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<any[]>([]);

  const sendMessage = async () => {

    if (!message) return;

    console.log("User message:", message);

    const userMessage = {
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

      console.log("API status:", res.status);

      if (!res.ok) {
        console.error("API request failed");
        return;
      }

      const data = await res.json();

      console.log("API response:", data);

      const aiMessage = {
        role: "ai",
        content: data.reply,
      };

      setChat((prev) => [...prev, aiMessage]);

      setMessage("");

    } catch (error) {

      console.error("Fetch error:", error);

    }

  };

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white border p-3">

      <div className="h-60 overflow-y-auto mb-3">

        {chat.map((msg, index) => (
          <div key={index}>
            {msg.role === "user" ? (
              <p><b>You:</b> {msg.content}</p>
            ) : (
              <p><b>AI:</b> {msg.content}</p>
            )}
          </div>
        ))}

      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border w-full p-2"
        placeholder="Ask about events..."
      />

      <button
        onClick={sendMessage}
        className="bg-black text-white px-3 py-1 mt-2"
      >
        Send
      </button>

    </div>
  );
}