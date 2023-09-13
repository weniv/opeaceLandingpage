import React from "react";
import styled from "styled-components";
import Layout from "./Layout";

export default function Overview() {
  return (
    <Layout gap={36} padding={"100px 0 50px 0"}>
      <Img src={process.env.PUBLIC_URL + "/img/workation.svg"} />
      <Description>
        '어디서든 일하고 살아볼 수 있는 환경'을 만들겠다는 목표로 설립된
        오피스와
        <br />
        '기술의 교육 기회를 누구나 차등 없이 받을 수 있게 대중화, 보편화,
        시스템화 하는 것'이란
        <br />
        비전을 가진 ICT 교육 콘텐츠 기업인 위니브가 함께
        <br />
        <span>
          스타트업을 대상으로 Workation+Education 뜻의 워케이션 프로그램을
          제공합니다.
        </span>
      </Description>
      <Plan src={process.env.PUBLIC_URL + "/img/s1-plan.svg"} />
    </Layout>
  );
}

const Img = styled.img`
  width: 19.438rem;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1rem;
  line-height: 1.688rem;

  span {
    font-weight: bold;
    color: var(--main-color);
  }
`;

const Plan = styled.img`
  width: 20.5rem;
`;
