import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Import the image
import editorialh from "../assets/img/editorialh.jpg";

const EditorialHero = () => {
  return (
    <section className="about-hero d-flex align-items-center justify-content-center text-center text-white">
      <div className="w-100">
        <h1 className="fw-bold mb-3">Editorial</h1>
        <p className="lead">
          Editors and reviewers shaping the direction, quality, and <br /> impact
          of every published work.
        </p>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .about-hero {
            background: url(${editorialh}) center/cover no-repeat;
            min-height: 400px;
            width: 100vw;
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

export default EditorialHero;