import { HeroCarousel } from '@/components/HeroCarousel';
import { OurJourney } from '@/components/OurJourney';

const heroImages = [
  '/assets/hero/slide-1.jpg',
  '/assets/hero/slide-2.jpg',
  '/assets/hero/slide-3.jpg',
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="h-screen w-full relative">
        <HeroCarousel images={heroImages} />
      </section>
      <OurJourney />
    </main>
  );
}
