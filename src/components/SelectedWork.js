import React from "react";
import styled from "styled-components";
import Container from "../Layouts/Container";
import "@fontsource/poppins/600.css";
import "@fontsource/inter/400.css";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

//styles
const Line = styled.div`
  width: 100px;
  height: 4px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: var(--color-blue-600);
  margin-top: 80px;
`;

const Title = styled.h3`
  color: var(--text-primary);
  font-weight: 600;
  font-family: "Poppins";
  text-align: center;
  font-size: var(--text-2xl);
  margin-bottom: 56px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  grid-template-rows: auto;
  grid-gap: 36px;
  margin-bottom: 64px;
`;

const Image = styled(Img)`
  border-radius: var(--rounded-xl);
  background-color: var(--color-gray-100);
  margin-bottom: 24px;
  width: 100%;
  height: 20rem;
`;

const Article = styled.article``;

const BlogTitle = styled.h3`
  color: var(--text-primary);
  font-weight: 600;
  font-family: "Poppins";
  text-align: center;
  font-size: var(--text-lg);
  margin-bottom: 0;
`;

const BlogText = styled.p`
  color: var(--text-secondary);
  font-weight: 400;
  font-family: "Inter";
  text-align: center;
  font-size: var(--text-sm);
  line-height: 1.6;
`;

const Link = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
  font-weight: 600;
  color: var(--text-primary);
  padding: 8px 0;
  width: 100%;
  white-space: nowrap;
  cursor: pointer;

  svg {
    stroke: var(--text-primary);
    margin-left: 8px;
  }
`;

//markup
const SelectedWork = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file: file(relativePath: { eq: "blog.png" }) {
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
          <Line />
          <Title>Selected Work</Title>
          <Grid>
            <Article>
              <Image fluid={data.file.childImageSharp.fluid} />
              <BlogTitle>Portfolio Website</BlogTitle>
              <BlogText>
                Suspendisse quis erat purus. Donec sit amet mi id odio rhoncus
                volutpat ut ac erat.
              </BlogText>
              <Link>
                See Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </Article>
            <Article>
              <Image fluid={data.file.childImageSharp.fluid} />
              <BlogTitle>Portfolio Website</BlogTitle>
              <BlogText>
                Suspendisse quis erat purus. Donec sit amet mi id odio rhoncus
                volutpat ut ac erat.
              </BlogText>
              <Link>
                See Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </Article>
            <Article>
              <Image fluid={data.file.childImageSharp.fluid} />
              <BlogTitle>Portfolio Website</BlogTitle>
              <BlogText>
                Suspendisse quis erat purus. Donec sit amet mi id odio rhoncus
                volutpat ut ac erat.
              </BlogText>
              <Link>
                See Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </Article>
          </Grid>
        </Container>
      )}
    />
  );
};

export default SelectedWork;
