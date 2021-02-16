import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { motion } from "framer-motion";
import Container from "../Layouts/Container";
import "@fontsource/poppins/600.css";
import "@fontsource/inter/400.css";

//styles
const Slide = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 90vh;
  width: 100%;
`;

const Background = styled(motion.div)`
  display: none;
  height: 100%;
  width: 100%;
  background: var(--color-blue-600);
  position: absolute;

  @media (min-width: 768px) {
    display: block;
  }
`;

const SlideImage = styled(motion.custom(Img))`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: calc(100vw - 24 * 2);
  margin-top: 54px;
  z-index: 10;

  @media (min-width: 1024px) {
    position: absolute !important;
    right: -5%;
    top: 50%;
    transform: translateY(-54%);
    width: 100%;
    max-width: 1100px;
    margin-top: 0;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    min-height: 720px;
  }
`;

const SlideColumn = styled(motion.div)`
  flex: 1;
  z-index: 20;
  text-align: center;
  margin-top: 54px;

  @media (min-width: 1024px) {
    text-align: left;
    margin-top: 0;
  }
`;

const SlideTitle = styled.div`
  font-weight: 600;
  color: var(--text-primary);
  font-size: var(--text-4xl);
  font-family: "Poppins";
  line-height: 1.2;
  margin: 16px 0;

  @media (min-width: 1024px) {
    font-size: var(--text-6xl);
  }

  span {
    display: block;
  }
`;

const SliderTitleGray = styled.span`
  color: #788696;
`;

const SlideInlineText = styled(motion.div)`
  color: var(--text-secondary);
  text-transform: uppercase;
  font-family: "Inter";
  font-weight: 400;
  letter-spacing: var(--tracking-widest);
  font-size: var(--text-xs);
`;

const SlideText = styled(motion.p)`
  color: var(--text-secondary);
  font-family: "Inter";
  font-weight: 400;
  font-size: var(--text-md);
  margin: 24px 0;
`;

const Button = styled(motion.button)`
  background: var(--color-blue-600);
  border-radius: var(--rounded-xl);
  color: #fff;
  height: 48px;
  padding: 0 16px;
  font-size: var(--text-sm);
  cursor: pointer;
  transition: var(--transition-colors);

  &:hover {
    background: var(--color-blue-700);
  }
`;

//animations
const fadeUp = {
  start: {
    opacity: 0,
    y: 70,
    transition: {
      duration: 0.65,
    },
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
    },
  },
};

const staggerChildren = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const slideFromRight = {
  start: {
    opacity: 0,
    x: -70,
    transition: {
      duration: 0.5,
    },
  },
  end: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

//markup
const Slider = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file: file(relativePath: { eq: "slider.png" }) {
            childImageSharp {
              fluid(maxWidth: 1100, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => (
        <Slide>
          <Background
            animate={{
              opacity: [0, 1, 0],
              x: [0, 300, 1920],
              width: [100, 1920 / 2, 300],
            }}
            transition={{ duration: 1.2 }}
          />
          <Container>
            <SlideContainer>
              <SlideColumn
                variants={staggerChildren}
                animate="end"
                initial="start"
              >
                <SlideInlineText variants={fadeUp}>
                  Portfolio page
                </SlideInlineText>
                <SlideTitle>
                  <SliderTitleGray>
                    <motion.span variants={fadeUp}>
                      Hello, I'm Damian!
                    </motion.span>
                  </SliderTitleGray>
                  <motion.span variants={fadeUp}>
                    Frontend Developer
                  </motion.span>{" "}
                  <motion.span variants={fadeUp}>& UI Designer</motion.span>
                </SlideTitle>
                <SlideText variants={fadeUp}>
                  See what benefits, Designer who can code can bring to your
                  projects
                </SlideText>
                <Button variants={fadeUp}>Scroll Down</Button>
              </SlideColumn>
              <SlideImage
                fluid={data.file.childImageSharp.fluid}
                variants={slideFromRight}
              />
            </SlideContainer>
          </Container>
        </Slide>
      )}
    />
  );
};

export default Slider;
