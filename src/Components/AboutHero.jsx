import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Import the image
import abthero from "../assets/img/abthero.jpg";

const AboutHero = () => {
  return (
    <section className="about-hero d-flex align-items-center justify-content-center text-center text-white">
      <div className="w-100">
        <h1 className="fw-bold mb-3">About Journal</h1>
        <p className="lead">
          Advancing research through rigorous review, credible <br /> authorship,
          and open access.
        </p>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .about-hero {
            background: url(${abthero}) center/cover no-repeat;
            min-height: 400px;
            width: 100%;
            position: relative;
          }
          .about-hero::after {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.5); /* overlay for readability */
          }
          .about-hero > div {
            position: relative;
            z-index: 2;
          }
        `}
      </style>
    </section>
  );
};

export default AboutHero;