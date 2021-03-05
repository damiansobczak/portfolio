import * as React from "react";
import "../styles/global.css";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "gatsby-image";
import Container from "../Layouts/Container";
import Breadcrumbs from "../components/Breadcrumbs";
import "@fontsource/poppins/500.css";
import "@fontsource/inter/400.css";

//queries
export const query = graphql`
  query($slug: String) {
    datoCmsPortfolio(slug: { eq: $slug }) {
      title
      description
      tags
      media {
        fluid(
          maxWidth: 1000
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
const Title = styled.h1`
  font-family: "Poppins";
  font-weight: 600;
  color: var(--text-primary);
`;

const Content = styled.section`
  text-align: center;
  max-width: var(--w-prose);
  margin: 0 auto;
`;

const Text = styled.p`
  font-family: "Inter";
  font-weight: 400;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 16px 0 0;
  font-family: "Inter";
  font-weight: 400;

  & > * + * {
    margin-left: 16px;
  }
`;

const TagsItem = styled.li`
  border-radius: var(--rounded-full);
  background-color: var(--color-gray-100);
  padding: 8px 16px;
  font-size: var(--text-sm);
  color: var(--color-gray-900);
  margin-bottom: 16px;
`;

const SocialItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

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

// markup
const Portfolio = ({ data }) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: `en`,
        }}
        title={data.datoCmsPortfolio.title}
        meta={[
          {
            name: `description`,
            content: data.datoCmsPortfolio.description,
          },
          {
            property: `og:title`,
            content: data.datoCmsPortfolio.title,
          },
          {
            property: `og:description`,
            content: data.datoCmsPortfolio.description,
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
            content: "Damian Sobczak",
          },
          {
            name: `twitter:title`,
            content: data.datoCmsPortfolio.title,
          },
          {
            name: `twitter:description`,
            content: data.datoCmsPortfolio.description,
          },
        ]}
      />
      <Navbar light={true} />
      <Breadcrumbs item={data.datoCmsPortfolio.title} />
      <Container>
        <Content>
          <Title>{data.datoCmsPortfolio.title}</Title>
          <Text>{data.datoCmsPortfolio.description}</Text>
          <Tags>
            {data.datoCmsPortfolio.tags?.split(",").map((tag, index) => (
              <TagsItem key={index}>#{tag}</TagsItem>
            ))}
          </Tags>
          <SocialItems>
            {data.datoCmsPortfolio.behance && (
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
            )}
            {data.datoCmsPortfolio.github && (
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
            )}
            {data.datoCmsPortfolio.demo && (
              <SocialItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  width={22}
                  height={22}
                  stroke="var(--color-gray-400)"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </SocialItem>
            )}
          </SocialItems>
        </Content>
        <Image fluid={data.datoCmsPortfolio.media.fluid}></Image>
      </Container>
      <Footer />
    </>
  );
};

export default Portfolio;
