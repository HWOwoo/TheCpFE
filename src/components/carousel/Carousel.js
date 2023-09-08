import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import CalItemImg01 from "../../img/cal01.png";
import CalItemImg02 from "../../img/cal02.png";

const Carousel = () => {
  const carouselItems = [
    {
      imageUrl: CalItemImg01,
      title: "",
    },
    {
      imageUrl: CalItemImg02,
      title: "",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} imageUrl={item.imageUrl}>
            <span>{item.title}</span>
          </CarouselItem>
        ))}
      </Slider>
    </div>
  );
};

const CarouselItem = styled.div`
  height: 24rem;
  background: url(${(props) => props.imageUrl}) no-repeat;
  background-size: cover;
`;

export default Carousel;
