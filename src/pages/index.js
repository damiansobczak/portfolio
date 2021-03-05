import * as React from "react";
import "../styles/global.css";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
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

//queries
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        keywords
      }
    }
  }
`;

// markup
const IndexPage = ({
  data: {
    site: {
      siteMetadata: { title, description, author, keywords },
    },
  },
}) => {
  return (
    <>
      <Helmet
        title={title}
        meta={[
          {
            name: `keywords`,
            content: keywords,
          },
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
        ]}
      />
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
