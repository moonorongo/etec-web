"use client";
import classNames from "classnames";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import FadeInAnimation from "./FadeInAnimation";

const ImageItem = ({ className, src, alt }) => {
  return (
    <motion.div
      className={classNames(
        "overflow-hidden rounded-lg w-full h-full",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
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
