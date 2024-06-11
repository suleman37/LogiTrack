import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon_pk from "../Assets/westren-service.png";
import save_money from "../Assets/Screenshot-2023-08-21-133145.png";
import express from "../Assets/Screenshot-2023-08-21-133315.png";
import expert from "../Assets/Screenshot-2023-08-21-133513.png";
import online from "../Assets/1519904578831.jpeg";
import karachi from "../Assets/karachi.png";
import "./Companies.css";

const CardSlider = () => {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const cards = [
    { id: 1,  icon: `${icon_pk}` },
    { id: 2,  icon: `${save_money}` },
    { id: 3,  icon: `${express}` },
    { id: 4,  icon: `${expert}` },
    { id: 5,  icon: `${online}` },
    { id: 6,  icon: `${karachi}` },
  ];

  return (
    <div className="card-slider mt">
      <Slider {...settings}>
        {cards.map((card) => (
          <div className="center" key={card.id}>
            <img src={card.icon} alt="" className="com-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;