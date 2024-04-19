"use client";
import { syne } from "@/app/layout";
import classNames from "classnames";
import { useScroll, motion, useTransform, easeIn } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import FadeInAnimation from "./FadeInAnimation";

const LocationImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const animationImage = useTransform(
    scrollYProgress,
    [0, 1],
    [0.85, 1],
    easeIn
  );
  return (
    <motion.div
      ref={ref}
      style={{ scale: animationImage }}
      className="aspect-video relative px-4 "
    >
      <Image
        src="/edificio.jpg"
        alt="Espacio TEC entrada"
        width={1300}
        height={1200}
        className={
          "w-full h-full object-cover rounded-t-3xl md:rounded-3xl shadow-xl"
        }
      />
      <div className="md:absolute md:bottom-0 flex">
        <div
          className="w-48 md:w-32 relative aspect-square text-white cursor-pointer"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/Espacio+Tec/@-38.7292242,-62.2681088,17z/data=!3m1!4b1!4m6!3m5!1s0x95edbd253d28a60f:0x7a6aa3392f861397!8m2!3d-38.7292242!4d-62.2655339!16s%2Fg%2F11j10_x9sp?entry=ttu"
            )
          }
        >
          <Image
            src="/mapa_bahia.jpg"
            alt=""
            width={100}
            height={100}
            className={"w-full h-full object-cover rounded-bl-3xl"}
          />
          <motion.div
            whileHover={{ scale: [null, 1.4, 1.3] }}
            transition={{ duration: 0.3 }}
            className="absolute flex items-center justify-center top-0 w-full h-full"
          >
            <FadeInAnimation>
              <HiOutlineLocationMarker size={40} color="#111827" />
            </FadeInAnimation>
          </motion.div>
        </div>

        <div className=" backdrop-blur-md bg-gray-100 p-6 rounded-br-3xl md:rounded-br-none md:rounded-tr-xl md:max-w-md flex flex-col justify-center">
          <FadeInAnimation>
            <h4
              className={classNames(
                "text-lg lg:text-xl font-semibold mb-2",
                syne.className
              )}
            >
              Horarios y ubicación
            </h4>
            <p className="text-sm md:text-base">
              Sábado y Domingos de Sábado de 16:30 a 19:30. Thompson 665, Bahía
              Blanca.
            </p>
          </FadeInAnimation>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationImage;
