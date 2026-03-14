import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutSection = () => {
  return (
    <section className="py-5 bg-light about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side: overlapping images */}
          <div className="col-md-6 mb-4 mb-md-0 position-relative">
            <div className="image-stack">
              <img
                src="/src/assets/img/abt1.jpg"
                alt="Collaborative environment"
                className="img-fluid rounded shadow main-img"
              />
              <img
                src="/src/assets/img/abt2.jpg"
                alt="Reading in library"
                className="img-fluid rounded shadow overlap-img"
              />
            </div>
          </div>

          {/* Right side: text content */}
          <div className="col-md-6">
            <h5 className="text-uppercase fw-bold text-primary">
              Get to Know About Us
            </h5>
            <h2 className="fw-bold mb-3">
              Advancing Knowledge, One Publication at a Time
            </h2>
            <p className="text-muted mb-4">
              We provide a trusted space for researchers, scholars, and thinkers
              to share work that moves knowledge forward worldwide.
            </p>

            <ul className="list-unstyled mb-4">
              <li className="mb-2">✔ Research Publication & Management</li>
              <li className="mb-2">✔ Peer Review & Editorial Process</li>
              <li className="mb-2">✔ Global Access & Indexing</li>
            </ul>

            <a href="/about" className="btn btn-primary rounded-pill px-4">
              About More
            </a>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .about-section {
            margin-bottom: 150px; /* extra space below the section */
          }
          .image-stack {
            position: relative;
            width: 100%;
          }
          .main-img {
            width: 100%;
            height: 350px; /* landscape style */
            object-fit: cover;
            display: block;
          }
          .overlap-img {
            position: absolute;
            bottom: -120px; /* overlap amount */
            left: 230px;
            width: 60%;
            border: 4px solid #fff;
            object-fit: cover;
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;