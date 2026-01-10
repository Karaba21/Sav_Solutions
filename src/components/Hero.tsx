"use client";

import React from 'react';

export default function Hero() {
    return (
        <header className="relative bg-deep-blue dark:bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
                <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary blur-[120px]"></div>
                <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500 blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
                    Construyendo tus <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-primary">Cimientos Digitales</span>
                </h1>

                <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100/90 leading-relaxed">
                    Desarrollo web funcional, e-commerce escalable y ahora con soluciones de conectividad WiFi adaptadas a las necesidades de tu empresa.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition transform hover:-translate-y-1 shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                        Empezar Ahora
                        <span className="material-icons-round">arrow_forward</span>
                    </a>
                    <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition flex items-center justify-center gap-2">
                        Ver Servicios
                    </a>
                </div>
            </div>
        </header>
    );
}
