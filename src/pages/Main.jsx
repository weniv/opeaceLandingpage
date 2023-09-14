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
import { AutoSlider } from '../components/atom';

export default function Main() {
  return (
    <Layout>
      {/* <AutoSlider /> */}
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
`;
