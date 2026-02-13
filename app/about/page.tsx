import { delay } from '@/lib/delays';
import { TemplateLayout } from '@/components/TemplateLayout';
import Image from 'next/image';

export default async function AboutPage() {
  await delay(300);

  return (
    <TemplateLayout>
      <div className="page-header">
        <h1>About Us</h1>
      </div>

      <div className="page-content">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Bella Italia was founded in 2010 by Chef Marco Rossi, bringing authentic 
              Italian recipes passed down through generations. Our kitchen uses only 
              the freshest locally-sourced ingredients to create dishes that transport 
              you straight to the Italian countryside.
            </p>
            <p>
              Every dish we serve is crafted with love and dedication to tradition. 
              From our handmade pasta to our signature sauces, we believe in the power 
              of simple, quality ingredients.
            </p>
            <h2>Our Mission</h2>
            <p>
              To provide an unforgettable dining experience through exceptional food, 
              warm hospitality, and a passion for Italian culinary traditions.
            </p>
          </div>
          <div className="about-image-wrapper">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
              alt="Bella Italia restaurant interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </TemplateLayout>
  );
}
