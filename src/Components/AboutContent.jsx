import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Import the image
import abtcont from "../assets/img/abtcont.jpg";

const AboutContent = () => {
  return (
    <section className="py-5 bg-light w-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left side: image */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={abtcont}
              alt="Research and study"
              className="img-fluid rounded shadow content-img"
            />
          </div>

          {/* Right side: text */}
          <div className="col-md-6 d-flex flex-column justify-content-center px-5">
            <h5 className="text-uppercase fw-bold text-primary mb-3">
              Get to Know About Us
            </h5>
            <p className="mb-3 fw-bold fs-4">
              We are dedicated to advancing knowledge through rigorous research.
            </p>
            <p className="text-muted mb-4">
              We provide a platform for researchers, scholars, and practitioners to present findings
              that are methodologically sound, relevant, and impactful. All submissions undergo a
              double-blind peer-review process to ensure credibility, objectivity, and integrity.
            </p>
            <p className="text-muted mb-4">
              UGTF Journals welcomes theoretical, empirical, and interdisciplinary studies that
              contribute meaningfully to academic discourse and practical understanding.
            </p>
            <a href="/submission" className="btn btn-primary rounded-pill px-4">
              Make a Submission
            </a>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .content-img {
            max-height: 400px;   /* keeps image from being too tall */
            width: 100%;         /* maintains aspect ratio */
            object-fit: cover;   /* crops nicely if needed */
          }
        `}
      </style>
    </section>
  );
};

export default AboutContent;