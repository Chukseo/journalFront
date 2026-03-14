import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNavbar(true); // show when back at top
      } else {
        setShowNavbar(false); // hide when scrolling anywhere else
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
          .navbar-hidden {
            transform: translateY(-100%);
            transition: transform 0.3s ease-in-out;
          }
          .navbar-visible {
            transform: translateY(0);
            transition: transform 0.3s ease-in-out;
          }
          .nav-link {
            font-weight: bold;
            color: #000 !important;
            transition: color 0.3s ease;
            margin: 0 12px;
          }
          .nav-link:hover {
            color: #007bff !important;
          }
          .navbar-toggler {
            border: none !important;
            box-shadow: none !important;
          }
          .btn-primary {
            background-color: #007bff !important;
            border: none !important;
            font-weight: bold;
          }
        `}
      </style>

      <nav
        className={`navbar navbar-expand-lg fixed-top bg-transparent ${
          showNavbar ? "navbar-visible" : "navbar-hidden"
        }`}
      >
        <div className="container">
          <NavLink className="navbar-brand fw-bold text-uppercase text-dark" to="/">
            UGTF
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav fw-bold">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/archive">Archives</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/editorial">Editorial</NavLink>
              </li>
            </ul>
          </div>
          <button className="btn btn-primary rounded-pill px-4 text-white">
            Make Submission
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;