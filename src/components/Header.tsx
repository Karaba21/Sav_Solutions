"use client";

import React, { useState, useEffect } from "react";
// import { useLanguage } from '@/context/LanguageContext'; // Commenting out until we decide where to put lang switcher

export default function Header() {
    // const { language, setLanguage, t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Check if dark mode preference exists or respect system preference
        const checkTheme = () => {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                setIsDark(true);
                document.documentElement.classList.add('dark');
            } else {
                setIsDark(false);
                document.documentElement.classList.remove('dark');
            }
        };

        // Defer theme check to avoid synchronous setState warning, or simply suppress if needed. 
        // Using setTimeout(..., 0) pushes it to next tick.
        setTimeout(checkTheme, 0);


        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDarkMode = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 h-20"
                : "bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 h-20"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <div className="relative">
                            <img src="/assets/savsolutionslogo.png" alt="SAV Solutions" className="h-6 w-auto opacity-0" />
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-primary"
                                style={{
                                    maskImage: 'url(/assets/savsolutionslogo.png)',
                                    WebkitMaskImage: 'url(/assets/savsolutionslogo.png)',
                                    maskSize: 'contain',
                                    WebkitMaskSize: 'contain',
                                    maskRepeat: 'no-repeat',
                                    WebkitMaskRepeat: 'no-repeat',
                                    maskPosition: 'center',
                                    WebkitMaskPosition: 'center'
                                }}
                            />
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a
                            href="#services"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition"
                        >
                            Servicios
                        </a>
                        <a
                            href="#wifi-connectivity"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition"
                        >
                            WiFi & Redes
                        </a>
                        <a
                            href="#clients"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition"
                        >
                            Clientes
                        </a>
                        <a
                            href="#plans"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition"
                        >
                            Planes
                        </a>
                        <a
                            href="#founder"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition"
                        >
                            Nosotros
                        </a>
                        <a
                            href="#contact"
                            className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-medium transition shadow-lg shadow-primary/30"
                        >
                            Contactar
                        </a>
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition"
                        >
                            <span className="material-icons-round text-xl">{isDark ? "light_mode" : "dark_mode"}</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition"
                        >
                            <span className="material-icons-round text-xl">{isDark ? "light_mode" : "dark_mode"}</span>
                        </button>
                        <button
                            className="text-gray-600 dark:text-gray-300 hover:text-primary p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="material-icons-round text-3xl">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown (Basic implementation based on assumption) */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700 shadow-xl py-4 px-4 flex flex-col gap-4">
                    <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300 font-medium">Servicios</a>
                    <a href="#wifi-connectivity" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300 font-medium">WiFi & Redes</a>
                    <a href="#clients" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300 font-medium">Clientes</a>
                    <a href="#plans" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300 font-medium">Planes</a>
                    <a href="#founder" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 dark:text-gray-300 font-medium">Nosotros</a>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-center py-2 text-white rounded-full">Contactar</a>
                </div>
            )}
        </nav>
    );
}
