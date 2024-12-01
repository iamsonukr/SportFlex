import React, { useEffect, useState } from 'react';
import './slider.css';


import { sliderImages as images } from '../../../public/images/slider/sliderImages';

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current === images.length - 1 ? 0 : current + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          className={`slide ${index === current ? 'active' : ''}`}
          key={index}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
}

export default Slider;
