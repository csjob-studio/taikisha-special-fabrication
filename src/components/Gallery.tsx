'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

const galleryImages = [
    '/assets/gallery/slide-1.jpg',
    '/assets/gallery/slide-2.jpg',
    '/assets/gallery/slide-3.jpg',
];

export function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const slideDuration = 1;

    const { contextSafe } = useGSAP({ scope: containerRef });

    const goToSlide = contextSafe((index: number) => {
        if (index < 0) index = galleryImages.length - 1;
        if (index >= galleryImages.length) index = 0;

        setCurrentIndex(index);

        // Animate the track
        gsap.to('.gallery-track', {
            xPercent: -100 * index,
            duration: slideDuration,
            ease: "power3.inOut",
        });
    });

    const nextSlide = () => goToSlide(currentIndex + 1);
    const prevSlide = () => goToSlide(currentIndex - 1);

    return (
        <section className="bg-black w-full h-full relative overflow-hidden">
           <div className="mx-auto max-w-7xl w-full h-full px-6 md:px-12 flex items-center justify-center">            
                {/* Carousel Container */}
               <div ref={containerRef} className="relative w-full max-h-[70vh] aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-gray-900">

                    {/* Track */}
                    <div className="gallery-track flex w-full h-full">
                        {galleryImages.map((src, index) => (
                            <div key={index} className="w-full h-full flex-shrink-0 relative">
                                <Image
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay Gradient for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-sm transition-all border border-white/20 z-10 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-sm transition-all border border-white/20 z-10 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-0.5 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    {/* Pagination Dots */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                        {galleryImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all duration-300",
                                    currentIndex === index ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
                                )}
                            />
                        ))}
                    </div>

                    {/* Counter */}
                    <div className="absolute top-6 right-6 z-10 font-bebas text-white/80 text-xl tracking-widest bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                        {String(currentIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
                    </div>

                </div>

            </div>
        </section>
    );
}
