import React from "react";
import "./ExploreFlower.css";
import { flower_list } from "../../assets/assets";

const ExploreFlower = ({ category, setCategory }) => {
  // ✅ Get unique categories with one sample image for each
  const categoryImages = {};

  flower_list.forEach((flower) => {
    if (flower.category && flower.image && !categoryImages[flower.category]) {
      categoryImages[flower.category] = flower.image;
    }
  });

  // ✅ Convert to array
  const categories = Object.keys(categoryImages);

  return (
    <div className="explore-flower">
      <h2>Explore by Category</h2>
      <p>Browse our floral collection by type to find your favorite blooms.</p>

      <div className="flower-categories">
        {/* ✅ “All” category at start */}
        <div
          className={`category-item ${category === "All" ? "active" : ""}`}
          onClick={() => setCategory("All")}
        >
          <div className="category-circle all">All</div>
          <p>All</p>
        </div>

        {/* ✅ Show each unique category */}
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`category-item ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            <img src={categoryImages[cat]} alt={cat} />
            <p>{cat}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreFlower;
