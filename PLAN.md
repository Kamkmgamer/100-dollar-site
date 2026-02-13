# $100 Restaurant Website - "Cheap WordPress Template"

## Project Overview

**Budget**: $100
**Target**: Small business on tight budget, minimal effort
**Development Time**: 1-2 hours
**Best For**: "I just need something online"

**Vibe**: A cheap WordPress template with basic customization, installed on budget shared hosting, still looks like a template.

---

## Concept

This simulates what a $100 website looks like:
- Bought a cheap template/theme ($20-40)
- Paid someone to install it on cheap hosting
- Changed logo and some colors
- Replaced a few images with stock photos
- Still has default template sections
- Slow, bloated, barely customized

### Realism Factors

1. **Artificial Delays**: 2-4 second delays to simulate cheap shared hosting
2. **Template Appearance**: Still obviously a template, just different colors
3. **Partial Customization**: Some content changed, lots left default
4. **Template Bloat**: Slider plugins, page builders, unused features
5. **Generic Stock Photos**: Obviously stock, slightly relevant
6. **Inconsistent Design**: Mixed fonts, colors, spacing

---

## Technical Specifications

### Stack (Simulated)
- **Frontend**: Next.js mimicking WordPress template
- **Backend**: None
- **Hosting**: Vercel (with delays to simulate cheap hosting)

### Delay Configuration
```typescript
// lib/delays.ts
export const DELAYS = {
  // Simulate cheap shared hosting
  pageLoad: 2000,        // 2 second initial load
  imageLoad: 1500,       // 1.5 second image delays
  sliderDelay: 3000,     // 3 second slider "loading"
  contentRender: 800,    // 800ms content delay
  navigation: 1000,      // 1 second page transitions
};
```

---

## Design Specifications

### "Restaurant Template" Aesthetic
```css
/* Cheap restaurant theme colors */
--theme-primary: #c0392b;      /* Generic "restaurant red" */
--theme-secondary: #2c3e50;    /* Dark blue-gray */
--theme-accent: #e74c3c;       /* Bright red accent */
--theme-light: #ecf0f1;
--theme-dark: #2c3e50;

/* Template fonts (Google Fonts, but basic ones) */
font-family: 'Lato', 'Helvetica', Arial, sans-serif;
font-family: 'Playfair Display', Georgia, serif; /* For headings only */

/* Over-designed template spacing */
padding: 40px 20px; /* Inconsistent */

/* Template shadows and effects */
box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
```

### Template Page Layout
```
┌─────────────────────────────────────────────────────────┐
│  [HEADER]                                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │  [Logo - slightly wrong size]                   │   │
│  │  Home | Menu | Gallery | About | Contact       │   │
│  └─────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────┤
│  [HERO SLIDER - Template Feature]                       │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ┌─────────────────────────────────────────┐   │   │
│  │  │  Stock Photo #1                         │   │   │
│  │  │  "Welcome to Our Restaurant"            │   │   │
│  │  │  [Button: View Menu]                    │   │   │
│  │  └─────────────────────────────────────────┘   │   │
│  │         ○ ● ○ ○ ○ (slider dots)               │   │
│  └─────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────┤
│  [FEATURED SECTION - Template Default]                  │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                  │
│  │ Icon    │ │ Icon    │ │ Icon    │                  │
│  │ Fresh   │ │ Expert  │ │ Great   │                  │
│  │ Food    │ │ Chefs   │ │ Service │                  │
│  └─────────┘ └─────────┘ └─────────┘                  │
├─────────────────────────────────────────────────────────┤
│  [MENU PREVIEW - Barely Customized]                     │
│  ┌─────────────────────────────────────────────────┐   │
│  │  OUR MENU                                        │   │
│  │  ─────────────────────                          │   │
│  │  [Dish 1]  [Dish 2]  [Dish 3]  [Dish 4]        │   │
│  │  Stock photos, generic names                     │   │
│  │                                                  │   │
│  │  [View Full Menu →]                             │   │
│  └─────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────┤
│  [TESTIMONIALS - Template Default]                      │
│  ┌─────────────────────────────────────────────────┐   │
│  │  "Great food!" - John D.                        │   │
│  │  "Amazing service!" - Sarah M.                  │   │
│  │  (Default template testimonials)                 │   │
│  └─────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────┤
│  [CTA SECTION - Generic]                                │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Ready to Dine With Us?                         │   │
│  │  [Make Reservation]  [Contact Us]               │   │
│  └─────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────┤
│  [FOOTER]                                               │
│  About | Menu | Gallery | Contact | Blog (empty)       │
│  © 2024 Bella Italia. Theme by [TemplateCompany]       │
│  [Social icons that don't link anywhere]               │
└─────────────────────────────────────────────────────────┘
```

