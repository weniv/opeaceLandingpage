import React from 'react';
import styled from 'styled-components';
import { Title, SubTitle } from './atom/index';
import Layout from './Layout';

export default function Notification() {
  return (
    <Layout>
      <Title>제주 온보딩 워케이션 안내</Title>
      <SubTitle>
        아름다운 제주의 자연 속에서 Workation+Education의 조합을
        <br />
        동시에 경험하며 업무 능력 향상과 전문 지식을 함께 얻어보세요.
      </SubTitle>
      <Img src={process.env.PUBLIC_URL + '/img/s4-info.svg'} />
    </Layout>
  );
}

const Img = styled.img`
  width: 100%;
  padding-top: 52px;
`;
