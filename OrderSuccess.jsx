import React from "react";
import "./OrderSuccess.css";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="success-container">
      <div className="success-box">
        <h1>🎉 Order Placed Successfully!</h1>
        <p>Thank you for shopping with FloraFiesta 🌸</p>
        <p>Your flowers will reach you soon.</p>

        <Link to="/">
          <button className="success-btn">Back to Home</button>
        </Link>
        <Link to="/feedback">
          <button className="success-btn">Give Feedback</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
