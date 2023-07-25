"use client";
import classNames from "classnames";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import FadeInAnimation from "./FadeInAnimation";

const ImageItem = ({ className, src, alt }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={classNames(
        "overflow-hidden rounded-lg w-full h-full",
        className
      )}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src={src}
        alt={alt}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        width={600}
        height={600}
      />
    </motion.div>
  );
};

export default ImageItem;
