import React, { useContext } from "react";
import styled from "styled-components";
import ResizeContext from "../context/ResizeContext";

export default function SectionTwo() {
  const { resizeWidth } = useContext(ResizeContext);

  return (
    <Wrap resizeWidth={resizeWidth}>
      <Img
        src={process.env.PUBLIC_URL + "/img/s1-main.svg"}
        resizeWidth={resizeWidth}
      />
      <Description resizeWidth={resizeWidth}>
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
      <Plan
        src={process.env.PUBLIC_URL + "/img/s1-plan.svg"}
        resizeWidth={resizeWidth}
      />
    </Wrap>
  );
}

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.625rem 0;
  gap: ${({ resizeWidth }) => `${resizeWidth * 36}px`};
  background-color: antiquewhite;
`;

const Img = styled.img`
  width: ${({ resizeWidth }) => `${resizeWidth * 311}px`};
`;

const Description = styled.p`
  text-align: center;
  line-height: ${({ resizeWidth }) => `${resizeWidth * 27}px`};
  font-size: ${({ resizeWidth }) => `${resizeWidth * 16}px`};

  span {
    font-weight: bold;
    color: var(--main-color);
  }
`;

const Plan = styled.img`
  width: ${({ resizeWidth }) => `${resizeWidth * 328}px`};
`;
