import React, { useState, useContext } from "react";
import "./Feedback.css";
import { FeedbackContext } from "../../context/FeedbackContext";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const { addFeedback } = useContext(FeedbackContext);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();  // ✅ for redirect

  const handleSubmit = (e) => {
    e.preventDefault();

    addFeedback({
      id: Date.now(),
      rating,
      message,
      date: new Date().toLocaleString(),
    });

    alert("🌸 Thank you for your feedback!");

    // Reset form
    setRating(0);
    setMessage("");

    // ✅ Redirect to home after 1.5 seconds
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="feedback-container">
      <h2>Rate Your Experience</h2>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <label>Your Rating:</label>

        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "star filled" : "star"}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          placeholder="Write your feedback..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
