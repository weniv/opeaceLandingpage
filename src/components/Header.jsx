import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrap>
      <img
        src={process.env.PUBLIC_URL + `/img/logo.svg`}
        alt={` 로고 이미지`}
      />
      <button>
        <a href="/">신청하기</a>
      </button>
    </Wrap>
  );
}

const Wrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.75rem;
  background-color: var(--light-color);

  img {
    cursor: pointer;
  }

  button {
    width: 7.5rem;
    height: 2.5rem;
    border-radius: 30px;
    background-color: var(--main-color);

    a {
      font-size: 0.875rem;
      font-weight: bold;
      color: var(--dark-color);
    }
  }
`;
