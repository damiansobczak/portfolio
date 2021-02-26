import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Container from "../Layouts/Container";

const Image = styled(Img)`
  max-width: var(--xl);
  margin: -100px auto 0;

  @media (min-width: 1024px) {
    margin: -248px auto 0;
  }
`;

const AboutImage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file: file(relativePath: { eq: "about-image.png" }) {
            childImageSharp {
              fluid(maxWidth: 1100, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={(data) => (
        <Container>
          <Image fluid={data.file.childImageSharp.fluid} />
        </Container>
      )}
    />
  );
};

export default AboutImage;
