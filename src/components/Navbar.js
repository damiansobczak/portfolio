import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Container from "../Layouts/Container";
import Menu from "./Menu";
import MenuDesktop from "./MenuDesktop";
import DownloadButton from "./DownloadButton";

//styles
const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const MobileButton = styled.button`
  stroke: var(--text-primary);

  @media (min-width: 768px) {
    display: none;
  }
`;

//markup
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <Navigation>
        <Logo toggle={toggle} />
        <MobileButton onClick={() => setToggle((toggle) => !toggle)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </MobileButton>
        <Menu toggle={toggle} close={() => setToggle(false)} />
        <MenuDesktop />
        <DownloadButton />
      </Navigation>
    </Container>
  );
};

export default Navbar;
