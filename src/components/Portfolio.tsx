"use client";

import React from 'react';

export default function Portfolio() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden relative" id="clients">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Nuestros Casos de <span className="text-primary">Éxito</span>
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Transformamos negocios con tecnología de punta y diseño estratégico.
                    </p>
                </div>

                <div className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory lg:grid lg:grid-cols-2 lg:overflow-visible custom-scrollbar">
                    {/* GP Automóviles */}
                    <div className="flex-shrink-0 w-[85vw] md:w-[600px] lg:w-auto snap-center group relative">
                        <div className="bg-white/60 dark:bg-surface-dark/60 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-3 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 h-full flex flex-col">
                            <div className="relative bg-gray-100 dark:bg-slate-800 rounded-[1.5rem] overflow-hidden aspect-[16/10] shadow-inner">
                                <div className="absolute inset-0 flex flex-col p-6">

                                    <div className="flex-1 rounded-lg shadow-sm border border-gray-200 dark:border-slate-600 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                                        <img src="/assets/GPfotopagina.png" alt="GP Automóviles Platform" className="w-full h-full object-cover object-top" />
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                                    <p className="text-primary font-bold tracking-wider text-sm uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition duration-500 delay-75">Resultados Clave</p>
                                    <h4 className="text-4xl font-extrabold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition duration-500 delay-100">+45%</h4>
                                    <p className="text-gray-300 text-sm mb-6 transform translate-y-4 group-hover:translate-y-0 transition duration-500 delay-100">Consultas de Ventas</p>
                                    <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-medium text-white border border-white/20">Base de Datos Supabase</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display">GP Automóviles</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Plataforma de Gestión</p>
                                    </div>
                                    <a href="https://gpautomovilesuy.com/" target="_blank" className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-lg flex items-center justify-center group/btn hover:bg-primary transition-colors duration-300">
                                        <span className="material-icons-round text-gray-900 dark:text-white group-hover/btn:text-white group-hover/btn:animate-pulse">arrow_outward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-shrink-0 w-[85vw] md:w-[600px] lg:w-auto snap-center group relative">
                        <div className="bg-white/60 dark:bg-surface-dark/60 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] p-3 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 h-full flex flex-col">
                            <div className="relative bg-gray-100 dark:bg-slate-800 rounded-[1.5rem] overflow-hidden aspect-[16/10] shadow-inner group">
                                <div className="absolute inset-0 p-4 pb-8 bg-gray-900">
                                    <div className="w-full h-full rounded-lg overflow-hidden relative border border-gray-700 bg-black">
                                        <img src="/assets/cockpituy.png" alt="Cockpit UY Website" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                                    <p className="text-orange-500 font-bold tracking-wider text-sm uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition duration-500 delay-75">Impacto</p>
                                    <h4 className="text-4xl font-extrabold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition duration-500 delay-100">x3</h4>
                                    <p className="text-gray-300 text-sm mb-6 transform translate-y-4 group-hover:translate-y-0 transition duration-500 delay-100">Ventas Online</p>
                                    <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-medium text-white border border-white/20">Shopify Expert</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display">Cockpit UY</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">E-commerce Experience</p>
                                    </div>
                                    <a href="https://cockpituy.com/" target="_blank" className="w-12 h-12 rounded-full bg-white dark:bg-slate-700 shadow-lg flex items-center justify-center group/btn hover:bg-orange-500 transition-colors duration-300">
                                        <span className="material-icons-round text-gray-900 dark:text-white group-hover/btn:text-white group-hover/btn:animate-pulse">arrow_outward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
