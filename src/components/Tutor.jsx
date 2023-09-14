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
              <div className="wrap">
                <h3>{cls.title}</h3>
                <div className="tutorInfo">
                  <img src={process.env.PUBLIC_URL + '/img/test.png'} alt="강사 소개 이미지" />
                  <div>
                    <p className="tutorName">
                      강사 <strong>{cls.name}</strong>
                    </p>
                    <div className="tutorCareer">
                      {cls.career.map((el) => (
                        <div className="careerWrap">
                          <p key={el.id}>
                            {el.current === 1 ? (
                              <span className="current">現</span>
                            ) : (
                              <span className="former">前</span>
                            )}
                          </p>
                          <p>{el.position}</p>
                        </div>
                      ))}
                    </div>
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
  gap: 1.5em;
  margin-top: 42px;
`;

const Card = styled.div`
  width: 30em;
  height: 15em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-color);

  div.wrap {
    display: flex;
    flex-direction: column;
    gap: 2.06em;
    width: 90%;
  }

  h3 {
    font-size: 1em;
    font-weight: bold;
    align-self: flex-start;
  }

  div.tutorInfo {
    display: flex;
    align-items: center;
    gap: 1.5em;

    img {
      width: 6.38em;
      border-radius: 50%;
    }

    p.tutorName {
      font-size: 0.875em;
      padding-bottom: 0.75em;
      border-bottom: 2px solid var(--bg-color);
      margin-bottom: 0.75em;

      strong {
        font-size: 1.25em;
        font-weight: bold;
      }
    }

    div.tutorCareer {
      display: flex;
      flex-direction: column;
      gap: 0.63em;

      div.careerWrap {
        display: flex;
        gap: 0.69em;

        p {
          font-size: 0.75em;
          color: #717171;
          line-height: 1.5em;

          span.current {
            color: var(--main-color);
          }

          span.former {
            color: var(--dark-color);
          }
        }
      }
    }
  }
`;
