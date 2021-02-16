import React from "react";
import styled from "styled-components";
import "@fontsource/inter/400.css";

//styles
const MenuWrapper = styled.nav`
  display: none;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 90;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0;
  color: var(--text-secondary);
  flex-direction: row;
`;

const MenuListItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
`;

const MenuListButton = styled.button`
  font-family: "Inter";
  font-weight: 400;
  padding: 16px 24px;
  font-size: var(--text-sm);
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition-colors);

  &:hover {
    color: var(--color-blue-600);
  }
`;

//markup
const MenuDesktop = () => {
  return (
    <MenuWrapper>
      <MenuList>
        <MenuListItem>
          <MenuListButton>Top</MenuListButton>
        </MenuListItem>
        <MenuListItem>
          <MenuListButton>UI/UX</MenuListButton>
        </MenuListItem>
        <MenuListItem>
          <MenuListButton>Programming</MenuListButton>
        </MenuListItem>
        <MenuListItem>
          <MenuListButton>Portfolio</MenuListButton>
        </MenuListItem>
      </MenuList>
    </MenuWrapper>
  );
};

export default MenuDesktop;
