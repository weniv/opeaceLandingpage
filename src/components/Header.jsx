import React from 'react';
import styled from 'styled-components';
import { googleFormLink } from '../text';
import { useResizeContext } from '../context/ResizeContext';

export default function Header() {
  const { isMobile } = useResizeContext();

  return (
    <>
      {isMobile ? (
        <MobileWrap>
          <img src={process.env.PUBLIC_URL + `/img/logo-mobile.svg`} alt="로고 이미지" />
          <a href={googleFormLink} target="_blank" rel="noreferrer">
            <img src={process.env.PUBLIC_URL + `/img/go-mobile.svg`} alt="신청하기" />
          </a>
        </MobileWrap>
      ) : (
        <Wrap>
          <img src={process.env.PUBLIC_URL + `/img/logo.svg`} alt="로고 이미지" />
          <button>
            <a href={googleFormLink} target="_blank" rel="noreferrer">
              신청하기
            </a>
          </button>
        </Wrap>
      )}
    </>
  );
}

const MobileWrap = styled.header`
  @media only screen and (min-width: 500px) {
    height: 4.75rem;
  }

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  background-color: var(--light-color);

  a {
    @media only screen and (min-width: 500px) {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;

    img {
      width: calc(100% - 10px);
    }
  }
`;

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
    display: flex;
    align-items: center;
    justify-content: center;

    width: 7.5rem;
    height: 2.5rem;
    border-radius: 30px;
    background-color: var(--main-color);

    a {
      font-size: 0.87rem;
      font-weight: bold;
      color: var(--dark-color);
    }
  }
`;
