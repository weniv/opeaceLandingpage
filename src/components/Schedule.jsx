import React from "react";
import styled from "styled-components";
import { Title, SubTitle } from "./atom/index";
import Layout from "./Layout";

export default function Schedule() {
  return (
    <Layout>
      <Title>제주 온보딩 워케이션 일정</Title>
      <SubTitle>3박 4일간 진행됩니다.</SubTitle>
      <Table src={process.env.PUBLIC_URL + "/img/s3-table.svg"}></Table>
    </Layout>
  );
}

const Table = styled.img`
  width: 61.88em;
`;
