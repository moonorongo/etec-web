"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
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

  const handleScrollToSection = () => {
    const section = document.getElementById("content");
    section.scrollIntoView({ behavior: "smooth" });
  };

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
              onClick={handleScrollToSection}
              className="relative inline-flex items-center justify-center px-16 py-4 overflow-hidden font-medium transition duration-300 ease-out border-2 border-gray-100 hover:border-pink-600 shadow-md group rounded-lg"
            >
              <span
                className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full 
                 bg-pink-600 group-hover:translate-y-0 ease"
              >
                <span className="rotate-90">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
              </span>
              <span
                className={classNames(
                  "absolute flex items-center justify-center w-full h-full text-white text-xl font-semibold transition-all duration-300 transform group-hover:translate-y-full ease",
                  syne.className
                )}
              >
                DESCUBRE
              </span>
              <span className="relative invisible">DESCUBRE</span>
            </button>
          </FadeInAnimation>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
