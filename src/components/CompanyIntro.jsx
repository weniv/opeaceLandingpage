import React from 'react';
import { Layout } from './index';
import { Title, SubTitle } from './atom';
import styled from 'styled-components';
import { companyIntroList, googleFormLink } from '../text';
import MobileCompanyIntro from './MobileCompanyIntro';
import { useResizeContext } from '../context/ResizeContext';

export default function CompanyIntro() {
  const { isMobile } = useResizeContext();

  return (
    <>
      {isMobile && <MobileCompanyIntro />}
      {!isMobile && (
    <Layout>
      <Title isMobile={isMobile}>기업 소개</Title>
      <SubTitle isMobile={isMobile}>
        본 프로젝트는 오피스제주, 주식회사 위니브 2개사가 연합하여 공동 진행합니다.
      </SubTitle>


          <Wrap>
            {companyIntroList.map((el) => (
              <Grid key={el.id}>
                <div className="companyImg">
                  <img src={process.env.PUBLIC_URL + `/img/${el.logo}.svg`} alt={`${el.logo} 로고 이미지`} />
                </div>
                <div className="description">
                  <strong>{el.title}</strong>
                  <p>{el.description}</p>
                  <button>
                    <a href={el.link} target="_blank" rel="noreferrer">
                      자세히 보기
                    </a>
                  </button>
                </div>
              </Grid>
            ))}
          </Wrap>

          <Apply>
            <img src={process.env.PUBLIC_URL + '/img/workation.svg'} alt="" />
            <button>
              <a href={googleFormLink} target="_blank" rel="noreferrer">
                제주 온보딩 워케이션 신청하기
              </a>
            </button>
          </Apply>
        </Layout>
      )}
    </>
  );
}

const Wrap = styled.div`
  width: 100%;
  display: flex;
  gap: 1.88rem;
  margin: 36px 0 100px 0;

  @media (max-width: 1194px) {
    padding: 0 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  width: 36.375rem;
  height: 18.188rem;
  grid-template-columns: 50% 50%;

  div.companyImg {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #f5f5f5;

    img {
      width: 11em;
    }
  }

  div.description {
    display: flex;
    flex-direction: column;
    padding: 3.06em 1.88em;
    background-color: #f5f5f5;

    strong {
      font-size: 1em;
      font-weight: bold;
      white-space: pre-wrap;
      margin-bottom: 17px;
      line-height: 1.625em;
    }
    p {
      font-size: 0.625em;
      white-space: pre-wrap;
      line-height: 1.125rem;
    }
    button {
      width: 8.063em;
      height: 2.125em;
      border-radius: 28px;
      background-color: var(--dark-color);
      margin-top: 2.25em;

      a {
        font-size: 0.88em;
        font-weight: 500;
        color: var(--light-color);
        cursor: pointer;
      }
    }
  }
`;

const Apply = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 18.125rem;
  gap: 35px;
  background-color: var(--main-color);

  button {
    width: 13.75rem;
    height: 2.5rem;
    border-radius: 28px;
    background-color: var(--dark-color);

    a {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--light-color);
      cursor: pointer;
    }
  }
`;
