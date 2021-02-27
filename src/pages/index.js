import * as React from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import AboutImage from "../components/AboutImage";
import SelectedWork from "../components/SelectedWork";

// styles

// markup
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <AboutImage />
      <SelectedWork />
    </>
  );
};

export default IndexPage;
