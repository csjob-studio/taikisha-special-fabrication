'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export function PlantVideo() {
    return (
        <section className="relative w-full h-screen overflow-hidden flex flex-col md:flex-row font-bebas">

            {/* Left Side: Pune Plant */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full group overflow-hidden cursor-pointer">
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <Image
                        src="/assets/plant-video/left-bg.jpg"
                        alt="Pune Plant"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                {/* Centered Text Strip */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full bg-black/60 backdrop-blur-sm py-4 md:py-6 flex justify-center transform transition-transform duration-500 group-hover:scale-105">
                        <h2 className="text-white text-4xl md:text-4xl font-bold">
                            PUNE PLANT
                        </h2>
                    </div>
                </div>
            </div>

            {/* Right Side: Vadodara Plant */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full group overflow-hidden cursor-pointer">
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <Image
                        src="/assets/plant-video/right-bg.jpg"
                        alt="Vadodara Plant"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                {/* Centered Text Strip */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full bg-black/60 backdrop-blur-sm py-4 md:py-6 flex justify-center transform transition-transform duration-500 group-hover:scale-105">
                        <h2 className="text-white text-4xl md:text-4xl font-bold">
                            VADODARA PLANT
                        </h2>
                    </div>
                </div>
            </div>

        </section>
    );
}
