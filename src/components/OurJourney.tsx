'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function OurJourney() {
    const [view, setView] = useState<'journey' | 'services'>('journey');
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Defaulting to Blasting (index 3)
    const [activeServiceImg, setActiveServiceImg] = useState('/assets/journey/SpecialFabrication_bg.jpg');
    const [activeIndex, setActiveIndex] = useState<number>(3);

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isTransitioning) return;
        setIsTransitioning(true);

        setTimeout(() => {
            setView(prev => (prev === 'journey' ? 'services' : 'journey'));
            setIsTransitioning(false);
        }, 500);
    };

    const handleServiceClick = (e: React.MouseEvent, bgPath: string, index: number) => {
        e.stopPropagation();
        setActiveServiceImg(bgPath);
        setActiveIndex(index);
    };

    const serviceItems = [
        {
            icon: '/assets/journey/icon/CustomWelding.svg',
            color: '#7e7cc9',
            angle: 0,
            bg: '/assets/journey/CustomWelding_bg.jpg',
            title: "CUSTOM WELDING",
            paragraph: `In our facility we assure to provide a customized automated welding solution to any
particular welding application while maintaining perfection. We can work on
multiple metals and are equipped to carry out any specific or unique requirement
from the client.`
        },
        {
            icon: '/assets/journey/icon/Painting.svg',
            color: '#5D5C9E',
            angle: 90,
            bg: '/assets/journey/Painting_bg.jpg',
            title: "PAINTING",
            paragraph: `Our long-standing experience and solid process expertise guarantee an integrated
approach to achieve perfect paint finish and a sound seal through modern spray
booth concepts with robots and application technology to improve the quality and
efficiency of your manual production.`
        },
        {
            icon: '/assets/journey/icon/Blasting.svg',
            color: '#5D5C9E',
            angle: 180,
            bg: '/assets/journey/Blasting_bg.jpg',
            title: "BLASTING",
            paragraph: `A fast and economical process for smoothing a rough surface, roughening a
smooth surface, shaping a surface, removing existing coatings, and cleaning off
contaminants such as rust and scale. We can restore surfaces to their original
condition or clean and prepare them for painting and coating through our blasting
expertise we acquired over years of working with MNCs.`
        },
        {
            icon: '/assets/journey/icon/SpecialFabrication.svg',
            color: '#5D5C9E',
            angle: 270,
            bg: '/assets/journey/SpecialFabrication_bg.jpg',
            title: "SPECIAL FABRICATION",
            paragraph: `We offer specialized fabrication of engineering products to all our foreign and
domestic clients from our two facilities in Pune and Vadodara. In our past we have
delivered Driver cabin, AUX cab for loco, Crew cabin, Rail metro parts and traction
transformer tank. This gained us very valuable clients like - Sulzer, Bombardier, ABB
Scheron, Rieter, Wohr car parking, Chromewell, John Deere, Plasser, Tata and
Kirloskar.`
        },
    ];

    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-black">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out">
                <div className={cn("absolute inset-0 transition-opacity duration-1000", view === 'journey' ? 'opacity-100' : 'opacity-0')}>
                    <Image src="/assets/journey/bg.jpg" alt="Journey Background" fill className="object-cover" priority />
                </div>

                {/* <div className={cn("absolute inset-0 transition-opacity duration-1000", view === 'services' ? 'opacity-100' : 'opacity-0')}>
                    <Image src={activeServiceImg} alt="Service Background" fill className="object-cover transition-all duration-700" />
                </div> */}

                <div
                    className={cn(
                        "absolute inset-0 transition-opacity duration-1000",
                        view === 'services' ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    {/* Service Background Image */}
                    <Image
                        src={activeServiceImg}
                        alt="Service Background"
                        fill
                        className="object-cover transition-all duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
                </div>

            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 md:px-12 h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 w-full items-center">

                    {/* Left Column - Dynamic Text */}
                    <div className={cn(
                        "text-white max-w-2xl transition-all duration-500 ease-in-out transform",
                        isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                    )}>
                        {view === 'journey' ? (
                            <>
                                <h2 className="text-5xl md:text-5xl font-bebas font-bold mb-8 tracking-wide italic leading-none">OUR JOURNEY</h2>
                                <div className="space-y-6 text-lg font-light text-gray-200 leading-relaxed">
                                    <p>To expand the manufacturing operations in South Asia, Taikisha in the year
2007 ventured out to establish state-of-the-art manufacturing in Pune as
Taikisha India. This facility is equipped with multiple high endurance
machines like laser CNC punching, CNC bending and many more. The key
reason to establish the facility was to manufacture Taikisha's own product
which included painting systems and, in an attempt to diversify, Taikisha in
2009 by using the latest technologies also got involved in other areas of
sheet metal forming and assembly.</p>
                                    <p>To meet our esteemed clientele's expectations, Taikisha India in 2013
embarked on expanding the business and installed a plant in Vadodara,
Gujarat, equipped with the latest quality machines.</p>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Dynamically rendered Title and Paragraph based on activeIndex */}
                                <h2 className="text-[2rem] font-bebas italic font-bold text-white mb-6 uppercase">
                                    {serviceItems[activeIndex].title}
                                </h2>
                                <p className="text-lg text-gray-200 mb-6 max-w-lg leading-relaxed">
                                    {serviceItems[activeIndex].paragraph}
                                </p>
                            </>
                        )}
                    </div>

                    {/* Right Column */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative flex items-center justify-center w-[450px] h-[450px]">

                            {view === 'journey' && (
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute inset-0 rounded-full bg-white/10 animate-pulseRing" />
                                    <div className="absolute inset-12 rounded-full bg-white/20 animate-pulseRing" />
                                    <div className="absolute inset-24 rounded-full bg-white/40 animate-pulseRing" />
                                </div>
                            )}

                            {view === 'services' && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg viewBox="0 0 600 600" width="550" height="550">
                                        <g transform="rotate(0 300 300)">
                                            {serviceItems.map((item, i) => {
                                                const cx = 300, cy = 300, outerR = 277, innerR = 92, spread = 43;
                                                const polar = (r: number, a: number) => {
                                                    const rad = (a - 90) * Math.PI / 180;
                                                    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
                                                };
                                                const start = item.angle - spread;
                                                const end = item.angle + spread;
                                                const d = `M ${polar(outerR, start + 10).x} ${polar(outerR, start + 10).y} A ${outerR} ${outerR} 0 0 1 ${polar(outerR, end - 10).x} ${polar(outerR, end - 10).y} Q ${polar(outerR, end).x} ${polar(outerR, end).y} ${polar(outerR - 10, end).x} ${polar(outerR - 10, end).y} L ${polar(innerR + 10, end).x} ${polar(innerR + 10, end).y} Q ${polar(innerR, end).x} ${polar(innerR, end).y} ${polar(innerR, end - 10).x} ${polar(innerR, end - 10).y} A ${innerR} ${innerR} 0 0 0 ${polar(innerR, start + 10).x} ${polar(innerR, start + 10).y} Q ${polar(innerR, start).x} ${polar(innerR, start).y} ${polar(innerR + 10, start).x} ${polar(innerR + 10, start).y} L ${polar(outerR - 10, start).x} ${polar(outerR - 10, start).y} Q ${polar(outerR, start).x} ${polar(outerR, start).y} ${polar(outerR, start + 10).x} ${polar(outerR, start + 10).y} Z`;
                                                const iconPos = polar((outerR + innerR) / 2, item.angle);
                                                const iconSize = 224;

                                                return (
                                                    <g
                                                        key={i}
                                                        className="cursor-pointer transition-all duration-300 hover:brightness-110"
                                                        onClick={(e) => handleServiceClick(e, item.bg, i)}
                                                    >
                                                        <path d={d} fill={activeIndex === i ? '#A3A2E5' : item.color} />
                                                        <g transform={`rotate(0 ${iconPos.x} ${iconPos.y})`}>
                                                            <image href={item.icon} x={iconPos.x - iconSize / 2} y={iconPos.y - iconSize / 2} width={iconSize} height={iconSize} />
                                                        </g>
                                                    </g>
                                                );
                                            })}
                                        </g>
                                    </svg>
                                </div>
                            )}

                            {/* Center Button */}
                            <div
                                onClick={handleToggle}
                                className={cn(
                                    "absolute z-10 rounded-full flex flex-col items-center justify-center text-center shadow-2xl bg-[#f0f4f8] transition-all duration-700 cursor-pointer",
                                    view === 'services' ? "w-32 h-32" : "w-60 h-60"
                                )}
                            >
                                <span className="font-bebas text-[1.8rem] font-bold text-blue-800 leading-tight">
                                    {view === 'journey' ? 'OUR' : ''}
                                </span>
                                <span className="font-bebas text-[1.8rem] font-bold text-blue-800 leading-tight">
                                    {view === 'journey' ? 'SERVICES' : ''}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}