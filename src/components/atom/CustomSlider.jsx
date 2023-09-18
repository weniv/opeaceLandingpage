import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../style/slider.css';

export default function CustomSlider({ list, name = 'place' }) {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={process.env.PUBLIC_URL + `/img/${name}${i + 1}.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // pauseOnHover: true,
  };
  return (
    <Wrap>
      <Slider {...settings}>
        {list.map((place) => (
          <div className="item">
            <img src={process.env.PUBLIC_URL + `/img/${place.img}.jpg`} />
          </div>
        ))}
      </Slider>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  max-width: 786px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;
