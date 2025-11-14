import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";
import AboutJournal from "../Components/AboutJournal";

export default function Home() {
  return (
    <>
    <Banner />
    <AboutJournal /> 
    <Cards /> 
    <Footer /> 
    </> 
  );
}
