import React from 'react';
import styled from 'styled-components';
import {
  Header,
  Banner,
  Overview,
  Schedule,
  WenivIntro,
  Tutor,
  Notification,
  Facility,
  CompanyIntro,
  Footer,
} from '../components/index';
import { FloatingBtn } from '../components/atom';
import { useResizeContext } from '../context/ResizeContext';

export default function Main() {
  const { isMobile } = useResizeContext();

  return (
    <Layout>
      <Header />
      <Banner />
      <Overview />
      <Schedule />
      <WenivIntro />
      {!isMobile && <Tutor />}
      <Notification />
      <Facility />
      <CompanyIntro />
      <Footer />
      {!isMobile && <FloatingBtn />}
    </Layout>
  );
}

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1194px;
  margin: 0 auto;
  overflow: hidden;

  @media only screen and (max-width: 375px) {
    min-width: 375px;
  }

  @media (max-width: 1194px) {
    max-width: 100%;
  }
`;
