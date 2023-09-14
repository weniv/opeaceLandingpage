import React from 'react';
import styled from 'styled-components';

export default function Layout({ children, gap, padding }) {
  return (
    <Wrap gap={gap} padding={padding}>
      {children}
    </Wrap>
  );
}

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ padding }) => (padding ? padding : '50px 0')};
  gap: ${({ gap }) => (gap ? `${gap}px` : '0px')};
`;
