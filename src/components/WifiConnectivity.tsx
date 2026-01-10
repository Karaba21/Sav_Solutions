"use client";

import React from 'react';

export default function WifiConnectivity() {
    return (
        <section className="py-24 bg-gradient-to-br from-white to-blue-50 dark:from-surface-dark dark:to-slate-900 overflow-hidden relative" id="wifi-connectivity">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700 aspect-[4/3] group">
                            <img
                                src="/assets/router.png"
                                alt="Configuración WiFi Profesional"
                                className="object-cover w-full h-full transform transition duration-700 group-hover:scale-105 filter brightness-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                            <div className="absolute top-8 left-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md p-3 pr-5 rounded-2xl shadow-xl border border-white/20 animate-bounce-slow flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-500">
                                    <span className="material-icons-round">wifi</span>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">Cobertura</p>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">100% Estable</p>
                                </div>
                            </div>

                            <div className="absolute bottom-8 right-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md p-3 pr-5 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-500">
                                    <span className="material-icons-round">gpp_good</span>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">Seguridad</p>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">WPA3 Activo</p>
                                </div>
                            </div>
                        </div>
                        {/* Background decoration elements */}
                        <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border-2 border-primary/10 rounded-3xl"></div>
                        <div className="absolute -z-10 -top-6 -right-6 w-full h-full border-2 border-blue-500/10 rounded-3xl"></div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            WiFi & Conectividad
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                            Potencia tu espacio con <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">WiFi Inteligente</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                            Diseñamos redes robustas para hogares y empresas. Olvidate de las desconexiones. Aseguramos &quot;No more dead zones&quot; con una configuración profesional y hardware de última generación.
                        </p>

                        <div className="space-y-8 mb-10">
                            <div className="flex gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white dark:bg-surface-dark shadow-md flex items-center justify-center text-primary border border-gray-100 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-icons-round text-2xl">router</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Instalación de Routers & Mesh</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Implementamos sistemas Mesh que crean una malla única de cobertura, eliminando puntos muertos.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white dark:bg-surface-dark shadow-md flex items-center justify-center text-blue-500 border border-gray-100 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-icons-round text-2xl">signal_wifi_4_bar</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Optimización de Señal</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Análisis de interferencias y selección de canales para garantizar la máxima velocidad contratada.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white dark:bg-surface-dark shadow-md flex items-center justify-center text-indigo-500 border border-gray-100 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-icons-round text-2xl">security</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Network Security</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Protección avanzada contra intrusos y segmentación de redes para invitados y dispositivos IoT.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white dark:bg-surface-dark shadow-md flex items-center justify-center text-green-500 border border-gray-100 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-icons-round text-2xl">videogame_asset</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Ultra-Low Latency</h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Configuración ideal para Gaming competitivo y Streaming 4K sin interrupciones.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition shadow-lg shadow-primary/25">
                                Solicitar Auditoría Técnica
                                <span className="material-icons-round">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
