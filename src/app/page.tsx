'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroCarousel } from '@/components/HeroCarousel';
import { OurJourney } from '@/components/OurJourney';
import { Gallery } from '@/components/Gallery';
import { PlantVideo } from '@/components/PlantVideo';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  '/assets/hero/slide-1.jpg',
  '/assets/hero/slide-2.jpg',
  '/assets/hero/slide-3.jpg',
];

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!mainRef.current) return;
      
      const sections = gsap.utils.toArray('section');
      
      // We create a ScrollTrigger for each section to "catch" the scroll
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section as HTMLElement,
          start: "top bottom", // When the top of the section enters the bottom of the viewport
          end: "top top",    // Until the top of the section reaches the top of the viewport
          snap: {
            snapTo: 1, // Snap 100% to the "end" position (top top)
            duration: { min: 0.5, max: 0.8 },
            delay: 0,
            ease: "power3.inOut" // Stronger ease to pull it all the way up
          }
        });
      });
    }, mainRef);

    // Synchronize with Lenis
    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <main ref={mainRef} className="relative w-full">
      {/* All interactive sections must be exactly h-screen */}
      <section className="h-screen w-full relative overflow-hidden">
        <HeroCarousel images={heroImages} />
      </section>

      <section className="h-screen w-full relative overflow-hidden">
        <OurJourney />
      </section>

      <section className="h-screen w-full relative overflow-hidden">
        <Gallery />
      </section>

      <section className="h-screen w-full relative overflow-hidden">
        <PlantVideo />
      </section>

      {/* Footer is h-auto, so the snapping logic above handles it as a normal end-point */}
      <section className="h-auto w-full relative overflow-hidden">
        <Footer />
      </section>
    </main>
  );
}