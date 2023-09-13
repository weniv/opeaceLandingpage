import React from "react";
import styled from "styled-components";

export default function SectionFive() {
  return (
    <Wrap>
      <MainImg
        src={process.env.PUBLIC_URL + "/img/s5-place.svg"}
        alt="오피스 사계점 건물 이미지"
      />
      <Grid>
        <div className="description">
          <img
            src={process.env.PUBLIC_URL + "/img/workspaceIcon.svg"}
            alt="workspace 아이콘"
          />
          <p>사계점니ㅏ러니아ㅓㅏㅇㄹㄴㄹㅇ</p>
        </div>
        <img
          className="subImg"
          src={process.env.PUBLIC_URL + "/img/s5-workspace.svg"}
          alt=""
        />
      </Grid>
      <MainImg
        src={process.env.PUBLIC_URL + "/img/s5-remote.svg"}
        alt="원격 근무 이미지"
      />
    </Wrap>
  );
}

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImg = styled.img`
  max-width: 786px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: var(--light-color);
  }
`;
