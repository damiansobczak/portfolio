import * as React from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import AboutImage from "../components/AboutImage";

// styles

// markup
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <AboutImage />
    </>
  );
};

export default IndexPage;
