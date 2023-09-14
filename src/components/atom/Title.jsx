import React from 'react';
import styled from 'styled-components';

export default function Title({ children }) {
  return <Text>{children}</Text>;
}

const Text = styled.h2`
  font-size: 1.688em;
  font-weight: bold;
  margin-bottom: 17px;
  text-align: center;
`;
