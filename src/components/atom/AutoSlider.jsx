import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../style/slider.css';
import { useResizeContext } from '../../context/ResizeContext';

export default function AutoSlider({ list, isFull }) {
  const { isMobile } = useResizeContext();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {list &&
          list.map((el) => (
            <Wrap isMobile={isMobile} isFull={isFull}>
              <img key={el.id} src={process.env.PUBLIC_URL + `/img/${el.img}.jpg`} />
            </Wrap>
          ))}
      </Slider>
    </div>
  );
}

const Wrap = styled.div`
  width: auto;
  img {
    cursor: pointer;
    object-fit: cover;
    margin: 0 auto;
    width: ${({ isMobile }) => isMobile && 'calc(100vw - 110px)'};
    min-width: 266px;
    min-height: ${({ isMobile }) => isMobile && '150px'};
    max-height: 364px;
    width: ${({ isFull }) => isFull && '100%'};
    min-height: ${({ isFull }) => isFull && '200px'};
  }
`;
