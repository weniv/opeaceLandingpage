import React from 'react';
import styled from 'styled-components';
import { Title, SubTitle } from './atom/index';
import Layout from './Layout';
import { useResizeContext } from '../context/ResizeContext';
import MobileTable from './atom/MobileTable';
import { ScheduleList } from '../text';

export default function Schedule() {
  const { isMobile } = useResizeContext();
  return (
    <Layout>
      <Title>제주 온보딩 워케이션 일정</Title>
      <SubTitle>3박 4일간 진행됩니다.</SubTitle>
      {!isMobile && <Table src={process.env.PUBLIC_URL + '/img/s3-table.svg'}></Table>}
      {isMobile && (
        <>
          <Message>※ 프로그램 신청시 스케쥴 변동이 가능합니다. :)</Message>
          {ScheduleList.map((schedule) => (
            <MobileTable key={schedule.id} schedule={schedule} />
          ))}
        </>
      )}
    </Layout>
  );
}

const Table = styled.img`
  width: 61.88em;
  margin-top: 1.65em;
`;

const Message = styled.p`
  color: #acacac;
  font-size: 10px;
  font-weight: 400;
  margin: 20px 0 11px;
`;

const Message = styled.p`
  color: #acacac;
  font-size: 10px;
  font-weight: 400;
  margin: 20px 0 11px;
`;
