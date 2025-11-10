import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5 w-100">
      {/* use container-fluid for full width */}
      <div className="container-fluid">
        <div className="row text-center text-md-start px-3">
          {/* Brand / Logo */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-uppercase">MEHJPS</h5>
            <p className="small">
              Publishing excellence in journals, issues, and articles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/archives" className="text-light text-decoration-none">Archives</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/editorial" className="text-light text-decoration-none">Editorial</a></li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Contact</h6>
            <p className="small mb-1">Email: info@mejhpgs.com.ng</p>
            <p className="small mb-1">Phone: +234-XXX-XXX-XXXX</p>
            <div>
              <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center small">
          © {new Date().getFullYear()} MEHJPS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;