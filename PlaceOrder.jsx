import React, { useState, useContext } from "react";
import "./PlaceOrder.css";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    payment: "COD",
    paymentMethod: "",
    cardNumber: "",
    cardName: "",
    upiId: "",
    bankName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (formData.payment === "Online") {
      if (!formData.paymentMethod) {
        alert("Select a payment option.");
        return;
      }

      if (formData.paymentMethod === "card") {
        if (!formData.cardNumber || !formData.cardName) {
          alert("Enter full card details.");
          return;
        }
      }

      if (formData.paymentMethod === "upi") {
        if (!formData.upiId) {
          alert("Enter UPI ID.");
          return;
        }
      }

      if (formData.paymentMethod === "netbanking") {
        if (!formData.bankName) {
          alert("Enter Bank Name.");
          return;
        }
      }

      // 🔥 Payment processing simulation
      setIsProcessing(true);
      setTimeout(() => {
        clearCart();
        navigate("/success"); // 🔥 Correct
      }, 2000);
    } else {
      // COD
      clearCart();
      navigate("/success"); // 🔥 Correct
    }
  };

  return (
    <div className="place-order">
      <h2>Place Your Order</h2>

      {isProcessing ? (
        <div className="payment-processing">
          <img src="/loading.gif" alt="loading" />
          <p>Processing Payment... Please wait</p>
        </div>
      ) : (
        <form className="order-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" required onChange={handleChange} />
          <input name="email" placeholder="Email Address" required onChange={handleChange} />
          <input name="address" placeholder="Address" required onChange={handleChange} />
          <input name="city" placeholder="City" required onChange={handleChange} />
          <input name="zip" placeholder="ZIP Code" required onChange={handleChange} />

          <h3>Payment Method</h3>

          <label>
            <input
              type="radio"
              name="payment"
              value="COD"
              checked={formData.payment === "COD"}
              onChange={handleChange}
            />
            Cash on Delivery
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="Online"
              checked={formData.payment === "Online"}
              onChange={handleChange}
            />
            Online Payment
          </label>

          {formData.payment === "Online" && (
            <div className="online-payment-box">
              <h4>Select Payment Option</h4>

              {/* Card */}
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  onChange={handleChange}
                />
                Debit / Credit Card
              </label>

              {formData.paymentMethod === "card" && (
                <div className="sub-inputs">
                  <input
                    name="cardNumber"
                    placeholder="Card Number"
                    onChange={handleChange}
                  />
                  <input
                    name="cardName"
                    placeholder="Cardholder Name"
                    onChange={handleChange}
                  />
                </div>
              )}

              {/* UPI */}
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  onChange={handleChange}
                />
                UPI
              </label>

              {formData.paymentMethod === "upi" && (
                <div className="sub-inputs">
                  <input name="upiId" placeholder="Enter UPI ID" onChange={handleChange} />
                </div>
              )}

              {/* Net Banking */}
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="netbanking"
                  onChange={handleChange}
                />
                Net Banking
              </label>

              {formData.paymentMethod === "netbanking" && (
                <div className="sub-inputs">
                  <input name="bankName" placeholder="Enter Bank Name" onChange={handleChange} />
                </div>
              )}
            </div>
          )}

          <button type="submit" className="order-btn">
            {formData.payment === "Online" ? "Pay & Confirm" : "Confirm Order"}
          </button>
        </form>
      )}
    </div>
  );
};

export default PlaceOrder;
