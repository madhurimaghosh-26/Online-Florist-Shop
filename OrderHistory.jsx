import React, { useContext, useEffect, useState } from "react";
import "./OrderHistory.css";
import { OrderContext } from "../../context/OrderContext";

const OrderHistory = () => {
  const { orders } = useContext(OrderContext);
  const [trackedOrders, setTrackedOrders] = useState([]);

  useEffect(() => {
    const initialized = orders.map((order) => ({
      ...order,
      progress: Math.floor(Math.random() * 4),
    }));
    setTrackedOrders(initialized);

    const interval = setInterval(() => {
      setTrackedOrders((prev) =>
        prev.map((order) =>
          order.progress < 3
            ? { ...order, progress: order.progress + 1 }
            : order
        )
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [orders]);

  const getStatusLabel = (progress) =>
    ["Placed", "Packed", "Shipped", "Delivered"][progress] || "Placed";

  return (
    <div className="order-history">
      <h2>My Orders</h2>
      {trackedOrders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        trackedOrders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <h3>Order #{order.id}</h3>
              <p>{order.date}</p>
            </div>
            <p>
              <b>Payment:</b> {order.payment}
            </p>
            <p>
              <b>Total:</b> ₹{order.total}
            </p>

            <ul>
              {order.items.map((item, i) => (
                <li key={i}>
                  {item.name} × {item.quantity || 1}
                </li>
              ))}
            </ul>

            <div className="progress-container">
              <div className="progress-bar">
                {[0, 1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`progress-step ${
                      order.progress >= step ? "active" : ""
                    }`}
                  >
                    <span className="circle">{step + 1}</span>
                    <p>{getStatusLabel(step)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
