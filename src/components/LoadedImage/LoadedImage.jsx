'use client';

import React from 'react';
import Image from 'next/image';

const imageLoader = ({ src, width, quality }) => {
  return `https://images.unsplash.com/${src}?auto=format&fit=crop&w=${width}&q=${quality || 75}`;
};

const LoadedImage = ({ src, alt, width, height, className }) => {
  return (
    <Image
      loader={imageLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default LoadedImage;