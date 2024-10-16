import React, { useState } from "react";
import ImagePlaceholder from "../assets/images/imagePlaceholder.jpg";

const ImageWithPlaceholder = ({ src, alt, ...restProps }) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    setImageSrc(ImagePlaceholder);
  };

  return <img src={imageSrc} alt={alt} onError={handleError} {...restProps} />;
};

export default ImageWithPlaceholder;
