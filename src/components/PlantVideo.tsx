'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils'; // Assuming you have this utility, otherwise remove

export function PlantVideo() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const openVideo = (videoFile: string) => {
        setActiveVideo(videoFile);
    };

    const closeVideo = () => {
        setActiveVideo(null);
    };

    return (
        <section className="relative w-full h-screen overflow-hidden flex flex-col md:flex-row font-bebas">

            {/* Left Side: Pune Plant */}
            <div
                className="relative w-full md:w-1/2 h-1/2 md:h-full group overflow-hidden cursor-pointer"
                onClick={() => openVideo('/assets/plant-video/left_video.mp4')}
            >
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
                        <h2 className="text-white text-4xl md:text-4xl font-bold tracking-wider">
                            PUNE PLANT
                        </h2>
                    </div>
                </div>
            </div>

            {/* Right Side: Vadodara Plant */}
            <div
                className="relative w-full md:w-1/2 h-1/2 md:h-full group overflow-hidden cursor-pointer"
                onClick={() => openVideo('/assets/plant-video/right_video.mp4')}
            >
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
                        <h2 className="text-white text-4xl md:text-4xl font-bold tracking-wider">
                            VADODARA PLANT
                        </h2>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300">
                    {/* Close Button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); closeVideo(); }}
                        className="absolute top-6 right-6 text-white hover:text-red-500 z-50 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Backdrop Click to Close */}
                    <div className="absolute inset-0" onClick={closeVideo} />

                    {/* Video Player */}
                    <div className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl rounded-lg overflow-hidden border border-white/20">
                        <video
                            src={activeVideo}
                            controls
                            autoPlay
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            )}

        </section>
    );
}
