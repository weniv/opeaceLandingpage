import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import { Title } from './atom';
import { TutorList } from '../text';

export default function Tutor() {
  return (
    <Layout padding={'0 0 50px 0'}>
      <Wrap>
        <Title>제주 온보딩 워케이션 강사 소개</Title>
        <TutorWrap>
          {TutorList.map((cls) => (
            <Card key={cls.id}>
              <h3>{cls.title}</h3>
              <div className="tutorInfo">
                <img src={process.env.PUBLIC_URL + '/img/test.png'} alt="강사 소개 이미지" />
                <div>
                  <p className="tutorName">
                    강사 <strong>{cls.name}</strong>
                  </p>
                  <div className="tutorCareer">
                    {cls.career.map((el) => (
                      <p key={el.id}>
                        {el.current === 1 ? <span className="current">現</span> : <span className="former">前</span>}
                        {el.position}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TutorWrap>
      </Wrap>
    </Layout>
  );
}

const Wrap = styled.div`
  width: 100%;
  background-color: var(--bg-color);
  padding: 100px 6.75rem;
`;

const TutorWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 42px;
`;

const Card = styled.div`
  width: 30rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  gap: 33px;
  justify-content: center;
  background-color: var(--light-color);
  padding: 34px 20px 42px 20px;

  h3 {
    font-size: 1rem;
    font-weight: bold;
  }

  div.tutorInfo {
    display: flex;
    align-items: center;
    gap: 24px;

    img {
      width: 102px;
      border-radius: 50%;
    }

    p.tutorName {
      font-size: 0.875rem;
      padding-bottom: 12px;
      border-bottom: 2px solid var(--bg-color);
      margin-bottom: 12px;

      strong {
        font-size: 1.25rem;
        font-weight: bold;
      }
    }

    div.tutorCareer {
      display: flex;
      flex-direction: column;
      gap: 10px;

      p {
        font-size: 0.75rem;
        color: #717171;

        span {
          margin-right: 11px;
        }

        span.current {
          color: var(--main-color);
        }

        span.former {
          color: var(--dark-color);
        }
      }
    }
  }
`;
