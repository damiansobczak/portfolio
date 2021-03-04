import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Container from "../Layouts/Container";

//styles
const List = styled.ol`
  display: flex;
  align-items: center;
  margin: 32px 0;
  list-style: none;
  padding: 0;
  font-family: "Poppins";
  font-size: var(--text-sm);

  & > * + * {
    padding: 16px 24px;
  }
`;

const Item = styled.li`
  color: var(--color-gray-400);
  font-weight: 300;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--text-primary);
  text-decoration: none;
  white-space: nowrap;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-left: 16px;
  }
`;

//markup
const Breadcrumbs = ({ item }) => {
  return (
    <Container>
      <List>
        <Item>
          <Button to="/">
            General Page
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </Item>
        <Item>{item}</Item>
      </List>
    </Container>
  );
};

export default Breadcrumbs;
