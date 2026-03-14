import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/AboutHero";
import AboutContent from "../Components/AboutContent";
import MissionVision from "../Components/MissionVision";
import Footer from "../Components/Footer";
import FullImage from "../Components/FullImage";

export default function About() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutContent />
      <FullImage />
      {/* <MissionVision /> */}
      <Footer />
    </>
  );
}
