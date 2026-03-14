import React from "react";
import "./MissionVision.css"; // external stylesheet

const MissionVision = () => {
  return (
    <div className="mission-vision-container">
      {/* Left Section */}
      <div className="left-section">
        <h2 className="section-title">OUR MISSION AND VISION</h2>
        <p className="section-subtitle">
          Discover The Core Principles That Guide Us
        </p>
        <div className="blue-box">
          <h3>What We Stand For</h3>
          <ul>
            <li>Academic rigor</li>
            <li>Original scholarship</li>
            <li>Global perspective</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <img
          src="/src/assets/img/vimi.jpg"
          alt="collaboration"
          className="background-image"
        />
        <div className="mission-card">
          <h3>Our Mission</h3>
          <p>
            To promote credible, impactful research and support scholarly
            dialogue that advances education, innovation, and societal
            development.
          </p>
        </div>
        <div className="mission-card">
          <h3>Our Mission</h3>
          <p>
            To promote credible, impactful research and support scholarly
            dialogue that advances education, innovation, and societal
            development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;