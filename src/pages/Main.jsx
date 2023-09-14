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

export default function Main() {
  return (
    <Layout>
      <Header />
      <Banner />
      <Overview />
      <Schedule />
      <WenivIntro />
      <Tutor />
      <Notification />
      <Facility />
      <CompanyIntro />
      <Footer />
    </Layout>
  );
}

const Layout = styled.section`
  max-width: 1194px;
  margin: 0 auto;

  @media (max-width: 1194px) {
    max-width: 100%;
  }
`;
