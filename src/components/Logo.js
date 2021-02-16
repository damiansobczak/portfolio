import React from "react";
import styled from "styled-components";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/300.css";

//styles
const Logotype = styled.div`
  display: none;
  align-items: center;
  color: var(--text-primary);
  font-weight: 500;
  font-family: "Poppins";

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
    <Logotype toggle={props.toggle}>
      Damian Sobczak <Text> | Portfolio</Text>
    </Logotype>
  );
};

export default Logo;
