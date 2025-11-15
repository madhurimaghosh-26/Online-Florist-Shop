import React, { useContext } from "react";
import "./FlowerDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import { SearchContext } from "../../context/SearchContext";
import FlowerItem from "../FlowerItem/FlowerItem";

const FlowerDisplay = ({ category }) => {
  const { flower_list } = useContext(StoreContext);
  const { searchTerm } = useContext(SearchContext);

  const search = searchTerm.toLowerCase().trim();

  const filteredFlowers = flower_list
    .filter((item) => item._id)
    .filter((item) => category === "All" || item.category === category)
    .filter((item) => {
      if (!search) return true;

      const name = (item.name || "").toLowerCase();
      const desc = (item.description || "").toLowerCase();
      const cat = (item.category || "").toLowerCase();
      const tags = (item.flowers || []).join(" ").toLowerCase();

      return (
        name.includes(search) ||
        desc.includes(search) ||
        cat.includes(search) ||
        tags.includes(search)
      );
    });

  return (
    <div className="flower-display" id="flower-display">
      <h2>Top Flowers Near You</h2>

      <div className="flower-display-list">
        {filteredFlowers.length > 0 ? (
          filteredFlowers.map((item) => (
            <FlowerItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p>🌸No flowers found for “{searchTerm}”.</p>
        )}
      </div>
    </div>
  );
};

export default FlowerDisplay;


