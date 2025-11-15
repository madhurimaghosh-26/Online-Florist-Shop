import React, { useState, useRef } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I assist you today? 🌸" },
  ]);
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);
  const messageEndRef = useRef(null);

  const presetSuggestions = [
    "What flowers do you have?",
    "Show me red roses",
    "How to place an order?",
    "What is the delivery time?",
  ];

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMessage = { sender: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      botReply(text);
    }, 800);
  };

  // 🎤 Text-to-Speech (BOT SPEAKS)
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.pitch = 1;
    speech.rate = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
  };

  const botReply = (msg) => {
    let reply = "I'm not sure I understand. Please try again!";

    msg = msg.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi"))
      reply = "Hello! How can I help you today?";

    else if (msg.includes("rose") || msg.includes("flowers"))
      reply = "We have Roses, Tulips, Orchids, Sunflowers, and many more flowers available.";

    else if (msg.includes("order"))
      reply = "To place an order, add items to your cart and press Place Order.";

    else if (msg.includes("delivery"))
      reply = "Delivery usually takes one to two days depending on your location.";

    const botMessage = { sender: "bot", text: reply };
    setMessages((prev) => [...prev, botMessage]);

    // 🔊 Bot speaks the reply
    speak(reply);

    scrollToBottom();
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // 🎤 Voice recognition
  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support voice recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setInput(text);
      setListening(false);
    };

    recognition.onerror = () => setListening(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="chatbot-button" onClick={() => setOpen(!open)}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
          alt="chatbot"
        />
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
              className="bot-avatar"
              alt="bot"
            />
            FloraBot
            <span className="close-btn" onClick={() => setOpen(false)}>×</span>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={"chat-message " + (msg.sender === "user" ? "user" : "bot")}
              >
                {msg.text}
              </div>
            ))}

            <div ref={messageEndRef}></div>
          </div>

          {/* Suggestions */}
          <div className="autocomplete-box">
            {presetSuggestions.map((s, i) => (
              <div
                key={i}
                className="autocomplete-item"
                onClick={() => handleSend(s)}
              >
                {s}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <button className="mic-btn" onClick={startListening}>
              🎤
            </button>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />

            <button onClick={() => handleSend(input)}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
