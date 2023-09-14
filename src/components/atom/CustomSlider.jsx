import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../style/slider.css';

const placeImgList = [
  { id: 1, img: 'place-1', name: 'place' },
  { id: 2, img: 'place-2', name: 'place' },
  { id: 3, img: 'place-3', name: 'place' },
  { id: 4, img: 'place-4', name: 'place' },
];

export default function CustomSlider({ list, name = 'place' }) {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={process.env.PUBLIC_URL + `/img/${name}${i + 1}.svg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <Wrap>
      <Slider {...settings}>
        {placeImgList.map((place) => (
          <div className="item">
            <img src={process.env.PUBLIC_URL + `/img/${place.img}.svg`} />
          </div>
        ))}
      </Slider>
    </Wrap>
  );
}

const Wrap = styled.div`
  max-width: 786px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
