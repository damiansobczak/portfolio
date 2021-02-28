import * as React from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import AboutImage from "../components/AboutImage";
import SelectedWork from "../components/SelectedWork";
import Jumbo from "../components/Jumbo";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

// styles

// markup
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <AboutImage />
      <SelectedWork />
      <Jumbo />
      <Skills />
      <Footer />
    </>
  );
};

export default IndexPage;
