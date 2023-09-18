import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import { facilityList, placeImgList } from '../text';
import { CustomSlider, AutoSlider, VideoPlayer } from './atom';
import { useResizeContext } from '../context/ResizeContext';

export default function Facility() {
  const { isMobile } = useResizeContext();

  return (
    <Layout gap={100}>
      {!isMobile && <CustomSlider list={placeImgList} name="place-" />}
      <Wrap>
        {isMobile && <AutoSlider isFull={true} list={placeImgList} className="test" />}
        {facilityList.map((el) => (
          <Grid isMobile={isMobile} key={el.id} id={el.id}>
            <div className="description">
              <img src={process.env.PUBLIC_URL + `/img/${el.icon}`} />
              <p>{el.description}</p>
            </div>
            <AutoSlider list={el.image} className="test" />
          </Grid>
        ))}
      </Wrap>
      <VideoPlayer />
    </Layout>
  );
}

const Wrap = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: ${({ isMobile }) => (isMobile ? '' : 'grid')};
  grid-template-columns: ${({ isMobile }) => !isMobile && '50% 50%'};

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
    margin: ${({ isMobile }) => isMobile && '50px 0 20px'};
  }

  p {
    text-align: center;
    white-space: pre-wrap;
  }
`;
