import React from "react";
import styled from "styled-components";
import {
  Header,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
} from "../components/index";

export default function Main() {
  return (
    <Layout>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </Layout>
  );
}

const Layout = styled.section`
  background-color: pink;
  max-width: 1194px;
  margin: 0 auto;
`;
