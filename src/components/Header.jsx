import React from 'react';
import styled from 'styled-components';
import { googleFormLink } from '../text';

export default function Header() {
  return (
    <Wrap>
      <img src={process.env.PUBLIC_URL + `/img/logo.svg`} alt={` 로고 이미지`} />
      <button>
        <a href={googleFormLink} target="_blank" rel="noreferrer">
          신청하기
        </a>
      </button>
    </Wrap>
  );
}

const Wrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.75em;
  background-color: var(--light-color);
  padding: 0 30px;

  img {
    width: 16.25em;
    cursor: pointer;
  }

  button {
    width: 7.5em;
    height: 2.5em;
    border-radius: 30px;
    background-color: var(--main-color);

    a {
      font-size: 0.87em;
      font-weight: bold;
      color: var(--dark-color);
    }
  }
`;
