import * as React from "react";
import "../styles/global.css";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "gatsby-image";

//queries
export const query = graphql`
  query($slug: String) {
    datoCmsPortfolio(slug: { eq: $slug }) {
      title
      description
      tags
      media {
        fluid(
          maxWidth: 600
          forceBlurhash: true
          imgixParams: { fm: "webp", auto: "compress" }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
      demo
      behance
      dribbble
      seoMetaTags {
        tags
      }
    }
  }
`;

// styles

// markup
const Portfolio = ({ data }) => {
  return (
    <>
      <Navbar />
      {data.datoCmsPortfolio.title}
      {data.datoCmsPortfolio.description}
      {data.datoCmsPortfolio.description}
      <Image fluid={data.datoCmsPortfolio.media.fluid}></Image>
      <Footer />
    </>
  );
};

export default Portfolio;
