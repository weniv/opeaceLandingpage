import React from 'react';
import styled from 'styled-components';
import { googleFormLink } from '../text';

export default function MobileCompanyIntro() {
  return (
    <Wrap>
      <Intro>
        <strong>기업 소개</strong>
        <span>
          본 프로젝트는 오피스제주, 주식회사 위니브
          <br />
          2개사가 연합하여 공동 진행합니다.
        </span>
      </Intro>
      <Opeace>
        <Logo>
          <object type="image/svg+xml" data={process.env.PUBLIC_URL + `/img/opeace.svg`}>
            <img src={process.env.PUBLIC_URL + `/img/opeace.svg`} alt="opeace" />
          </object>
        </Logo>
        <Desc>
          <strong>
            🤞
            <br />
            네가 일할 때 평화롭길 바라
          </strong>
          <span>
            책상 한자리를 빌려주는 공유오피스가 아니라
            <br />
            <span className="strong">‘침해 당하지 않는 평화로움과 몰입의 시간'을</span>
            <br />
            선물하는 곳을 만들어보자. 그렇게 O-Peace를 시작했다.
          </span>
          <a href="https://o-peace.com/" target="_blank" rel="noreferrer">
            자세히 보기
          </a>
        </Desc>
      </Opeace>

      <Weniv>
        <Logo>
          <img src={process.env.PUBLIC_URL + `/img/weniv.svg`} alt="weniv" />
        </Logo>
        <Desc>
          <strong>
            안녕하세요.
            <br />
            주식회사 위니브입니다.
          </strong>
          <span>
            <span className="strong">주식회사 위니브는 ‘ICT 교육 콘텐츠 기업'입니다.</span>
            <br />
            지역과 가진 것에 차등 없이 누구나 ICT 교육을
            <br />
            받을 수 있도록 진로, 직업, 진학, 취업의 길을 열어갑니다.
          </span>
          <a href="https://paullab.co.kr/about.html" target="_blank" rel="noreferrer">
            자세히 보기
          </a>
        </Desc>
      </Weniv>
      <Workation>
        <img src={process.env.PUBLIC_URL + '/img/workation.svg'} alt="" />
        <a href={googleFormLink} target="_blank" rel="noreferrer">
          제주 온보딩 워케이션 신청하기
        </a>
      </Workation>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 30px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: solid 2px var(--bg-color);

  strong {
    font-size: 20px;
    font-weight: 800;
  }

  span {
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }
`;

const Opeace = styled.div`
  img {
    max-width: 200px;
    width: calc(100% - 226px);
  }
`;

const Weniv = styled.div`
  img {
    max-width: 178px;
    width: calc(100% - 241px);
  }
`;

const Logo = styled.div`
  height: 144px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Desc = styled.div`
  background-color: var(--bg-color);
  padding: 36px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;

  strong {
    font-size: 20px;
    font-weight: 800;
    line-height: 30px;
  }

  span {
    color: #000;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    .strong {
      font-weight: 800;
    }
  }

  a {
    width: 97px;
    padding: 6px 0;
    border-radius: 35px;
    background-color: var(--dark-color);
    color: var(--light-color);
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }
`;

const Workation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 39px 0 38px;
  background-color: var(--main-color);

  img {
    max-width: 311px;
    width: calc(100% - 94px);
  }

  a {
    width: 266.25px;
    padding: 10px 0 9px;
    border-radius: 18px;
    background-color: var(--dark-color);
    color: var(--light-color);
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }
`;
