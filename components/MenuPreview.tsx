'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const menuItems = [
  { name: 'Pasta Carbonara', price: '$15', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80' },
  { name: 'Margherita Pizza', price: '$18', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80' },
  { name: 'Grilled Salmon', price: '$22', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80' },
  { name: 'Caesar Salad', price: '$12', image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&q=80' },
];

export function MenuPreview() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return (
      <section className="menu-preview">
        <div className="section-header">
          <h2>Our Menu</h2>
          <div className="decorative-line"></div>
        </div>
        <div className="menu-loading">Loading menu items...</div>
      </section>
    );
  }

  return (
    <section className="menu-preview">
      <div className="section-header">
        <h2>Our Menu</h2>
        <div className="decorative-line"></div>
      </div>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="menu-image-wrapper">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="menu-image"
                sizes="(max-width: 900px) 50vw, 25vw"
              />
            </div>
            <h3>{item.name}</h3>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>

      <div className="section-cta">
        <a href="/menu" className="btn btn-outline">
          View Full Menu →
        </a>
      </div>
    </section>
  );
}
