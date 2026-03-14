import React from "react";
import EditorialHero from "../Components/EditorialHero";
import Edit from "../Components/FullEdit1";
import CenteredImage from "../Components/CenteredImage";
import Footer from "../Components/Footer";

export default function Editorial() {
  return (
    <>
      <EditorialHero />
      <CenteredImage />
      <Edit />
      <Footer />
    </>
  );
}