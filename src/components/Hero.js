"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { CircleButton } from "./CircleButton";
import { BiLogoWhatsapp } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import classNames from "classnames";
import { syne } from "@/app/layout";
import SliderHero from "./SliderHero";
import { useScroll, useTransform, motion, easeOut } from "framer-motion";
import FadeInAnimation from "./FadeInAnimation";

const Hero = () => {
  const heroTarget = useRef();
  const navTarget = useRef();
  const { scrollYProgress } = useScroll({
    target: heroTarget,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95], easeOut);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  return (
    <section className="bg-gray-900 min-h-screen text-white mb-20 w-full fixed">
      <SliderHero />
      <motion.nav
        style={{ scale, translateY }}
        ref={navTarget}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn" }}
        className="flex justify-between container mx-auto px-4 items-center pt-12 z-20 relative"
      >
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
            className="bg-gray-900 p-2"
            icon={<BiLogoWhatsapp size={28} color="white" />}
            text="Whatsapp"
            textColor="light"
          />
          <CircleButton
            onClick={() => window.open("mailto:info@espaciotec.com.ar")}
            className="bg-gray-900 p-2"
            icon={<MdOutlineMailOutline size={28} color="white" />}
            text="Email"
            textColor="light"
          />
        </div>
      </motion.nav>
      <motion.div
        style={{ translateY, scale }}
        ref={heroTarget}
        className="absolute inset-x-0 inset-y-0 container mx-auto px-4 min-h-screen flex flex-col items-center justify-center text-center z-10"
      >
        <div className="space-y-6 max-w-xl flex flex-col items-center">
          <FadeInAnimation>
            <h1
              className={classNames(
                "text-4xl lg:text-7xl font-bold drop-shadow-xl",
                syne.className
              )}
            >
              Museo de Informática
            </h1>
          </FadeInAnimation>
          <FadeInAnimation>
            <p className="text-xl lg:text-2xl">
              Explora la historia y evolución de la informática en armonía con
              el medio ambiente.
            </p>
          </FadeInAnimation>
          <FadeInAnimation>
            <button
              className={classNames(
                syne.className,
                "font-semibold bg-gray-500 px-12 text-xl py-3 rounded-xl"
              )}
            >
              DESCUBRE
            </button>
          </FadeInAnimation>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
