import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import { Title, SubTitle } from './atom';
import { useResizeContext } from '../context/ResizeContext';

export default function WenivIntro() {
  const { isMobile } = useResizeContext();

  return (
    <Layout padding={'50px 0 0 0'}>
      <Title isMobile={isMobile}>제주 온보딩 워케이션 교육기관 소개</Title>
      {isMobile ? (
        <SubTitle isMobile={isMobile}>
          주식회사 위니브는 ICT 교육 콘텐츠 및 <br />
          각종 ICT 부트캠프를 운영하고 있습니다.
          <br />본 프로그램에서는 온보딩/협업툴/기본코딩 <br />
          교육 프로그램이 진행됩니다.
        </SubTitle>
      ) : (
        <SubTitle>
          주식회사 위니브는 ICT 교육 콘텐츠 및 각종 ICT 부트캠프를 운영하고 있습니다.
          <br />본 프로그램에서는 파이썬, 자바스크립트 등 기초코딩교육 및 협업툴 교육이 진행됩니다.
        </SubTitle>
      )}
      <Char isMobile={isMobile}>
        <img src={process.env.PUBLIC_URL + `/img/wenivFriends.svg`} alt="위니브 프렌즈 이미지" />
        <figcaption>Weniv Friends</figcaption>
      </Char>
      <Archive isMobile={isMobile}>
        <div className="archive">
          <img src={process.env.PUBLIC_URL + '/img/archive.svg'} alt="위니브 아카이브 이미지" />
          <div>
            <p>
              주식회사 위니브의
              <br />
              다양한 ICT 콘텐츠를 모아 보세요!
            </p>
            <button>
              <a href="/">위니브 콘텐츠 아카이브</a>
            </button>
          </div>
        </div>
        <img className="bg" src={process.env.PUBLIC_URL + '/img/archive-bg.svg'} />
      </Archive>
    </Layout>
  );
}

const Char = styled.figure`
  img {
    width: ${({ isMobile }) => (isMobile ? '23.43rem' : '49.125rem')};
    margin-top: ${({ isMobile }) => (isMobile ? '20px' : '36px')};
  }

  figcaption {
    margin-top: 17px;
    font-size: ${({ isMobile }) => (isMobile ? '0.625rem' : '0.75rem')};
    text-align: center;
    color: #717171;
  }
`;

const Archive = styled.div`
  position: relative;
  width: 100%;
  height: ${({ isMobile }) => (isMobile ? '23.75rem' : '28.125rem')};
  margin-top: 70px;

  div.archive {
    display: flex;
    flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(2, 255, 153, 0.6);
    z-index: 999;
    align-items: center;
    justify-content: space-between;
    padding: ${({ isMobile }) => (isMobile ? '34px 0' : '0 6.38em')};
    justify-content: center;
    gap: 11%;
    gap: ${({ isMobile }) => (isMobile ? 0 : '11%')};

    img {
      width: ${({ isMobile }) => (isMobile ? '15.875rem' : '30em')};
      align-items: center;
      justify-content: center;
      gap: 8.38em;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${({ isMobile }) => (isMobile ? '20px' : '2.25em')};
      flex-shrink: 0;
      gap: 2.25em;
      white-space: nowrap;

      p {
        text-align: center;
        font-size: ${({ isMobile }) => (isMobile ? '1rem' : '1.625rem')};
        font-weight: bold;
        line-height: ${({ isMobile }) => (isMobile ? '1.625rem' : '2.25rem')};
        margin-top: ${({ isMobile }) => (isMobile ? '27px' : 0)};
      }

      button {
        width: ${({ isMobile }) => (isMobile ? '145px' : '13.75em')};
        height: 2.5em;
        background-color: var(--dark-color);
        color: var(--light-color);
        border-radius: 37px;
        font-family: 'Pretendard-Regular';
      }

      a {
        color: var(--light-color);
        font-size: ${({ isMobile }) => (isMobile ? '0.75rem' : '0.938rem')};
      }
    }
  }

  img.bg {
    width: 100%;
    opacity: 0.2;
  }
`;
