"use client";
import { montserrat } from "@/app/layout";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const LocationImage = () => {
  return (
    <div className="aspect-video relative px-4 ">
      <Image
        src="/edificio.jpg"
        alt="Espacio TEC entrada"
        width={1300}
        height={1200}
        className={"w-full h-full object-cover rounded-t-3xl md:rounded-3xl"}
      />
      <div className="md:absolute md:bottom-0 flex">
        <div
          className="relative aspect-square text-white cursor-pointer"
          onClick={() => window.open("https://goo.gl/maps/XPLevjPPJn7GXZGz7")}
        >
          <Image
            src="/map.jpg"
            alt=""
            width={100}
            height={100}
            className={"w-full h-full object-cover rounded-bl-3xl"}
          />
          <HiOutlineLocationMarker
            size={40}
            className="absolute items-center top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
          />
        </div>
        <div className="text-white backdrop-blur-md bg-gray-900 md:bg-white/30 p-6 rounded-br-3xl md:rounded-br-none md:rounded-tr-xl md:max-w-md flex flex-col justify-center">
          <h4
            className={classNames(
              "text-lg lg:text-xl font-semibold mb-2",
              montserrat.className
            )}
          >
            Horarios y ubicación
          </h4>
          <p className="text-sm md:text-base">
            Sábado y Domingos de Sábado de 16:00 a 20:30. Thompson 665, Bahía
            Blanca.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationImage;
