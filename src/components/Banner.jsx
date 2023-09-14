import React from "react";
import styled from "styled-components";
import { googleFormLink } from "../text";

export default function Banner() {
  return (
    <>
      <Img src={process.env.PUBLIC_URL + `/img/main.svg`} alt={`메인 이미지`} />
      <Btn>
        <p>
          <a href={googleFormLink} target="_blank" rel="noreferrer">
            제주 온보딩 워케이션 신청하기
          </a>
        </p>
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
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    font-weight: bold;

    a {
      color: var(--dark-color);
    }

    &::after {
      content: url(${process.env.PUBLIC_URL}/img/go.svg);
      display: block;
      width: 1.688rem;
      height: 1.813rem;
      margin-left: 9px;
    }
  }
`;
