'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=1200&q=80',
    title: 'Welcome to Bella Italia',
    subtitle: 'Experience Authentic Italian Cuisine',
    buttonText: 'View Menu',
    buttonLink: '/menu',
  },
  {
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80',
    title: 'Great Food Awaits',
    subtitle: 'Fresh Ingredients, Amazing Taste',
    buttonText: 'Book Table',
    buttonLink: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
    title: 'Join Us Today',
    subtitle: 'Reserve Your Table Now',
    buttonText: 'Contact Us',
    buttonLink: '/contact',
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => setLoaded(true), 500);
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearTimeout(loadTimer);
      clearInterval(interval);
    };
  }, []);

  if (!loaded) {
    return (
      <div className="hero-loading">
        <div className="loading-spinner"></div>
        <p>Loading slider...</p>
      </div>
    );
  }

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
            <a href={slide.buttonLink} className="btn">
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === current ? 'active' : ''}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
