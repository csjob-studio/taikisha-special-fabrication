'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

interface HeroCarouselProps {
    images: string[];
}

const slideContent = [
    {
        heading: "SPECIAL FABRICATION TECHNOLOGIES",
        paragraph: "The two remarkable facilities, at Pune and Vadodara, are equipped with neoteric technologies to only serve our clients in the best manner possible."
    },
];

export function HeroCarousel({ images }: HeroCarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slideDuration = 1.8;
    const stayTime = 3;

    const { contextSafe } = useGSAP({ scope: containerRef });

    const goToSlide = useCallback(
        (index: number) => {
            const animate = contextSafe(() => {
                if (isAnimating || index === currentIndex) return;
                setIsAnimating(true);

                const slides = gsap.utils.toArray<HTMLElement>('.hero-slide');
                const currentSlide = slides[currentIndex];
                const nextSlide = slides[index];

                gsap.set(nextSlide, { xPercent: 100, autoAlpha: 1, zIndex: 30 });
                gsap.set(currentSlide, { zIndex: 20, xPercent: 0 });

                const tl = gsap.timeline({
                    onComplete: () => {
                        setIsAnimating(false);
                        setCurrentIndex(index);
                        slides.forEach((slide, i) => {
                            if (i !== index) gsap.set(slide, { autoAlpha: 0, zIndex: 0, xPercent: 100 });
                        });
                    },
                });

                tl.to(currentSlide, { xPercent: -30, duration: slideDuration, ease: 'power3.inOut' })
                    .to(nextSlide, { xPercent: 0, duration: slideDuration, ease: 'power3.inOut' }, '<');
            });
            animate();
        },
        [currentIndex, isAnimating, contextSafe]
    );

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                const nextIndex = (currentIndex + 1) % images.length;
                goToSlide(nextIndex);
            }
        }, (stayTime + slideDuration) * 1000);
        return () => clearInterval(interval);
    }, [currentIndex, isAnimating, images.length, goToSlide]);

    return (
        <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black font-sans">

            {/* 1. SLIDING IMAGES LAYER */}
            <div className="absolute inset-0 z-10">
                {images.map((src, index) => (
                    <div
                        key={src}
                        className="hero-slide absolute inset-0 w-full h-full will-change-transform"
                        style={{ zIndex: index === 0 ? 20 : 0, opacity: index === 0 ? 1 : 0 }}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-black/40" />
                        </div>
                    </div>
                ))}
            </div>

            {/* 2. STABLE TEXT LAYER */}
            <div className="absolute inset-0 flex items-center z-50 pointer-events-none">
                <div className="container mx-auto px-6 md:px-12 pointer-events-auto">
                    <div className="max-w-2xl text-left -translate-y-12">
                        {/* UPDATED CLASSES: 
                           - text-[2rem] for exact 2rem font size
                           - Removed 'italic'
                        */}
                        <h2 className="text-[2rem] font-bebas font-bold text-white mb-6 tracking-tight leading-none uppercase">
                            {slideContent[0].heading}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light max-w-lg">
                            {slideContent[0].paragraph}
                        </p>
                    </div>
                </div>
            </div>

            {/* 3. NAVIGATION & OVERLAYS */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 flex gap-4 items-center">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        disabled={isAnimating}
                        className={cn(
                            'w-2.5 h-2.5 rounded-full transition-all duration-500 border border-white/40',
                            currentIndex === index ? 'bg-white scale-100 border-white' : 'bg-white/20 scale-100 hover:bg-white/50'
                        )}
                    />
                ))}
            </div>
            <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-40" />
        </div>
    );
}