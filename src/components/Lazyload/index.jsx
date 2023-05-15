import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Lazyload = ({ src, className }) => (
    <LazyLoadImage
      alt="background image"
      effect="blur"
      src={src}
    />
);

export default Lazyload;