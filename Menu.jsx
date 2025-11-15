import React from "react";
import FlowerDisplay from "../../components/FlowerDisplay/FlowerDisplay";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-page">
      <h1>🌸 Our Flower Menu 🌸</h1>
      <p>Browse our beautiful collection of fresh flowers and arrangements.</p>

      <div className="menu-content">
        <FlowerDisplay category="All" /> {/* ✅ Show all flowers */}
      </div>
    </div>
  );
};

export default Menu;
