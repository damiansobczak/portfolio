import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//styles
const MenuWrapper = styled(motion.nav)`
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 90;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  color: var(--text-secondary);
`;

const MenuListItem = styled(motion.li)`
  display: flex;
  align-items: center;
  list-style: none;
`;

const MenuListButton = styled.button`
  font-family: "Inter";
  font-weight: 400;
  padding: 32px 0;
  color: var(--text-primary);
  font-size: var(--text-lg);
  cursor: pointer;
  transition: var(--transition-colors);

  &:hover {
    color: var(--color-blue-600);
  }
`;

const Close = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: #fff;
  position: absolute;
  top: 24px;
  left: 24px;
  width: 40px;
  height: 40px;
  background-color: var(--color-blue-600);
  border-radius: var(--rounded-full);
`;

//animations
const staggerChildren = {
  open: {
    opacity: 1,
    width: "100%",
    applyAtStart: {
      display: "flex",
    },
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.25,
    },
  },
  close: {
    opacity: 0,
    width: 0,
    transition: {
      delay: 0.4,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
    applyAtEnd: {
      display: "none",
    },
  },
};

const fadeUp = {
  close: {
    opacity: 0,
    y: 70,
  },
  open: {
    y: 0,
    opacity: 1,
  },
};

//markup
const Menu = (props) => {
  return (
    <MenuWrapper
      toggle={props.toggle}
      variants={staggerChildren}
      animate={props.toggle ? "open" : "close"}
      initial="close"
    >
      <Close onClick={() => props.close()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Close>
      <MenuList>
        <MenuListItem variants={fadeUp}>
          <MenuListButton>Top</MenuListButton>
        </MenuListItem>
        <MenuListItem variants={fadeUp}>
          <MenuListButton>UI/UX</MenuListButton>
        </MenuListItem>
        <MenuListItem variants={fadeUp}>
          <MenuListButton>Programming</MenuListButton>
        </MenuListItem>
        <MenuListItem variants={fadeUp}>
          <MenuListButton>Portfolio</MenuListButton>
        </MenuListItem>
      </MenuList>
    </MenuWrapper>
  );
};

export default Menu;
