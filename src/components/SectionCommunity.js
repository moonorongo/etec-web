"use client";
import { montserrat } from "@/app/layout";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { BiNews } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { CircleButton } from "./CircleButton";

const SectionCommunity = () => {
  return (
    <section className="mb-40 px-4">
      <div className="container max-w-2xl space-y-8 mx-auto text-center my-12">
        <h2
          className={classNames(
            "text-2xl lg:text-4xl font-semibold",
            montserrat.className
          )}
        >
          Comunidad Espacio TEC
        </h2>
      </div>
      <div className="grid grid-cols-6 max-w-4xl mx-auto text-white gap-4">
        <div className="col-span-6 p-6 bg-gray-900 rounded-2xl text-center">
          <h5
            className={classNames(
              "text-lg lg:text-xl font-semibold mb-1",
              montserrat.className
            )}
          >
            Visitas o Voluntariados:
          </h5>
          <p>
            Consultas por visitas o voluntariado: 291 5349178,
            info@espaciotec.com.ar
          </p>
        </div>
        <div className="col-span-6 md:col-span-2 bg-purple-800 rounded-2xl p-6 flex items-center justify-between">
          <h5
            className={classNames(
              "text-lg lg:text-xl font-semibold mb-1",
              montserrat.className
            )}
          >
            Nuestro Blog
          </h5>
          <CircleButton
            className={"bg-white/20 p-3"}
            icon={<BiNews size={28} />}
          />
        </div>
        <div className="col-span-6 md:col-span-4 bg-pink-600 rounded-2xl  flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:items-end justify-center bg-pink-700 rounded-t-2xl md:rounded-l-2xl p-6 w-full md:w-[65%] h-full pr-12">
            <h5
              className={classNames(
                "text-lg lg:text-xl font-semibold",
                montserrat.className
              )}
            >
              ¿Querés apoyar al museo?
            </h5>
            <span className="flex space-x-2 items-center">
              <p className={classNames("font-normal", montserrat.className)}>
                Sumate a
              </p>
              <span className="flex space-x-1">
                <BsArrowRight size={20} className="rotate-90 md:rotate-0" />
                <BsArrowRight size={20} className="rotate-90 md:rotate-0" />
                <BsArrowRight size={20} className="rotate-90 md:rotate-0" />
              </span>
            </span>
          </div>
          <div className="p-6 md:mr-4">
            <Image src="/club-pixel-logo.png" alt="" width={130} height={58} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCommunity;
