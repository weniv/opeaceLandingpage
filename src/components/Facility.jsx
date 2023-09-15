import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import { facilityList, placeImgList } from '../text';
import { CustomSlider, AutoSlider } from './atom';

export default function Facility() {
  return (
    <Layout gap={100}>
      <CustomSlider list={placeImgList} name="place-" />
      <Wrap>
        {facilityList.map((el) => (
          <Grid key={el.id} id={el.id}>
            <div className="description">
              <img src={process.env.PUBLIC_URL + `/img/${el.icon}`} alt="workspace 아이콘" />
              <p>{el.description}</p>
            </div>
            <AutoSlider list={el.image} className="test" />
          </Grid>
        ))}
      </Wrap>
      <Video
        width="786px"
        height="444px"
        src="https://www.youtube-nocookie.com/embed/xXwyt8Ybqlw?si=WhyQwRxEkuy6goQy&mute=1&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></Video>
      {/* <MainImg src={process.env.PUBLIC_URL + '/img/s5-remote.svg'} alt="원격 근무 이미지" /> */}
    </Layout>
  );
}

const Video = styled.iframe`
  @media (max-width: 786px) {
    max-width: 100%;
  }
`;

const Wrap = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  .test {
    background-color: pink;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.88em;
    background-color: var(--light-color);
    order: ${({ id }) => (id === 2 ? 1 : 0)};
  }

  p {
    text-align: center;
    white-space: pre-wrap;
  }
`;
