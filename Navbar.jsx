import React, { useState, useContext, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { SearchContext } from "../../context/SearchContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const [menu, setMenu] = useState("home");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Active menu highlight
  useEffect(() => {
    if (location.pathname === "/") setMenu("home");
    else if (location.pathname === "/menu") setMenu("menu");
    else if (location.pathname === "/mobile-app") setMenu("mobile-app");
    else if (location.pathname === "/order-history") setMenu("order-history");
    else if (location.pathname === "/contact") setMenu("contact us");
  }, [location.pathname]);

  // ✅ Logout function
  const handleLogout = () => {
    logout();
    alert("Logged out successfully!");
    navigate("/");
  };

  // ✅ Update search term live
  const handleSearch = (e) => setSearchTerm(e.target.value);

  return (
    <div className="navbar">
      {/* 🌸 Logo */}
      <img
        src={assets.logo}
        alt="FloraFiesta Logo"
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />

      {/* 🌸 Navigation Menu */}
      <ul className="navbar-menu">
        <li
          onClick={() => {
            setMenu("home");
            navigate("/");
          }}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>

        <li
          onClick={() => {
            setMenu("menu");
            navigate("/menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>

        <li
          onClick={() => {
            setMenu("mobile-app");
            navigate("/mobile-app");
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </li>

        <li
          onClick={() => {
            setMenu("order-history");
            navigate("/order-history");
          }}
          className={menu === "order-history" ? "active" : ""}
        >
          orders
        </li>

        <li
          onClick={() => {
            setMenu("contact us");
            const section = document.getElementById("contact");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            } else {
              navigate("/");
              setTimeout(() => {
                const contactSection = document.getElementById("contact");
                if (contactSection)
                  contactSection.scrollIntoView({ behavior: "smooth" });
              }, 500);
            }
          }}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>

      {/* 🌸 Right Section */}
      <div className="navbar-right">
        {/* 🔍 Search */}
        <div className="search-section">
          <img
            src={assets.search}
            alt="Search"
            className="search-icon"
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <input
              type="text"
              placeholder="Search flowers..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          )}
        </div>

        {/* 🛒 Cart */}
        <div className="navbar-search" style={{ position: "relative" }}>
          <Link to="/cart">
            <img src={assets.cart} alt="Cart" className="cart-icon" />
          </Link>
          {cartItems.length > 0 && (
            <div className="cart-count">{cartItems.length}</div>
          )}
        </div>

        {/* 🔐 Login / Logout */}
        {isLoggedIn ? (
          <button onClick={handleLogout}>logout</button>
        ) : (
          <Link to="/login">
            <button>sign in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
