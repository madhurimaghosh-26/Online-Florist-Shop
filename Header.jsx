import React from 'react';
import './Header.css';

const Header = ({ setCategory }) => {
  const handleViewFlower = () => {
    // ✅ Reset category to show all flowers
    setCategory('All');

    // ✅ Smoothly scroll to the flower section
    const flowerSection = document.getElementById('flower-display');
    if (flowerSection) {
      flowerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
      <div className="header-content">
        <h1>Order Your Favorite Flowers Here</h1>
        <p>
          Where elegance meets freshness — discover flowers that speak your heart.
        </p>
        <button className="view-flower-btn" onClick={handleViewFlower}>
          View Flower
        </button>
      </div>
      <div className="floating-petals">
        <span>🌸</span>
        <span>🌼</span>
        <span>🌷</span>
      </div>
    </div>
  );
};

export default Header;

