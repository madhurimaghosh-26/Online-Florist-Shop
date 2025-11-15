import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* 🌸 Address Section */}
        <div className="footer-section">
          <h3>FloraFiesta Headquarters</h3>
          <p>102 Bloom Street, 2nd Floor</p>
          <p>Kolkata, West Bengal 700091</p>
          <p>T: +91 98765 43210</p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Get Directions →
          </a>
        </div>

        {/* 🌸 Social Media Section */}
        <div className="footer-section">
          <h3>Join Our Social Community</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* 🌸 Contact Prompt Section */}
        <div className="footer-section">
          <h3>Let’s Discuss What’s Next</h3>
          <p>Have a question or want to order something special?</p>
          <a href="#contact" className="footer-link">
            Contact Us →
          </a>
        </div>
      </div>

      {/* 🌸 Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 FloraFiesta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
