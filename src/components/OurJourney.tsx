'use client';

import Image from 'next/image';

export function OurJourney() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/journey/bg.jpg"
                    alt="Factories Background"
                    fill
                    className="object-cover"
                />
                {/* Blue Overlay - using a gradient for depth */}
                <div className="absolute inset-0 bg-blue-950/85 z-10" />
            </div>

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-6 md:px-12 h-screen flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 w-full items-center">

                    {/* Left Column: Text */}
                    <div className="text-white max-w-2xl">
                        <h2 className="text-5xl md:text-7xl font-bebas font-bold mb-8 tracking-wide italic leading-none">
                            OUR JOURNEY
                        </h2>

                        <div className="space-y-6 text-lg font-light text-gray-200 leading-relaxed font-sans">
                            <p>
                                To expand the manufacturing operations in South Asia, Taikisha in the year
                                2007 ventured out to establish state-of-the-art manufacturing in Pune as
                                Taikisha India. This facility is equipped with multiple high endurance
                                machines like laser CNC punching, CNC bending and many more.
                            </p>
                            <p>
                                The key reason to establish the facility was to manufacture Taikisha&apos;s own product
                                which included painting systems and, in an attempt to diversify, Taikisha in
                                2009 by using the latest technologies also got involved in other areas of
                                sheet metal forming and assembly.
                            </p>
                            <p>
                                To meet our esteemed clientele&apos;s expectations, Taikisha India in 2013
                                embarked on expanding the business and installed a plant in Vadodara,
                                Gujarat, equipped with the latest quality machines.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Circle Graphic */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative group cursor-pointer w-96 h-96 flex items-center justify-center">
                            {/* Circle 4 (outermost, most transparent, pulsing) */}
                            <div className="absolute inset-0 rounded-full bg-white/10 animate-pulseRing" />

                            {/* Circle 3 (pulsing) */}
                            <div className="absolute inset-6 rounded-full bg-white/20 animate-pulseRing" />

                            {/* Circle 2 (pulsing) */}
                            <div className="absolute inset-12 rounded-full bg-white/40 animate-pulseRing" />

                            {/* Inner Circle (solid, static) */}
                            <div className="w-60 h-60 bg-white rounded-full flex flex-col items-center justify-center text-center shadow-2xl z-10 border-4 border-white/50">
                                <span className="font-bebas text-[2rem] font-bold leading-none tracking-wide text-blue-700">
                                    OUR
                                </span>
                                <span className="font-bebas text-[2rem] font-bold leading-none tracking-wide text-blue-700">
                                    SERVICES
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}






