"use client";

import React from 'react';

export default function Services() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Nuestros Servicios</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Soluciones integrales para tu negocio
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
                        Desde la presencia online hasta la infraestructura física de tu red.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Web Design Card */}
                    <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700 group">
                        <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-icons-round text-3xl">language</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Diseño Web Moderno</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Sitios web responsivos y optimizados que catapultan tu marca. Landing pages de alta conversión y portafolios corporativos.
                        </p>
                        <a href="#" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition">
                            Más información <span className="material-icons-round text-sm ml-1">chevron_right</span>
                        </a>
                    </div>

                    {/* E-commerce Card */}
                    <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700 group">
                        <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400 mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-icons-round text-3xl">shopping_bag</span>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">E-commerce</h3>
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium dark:bg-green-900 dark:text-green-300">Shopify Partner</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Tiendas online robustas y fáciles de gestionar. Integración de pasarelas de pago y gestión de inventario automatizada.
                        </p>
                        <a href="#" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition">
                            Más información <span className="material-icons-round text-sm ml-1">chevron_right</span>
                        </a>
                    </div>

                    {/* WiFi Card */}
                    <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 shadow-lg hover:shadow-xl transition duration-300 border-2 border-primary/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">NUEVO</div>
                        <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-icons-round text-3xl">router</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">WiFi & Conectividad</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            Instalación profesional de routers y redes mesh. Garantizamos una cobertura estable y veloz en toda tu oficina o local comercial.
                        </p>
                        <a href="#wifi-connectivity" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition">
                            Ver planes de red <span className="material-icons-round text-sm ml-1">chevron_right</span>
                        </a>
                    </div>

                    {/* Integrations Card (Full Width on LG) */}
                    <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700 group lg:col-span-3 lg:w-2/3 lg:mx-auto">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center text-orange-600 dark:text-orange-400 flex-shrink-0">
                                <span className="material-icons-round text-3xl">integration_instructions</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Integraciones y Automatización</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Conectamos tu negocio con herramientas poderosas como <strong>Supabase</strong> para bases de datos, <strong>Calendly</strong> para reservas y sistemas CRM personalizados para gestionar tus clientes.
                                </p>
                            </div>
                            <a href="#" className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-5 py-3 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition flex-shrink-0 w-full md:w-auto text-center">
                                Consultar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
