import React from "react";
import styled from "styled-components";

const Button = styled.button`
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

const DownloadButton = () => {
  return <Button>CV Document</Button>;
};

export default DownloadButton;
