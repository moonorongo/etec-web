import { syne } from "@/app/layout";
import classNames from "classnames";
import React from "react";
import FadeInAnimation from "./FadeInAnimation";
import ImagesGrid from "./ImagesGrid";

const SectionAbout = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4">
        <div className="max-w-md space-y-8 mx-auto ">
          <FadeInAnimation>
            <h2
              className={classNames(
                "text-2xl lg:text-4xl font-semibold",
                syne.className
              )}
            >
              El Museo
            </h2>
          </FadeInAnimation>
          <FadeInAnimation>
            <p className="!leading-loose text-sm md:text-base">
              Espacio TEC forma parte de{" "}
              <strong>
                &quot;La Asociación Civil Unión 20 de Agosto&quot;
              </strong>
              , de la cual forma parte, y tiene su origen en un proyecto de
              tratamiento de RAAES (residuos de aparatos eléctricos y
              electrónicos).
            </p>
          </FadeInAnimation>
          <FadeInAnimation>
            <p className="!leading-loose text-sm md:text-base">
              Con una creciente colección de equipos informáticos, consolas y
              calculadoras, este lugar ofrece una muestra permanente y
              actividades como muestras itinerantes, charlas temáticas y
              encuentros de comunidades relacionadas con la informática.
            </p>
          </FadeInAnimation>
          <FadeInAnimation>
            <p className="!leading-loose text-sm md:text-base">
              Promovemos la sustentabilidad y el consumo responsable,
              concientizando sobre la obsolescencia tecnológica y su impacto en
              el medio ambiente.
            </p>
          </FadeInAnimation>
        </div>
        <ImagesGrid />
      </div>
    </div>
  );
};

export default SectionAbout;
