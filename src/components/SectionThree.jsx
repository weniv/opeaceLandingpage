import React, { useContext } from "react";
import styled from "styled-components";
import ResizeContext from "../context/ResizeContext";
import { Title, SubTitle } from "../components/atom/index";

export default function SectionThree() {
  const { resizeWidth } = useContext(ResizeContext);

  return (
    <Wrap>
      <Title>제주 온보딩 워케이션 일정</Title>
      <SubTitle>3박 4일간 진행됩니다.</SubTitle>
      <Table
        src={process.env.PUBLIC_URL + "/img/s3-table.svg"}
        resizeWidth={resizeWidth}
      ></Table>
    </Wrap>
  );
}

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const Title = styled.p`
//   font-size: ${({ resizeWidth }) => `${resizeWidth * 18}px`};
//   text-align: center;
//   line-height: ${({ resizeWidth }) => `${resizeWidth * 27}px`};

//   strong {
//     font-size: ${({ resizeWidth }) => `${resizeWidth * 26}px`};
//     font-weight: bold;
//   }
// `;

const Table = styled.img`
  width: ${({ resizeWidth }) => `${resizeWidth * 990}px`};
`;
