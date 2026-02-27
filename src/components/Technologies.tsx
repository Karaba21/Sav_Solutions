"use client";

import React from "react";

const technologies = [
    {
        name: "Next.js",
        icon: (
            <svg viewBox="0 0 180 180" fill="none" className="w-14 h-14">
                <mask id="mask_njs" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                    <circle cx="90" cy="90" r="90" fill="black" />
                </mask>
                <g mask="url(#mask_njs)">
                    <circle cx="90" cy="90" r="90" fill="black" />
                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#gnjs0)" />
                    <rect x="115" y="54" width="12" height="72" fill="url(#gnjs1)" />
                </g>
                <defs>
                    <linearGradient id="gnjs0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gnjs1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        bg: "bg-black",
    },
    {
        name: "React",
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-14 h-14">
                <circle cx="20" cy="20" r="3.5" fill="#61DAFB" />
                <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
                <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)" />
                <ellipse cx="20" cy="20" rx="18" ry="7" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 20 20)" />
            </svg>
        ),
        bg: "bg-[#20232A]",
    },
    {
        name: "TypeScript",
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-14 h-14">
                <rect width="40" height="40" rx="6" fill="#3178C6" />
                <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white" fontFamily="monospace">TS</text>
            </svg>
        ),
        bg: "bg-[#3178C6]",
    },
    {
        name: "Meta Ads",
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-14 h-14">
                <rect width="40" height="40" rx="8" fill="#1877F2" />
                <path d="M20 8C13.37 8 8 13.37 8 20C8 25.99 12.38 30.95 18.13 31.85V23.5H15.08V20H18.13V17.42C18.13 14.41 19.92 12.75 22.66 12.75C23.98 12.75 25.35 12.99 25.35 12.99V15.95H23.84C22.35 15.95 21.88 16.9 21.88 17.87V20H25.22L24.68 23.5H21.88V31.85C27.63 30.95 32 25.99 32 20C32 13.37 26.63 8 20 8Z" fill="white" />
            </svg>
        ),
        bg: "bg-[#1877F2]",
    },
    {
        name: "Supabase",
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-14 h-14">
                <rect width="40" height="40" rx="8" fill="#1C1C1C" />
                <path d="M21.8 7.5L9 23.5H21V32.5L33 16.5H21V7.5H21.8Z" fill="url(#gsupa)" />
                <defs>
                    <linearGradient id="gsupa" x1="9" y1="7.5" x2="33" y2="32.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3ECF8E" />
                        <stop offset="1" stopColor="#1A9E6A" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        bg: "bg-[#1C1C1C]",
    },
    {
        name: "Brevo",
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-14 h-14">
                <rect width="40" height="40" rx="8" fill="#0B996E" />
                <text x="50%" y="57%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white" fontFamily="sans-serif">brevo</text>
            </svg>
        ),
        bg: "bg-[#0B996E]",
    },
    {
        name: "Lemon Squeezy",
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-14 h-14">
                <rect width="40" height="40" rx="8" fill="#FFC233" />
                <ellipse cx="20" cy="21" rx="10" ry="13" fill="#FFE066" />
                <ellipse cx="20" cy="21" rx="10" ry="13" fill="none" stroke="#E6A800" strokeWidth="1" />
                <path d="M20 8 Q26 4 28 8 Q24 9 20 8Z" fill="#5CB85C" />
                <line x1="20" y1="8" x2="20" y2="34" stroke="#E6A800" strokeWidth="0.8" />
                <line x1="10" y1="21" x2="30" y2="21" stroke="#E6A800" strokeWidth="0.8" />
            </svg>
        ),
        bg: "bg-[#FFC233]",
    },
    {
        name: "PayPal",
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-14 h-14">
                <rect width="40" height="40" rx="8" fill="#003087" />
                <path d="M27 12c.5 3-1 5.5-3.5 6.5H17l-2 10H11l3-18h9c2 0 3.5.7 4 1.5z" fill="#009CDE" />
                <path d="M24 14c.4 2.5-.8 4.5-3 5.5H15l-1.5 8.5H10l2.5-15h8c1.7 0 3 .6 3.5 1z" fill="white" />
            </svg>
        ),
        bg: "bg-[#003087]",
    },
    {
        name: "Shopify",
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-14 h-14">
                <rect width="40" height="40" rx="8" fill="#96BF48" />
                <path d="M27.5 11.5c-.1 0-.3 0-.5.1-.1 0-.2-.1-.3-.2-.4-.6-1.1-1-2-1h-.3c-.1 0-.2 0-.3.1C23 8.5 21.4 8 21.4 8l-.2 1.5s-.7-.2-1.7-.2c-1.7 0-3.5.6-4.9 2.2C13.3 13.1 12.5 15 12.5 17.5H10l-1 21h18l.5-27zM22 10.2c.2.3.4.7.4 1.1-.4.1-.9.2-1.4.3V10.2H22zm-2.5 0V12c-.3.1-.7.2-1 .3l.3-2.1h.7zm3.5.2h.5l.2 1.9c-.4.1-.7.2-1 .2V10.4zm-5 7.1c0-2 1-5 4.5-5 1 0 1.5.3 1.5.3L23.5 15s-.3-.2-.8-.2c-2 0-3 1.5-3 3v.8h1.8l-.5 2H19.5v8H17V20h-1.5v-2H17v-.5c0 0 0 0 0 0z" fill="white" />
            </svg>
        ),
        bg: "bg-[#96BF48]",
    },
];

export default function Technologies() {
    const doubled = [...technologies, ...technologies];

    return (
        <section className="py-20 bg-gray-50" id="technologies">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="font-montserrat text-3xl font-extrabold text-blue-600 sm:text-4xl">
                        Tecnologías
                    </h2>
                    <p className="font-inter mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        Trabajamos con las herramientas más modernas y confiables del ecosistema digital.
                    </p>
                </div>

                {/* Infinite Marquee */}
                <div className="relative overflow-hidden">
                    {/* Fade edges */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

                    <div className="flex gap-5 marquee-track">
                        {doubled.map((tech, i) => (
                            <div
                                key={`${tech.name}-${i}`}
                                className="flex-shrink-0 flex flex-col items-center justify-center gap-3 px-7 py-5 hover:scale-105 transition-all duration-300"
                                style={{ minWidth: "170px" }}
                            >
                                <div className={`${tech.bg} rounded-2xl p-5 flex items-center justify-center shadow-sm`}>
                                    {tech.icon}
                                </div>
                                <span className="font-inter text-sm font-semibold text-gray-700 whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .marquee-track {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
}
