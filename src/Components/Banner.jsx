import React from 'react';
import './Banner.css'; 

const Banner = () => {
  return (
    <>
      <div className="banner d-flex align-items-center justify-content-center text-center text-white">
        {/* <div className="overlay"></div> */}
        <div className="content position-relative">
          <h1 className="display-4 fw-bolder">Mitochondrial Eve Journal of Humanities Postgraduate Studies</h1>
          <p className="lead">a publication of the faculty of Humanities, imo State university, Owerri, Nigeria</p>
        </div>
      </div>
      
    </>
  );
};

export default Banner;
