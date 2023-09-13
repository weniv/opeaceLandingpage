import React, { useContext } from "react";
import styled from "styled-components";
import ResizeContext from "../context/ResizeContext";

export default function SectionOne() {
  const { resizeWidth } = useContext(ResizeContext);

  return (
    <>
      <Img />
      <Btn resizeWidth={resizeWidth}>제주 온보딩 워케이션 신청하기</Btn>
    </>
  );
}

const Img = styled.img`
  width: 100%;
  background-color: aliceblue;
  height: 32.375rem;
`;

const Btn = styled.button`
  width: 100%;
  height: ${({ resizeWidth }) => `${resizeWidth * 69}px`};
  background-color: var(--main-color);
  font-size: ${({ resizeWidth }) => `${resizeWidth * 28}px`};
  font-weight: 500;
`;
