import React from "react";
import "./CenteredImage.css";
import sampleImage from "../assets/img/editorial3.jpg"; // replace with your actual image path

const CenteredImage = () => {
  return (
    <div className="centered-container">
      <img src={sampleImage} alt="Centered visual" className="centered-image" />
    </div>
  );
};

export default CenteredImage;