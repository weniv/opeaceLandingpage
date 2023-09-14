import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import { Title, SubTitle } from './atom';

export default function WenivIntro() {
  return (
    <Layout padding={'50px 0 0 0'}>
      <Title>제주 온보딩 워케이션 교육기관 소개</Title>
      <SubTitle>
        주식회사 위니브는 ICT 교육 콘텐츠 및 각종 ICT 부트캠프를 운영하고 있습니다.
        <br />본 프로그램에서는 파이썬, 자바스크립트 등 기초코딩교육 및 협업툴 교육이 진행됩니다.
      </SubTitle>
      <Char>
        <img src={process.env.PUBLIC_URL + `/img/wenivFriends.svg`} alt="위니브 프렌즈 이미지" />
        <figcaption>WenivFriends</figcaption>
      </Char>
      <Archive>
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
    width: 49.125rem;
    margin-top: 36px;
  }

  figcaption {
    margin-top: 17px;
    font-size: 0.75rem;
    text-align: center;
    color: #717171;
  }
`;

const Archive = styled.div`
  position: relative;
  width: 100%;
  height: 28.125rem;
  margin-top: 70px;

  div.archive {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(2, 255, 153, 0.6);
    z-index: 999;
    padding: 0 6.38em;
    align-items: center;
    justify-content: center;
    gap: 8.38em;

    img {
      width: 30em;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.25em;

      p {
        text-align: center;
        font-size: 1.625em;
        font-weight: bold;
        line-height: 2.25rem;
      }

      button {
        width: 13.75em;
        height: 2.5em;
        background-color: var(--dark-color);
        color: var(--light-color);
        border-radius: 37px;
      }

      a {
        color: var(--light-color);
        font-size: 0.938em;
      }
    }
  }

  img.bg {
    width: 100%;
    opacity: 0.2;
  }
`;
