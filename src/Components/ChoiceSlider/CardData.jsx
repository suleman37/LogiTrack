// src/components/Slider.js
import React from 'react';
import Slider from 'react-slick';
import './CardData.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import icon_pk from "../Assets/truck.png";
import save_money from "../Assets/save money.png";
import express from "../Assets/express_16506618.png";
import expert from "../Assets/review_5985526.png";
import online from "../Assets/24-hour-clock_14488814.png";



const cardData = [
  { id: 1, content: "Card 1", head: "Safe & Secure Delivery", desc: "Override the digital divide with additional clickthroughs from developers and nanotechnology immersion.", icon: icon_pk },
  { id: 2, content: "Card 2", head: "Cost Savings", desc: "Capitalize on low hanging fruit to identify a ballpark value added activity will close the loop on focusing.", icon: save_money },
  { id: 3, content: "Card 3", head: "Transport Optimization", desc: "Nanotechnology immersion along the information highway will close loop at the end of the working day.", icon: express },
  { id: 4, content: "Card 4", head: "Proven Experience", desc: "At the end of the day, going forward, a new normal that has evolved from foster collaborative thinking", icon: expert },
  { id: 5, content: "Card 5", head: "24x7 Online Support", desc: "At the end of the day, going forward, a new normal that has evolved from foster collaborative thinking.", icon: online },
];

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0%',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
       <Slider {...settings}>
        {cardData.map((card) => (
          <div className="card cd-size" key={card.id}>
            <img src={card.icon} alt={card.head} width={"80px"} />
            <div className="card-body">
              <h5 className="card-text fanta">{card.head}</h5>
              <p className="card-text gray">{card.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;