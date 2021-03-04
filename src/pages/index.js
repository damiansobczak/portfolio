import * as React from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import AboutImage from "../components/AboutImage";
import SelectedWork from "../components/SelectedWork";
import Jumbo from "../components/Jumbo";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";

// markup
const IndexPage = () => {
  return (
    <>
      <Navbar light={false} />
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
