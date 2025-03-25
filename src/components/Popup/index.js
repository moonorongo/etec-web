"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  }

  if(!showPopup) return null;

  return (
    <>
      <div 
        onClick={() => {closePopup () }}
        className="fixed inset-0 bg-black bg-opacity-50 z-[1] cursor-pointer"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[533px] bg-white z-[2] text-right  ">
        <div className="relative w-full h-full">
          <a href="https://espaciotec.com.ar/donaciones" target="_blank">
            <Image
              priority
              src="/popup/banner_donaciones.jpeg"
              alt=""
              width={300}
              height={550}
            />
          </a>
          <span  
            onClick={() => {closePopup () }}
            className="absolute -top-4 -right-2 px-2 py-1 text-white rounded-full cursor-pointer z-10" 
            style={{'background-color' : '#555'}}
            >X</span>
        </div>
      </div>
    </>
  );
};

export default Popup;
