"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { CircleButton } from "./CircleButton";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTripadvisor,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import classNames from "classnames";
import { syne } from "@/app/layout";
import { useScroll, useTransform, motion } from "framer-motion";

const Footer = () => {
  const footerTarget = useRef();
  const { scrollYProgress } = useScroll({
    target: footerTarget,
    offset: ["end end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, 300]);

  return (
    <motion.footer
      style={{ translateY }}
      ref={footerTarget}
      className="bg-gray-100"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between py-16 px-4 space-y-4">
        <div>
          <Image
            src="/logo-tec-color.png"
            alt="logo Espacio TEC"
            width={178}
            height={63}
          />
        </div>
        <div>
          <p
            className={classNames(
              syne.className,
              "font-semibold text-center md:text-right"
            )}
          >
            Seguinos en nuestras redes
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-4">
            <CircleButton
              className={"bg-white p-4 text-rose-600"}
              icon={<FaInstagram size={28} />}
              onClick={() =>
                window.open("https://www.instagram.com/espaciotec/")
              }
            />

            <CircleButton
              className={"bg-white p-4 text-cyan-500"}
              icon={<FaTwitter size={28} />}
              onClick={() => window.open("https://twitter.com/espaciotecbb")}
            />

            <CircleButton
              className={"bg-white p-4 text-blue-600"}
              icon={<FaFacebook size={28} />}
              onClick={() =>
                window.open("https://www.facebook.com/espaciotecbb")
              }
            />

            <CircleButton
              className={"bg-white p-4 text-red-600"}
              icon={<FaYoutube size={28} />}
              onClick={() =>
                window.open("https://www.youtube.com/@espaciotecbb")
              }
            />

            <CircleButton
              className={"bg-white p-4 text-gray-900"}
              icon={<FaTiktok size={28} />}
              onClick={() =>
                window.open("https://www.tiktok.com/@espaciotecbb")
              }
            />

            <CircleButton
              className={"bg-white p-4 text-green-600"}
              icon={<FaTripadvisor size={28} />}
              onClick={() =>
                window.open(
                  "https://www.tripadvisor.com.ar/Attraction_Review-g312744-d24932470-Reviews-Espacio_Tec-Bahia_Blanca_Province_of_Buenos_Aires_Central_Argentina.html"
                )
              }
            />
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
