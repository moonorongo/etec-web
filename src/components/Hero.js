"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CircleButton } from "./CircleButton";
import { BiLogoWhatsapp } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import classNames from "classnames";
import { montserrat } from "@/app/layout";

const Hero = () => {
  return (
    <section
      className="bg-gray-900 min-h-screen text-white relative mb-20 w-full "
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(17,24,39,0.90) 94.73%), url(/bg-img-01.jpg)",
      }}
    >
      <nav className="flex justify-between container mx-auto px-4 items-center pt-12 z-10 relative">
        <Link href="#">
          <div className="w-32 md:w-44">
            <Image
              alt="Logo Espacio TEC"
              src={"/logo_TEC_white.png"}
              width={191}
              height={81}
            />
          </div>
        </Link>
        <div className="flex space-x-4">
          <CircleButton
            onClick={() => window.open("https://wa.me/+542915349178")}
            className="bg-gray-950 p-2"
            icon={<BiLogoWhatsapp size={28} color="white" />}
            text="Whatsapp"
            textColor="light"
          />
          <CircleButton
            onClick={() => window.open("mailto:info@espaciotec.com.ar")}
            className="bg-gray-950 p-2"
            icon={<MdOutlineMailOutline size={28} color="white" />}
            text="Email"
            textColor="light"
          />
        </div>
      </nav>
      <div className="absolute inset-x-0 inset-y-0 container mx-auto px-4 min-h-screen flex flex-col items-center justify-center text-center z-0">
        <div className="space-y-6 max-w-xl">
          <h1
            className={classNames(
              "text-3xl lg:text-7xl font-bold",
              montserrat.className
            )}
          >
            Museo de Informática
          </h1>
          <p className="text-xl lg:text-2xl">
            Explora la historia y evolución de la informática en armonía con el
            medio ambiente.
          </p>
          <button
            className={classNames(
              montserrat.className,
              "font-semibold bg-gray-600 px-12 text-xl py-3 rounded-xl"
            )}
          >
            DESCUBRE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
