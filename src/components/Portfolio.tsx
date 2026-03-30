"use client";

import React from 'react';

const cases = [
    {
        name: "GP Automóviles",
        category: "Plataforma de Gestión",
        image: "/assets/GPfotopagina.png",
        stat: "+45%",
        statLabel: "Consultas de Ventas",
        tag: "Base de Datos Supabase",
        tagColor: "bg-blue-100 text-blue-700",
        accentColor: "#3B82F6",
        href: "https://gpautomovilesuy.com/",
        description: "Desarrollamos una plataforma integral para gestión de inventario y consultas de clientes, con base de datos en tiempo real.",
    },
    {
        name: "Cockpit UY",
        category: "E-commerce Web App",
        image: "/assets/cockpituy.png",
        stat: "×3",
        statLabel: "Ventas Online",
        tag: "E-commerce",
        tagColor: "bg-orange-100 text-orange-700",
        accentColor: "#F97316",
        href: "https://cockpituy.com/",
        description: "Construimos una tienda online de alto rendimiento que triplicó sus ventas digitales en los primeros tres meses.",
    },
    {
        name: "Infinite Agency",
        category: "Landing Page Profesional",
        image: "/assets/infiniteagencycrm.png",
        stat: "+60%",
        statLabel: "Captación de Leads",
        tag: "Lead Generation",
        tagColor: "bg-purple-100 text-purple-700",
        accentColor: "#8B5CF6",
        href: "https://infiniteagencycrm.com/",
        description: "Diseñamos una landing page de alta conversión que aumentó significativamente la captación de nuevos clientes.",
    },
    {
        name: "Growit",
        category: "Plataforma Digital",
        image: "/assets/growit.png",
        stat: "+80%",
        statLabel: "Tráfico Orgánico",
        tag: "E-commerce",
        tagColor: "bg-emerald-100 text-emerald-700",
        accentColor: "#10B981",
        href: "https://growituruguay.com/",
        description: "Construimos una tienda online de alto rendimiento que triplicó sus ventas digitales en los primeros tres meses.",
    },
];

export default function Portfolio() {
    return (
        <section className="py-28 bg-gray-50 overflow-hidden" id="clients">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block font-inter text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4">
                        Portafolio
                    </span>
                    <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
                        Nuestros Casos de{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Éxito
                        </span>
                    </h2>
                    <p className="font-inter text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
                        Transformamos negocios con tecnología de punta y estrategia digital.
                    </p>
                    <div className="mt-6 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((c) => (
                        <div
                            key={c.name}
                            className="portfolio-card group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                            style={{ "--accent": c.accentColor } as React.CSSProperties}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden h-52 bg-gray-900">
                                <img
                                    src={c.image}
                                    alt={c.name}
                                    className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

                                {/* Category pill on image */}
                                <div className="absolute top-4 left-4">
                                    <span
                                        className={`font-inter text-xs font-semibold px-3 py-1 rounded-full ${c.tagColor}`}
                                    >
                                        {c.tag}
                                    </span>
                                </div>

                                {/* External link on image */}
                                <a
                                    href={c.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40"
                                    aria-label={`Ver ${c.name}`}
                                >
                                    <span className="material-icons-round text-white text-base">arrow_outward</span>
                                </a>
                            </div>

                            {/* Body */}
                            <div className="flex flex-col flex-1 p-7">
                                {/* Stat highlight */}
                                <div className="flex items-end gap-3 mb-5">
                                    <span
                                        className="font-montserrat text-5xl font-extrabold leading-none"
                                        style={{ color: c.accentColor }}
                                    >
                                        {c.stat}
                                    </span>
                                    <span className="font-inter text-sm text-gray-500 leading-tight mb-1">
                                        {c.statLabel}
                                    </span>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-gray-100 mb-5" />

                                {/* Name & category */}
                                <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-1">
                                    {c.name}
                                </h3>
                                <p className="font-inter text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                                    {c.category}
                                </p>
                                <p className="font-inter text-sm text-gray-500 leading-relaxed flex-1">
                                    {c.description}
                                </p>

                                {/* CTA */}
                                <a
                                    href={c.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio-cta mt-6 inline-flex items-center gap-2 font-inter text-sm font-semibold transition-colors duration-300"
                                    style={{ color: c.accentColor }}
                                >
                                    Ver proyecto
                                    <span className="material-icons-round text-base">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .portfolio-card {
          box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
        }
        .portfolio-card:hover {
          box-shadow: 0 20px 60px -12px rgba(0,0,0,0.12), 0 4px 16px -4px rgba(0,0,0,0.08);
        }
        .portfolio-cta:hover {
          opacity: 0.75;
        }
      `}</style>
        </section>
    );
}
