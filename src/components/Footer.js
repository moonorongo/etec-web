"use client";
import Image from "next/image";
import React from "react";
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
import { montserrat } from "@/app/layout";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
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
              montserrat.className,
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
              onClick={() =>
                window.open("https://www.instagram.com/espaciotec/")
              }
            />

            <CircleButton
              className={"bg-white p-4 text-blue-600"}
              icon={<FaFacebook size={28} />}
              onClick={() =>
                window.open("https://www.instagram.com/espaciotec/")
              }
            />

            <CircleButton
              className={"bg-white p-4 text-red-600"}
              icon={<FaYoutube size={28} />}
              onClick={() =>
                window.open("https://www.instagram.com/espaciotec/")
              }
            />

            <CircleButton
              className={"bg-white p-4 text-gray-900"}
              icon={<FaTiktok size={28} />}
              onClick={() =>
                window.open("https://www.instagram.com/espaciotec/")
              }
            />

            <CircleButton
              className={"bg-white p-4 text-green-600"}
              icon={<FaTripadvisor size={28} />}
              onClick={() =>
                window.open("https://www.instagram.com/espaciotec/")
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
