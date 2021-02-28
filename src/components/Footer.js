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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 200px);
  background-color: var(--color-gray-100);
  border-radius: 1.75rem;

  @media (min-width: 768px) {
    border-radius: 2.25rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 280px 280px;
  }
`;

const Image = styled(Img)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  max-width: 480px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  padding: 0 32px;
  grid-column-end: span 2;

  &:last-child {
    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (min-width: 768px) {
    justify-content: center;
    grid-column-end: span 1;
    border-right: 1px solid var(--color-gray-200);
  }
`;

const ColumnFull = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column-end: span 2;
  padding: 0 32px;
  text-align: left;
  border-bottom: 1px solid var(--color-gray-200);

  @media (min-width: 768px) {
    text-align: center;
  }
`;

const ColumnInner = styled.div`
  @media (min-width: 768px) {
    max-width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h5`
  font-family: "Poppins";
  font-weight: 600;
  margin: 8px 0;
  max-width: 500px;
  color: var(--text-primary);
  font-size: var(--text-2xl);
`;

const ThinerTitle = styled.h5`
  font-family: "Poppins";
  font-weight: 600;
  margin: 8px 0;
  max-width: 300px;
  color: var(--color-gray-400);
  font-size: var(--text-2xl);
`;

const SocialItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 72px;

  > * + * {
    margin-left: 54px;
  }
`;

const SocialItem = styled.button`
  fill: var(--color-gray-400);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

//markup
const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file: file(relativePath: { eq: "footer.png" }) {
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
              <ColumnFull>
                <Title>
                  Hello, I’m Damian! Frontend Developer & UI Designer
                </Title>
              </ColumnFull>
              <Column>
                <ColumnInner>
                  <ThinerTitle>Let’s talk about your next project</ThinerTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="48px"
                    height="48px"
                    stroke="var(--color-gray-400)"
                    style={{ marginLeft: "auto" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </ColumnInner>
              </Column>
              <Column>
                <Image fluid={data.file.childImageSharp.fluid} />
              </Column>
            </Grid>
          </Container>
          <Container>
            <SocialItems>
              <SocialItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.222,20H17.778A2.222,2.222,0,0,0,20,17.778V2.222A2.222,2.222,0,0,0,17.778,0H2.222A2.222,2.222,0,0,0,0,2.222V17.778A2.222,2.222,0,0,0,2.222,20Z" />
                  <path
                    d="M24.444,24.444H21.477V19.389c0-1.386-.527-2.16-1.624-2.16-1.193,0-1.817.806-1.817,2.16v5.055h-2.86v-9.63h2.86v1.3a3.36,3.36,0,0,1,2.9-1.591c2.043,0,3.5,1.247,3.5,3.827ZM11.764,13.554a1.777,1.777,0,1,1,1.763-1.777A1.77,1.77,0,0,1,11.764,13.554ZM10.287,24.444h2.982v-9.63H10.287Z"
                    transform="translate(-7.222 -7.222)"
                    fill="#fff"
                  />
                </svg>
              </SocialItem>
              <SocialItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.388"
                  height="16.5"
                  viewBox="0 0 25.388 16.5"
                >
                  <path
                    d="M60.476,7324.687h6.458v-1.849H60.476Zm3.183,3.715a2.512,2.512,0,0,0-2.64,2.541h5.168c-.35-1.957-1.22-2.541-2.528-2.541Zm.2,7.648a2.6,2.6,0,0,0,2.505-1.548h2.8a5.141,5.141,0,0,1-5.416,4c-3.784,0-5.907-2.691-5.907-6.262,0-8.41,12.134-8.712,11.525.785H61.019c.081,1.928.877,3.026,2.842,3.026Zm-12.588-.37c1.527,0,2.6-.587,2.6-2.172,0-1.644-.944-2.357-2.53-2.357H47.513v4.529Zm-.2-7c1.271,0,2.148-.591,2.148-1.965,0-1.447-1.02-1.895-2.415-1.895h-3.29v3.859Zm.448-6.679c3.009,0,5.1.994,5.1,4.09a3.527,3.527,0,0,1-2.17,3.443,4,4,0,0,1,2.932,4.184c0,3.237-2.568,4.783-5.639,4.783H44V7322Z"
                    transform="translate(-44 -7322)"
                  />
                </svg>
              </SocialItem>
              <SocialItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.072"
                  height="21.528"
                  viewBox="0 0 22.072 21.528"
                >
                  <path
                    d="M11.036,0A11.037,11.037,0,0,0,7.547,21.509c.552.1.754-.239.754-.531,0-.263-.01-1.133-.015-2.055-3.07.668-3.718-1.3-3.718-1.3a2.922,2.922,0,0,0-1.225-1.615c-1-.685.075-.671.075-.671A2.32,2.32,0,0,1,5.11,16.472a2.349,2.349,0,0,0,3.212.917,2.35,2.35,0,0,1,.7-1.476c-2.451-.279-5.028-1.225-5.028-5.454A4.271,4.271,0,0,1,5.131,7.5a3.966,3.966,0,0,1,.107-2.921s.927-.3,3.036,1.131a10.468,10.468,0,0,1,5.527,0c2.106-1.428,3.032-1.131,3.032-1.131A3.96,3.96,0,0,1,16.941,7.5a4.263,4.263,0,0,1,1.136,2.962c0,4.239-2.582,5.172-5.039,5.445a2.638,2.638,0,0,1,.749,2.044c0,1.477-.013,2.665-.013,3.029,0,.294.2.638.758.529A11.038,11.038,0,0,0,11.036,0Zm-6.9,15.721c-.024.055-.111.071-.189.034s-.125-.111-.1-.166.11-.072.19-.034S4.161,15.666,4.133,15.721Zm.543.484c-.053.049-.156.026-.225-.051a.169.169,0,0,1-.032-.229c.054-.049.154-.026.226.051S4.731,16.156,4.676,16.206Zm.372.62c-.068.047-.178,0-.247-.1s-.068-.216,0-.263.177,0,.247.093S5.118,16.778,5.049,16.826Zm.63.718c-.06.067-.189.049-.284-.042a.212.212,0,0,1-.063-.282c.061-.067.191-.048.286.042S5.743,17.477,5.679,17.543Zm.814.242c-.027.086-.151.126-.276.089s-.207-.139-.181-.226.151-.128.277-.089S6.519,17.7,6.493,17.786Zm.926.1c0,.091-.1.166-.234.168s-.239-.071-.24-.16.1-.167.236-.169S7.419,17.8,7.419,17.888Zm.91-.035c.016.089-.075.18-.206.2s-.247-.031-.263-.12.077-.182.2-.206S8.312,17.763,8.329,17.854Z"
                    fill="var(--color-gray-400)"
                  />
                </svg>
              </SocialItem>
              <SocialItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="var(--color-gray-400)"
                >
                  <g transform="translate(-1 -1)">
                    <circle
                      cx="10"
                      cy="10"
                      r="10"
                      transform="translate(2 2)"
                      fill="none"
                      stroke="var(--color-gray-400)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M8.56,2.75c4.37,6.03,6.02,9.42,8.03,17.72M19.13,5.09c-3.72,4.35-8.94,5.66-16.88,5.85m19.5,1.9a15.406,15.406,0,0,0-8.94,0c-2.58.92-5.01,2.86-7.44,6.32"
                      fill="none"
                      stroke="var(--color-gray-400)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </SocialItem>
            </SocialItems>
          </Container>
        </Wrapper>
      )}
    />
  );
};

export default Footer;
