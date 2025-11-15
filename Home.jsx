import React, { useState, useContext } from "react";
import "./Home.css";

import Header from "../../components/Header/Header";
import ExploreFlower from "../../components/ExploreFlower/ExploreFlower";
import FlowerDisplay from "../../components/FlowerDisplay/FlowerDisplay";
import Footer from "../../components/Footer/Footer";

import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [category, setCategory] = useState("All");
  const { searchTerm } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon 🌸");
    e.target.reset();
  };

  return (
    <div className="home-page">

      {/* 🌸 Header Banner */}
      <Header setCategory={setCategory} />

      {/* 🌺 Customize Bouquet Button */}
      <div className="customize-section">
        <button 
          className="customize-btn"
          onClick={() => navigate("/custom-bouquet")}
        >
          ✨ Customize Your Bouquet
        </button>
      </div>

      {/* 🌼 Category Section */}
      <section className="explore-section">
        <ExploreFlower 
          category={category} 
          setCategory={setCategory} 
        />
      </section>

      {/* 🌺 Flowers Display — ONLY category sent */}
      <section className="flowers-section">
        <FlowerDisplay category={category} />
      </section>

      {/* 📞 Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! 🌷 Drop your message below.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea 
            name="message" 
            placeholder="Your Message..." 
            rows="5" 
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
