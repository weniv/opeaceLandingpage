import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../style/slider.css';

export default function AutoSlider({ list }) {
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
            <Wrap>
              <img key={el.id} src={process.env.PUBLIC_URL + `/img/${el.img}.svg`} />
            </Wrap>
          ))}
      </Slider>
    </div>
  );
}

const Wrap = styled.div`
  width: auto;
  background-color: pink;
  img {
    object-fit: cover;
  }
`;
