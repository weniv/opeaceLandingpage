import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import { partnershipList } from '../text';
import { useResizeContext } from '../context/ResizeContext';

export default function Footer() {
  const { isMobile } = useResizeContext();

  return (
    <Layout>
      <Text isMobile={isMobile}>
        제주 온보딩 워케이션 프로그램 JTP 제주테크노파크의
        <br />
        <strong>[디지털 트랜스포메이션 관광융합 프로젝트]</strong>
        <br />
        선정, 지원을 받아 진행하는 프로젝트입니다.
      </Text>
      <Partnership isMobile={isMobile}>
        {partnershipList.map((el) => (
          <img key={el.id} src={process.env.PUBLIC_URL + `/img/${el.logo}.svg`} alt={`${el.logo} 로고 이미지`} />
        ))}
      </Partnership>
    </Layout>
  );
}

const Text = styled.p`
  font-size: 1em;
  font-size: ${({ isMobile }) => (isMobile ? '0.75em' : '1em')};
  line-height: 1.69em;
  text-align: center;

  strong {
    font-weight: bold;
  }
`;

const Partnership = styled.div`
  display: flex;
  align-items: center;
  gap: 3.88em;
  gap: ${({ isMobile }) => (isMobile ? '1.87em' : '3.88em')};
  margin-top: 2.25em;

  img {
    width: ${({ isMobile }) => (isMobile ? '8em' : '12em')};
  }
`;
