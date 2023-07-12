import React from "react";
import ImageItem from "./ImageItem";

const ImagesGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ImageItem src="/grid-image-01.jpg" alt="image" />
      <ImageItem src="/grid-image-02.jpg" alt="image" />
      <ImageItem src="/grid-image-03.jpg" alt="image" />
      <ImageItem src="/grid-image-04.jpg" alt="image" />
    </div>
  );
};

export default ImagesGrid;
