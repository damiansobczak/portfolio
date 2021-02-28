import React from "react";
import styled from "styled-components";
import Container from "../Layouts/Container";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/400.css";
import "@fontsource/inter/400.css";
import JumboFeature from "./JumboFeature";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Wrapper = styled.section`
  display: flex;
  background-color: var(--color-blue-700);
  border-radius: 32px;
  padding: 64px 0 0;
  height: 700px;
  margin-bottom: 100px;
  position: relative;

  @media (min-width: 1024px) {
    padding: 0;
    height: 700px;
    align-items: center;
  }
`;

const Circles = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  height: 700px;
  width: 700px;
  border-radius: 32px;
  overflow: hidden;

  @media (min-width: 1024px) {
    display: block;
  }

  :before {
    content: "";
    position: absolute;
    left: 70%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 400px;
    width: 400px;
    border-radius: var(--rounded-full);
    border: 1px solid var(--color-blue-600);
  }

  :after {
    content: "";
    position: absolute;
    left: 70%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 700px;
    width: 700px;
    border-radius: var(--rounded-full);
    border: 1px solid var(--color-blue-600);
  }
`;

const Break = styled.span`
  display: inline-block;
  height: 4px;
  width: 96px;
  border-radius: 10px;
  background-color: var(--color-blue-300);
  margin-bottom: 4px;
`;

const Subtitle = styled.span`
  margin-left: 24px;
  font-size: var(--text-md);
  position: relative;
  font-family: "Inter";
  font-weight: 400;
  color: var(--color-blue-200);
`;

const Title = styled.h4`
  font-family: "Poppins";
  font-weight: 600;
  color: #fff;
  font-size: var(--text-3xl);
  line-height: 1.2;
  margin: 36px 0;
  max-width: 700px;

  @media (min-width: 1024px) {
    font-size: var(--text-6xl);
  }
`;

const Subtext = styled.p`
  font-family: "Inter";
  font-weight: 400;
  color: var(--color-blue-200);
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    align-items: center;
  }
`;

const Image = styled(Img)`
  position: absolute !important;
  bottom: -50px;
  width: 100%;

  @media (min-width: 768px) {
    bottom: -80px;
    right: 10%;
    width: 600px;
  }
`;

const Jumbo = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file: file(relativePath: { eq: "jumbo.png" }) {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={(data) => (
        <Wrapper>
          <Circles />
          <Container>
            <Grid>
              <div>
                <Break />
                <Subtitle>Who am I?</Subtitle>
                <Title>
                  Hello, I’m Damian! Frontend Developer & UI Designer
                </Title>
                <Subtext>
                  You can know me better by reviewing this page Lorem ipsum
                  dolor sit amet
                </Subtext>
              </div>
              <JumboFeature />
            </Grid>
          </Container>
          <Image fluid={data.file.childImageSharp.fluid} />
        </Wrapper>
      )}
    />
  );
};

export default Jumbo;
