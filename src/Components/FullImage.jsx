import React from "react";
import "./FullImage.css";
import vimiImage from "../assets/img/vimiabt.jpg"; // adjust path if needed

const FullImage = () => {
  return (
    <div className="image-container">
      <img src={vimiImage} alt="Visual" className="responsive-image" />
    </div>
  );
};

export default FullImage;