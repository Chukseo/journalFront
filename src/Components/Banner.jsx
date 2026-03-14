import React from "react";
import "./Banner.css";
import heroImage from "../assets/img/hero1.jpg"; // rename your uploaded image path accordingly

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <img src={heroImage} alt="UGTF Academic Journals" className="hero-image" />
      <div className="hero-content">
        <h1 className="hero-title"></h1>
        <p className="hero-subtitle">
          
        </p>
        {/* <button className="hero-btn">Make a Submission</button> */}
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number"></span>
            <span className="stat-label"></span>
          </div>
          <div className="stat">
            <span className="stat-number"></span>
            <span className="stat-label"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;