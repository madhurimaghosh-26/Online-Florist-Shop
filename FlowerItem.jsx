import React, { useState, useContext } from 'react';
import './FlowerItem.css';
import { assets } from '../../assets/assets';
import { CartContext } from '../../context/CartContext'; // ✅ import CartContext

const FlowerItem = ({ id, name, price, description, image, rating }) => {
  const [itemCount, setItemCount] = useState(0);
  const { addToCart, removeFromCart } = useContext(CartContext); // ✅ access context

  const handleAdd = () => {
    const flower = { id, name, price, description, image, rating };
    addToCart(flower); // ✅ add to global cart
    setItemCount((prev) => prev + 1);
  };

  const handleRemove = () => {
    removeFromCart(id); // ✅ remove from global cart
    setItemCount((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className='flower-item'>
      <div className="flower-item-img-container">
        <img className='flower-item-image' src={image} alt={name} />

        {/* If no item added yet → show + icon */}
        {!itemCount ? (
          <img
            className='add'
            onClick={handleAdd}
            src={assets.add_icon_white}
            alt="add"
          />
        ) : (
          /* Show counter box when item added */
          <div className='flower-item-counter'>
            <img
              onClick={handleRemove}
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p>{itemCount}</p>
            <img
              onClick={handleAdd}
              src={assets.add_icon_green}
              alt="add"
            />
          </div>
        )}
      </div>

      <div className="flower-item-info">
        <div className="flower-item-name-rating">
          <p>{name}</p>
          <p className="flower-item-rating">{'⭐'.repeat(rating)}</p>
        </div>
        <p className="flower-item-desc">{description}</p>
        <p className="flower-item-price">₹{price}</p>
      </div>
    </div>
  );
};

export default FlowerItem;
