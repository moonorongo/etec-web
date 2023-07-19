import { syne } from "@/app/layout";
import classNames from "classnames";
import React from "react";
import FadeInAnimation from "./FadeInAnimation";
import LocationImage from "./LocationImage";

const SectionVisit = () => {
  return (
    <section className="mb-40">
      <div className="bg-gray-100 pt-20 pb-60">
        <div className="container max-w-2xl space-y-8 mx-auto text-center px-4 flex flex-col items-center">
          <FadeInAnimation>
            <h2
              className={classNames(
                "text-2xl lg:text-4xl font-semibold",
                syne.className
              )}
            >
              Vení a visitarnos
            </h2>
          </FadeInAnimation>
          <FadeInAnimation>
            <p className="!leading-loose text-sm md:text-base">
              Cada sábado los visitantes pueden apreciar no solo una gran
              colección de máquinas y artefactos tecnológicos, sino también ver
              e interactuar con decenas de computadoras, consolas y otros
              aparatos funcionando, lo que hace de Espacio TEC un lugar
              diferente a los esperado en un museo más tradicional.
            </p>
          </FadeInAnimation>
        </div>
      </div>
      <div className="container lg:max-w-6xl mx-auto mt-[-200px]">
        <LocationImage />
      </div>
    </section>
  );
};

export default SectionVisit;
