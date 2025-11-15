import React from "react";
import "./MobileApp.css";
import { assets } from "../../assets/assets";

const MobileApp = () => {
  return (
    <div className="mobile-app-page">
      <h1>📱 Get the FloraFiesta App</h1>
      <p>
        Enjoy the beauty of flowers at your fingertips. Order blooms, track
        deliveries, and get exclusive offers — all from our mobile app!
      </p>

      <div className="app-buttons">
        <button className="app-btn android">Download for Android</button>
        <button className="app-btn ios">Download for iOS</button>
      </div>

      <div className="app-preview">
        <img
          src={assets.Header}
          alt="FloraFiesta App Preview"
          className="app-image"
        />
      </div>
    </div>
  );
};

export default MobileApp;
