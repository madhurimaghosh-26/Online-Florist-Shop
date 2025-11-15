import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Chatbot from "./components/Chatbot/Chatbot";

import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import MobileApp from "./pages/MobileApp/MobileApp";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";
import CustomizeBouquet from "./pages/CustomizeBouquet/CustomizeBouquet";
import Feedback from "./pages/Feedback/Feedback";

const App = () => {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <Navbar />

      {/* Global Chatbot */}
      <Chatbot />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/mobile-app" element={<MobileApp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/success" element={<OrderSuccess />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/custom-bouquet" element={<CustomizeBouquet />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
};

export default App;
