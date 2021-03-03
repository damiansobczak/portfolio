import React from "react";
import styled from "styled-components";
import Container from "../Layouts/Container";
import "@fontsource/poppins/600.css";
import "@fontsource/inter/400.css";
import { StaticQuery, graphql, Link } from "gatsby";
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
  border: 1px solid var(--color-gray-50);
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlogTitle = styled.h3`
  color: var(--text-primary);
  font-weight: 600;
  font-family: "Poppins";
  text-align: center;
  font-size: var(--text-lg);
  margin: 0;
`;

const BlogText = styled.p`
  color: var(--text-secondary);
  font-weight: 400;
  font-family: "Inter";
  text-align: center;
  font-size: var(--text-sm);
  line-height: 1.6;
`;

const Navigate = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins";
  font-weight: 600;
  color: var(--text-primary);
  padding: 8px 0;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

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
        {
          allDatoCmsPortfolio {
            edges {
              node {
                id
                slug
                title
                description
                media {
                  fluid(
                    maxWidth: 400
                    forceBlurhash: true
                    imgixParams: { fm: "webp", auto: "compress" }
                  ) {
                    ...GatsbyDatoCmsFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allDatoCmsPortfolio: { edges } }) => (
        <Container>
          <Line />
          <Title>Selected Work</Title>
          <Grid>
            {edges.map(({ node: { id, media, title, description, slug } }) => (
              <Article key={id}>
                <Image fluid={media.fluid} />
                <BlogTitle>Portfolio Website</BlogTitle>
                <BlogText>
                  Suspendisse quis erat purus. Donec sit amet mi id odio rhoncus
                  volutpat ut ac erat.
                </BlogText>
                <Navigate to={`/portfolio/${slug}`}>
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
                </Navigate>
              </Article>
            ))}
          </Grid>
        </Container>
      )}
    />
  );
};

export default SelectedWork;
