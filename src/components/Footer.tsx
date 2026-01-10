"use client";

import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-icons-round text-primary text-3xl">bolt</span>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">Sav</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                            Impulsamos el crecimiento de negocios mediante soluciones tecnológicas de alto impacto. Diseño, e-commerce y conectividad en un solo lugar.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition">
                                <span className="material-icons-round text-lg">public</span>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition">
                                <span className="material-icons-round text-lg">email</span>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6">Servicios</h4>
                        <ul className="space-y-4">
                            <li><a href="#services" className="text-gray-500 dark:text-gray-400 hover:text-primary transition text-sm">Diseño Web</a></li>
                            <li><a href="#services" className="text-gray-500 dark:text-gray-400 hover:text-primary transition text-sm">E-commerce Shopfify</a></li>
                            <li><a href="#wifi-connectivity" className="text-gray-500 dark:text-gray-400 hover:text-primary transition text-sm">Redes & WiFi</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6">Compañía</h4>
                        <ul className="space-y-4">
                            <li><a href="#founder" className="text-gray-500 dark:text-gray-400 hover:text-primary transition text-sm">Sobre Nosotros</a></li>
                            <li><a href="#clients" className="text-gray-500 dark:text-gray-400 hover:text-primary transition text-sm">Casos de Éxito</a></li>
                            <li><a href="#plans" className="text-gray-500 dark:text-gray-400 hover:text-primary transition text-sm">Planes y Precios</a></li>
                            <li><a href="#contact" className="text-gray-500 dark:text-gray-400 hover:text-primary transition text-sm">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition text-sm">Política de Privacidad</a></li>
                            <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition text-sm">Términos de Servicio</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        &copy; 2025 Sav Solutions. Todos los derechos reservados.
                    </p>

                </div>
            </div>
        </footer>
    );
}
