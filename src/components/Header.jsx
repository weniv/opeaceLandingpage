import React from "react";
import styled from "styled-components";

export default function Header() {
  return <Wrap>header</Wrap>;
}

const Wrap = styled.header`
  width: 100%;
  height: 4.75rem;
  background-color: var(--light-color);
`;
