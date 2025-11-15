import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-page">

      <h1 className="cart-title">Your Shopping Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty. Add some flowers 🌸</p>
      ) : (
        <div className="cart-container">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-img" />

              <div className="cart-details">
                <h2>{item.name}</h2>
                <p className="desc">{item.description}</p>

                <div className="qty-price">
                  <p>Quantity: {item.quantity || 1}</p>
                  <p className="price">₹{item.price}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL SECTION */}
          <div className="cart-total-box">
            <h2>Total Amount</h2>
            <p className="total-price">₹{total.toFixed(2)}</p>

            <button
              className="placeorder-btn"
              onClick={() => navigate("/order")}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