---

## Features (Minimal)

### What's Included
- [x] Basic responsive (but broken on some devices)
- [x] Hero image slider (slow, laggy)
- [x] Navigation with 4-5 pages
- [x] Basic menu page (just images and names)
- [x] Contact page with form (may not work)
- [x] Google Maps embed
- [x] Social media icons (not linked)
- [x] "Proudly powered by [Template Name]" in footer

### What's Still Broken/Missing
- [ ] No actual online ordering
- [ ] No reservation system
- [ ] No SEO optimization
- [ ] No accessibility
- [ ] Images not optimized
- [ ] Mobile menu broken half the time
- [ ] Contact form might not actually send
- [ ] Template credits still visible
- [ ] Demo content still in places

### Template Artifacts Left In
- "Theme by TemplateMonster" footer link
- Demo testimonials
- Default slider images mixed with actual ones
- "Your Company Name" in some places
- Blog section (empty)
- Unused shortcode text: [gallery columns="4"]
- Admin bar for logged-in users

---

## Content (Partially Customized)

### Restaurant Info
```
Name: Bella Italia
Logo: [Their logo, slightly stretched]
Colors: Changed to red (generic restaurant color)

Hero Slider:
  Slide 1: "Welcome to Bella Italia" (customized)
  Slide 2: "Experience Great Food" (default template text)
  Slide 3: "Join Us Today" (default template text)
  
Menu Items:
  - Stock photos of pasta/pizza
  - Generic names: "Pasta Dish", "Chicken Entree"
  - No descriptions or prices in some places
  
Testimonials (Default Template):
  "The best restaurant in town! Love the food."
  "Amazing atmosphere and great service."
  "My favorite place to dine. Highly recommend!"
  
Footer:
  © 2024 Bella Italia
  Restaurant Theme by ThemeForest Author
```

---

## Performance (Poor)

### Target Metrics
- **Page Load**: 3-5 seconds
- **Time to Interactive**: 5-7 seconds
- **Bundle Size**: Bloated (unused plugins)
- **Lighthouse Score**: 30-40

### Simulated Issues
```typescript
// Simulate cheap hosting
export const cheapHostingSimulation = {
  // Slower than $20, but better than free
  serverDelay: 2000,
  
  // Template bloat
  assetDelay: {
    sliderPlugin: 3000,
    pageBuilderJS: 2000,
    googleFonts: 1500,
    images: 2000,
  },
  
  // Unused features loaded
  unusedAssets: [
    'revolution-slider.css',    // 500KB
    'visual-composer.min.js',   // 300KB
    'contact-form-7.js',        // 100KB
    'woocommerce.css',          // Included but not used
    'elementor-icons.css',      // 200KB
  ],
  
  // Cumulative layout shift
  layoutIssues: {
    heroImageShift: true,
    sliderResize: true,
    fontSwap: true,
  },
};
```

---

## Implementation

