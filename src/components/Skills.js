import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Container from "../Layouts/Container";
import "@fontsource/poppins/600.css";
import "@fontsource/inter/400.css";

//styles
const Wrapper = styled.section`
  margin: 124px 0;
  width: 100%;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  flex: 1;
  max-width: 500px;
  margin-top: 32px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Image = styled(Img)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  max-width: 780px;
`;

const Subtitle = styled.span`
  font-family: "Inter";
  font-weight: 400;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-gray-400);
  font-size: var(--text-xs);
`;

const Title = styled.h5`
  font-family: "Poppins";
  font-weight: 600;
  margin: 8px 0;
  color: var(--text-primary);
  font-size: var(--text-2xl);
`;

const Text = styled.p`
  font-family: "Inter";
  font-weight: 400;
  line-height: 1.8;
  color: var(--text-secondary);
  margin: 0;
`;

const Break = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-gray-100);
  margin: 48px 0;
`;

//markup
const Skills = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file: file(relativePath: { eq: "skills.png" }) {
            childImageSharp {
              fluid(maxWidth: 780, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={(data) => (
        <Wrapper>
          <Container>
            <Grid>
              <Image fluid={data.file.childImageSharp.fluid} />
              <Column>
                <Subtitle>DEEP FOCUS & MULTITASKING</Subtitle>
                <Title>Increase Productivity</Title>
                <Text>
                  We’re a growing family of 382,081 designers and makers from
                  around the world
                </Text>
                <Break />
                <Subtitle>DEEP FOCUS & MULTITASKING</Subtitle>
                <Title>Increase Productivity</Title>
                <Text>
                  We’re a growing family of 382,081 designers and makers from
                  around the world
                </Text>
              </Column>
            </Grid>
          </Container>
        </Wrapper>
      )}
    />
  );
};

export default Skills;
