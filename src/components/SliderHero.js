"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import "./SliderHero.css";

const SliderHero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggeable: false,
    adaptiveHeight: true,
  };
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="gradient absolute z-10 w-full h-full"></div>
      <Slider {...settings} className="carousel relative">
        <div>
          <Image src="/bg-img-01.jpg" alt="" width={1920} height={500} />
        </div>
        <div>
          <Image src="/bg-img-02.jpg" alt="" width={1920} height={500} />
        </div>
        <div>
          <Image src="/bg-img-03.jpg" alt="" width={1920} height={1080} />
        </div>
      </Slider>
    </div>
  );
};

export default SliderHero;
