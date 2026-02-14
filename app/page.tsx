import { delay } from '@/lib/delays';
import { TemplateLayout } from '@/components/TemplateLayout';
import { HeroSlider } from '@/components/HeroSlider';
import { FeaturedSection } from '@/components/FeaturedSection';
import { MenuPreview } from '@/components/MenuPreview';
import { Testimonials } from '@/components/Testimonials';
import { CTASection } from '@/components/CTASection';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  await delay(6000);

  return (
    <TemplateLayout>
      <HeroSlider />
      <FeaturedSection />
      <MenuPreview />
      <Testimonials />
      <CTASection />
    </TemplateLayout>
  );
}
