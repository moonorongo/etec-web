"use client";
import { syne } from "@/app/layout";
import classNames from "classnames";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import FadeInAnimation from "./FadeInAnimation";

const SectionSponsors = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const transform = useTransform(scrollYProgress, [0.5, 1], [50, 0]);

  return (
    <section className="mb-40 px-4">
      <div className="container max-w-3xl space-y-8 mx-auto text-center my-12 flex justify-center">
        <FadeInAnimation>
          <h2
            className={classNames(
              "text-2xl lg:text-4xl font-semibold",
              syne.className
            )}
          >
            Los Patrocinadores que hacen posible Espacio TEC
          </h2>
        </FadeInAnimation>
      </div>
      <motion.div
        ref={ref}
        className="grid max-w-4xl mx-auto gap-4"
        style={{ translateY: transform }}
      >
        <div className="flex justify-center my-4">
          <Link href="https://www.lirium.com/" target={"_blank"}>
            <Image
              src="/sponsors/lirium.png"
              alt=""
              width={332}
              height={58}
              className="grayscale-0 hover:grayscale transition"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <Link href="https://misentarho.com.ar" target={"_blank"}>
            <Image
              src="/sponsors/MR_logo.png"
              alt=""
              width={190}
              height={58}
              className="grayscale-0 hover:grayscale transition w-[120px] md:w-[180px]"
            />
          </Link>
          <Link href="https://linktr.ee/osolabs" target={"_blank"}>
            <Image
              src="/sponsors/oso-labs.jpg"
              alt=""
              width={190}
              height={58}
              className="w-[120px] md:w-[190px]"
            />
          </Link>
          <Link
            href="https://www.instagram.com/plocgrafica/?hl=es"
            target={"_blank"}
          >
            <Image
              src="/sponsors/ploc.png"
              alt=""
              width={180}
              height={58}
              className="grayscale-0 hover:grayscale transition w-[120px] md:w-[180px]"
            />
          </Link>
          <Link href="http://hostingbahia.com.ar/" target={"_blank"}>
            <Image
              src="/sponsors/hostingbahia.png"
              alt=""
              width={260}
              height={58}
              className="grayscale-0 hover:grayscale transition w-[160px] md:w-[260px]"
            />
          </Link>
          <Link href="https://www.mastecnologia.com.ar/" target={"_blank"}>
            <Image
              src="/sponsors/mastecnologia.png"
              alt=""
              width={160}
              height={58}
              className="grayscale-0 hover:grayscale transition w-[120px] md:w-[160px]"
            />
          </Link>
          <Link
            href="https://www.instagram.com/somosfans.ok/"
            target={"_blank"}
          >
            <Image
              src="/sponsors/somos-fans.png"
              alt=""
              width={160}
              height={58}
              className="grayscale-0 hover:grayscale transition"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-8 flex-wrap  ">
          <Link href="http://nuvelar.com/" target={"_blank"}>
            <Image
              priority
              src="/sponsors/Logo-Nuvelar.png"
              alt=""
              width={332}
              height={58}
              className="grayscale-0 hover:grayscale transition"
            />
          </Link>

          <Link href="https://dexteel.com/en.html" target={"_blank"}>
            <Image
              priority
              src="/sponsors/dexteel_logo.png"
              alt=""
              width={102}
              height={128}
              className="grayscale-0 hover:grayscale transition"
            />
          </Link>
        </div>
      </motion.div>
      <div className="container max-w-3xl space-y-8 mx-auto text-center my-12 flex justify-center">
        <FadeInAnimation>
          <h2
            className={classNames(
              "text-2xl lg:text-4xl font-semibold",
              syne.className
            )}
          >
            Partners
          </h2>
        </FadeInAnimation>
      </div>
      <div className="flex justify-center my-4 items-center flex-wrap gap-8">
        <Link href="https://www.retrocomputacion.com/" target={"_blank"}>
          <Image
            src="/sponsors/retro.jpg"
            alt=""
            width={332}
            height={100}
            className="grayscale-0 hover:grayscale"
          />
        </Link>
        <Link
          href="https://sites.google.com/view/lahermandaddelspectrum"
          target={"_blank"}
        >
          <Image
            src="/sponsors/la-hermandad.png"
            alt=""
            width={372}
            height={100}
            className="grayscale-0 hover:grayscale"
          />
        </Link>
        <Link href="https://linktr.ee/modohistoriapod" target={"_blank"}>
          <Image
            src="/sponsors/modo-historia.jpg"
            alt=""
            width={232}
            height={100}
            className="grayscale-0 hover:grayscale"
          />
        </Link>
      </div>
    </section>
  );
};

export default SectionSponsors;