### File Structure
```
hundred_dollar_site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Home with slider
│   ├── menu/
│   │   └── page.tsx          # Basic menu
│   ├── gallery/
│   │   └── page.tsx          # Template gallery
│   ├── about/
│   │   └── page.tsx          # Default about page
│   ├── contact/
│   │   └── page.tsx          # Contact form
│   ├── globals.css
│   └── loading.tsx
├── components/
│   ├── TemplateLayout.tsx    # WordPress template wrapper
│   ├── HeroSlider.tsx        # Slow template slider
│   ├── FeaturedSection.tsx   # Template icon boxes
│   ├── MenuPreview.tsx       # Menu grid
│   ├── Testimonials.tsx      # Fake testimonials
│   ├── TemplateFooter.tsx    # Footer with credits
│   └── DelayedImage.tsx      # Slow image loader
├── lib/
│   └── delays.ts
├── public/
│   └── images/
│       ├── hero-1.jpg        # Stock photo
│       ├── hero-2.jpg        # Another stock
│       ├── menu-*.jpg        # Stock food photos
│       └── logo.png          # Slightly wrong size
└── package.json
```

### Home Page Component
```tsx
// app/page.tsx
import { delay } from '@/lib/delays';
import { TemplateLayout } from '@/components/TemplateLayout';
import { HeroSlider } from '@/components/HeroSlider';
import { FeaturedSection } from '@/components/FeaturedSection';
import { MenuPreview } from '@/components/MenuPreview';
import { Testimonials } from '@/components/Testimonials';
import { CTASection } from '@/components/CTASection';

export default async function HomePage() {
  // Simulate cheap hosting delay
  await delay(2000);
  
  return (
    <TemplateLayout>
      {/* Template hero slider - slow to load */}
      <HeroSlider />
      
      {/* Template "features" section */}
      <FeaturedSection />
      
      {/* Barely customized menu preview */}
      <MenuPreview />
      
      {/* Default template testimonials */}
      <Testimonials />
      
      {/* Generic CTA */}
      <CTASection />
    </TemplateLayout>
  );
}
```

### Slow Hero Slider
```tsx
// components/HeroSlider.tsx
'use client';

import { useState, useEffect } from 'react';
import { delay } from '@/lib/delays';

const slides = [
  {
    image: '/images/hero-1.jpg',
    title: 'Welcome to Bella Italia',
    subtitle: 'Experience Authentic Italian Cuisine',
    buttonText: 'View Menu',
    buttonLink: '/menu',
  },
  {
    image: '/images/hero-2.jpg',
    title: 'Great Food Awaits', // Default template text
    subtitle: 'Fresh Ingredients, Amazing Taste',
    buttonText: 'Book Table',
    buttonLink: '/contact',
  },
  {
    image: '/images/hero-3.jpg',
    title: 'Join Us Today', // Default template text
    subtitle: 'Reserve Your Table Now',
    buttonText: 'Contact Us',
    buttonLink: '/contact',
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate slider plugin loading
    delay(3000).then(() => setLoaded(true));
    
    // Auto-advance slider
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  if (!loaded) {
    return (
      <div className="hero-loading">
        <div className="loading-spinner" />
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
          <img src={slide.image} alt="" />
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
            <a href={slide.buttonLink} className="btn">
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}
      
      {/* Slider dots */}
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
```

### Template Menu Preview
```tsx
// components/MenuPreview.tsx
import { DelayedImage } from './DelayedImage';

const menuItems = [
  { name: 'Pasta Dish', image: '/images/menu-1.jpg', price: '$15' },
  { name: 'Chicken Entree', image: '/images/menu-2.jpg', price: '$18' },
  { name: 'Seafood Plate', image: '/images/menu-3.jpg', price: '$22' },
  { name: 'Gourmet Salad', image: '/images/menu-4.jpg', price: '$12' },
];

export function MenuPreview() {
  return (
    <section className="menu-preview">
      <div className="section-header">
        <h2>Our Menu</h2>
        <div className="decorative-line" />
      </div>
      
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <DelayedImage src={item.image} alt={item.name} delay={1000 + index * 500} />
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
```

