import React, { useState, useContext } from "react";
import "./CustomizeBouquet.css";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const flowerOptions = [
  { name: "Rose", price: 20 },
  { name: "Tulip", price: 15 },
  { name: "Lily", price: 25 },
  { name: "Orchid", price: 30 },
  { name: "Sunflower", price: 18 },
];

const styles = [
  "Wrapped Bouquet",
  "Basket Arrangement",
  "Glass Vase",
  "Heart-Shape Bouquet",
  "Luxury Premium Box"
];

const addons = [
  { name: "Teddy Bear", price: 150 },
  { name: "Chocolate Box", price: 120 },
  { name: "Greeting Card", price: 50 },
  { name: "Fancy Ribbon", price: 40 },
];

const CustomizeBouquet = () => {
  const [selectedFlowers, setSelectedFlowers] = useState({});
  const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [message, setMessage] = useState("");

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleFlowerQuantity = (flower, quantity) => {
    setSelectedFlowers({
      ...selectedFlowers,
      [flower]: Number(quantity),
    });
  };

  const toggleAddon = (addon) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== addon));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const calculatePrice = () => {
    let total = 0;

    flowerOptions.forEach((f) => {
      total += (selectedFlowers[f.name] || 0) * f.price;
    });

    total += 200; // Base style cost

    addons.forEach((a) => {
      if (selectedAddons.includes(a.name)) total += a.price;
    });

    return total;
  };

  const handleAddToCart = () => {
    const item = {
      id: "custom-" + Date.now(),
      name: "Custom Bouquet",
      image: "/custom.png",
      description: "A personalized bouquet designed by you!",
      flowers: selectedFlowers,
      style: selectedStyle,
      addons: selectedAddons,
      message: message,
      price: calculatePrice(),
      quantity: 1,
    };

    addToCart(item);
    alert("Your custom bouquet has been added to the cart! 🌸");
    navigate("/cart");
  };

  return (
    <div className="custom-container">
      <h1>🌸 Customize Your Bouquet</h1>
      <p>Choose flowers, style, add-ons & create your perfect gift!</p>

      {/* Flowers */}
      <div className="section">
        <h2>Choose Flowers</h2>
        {flowerOptions.map((f) => (
          <div className="flower-row" key={f.name}>
            <label>{f.name} (₹{f.price} each)</label>
            <input
              type="number"
              min="0"
              placeholder="0"
              onChange={(e) => handleFlowerQuantity(f.name, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Style */}
      <div className="section">
        <h2>Choose Bouquet Style</h2>
        <select value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)}>
          {styles.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Addons */}
      <div className="section">
        <h2>Add-ons</h2>
        {addons.map((a) => (
          <label className="addon" key={a.name}>
            <input type="checkbox" onChange={() => toggleAddon(a.name)} />
            {a.name} (₹{a.price})
          </label>
        ))}
      </div>

      {/* Message */}
      <div className="section">
        <h2>Message on the Card</h2>
        <textarea
          placeholder="Write your message..."
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <h2 className="price">Total Price: ₹{calculatePrice()}</h2>

      <button className="add-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default CustomizeBouquet;
