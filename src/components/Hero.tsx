"use client";

import React from 'react';

export default function Hero() {
    return (
        <header className="hero-bg relative pt-36 pb-28 lg:pt-52 lg:pb-36 overflow-hidden">

            {/* Subtle decorative blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl translate-y-1/3 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                {/* Badge pill */}
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-8 shadow-sm font-inter">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    Soluciones web a tu medida
                </div>

                {/* Main heading */}
                <h1 className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.08] mb-6">
                    Construyendo tus{' '}
                    <br className="hidden sm:block" />
                    <span className="text-primary">Cimientos Digitales</span>
                </h1>

                {/* Subtitle */}
                <p className="font-inter mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed">
                    Desarrollo web funcional, e-commerce escalable y soluciones de conectividad WiFi adaptadas a las necesidades de tu empresa.
                </p>

                {/* CTAs */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#contact"
                        className="font-inter bg-primary hover:bg-primary-dark text-white px-9 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                        Empezar Ahora
                        <span className="material-icons-round text-xl">arrow_forward</span>
                    </a>
                    <a
                        href="#services"
                        className="font-inter bg-white/80 hover:bg-white text-gray-700 border border-gray-200 px-9 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                        Ver Servicios
                    </a>
                </div>

                {/* Social proof */}
                <p className="font-inter mt-12 text-sm text-gray-400 tracking-wide">
                    +50 negocios confían en nosotros
                </p>
            </div>
        </header>
    );
}
