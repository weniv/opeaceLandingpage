import React from 'react';
import styled from 'styled-components';

export default function SubTitle({ children, isMobile }) {
  return <Text isMobile={isMobile}>{children}</Text>;
}

const Text = styled.p`
  font-size: ${({ isMobile }) => (isMobile ? '0.75rem' : '1rem')};
  line-height: 1.69em;
  text-align: center;
`;
