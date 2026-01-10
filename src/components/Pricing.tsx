"use client";

import React from 'react';

export default function Pricing() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark" id="plans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Planes diseñados para ti</h2>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">Elige la solución que mejor se adapte al crecimiento de tu empresa.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Landing Plan */}
                    <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 flex flex-col h-full">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            Landing Plan <span className="material-icons-round text-gray-400">desktop_windows</span>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Presencia online básica en 2 semanas.</p>
                        <div className="my-6">
                            <span className="text-4xl font-extrabold text-primary">180usd</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-icons-round text-primary text-lg mr-2">check</span>
                                Landing page profesional
                            </li>
                            <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-icons-round text-primary text-lg mr-2">check</span>
                                Configuración hosting/dominio
                            </li>
                            <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-icons-round text-primary text-lg mr-2">check</span>
                                Diseño responsive
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-white transition">
                            Solicitar info
                        </button>
                    </div>

                    {/* Express Plan (Featured) */}
                    <div className="bg-primary rounded-3xl shadow-xl p-8 transform md:-translate-y-4 border border-primary relative overflow-hidden flex flex-col h-full">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="material-icons-round text-9xl text-white">bolt</span>
                        </div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            Express <span className="material-icons-round text-yellow-300">bolt</span>
                        </h3>
                        <p className="text-sm text-indigo-200 mt-2">Tu página lista en solo 3 días.</p>
                        <div className="my-6">
                            <span className="text-5xl font-extrabold text-white">300usd</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start text-sm text-indigo-100">
                                <span className="material-icons-round text-white text-lg mr-2">check</span>
                                Landing page profesional
                            </li>
                            <li className="flex items-start text-sm text-indigo-100">
                                <span className="material-icons-round text-white text-lg mr-2">check</span>
                                Configuración completa
                            </li>
                            <li className="flex items-start text-sm text-indigo-100">
                                <span className="material-icons-round text-white text-lg mr-2">check</span>
                                Entrega exprés garantizada
                            </li>
                            <li className="flex items-start text-sm text-indigo-100">
                                <span className="material-icons-round text-white text-lg mr-2">check</span>
                                Mantenimiento mensual opcional
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-xl bg-white text-primary font-bold hover:bg-gray-100 transition shadow-lg">
                            Solicitar info
                        </button>
                    </div>

                    {/* Business Plan */}
                    <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 flex flex-col h-full">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                            Business Plan <span className="material-icons-round text-red-400">rocket_launch</span>
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Negocio digital completo en 3 semanas.</p>
                        <div className="my-6">
                            <span className="text-4xl font-extrabold text-primary">700usd</span>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-icons-round text-primary text-lg mr-2">check</span>
                                Web completa profesional
                            </li>
                            <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-icons-round text-primary text-lg mr-2">check</span>
                                Integración E-commerce
                            </li>
                            <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-icons-round text-primary text-lg mr-2">check</span>
                                Base de datos / Supabase
                            </li>
                            <li className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                <span className="material-icons-round text-primary text-lg mr-2">check</span>
                                Mantenimiento a convenir
                            </li>
                        </ul>
                        <button className="w-full py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-white transition">
                            Solicitar info
                        </button>
                    </div>
                </div>

                {/* Additional Info / Disclaimers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-indigo-50 dark:bg-gray-800 p-5 rounded-2xl flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                                <span className="material-icons-round text-sm">info</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm">Incluido en el precio</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">El valor del plan cubre la configuración inicial de hosting y dominio, además del diseño y puesta en línea.</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-2xl flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                                <span className="material-icons-round text-sm">open_in_new</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm">Costos adicionales</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">El hosting y dominio no están incluidos en el precio del plan. Se pagan directamente al proveedor.</p>
                        </div>
                    </div>

                    <div className="bg-indigo-50 dark:bg-gray-800 p-5 rounded-2xl flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                                <span className="material-icons-round text-sm">shopping_cart</span>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm">WiFi & Redes</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Cotización a medida según la superficie del local y la cantidad de dispositivos a conectar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
