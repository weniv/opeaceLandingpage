import React from 'react';
import styled from 'styled-components';

export default function Title({ children, isMobile }) {
  return <Text isMobile={isMobile}>{children}</Text>;
}

const Text = styled.h2`
  font-size: ${({ isMobile }) => (isMobile ? '1.25rem' : '1.688rem')};
  margin-bottom: ${({ isMobile }) => (isMobile ? '12px' : '17px')};
  text-align: center;
`;
