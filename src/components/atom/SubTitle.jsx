import React from "react";
import styled from "styled-components";

export default function SubTitle({ children }) {
  return <Text>{children}</Text>;
}

const Text = styled.p`
  font-size: 1rem;
  line-height: 27px;
  text-align: center;
`;
