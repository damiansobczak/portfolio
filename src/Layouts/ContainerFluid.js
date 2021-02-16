import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  background-color: ${(props) => props.background || "transparent"};
`;

const ContainerFluid = (props) => {
  return <Container>{props.children}</Container>;
};

export default ContainerFluid;
