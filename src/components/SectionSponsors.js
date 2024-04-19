"use client";
import { syne } from "@/app/layout";
import classNames from "classnames";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { BiNews } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { CircleButton } from "./CircleButton";
import FadeInAnimation from "./FadeInAnimation";

const SectionSponsors = () => {
  const [hover, setHover] = useState(false);
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
          <Link href="http://nuvelar.com/" target={"_blank"}>
            <Image
              src="/sponsors/Logo-Nuvelar.png"
              alt=""
              width={332}
              height={58}
            />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <Link href="https://misentarho.com.ar" target={"_blank"}>
            <Image
              src="/sponsors/MR_logo.png"
              alt=""
              width={140}
              height={58}
              className="grayscale-0 hover:grayscale transition"
            />
          </Link>
          <Link href="https://linktr.ee/osolabs" target={"_blank"}>
            <Image
              src="/sponsors/oso-labs.jpg"
              alt=""
              width={140}
              height={58}
            />
          </Link>
          <Link href="http://hostingbahia.com.ar/" target={"_blank"}>
            <Image
              src="/sponsors/hostingbahia.png"
              alt=""
              width={210}
              height={58}
              className="grayscale-0 hover:grayscale transition"
            />
          </Link>
          <Link href="https://www.mastecnologia.com.ar/" target={"_blank"}>
            <Image
              src="/sponsors/mastecnologia.png"
              alt=""
              width={130}
              height={58}
              className="grayscale-0 hover:grayscale transition"
            />
          </Link>
          <Link
            href="https://www.instagram.com/plocgrafica/?hl=es"
            target={"_blank"}
          >
            <Image
              src="/sponsors/ploc.png"
              alt=""
              width={130}
              height={58}
              className="grayscale-0 hover:grayscale transition"
            />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionSponsors;
