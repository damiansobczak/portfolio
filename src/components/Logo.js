import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

//styles
const Logotype = styled(Link)`
  display: none;
  align-items: center;
  color: var(--text-primary);
  font-weight: 600;
  font-family: "Poppins";
  text-decoration: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Text = styled.span`
  color: var(--text-secondary);
  font-weight: 300;
  margin-left: 6px;
`;

//markup
const Logo = (props) => {
  return (
    <Logotype to={"/"} toggle={props.toggle}>
      Damian Sobczak <Text> | Portfolio</Text>
    </Logotype>
  );
};

export default Logo;
