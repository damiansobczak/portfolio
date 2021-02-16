import React from "react";
import styled from "styled-components";

const Element = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }
`;

const Container = (props) => {
  return <Element>{props.children}</Element>;
};

export default Container;
