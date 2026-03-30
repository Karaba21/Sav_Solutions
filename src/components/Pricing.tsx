"use client";

import React from "react";

const plans = [
    {
        name: "Landing Plan",
        icon: "desktop_windows",
        tagline: "Presencia online básica en 2 semanas.",
        price: "180",
        features: [
            "Landing page profesional",
            "Configuración hosting/dominio",
            "Diseño responsive",
            "Mantenimiento mensual 40usd (opcional)",
        ],
        featured: false,
    },
    {
        name: "Business Plan",
        icon: "rocket_launch",
        tagline: "Negocio digital completo en 3 semanas.",
        price: "690",
        features: [
            "Web completa profesional",
            "Configuración hosting/dominio",
            "Integración E-commerce",
            "Base de datos / Supabase",
            "Integración Brevo (email marketing y automatizaciones)",
            "Mantenimiento a convenir",
        ],
        featured: true,
    },
];

export default function Pricing() {
    return (
        <section className="py-24 bg-white" id="plans">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header — same style as Services */}
                <div className="text-center mb-16">
                    <h2 className="font-montserrat text-3xl font-extrabold text-blue-600 sm:text-4xl">
                        Planes diseñados para ti
                    </h2>
                    <p className="font-inter mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        Elige la solución que mejor se adapte al crecimiento de tu empresa.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto items-stretch">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative flex flex-col rounded-3xl p-8 border transition-shadow duration-300 ${plan.featured
                                ? "border-primary shadow-xl shadow-primary/10 bg-white"
                                : "border-gray-200 shadow-md bg-white"
                                }`}
                        >
                            {/* Featured badge */}
                            {plan.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="font-inter bg-primary text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow">
                                        Más popular
                                    </span>
                                </div>
                            )}

                            {/* Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.featured
                                        ? "bg-primary text-white"
                                        : "bg-primary/10 text-primary"
                                        }`}
                                >
                                    <span className="material-icons-round text-xl">{plan.icon}</span>
                                </div>
                                <h3 className="font-montserrat text-lg font-extrabold text-gray-900">
                                    {plan.name}
                                </h3>
                            </div>

                            <p className="font-inter text-sm text-gray-500 mb-6">{plan.tagline}</p>

                            {/* Feature list */}
                            <ul className="space-y-3 mb-10 flex-1">
                                {plan.features.map((feat) => (
                                    <li
                                        key={feat}
                                        className="font-inter flex items-start gap-3 text-sm text-gray-700"
                                    >
                                        <span className="material-icons-round text-primary text-base mt-0.5 flex-shrink-0">
                                            arrow_forward
                                        </span>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href="#contact"
                                className={`font-inter w-full py-3 rounded-full text-center font-semibold text-sm transition-all duration-200 ${plan.featured
                                    ? "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-primary/30 hover:-translate-y-0.5"
                                    : "border border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                                    }`}
                            >
                                Solicitar info
                            </a>
                        </div>
                    ))}
                </div>

                {/* Disclaimers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-3xl mx-auto">
                    {[
                        {
                            icon: "info",
                            title: "Incluido en el precio",
                            text: "El plan incluye el diseño, desarrollo y configuración inicial del sitio web, puesta en línea y soporte en el proceso de publicación.",
                        },
                        {
                            icon: "open_in_new",
                            title: "Costos adicionales",
                            text: "El hosting y dominio no están incluidos en el precio del plan.",
                        },
                        {
                            icon: "wifi",
                            title: "WiFi & Redes",
                            text: "Cotización a medida según la superficie del local y la cantidad de dispositivos a conectar.",
                        },
                        {
                            icon: "rocket_launch",
                            title: "Plan Business",
                            text: "El Business Plan es flexible. Puede incluir uno o varios de los servicios listados. El precio es el mismo independientemente de la cantidad de servicios implementados.",
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="flex gap-4 bg-blue-50 rounded-2xl p-5 border border-blue-100"
                        >
                            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                                <span className="material-icons-round text-primary text-base">{item.icon}</span>
                            </div>
                            <div>
                                <h4 className="font-montserrat font-bold text-gray-900 text-sm">{item.title}</h4>
                                <p className="font-inter text-xs text-gray-500 mt-1 leading-relaxed">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