### Template Footer
```tsx
// components/TemplateFooter.tsx
export function TemplateFooter() {
  return (
    <footer className="template-footer">
      <div className="footer-widgets">
        {/* Left empty - template default */}
        <div className="widget">
          <h4>About Us</h4>
          <p>Bella Italia is your destination for authentic Italian cuisine...</p>
        </div>
        
        <div className="widget">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li> {/* Empty */}
          </ul>
        </div>
        
        <div className="widget">
          <h4>Contact Info</h4>
          <p>123 Main Street</p>
          <p>Anytown, USA 12345</p>
          <p>(555) 123-4567</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          © 2024 Bella Italia. All Rights Reserved.
        </p>
        <p className="template-credit">
          Restaurant Theme by <a href="#">ThemeForestAuthor</a>
        </p>
        <div className="social-icons">
          {/* Non-functional social links */}
          <a href="#" className="icon-facebook">FB</a>
          <a href="#" className="icon-instagram">IG</a>
          <a href="#" className="icon-twitter">TW</a>
        </div>
      </div>
    </footer>
  );
}
```

---

## CSS (Template Style)

```css
/* app/globals.css */

/* Template reset + bloat */
@import url('https://fonts.googleapis.com/css?family=Lato:400,700|Playfair+Display:400,700');

/* Include template defaults */
:root {
  --primary: #c0392b;
  --secondary: #2c3e50;
  --accent: #e74c3c;
  --light: #ecf0f1;
  --dark: #2c3e50;
  --text: #333;
}

/* Over-specific selectors (template style) */
.page .content .section .container .menu-grid .menu-item {
  /* Template bloat */
}

/* Hero Slider */
.hero-slider {
  position: relative;
  height: 600px;
  overflow: hidden;
}

.hero-slider .slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1s;
}

.hero-slider .slide.active {
  opacity: 1;
}

.hero-slider .slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-slider .slide-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Section styling */
.section-header {
  text-align: center;
  padding: 60px 20px;
}

.section-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  color: var(--secondary);
}

.decorative-line {
  width: 60px;
  height: 3px;
  background: var(--primary);
  margin: 20px auto;
}

/* Menu grid */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 0 20px 60px;
}

@media (max-width: 768px) {
  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.menu-item {
  text-align: center;
}

.menu-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
}

.menu-item h3 {
  margin: 15px 0 5px;
  font-family: 'Playfair Display', serif;
}

.menu-item .price {
  color: var(--primary);
  font-weight: bold;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 12px 30px;
  background: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: 3px;
  transition: background 0.3s;
}

.btn:hover {
  background: var(--accent);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}

.btn-outline:hover {
  background: var(--primary);
  color: white;
}

/* Template footer */
.template-footer {
  background: var(--secondary);
  color: white;
  padding: 60px 20px 20px;
}

.footer-widgets {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-bottom {
  text-align: center;
  padding-top: 40px;
  margin-top: 40px;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.template-credit {
  font-size: 12px;
  opacity: 0.7;
}

.template-credit a {
  color: white;
}

/* Loading states */
.hero-loading {
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #e0e0e0;
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## Checklist

- [ ] Create WordPress template-like layout
- [ ] Add artificial delays (2-4 seconds)
- [ ] Implement slow hero slider
- [ ] Add default template sections (features, testimonials)
- [ ] Include stock photos
- [ ] Add partially customized content
- [ ] Include template footer credits
- [ ] Add broken/non-functional social links
- [ ] Basic responsive (broken on some viewports)
- [ ] Include unused CSS (template bloat)
- [ ] Generic restaurant colors (red)
- [ ] Mix of custom and default content

---

## The $100 Website Experience

When someone visits this site, they should experience:
1. **2-4 second initial load** - cheap hosting
2. **"This looks like a template"** - because it is
3. **Slow slider animation** - template plugin
4. **Generic content** - barely customized
5. **Some customization** - logo and colors changed
6. **Template credits** - still in footer
7. **Broken elements** - some things don't work
8. **"Better than nothing"** - but not by much

This is what $100 actually gets you - a template with your logo and colors, still obviously a template.
