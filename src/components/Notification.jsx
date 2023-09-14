import React from 'react';
import styled from 'styled-components';
import { Title, SubTitle } from './atom/index';
import Layout from './Layout';
import { useResizeContext } from '../context/ResizeContext';

export default function Notification() {
  const { isMobile } = useResizeContext();

  return (
    <>
      {!isMobile && (
        <Layout>
          <Title isMobile={isMobile}>제주 온보딩 워케이션 안내</Title>
          <SubTitle isMobile={isMobile}>
            아름다운 제주의 자연 속에서 Workation+Education의 조합을
            <br />
            동시에 경험하며 업무 능력 향상과 전문 지식을 함께 얻어보세요.
          </SubTitle>

          <Img src={process.env.PUBLIC_URL + '/img/s4-info.svg'} />
        </Layout>
      )}

      {isMobile && (
        <Wrap>
          <div style={{ marginBottom: '-14px' }}>
            <Title isMobile={isMobile}>제주 온보딩 워케이션 안내</Title>
            <SubTitle isMobile={isMobile}>
              아름다운 제주의 자연 속에서 <span className="strong">Workation+Education</span>의 조합을
              <br />
              동시에 경험하며 업무 능력 향상과 전문 지식을 함께 얻어보세요.
            </SubTitle>
          </div>
          <AllContents>
            <div className="icon">
              <img src={process.env.PUBLIC_URL + '/img/work-mobile.svg'} />
            </div>
            <div className="multiply">
              <img src={process.env.PUBLIC_URL + '/img/x-mobile.svg'} />
            </div>
            <div className="icon">
              <img src={process.env.PUBLIC_URL + '/img/vacation-mobile.svg'} />
            </div>
            <div className="multiply">
              <img src={process.env.PUBLIC_URL + '/img/x-mobile.svg'} />
            </div>
            <div className="icon">
              <img src={process.env.PUBLIC_URL + '/img/education-mobile.svg'} />
            </div>
          </AllContents>
          <Contents>
            <img src={process.env.PUBLIC_URL + '/img/work-mobile.svg'} />
            <span>여유롭고 자유로운 분위기의 공간을 제공합니다.</span>
          </Contents>
          <Contents>
            <img src={process.env.PUBLIC_URL + '/img/vacation-mobile.svg'} />
            <span>
              자연과 가까운 시간엔 자신의 일과 삶을
              <br />
              다른시각으로 볼 수 있습니다.
            </span>
          </Contents>
          <Contents>
            <img src={process.env.PUBLIC_URL + '/img/education-mobile.svg'} />
            <span>노션, 피그마, 크롬 개발자 도구 등 ICT 교육을 진행합니다.</span>
          </Contents>
        </Wrap>
      )}
    </>
  );
}

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 80px 0 20px;

  .strong {
    font-weight: 800;
  }
`;

const AllContents = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .icon {
    width: 74px;
    height: 93px;
    position: relative;

    img {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }

  .multiply {
    width: 20px;
    height: 20px;
    background-color: var(--main-color);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Contents = styled.div`
  img {
    display: block;
    margin: 0 auto 12px auto;
  }

  span {
    display: block;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
`;
const Img = styled.img`
  width: 100%;
  padding-top: 52px;
`;
