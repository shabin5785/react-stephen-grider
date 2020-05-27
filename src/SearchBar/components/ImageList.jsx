import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = ({ imagelist }) => {
  const images = imagelist.map(im => {
    return <ImageCard id={im.id} image={im} />;
  });
  console.log(images);
  return <div className="image-list">{images}</div>;
};

export default ImageList;
