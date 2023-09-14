import React from 'react';
import styled from 'styled-components';
import { googleFormLink } from '../text';
import { useResizeContext } from '../context/ResizeContext';

export default function Banner() {
  const { isMobile } = useResizeContext();

  return (
    <>
      {isMobile ? (
        <MobileBg>
          <Img src={process.env.PUBLIC_URL + `/img/main-mobile.svg`} alt={`메인 이미지`} />
          <a href={googleFormLink} target="_blank" rel="noreferrer">
            제주 온보딩 워케이션 신청하기
          </a>
        </MobileBg>
      ) : (
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
      )}
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

const MobileBg = styled.div`
  width: 100%;
  // height: 692px;
  min-width: 375px;
  background-color: var(--bg-color);
  position: relative;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
  a {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 20px);
    height: 50px;
    padding: 13px 0;
    border-radius: 24px;
    background: #02ff99;
    color: #000;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
  }
`;
