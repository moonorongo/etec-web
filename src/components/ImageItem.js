import classNames from "classnames";
import Image from "next/image";
import React from "react";

const ImageItem = ({ className, src, alt }) => {
  return (
    <div
      className={classNames(
        "overflow-hidden rounded-lg w-full h-full",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        width={600}
        height={600}
      />
    </div>
  );
};

export default ImageItem;
