"use client";
import React, { useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./SliderHero.css";

const Arrow = ({ direction, onClick }) => (
  <button
    type="button"
    aria-label={direction === "left" ? "Imagen anterior" : "Imagen siguiente"}
    onClick={onClick}
    className={`slider-arrow slider-arrow--${direction}`}
  >
    {direction === "left" ? (
      <FiChevronLeft size={28} />
    ) : (
      <FiChevronRight size={28} />
    )}
  </button>
);

const SliderHero = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    adaptiveHeight: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") sliderRef.current?.slickPrev();
      if (e.key === "ArrowRight") sliderRef.current?.slickNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="gradient absolute z-10 w-full h-full pointer-events-none"></div>
      <Slider ref={sliderRef} {...settings} className="carousel relative">
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
