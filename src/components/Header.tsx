"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
                : "bg-white/80 backdrop-blur-sm"
                } h-[64px] md:h-[72px]`}
        >
            <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="block">
                            <div className="relative h-8 w-[185px] sm:h-9 sm:w-[210px]">
                                <img
                                    src="/assets/savsolutionslogo.png"
                                    alt="SAV Solutions"
                                    className="h-full w-full object-contain opacity-0"
                                />
                                <div
                                    className="absolute inset-0 bg-primary"
                                    style={{
                                        maskImage: 'url(/assets/savsolutionslogo.png)',
                                        WebkitMaskImage: 'url(/assets/savsolutionslogo.png)',
                                        maskSize: 'contain',
                                        WebkitMaskSize: 'contain',
                                        maskRepeat: 'no-repeat',
                                        WebkitMaskRepeat: 'no-repeat',
                                        maskPosition: 'left center',
                                        WebkitMaskPosition: 'left center',
                                    }}
                                />
                            </div>
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#services" className="font-inter text-gray-600 hover:text-gray-900 font-medium text-[15px] transition-colors duration-150">
                            Servicios
                        </a>
                        <a href="#clients" className="font-inter text-gray-600 hover:text-gray-900 font-medium text-[15px] transition-colors duration-150">
                            Clientes
                        </a>
                        <a href="#plans" className="font-inter text-gray-600 hover:text-gray-900 font-medium text-[15px] transition-colors duration-150">
                            Planes
                        </a>
                        <a
                            href="#contact"
                            className="font-inter bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full font-semibold text-[15px] transition-all duration-200 shadow-sm"
                        >
                            Contactar
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-[64px] left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-1">
                    <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="font-inter text-gray-700 font-medium py-3 border-b border-gray-100 text-[15px]">Servicios</a>
                    <a href="#clients" onClick={() => setIsMobileMenuOpen(false)} className="font-inter text-gray-700 font-medium py-3 border-b border-gray-100 text-[15px]">Clientes</a>
                    <a href="#plans" onClick={() => setIsMobileMenuOpen(false)} className="font-inter text-gray-700 font-medium py-3 border-b border-gray-100 text-[15px]">Planes</a>
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="font-inter bg-primary hover:bg-primary-dark text-white text-center py-3.5 rounded-full font-semibold mt-3 text-[15px] tracking-wide">Contactar</a>
                </div>
            )}
        </nav>
    );
}
