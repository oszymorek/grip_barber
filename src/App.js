import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import Header from "./components/Header";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Financing from "./components/Financing";

const App = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <OurServices />
      <Team />
      <Gallery />
      <Contact />
      <Financing />
      <Footer />
    </>
  );
};

export default App;
