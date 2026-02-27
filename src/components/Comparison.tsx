"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Comparison() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMove = (clientX: number) => {
            if (!isDragging || !containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
            setSliderPosition(percent);
        };

        const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
        const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
        const onMouseUp = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
            window.addEventListener("touchmove", onTouchMove, { passive: false });
            window.addEventListener("touchend", onMouseUp);
        } else {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onMouseUp);
        }
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onMouseUp);
        };
    }, [isDragging]);

    const handleInteractionStart = (clientX: number) => {
        setIsDragging(true);
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
            setSliderPosition(percent);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-white border-y border-gray-100" id="comparison">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

                    {/* Text Section (Left Column) */}
                    <div className="text-center md:text-left order-2 md:order-1 flex flex-col items-center md:items-start justify-center">
                        <h2 className="font-montserrat text-3xl md:text-5xl font-extrabold text-blue-600 mb-6 leading-tight">
                            El cambio que tu web necesita
                        </h2>
                        <p className="font-inter text-gray-500 text-base md:text-lg mb-8 max-w-md">
                            Transformamos sitios desactualizados en experiencias digitales <strong className="text-gray-700">modernas y efectivas.</strong> Deslizá para ver la diferencia.
                        </p>
                        <a
                            href="#contact"
                            className="font-inter inline-block py-4 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all duration-200 shadow-md hover:shadow-blue-300/50 hover:-translate-y-0.5"
                        >
                            Quiero renovar mi web
                        </a>
                    </div>

                    {/* Image Comparison Section (Right Column) */}
                    <div className="order-1 md:order-2">
                        <div
                            ref={containerRef}
                            className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden cursor-ew-resize select-none shadow-xl rounded-2xl"
                            onMouseDown={(e) => handleInteractionStart(e.clientX)}
                            onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
                        >
                            {/* Base Image (After - Right Side) */}
                            <div className="absolute inset-0 pointer-events-none">
                                <Image
                                    src="/split2.png"
                                    alt="Sitio web moderno después del rediseño"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Overlay Image (Before - Left Side) */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                            >
                                <Image
                                    src="/split1.png"
                                    alt="Sitio web antiguo antes del rediseño"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            {/* Labels */}
                            <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1.5 md:px-6 md:py-2 text-[10px] md:text-xs font-bold tracking-wider z-10 uppercase shadow-md rounded-br-lg">
                                Antes
                            </div>
                            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1.5 md:px-6 md:py-2 text-[10px] md:text-xs font-bold tracking-wider z-10 uppercase shadow-md rounded-bl-lg">
                                Después
                            </div>

                            {/* Slider Line and Button */}
                            <div
                                className="absolute top-0 bottom-0 w-[3px] bg-white cursor-ew-resize z-20"
                                style={{ left: `calc(${sliderPosition}% - 1.5px)` }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full border-[3px] border-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md w-5 h-5 md:w-6 md:h-6">
                                        <path d="M14 17L19 12L14 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 7L5 12L10 17" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
