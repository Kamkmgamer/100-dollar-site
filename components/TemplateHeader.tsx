'use client';

import { useState } from 'react';
import Link from 'next/link';

export function TemplateHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="template-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <span className="logo-text">Bella Italia</span>
        </Link>

        <nav className="main-nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {mobileOpen && (
        <nav className="mobile-nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
