import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-dark py-4 mt-5 w-100">
      {/* use container-fluid for full width */}
      <div className="container-fluid">
        <div className="row text-center text-md-start px-3">
          {/* Brand / Logo */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-uppercase">UGTF</h5>
            <p className="small">
              Academic Journal Article Publication web app demo
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="/archives" className="text-dark text-decoration-none">Archives</a></li>
              <li><a href="/about" className="text-dark text-decoration-none">About</a></li>
              <li><a href="/editorial" className="text-dark text-decoration-none">Editorial</a></li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Contact</h6>
            <p className="small mb-1">Email: info@ugtf.org</p>
            <p className="small mb-1">Phone: +1 (248) 376-4669</p>
            <div>
              <a href="#" className="text-dark me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-dark me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-dark"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-dark" />

        <div className="text-center small">
          © {new Date().getFullYear()} Urhobo Global Tech Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;