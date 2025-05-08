import React, { useEffect, useState } from 'react';
import './hero.css';

const images = [
  'https://picsum.photos/id/11/800/500',
  'https://picsum.photos/id/22/800/500',
  'https://picsum.photos/id/33/800/500',
  'https://picsum.photos/id/44/800/500',
  'https://picsum.photos/id/55/800/500'
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  return (
    <div className="hero">
      <div className="slideshow-container">
        <div
          className="slides-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="slide-image"
            />
          ))}
        </div>
        <button onClick={goToPrevious} className="nav-button prev">❮</button>
        <button onClick={goToNext} className="nav-button next">❯</button>
      </div>
    </div>
  );
};

export default Hero;