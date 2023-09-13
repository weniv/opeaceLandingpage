import React from "react";
import styled from "styled-components";
import Layout from "./Layout";
import { facilityList } from "../text";

export default function Facility() {
  return (
    <Layout gap={100}>
      <MainImg
        src={process.env.PUBLIC_URL + "/img/s5-place.svg"}
        alt="오피스 사계점 건물 이미지"
      />
      <Wrap>
        {facilityList.map((el) => (
          <Grid key={el.id} id={el.id}>
            <div className="description">
              <img
                src={process.env.PUBLIC_URL + `/img/${el.icon}`}
                alt="workspace 아이콘"
              />
              <p>{el.description}</p>
            </div>
            <img
              className="subImg"
              src={process.env.PUBLIC_URL + `/img/${el.image}`}
              alt=""
            />
          </Grid>
        ))}
      </Wrap>
      <MainImg
        src={process.env.PUBLIC_URL + "/img/s5-remote.svg"}
        alt="원격 근무 이미지"
      />
    </Layout>
  );
}

const MainImg = styled.img`
  max-width: 786px;
`;

const Wrap = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background-color: var(--light-color);
    order: ${({ id }) => (id === 2 ? 1 : 0)};
  }

  p {
    text-align: center;
    white-space: pre-wrap;
  }
`;
