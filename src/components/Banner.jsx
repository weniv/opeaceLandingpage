import React from "react";
import styled from "styled-components";

export default function Banner() {
  return (
    <>
      <Img src={process.env.PUBLIC_URL + `/img/main.svg`} alt={`메인 이미지`} />
      <Btn>
        <p>제주 온보딩 워케이션 신청하기</p>
      </Btn>
    </>
  );
}

const Img = styled.img`
  width: 100%;
  background-color: var(--bg-color);
  height: 32.375rem;
`;

const Btn = styled.button`
  width: 100%;
  height: 4.313rem;
  background-color: var(--main-color);

  p {
    font-size: 1.75rem;
    font-weight: bold;

    &::after {
      content: url(${process.env.PUBLIC_URL}/img/go.svg);
      max-width: 1.688rem;
      margin-left: 9px;
    }
  }
`;
