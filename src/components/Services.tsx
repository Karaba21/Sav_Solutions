"use client";

import React from "react";

const services = [
    {
        title: "Desarrollo Web",
        description:
            "Diseñamos y desarrollamos sitios web a medida que elevan tu marca, optimizados para SEO, velocidad y conversión en cualquier dispositivo.",
        bullets: [
            "Sitios institucionales y corporativos",
            "Diseño responsive para todos los dispositivos",
            "Optimización SEO y rendimiento",
        ],
        icon: "code",
        visual: (
            <div className="relative w-full h-72 bg-blue-50 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl" />
                {/* Browser mockup */}
                <div className="relative z-10 bg-white rounded-2xl shadow-xl w-72 overflow-hidden border border-gray-200">
                    <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200">
                            tusitio.com
                        </div>
                    </div>
                    <div className="p-4 space-y-2">
                        <div className="h-4 bg-primary/20 rounded w-3/4" />
                        <div className="h-3 bg-gray-100 rounded w-full" />
                        <div className="h-3 bg-gray-100 rounded w-5/6" />
                        <div className="mt-3 h-8 bg-primary/80 rounded-lg w-1/2" />
                    </div>
                </div>
            </div>
        ),
        imageLeft: false,
    },
    {
        title: "Landing Pages",
        description:
            "Creamos landing pages enfocadas en un único objetivo: generar leads o ventas con mensajes claros, formularios optimizados y medición precisa.",
        bullets: [
            "Páginas de alta conversión",
            "Formularios y captación de leads",
            "Integración con CRM y analítica",
        ],
        icon: "web",
        visual: (
            <div className="relative w-full h-72 bg-indigo-50 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-3xl" />
                {/* Landing page mockup */}
                <div className="relative z-10 bg-white rounded-2xl shadow-xl w-72 overflow-hidden border border-gray-200 p-5">
                    <div className="h-5 bg-primary rounded w-2/3 mb-2" />
                    <div className="h-3 bg-gray-100 rounded w-full mb-1" />
                    <div className="h-3 bg-gray-100 rounded w-5/6 mb-4" />
                    {/* Form */}
                    <div className="space-y-2 mb-3">
                        <div className="h-8 bg-gray-100 rounded-lg border border-gray-200 flex items-center px-3">
                            <span className="text-xs text-gray-400">Tu nombre</span>
                        </div>
                        <div className="h-8 bg-gray-100 rounded-lg border border-gray-200 flex items-center px-3">
                            <span className="text-xs text-gray-400">Email</span>
                        </div>
                    </div>
                    <div className="h-9 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">Solicitar info</span>
                    </div>
                </div>
            </div>
        ),
        imageLeft: true,
    },
    {
        title: "Aplicaciones Web",
        description:
            "Construimos aplicaciones y sistemas web personalizados para automatizar procesos, integrar APIs y dar soporte a equipos internos o clientes.",
        bullets: [
            "Paneles de administración a medida",
            "Integración de APIs y servicios externos",
            "Sistemas internos para equipos",
        ],
        icon: "devices",
        visual: (
            <div className="relative w-full h-72 bg-blue-50 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl" />
                {/* Dashboard mockup */}
                <div className="relative z-10 bg-white rounded-2xl shadow-xl w-72 overflow-hidden border border-gray-200">
                    <div className="bg-primary/10 px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                        <span className="material-icons-round text-primary text-lg">dashboard</span>
                        <span className="text-xs font-semibold text-gray-700">Panel de control</span>
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-2">
                        <div className="bg-primary/10 rounded-xl p-3 text-center">
                            <div className="text-lg font-bold text-primary">128</div>
                            <div className="text-xs text-gray-500">Usuarios</div>
                        </div>
                        <div className="bg-green-50 rounded-xl p-3 text-center">
                            <div className="text-lg font-bold text-green-600">94%</div>
                            <div className="text-xs text-gray-500">Uptime</div>
                        </div>
                        <div className="col-span-2 h-3 bg-gray-100 rounded mt-1" />
                        <div className="col-span-2 h-3 bg-gray-100 rounded w-4/5" />
                    </div>
                </div>
            </div>
        ),
        imageLeft: false,
    },
    {
        title: "E-commerce / Tienda Online",
        description:
            "Implementamos tiendas en Shopify según tu estrategia, cuidando el catálogo, los medios de pago y la experiencia completa de compra.",
        bullets: [
            "Integración completa con Shopify",
            "Medios de pago y checkout optimizado",
            "Gestión de catálogo y stock",
        ],
        icon: "shopping_cart",
        visual: (
            <div className="relative w-full h-72 bg-indigo-50 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-3xl" />
                {/* Shop mockup */}
                <div className="relative z-10 bg-white rounded-2xl shadow-xl w-72 overflow-hidden border border-gray-200 p-4">
                    <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="bg-gray-100 rounded-xl aspect-square flex items-center justify-center">
                            <span className="material-icons-round text-gray-400 text-3xl">inventory_2</span>
                        </div>
                        <div className="bg-gray-100 rounded-xl aspect-square flex items-center justify-center">
                            <span className="material-icons-round text-gray-400 text-3xl">checkroom</span>
                        </div>
                    </div>
                    <div className="h-3 bg-gray-100 rounded w-2/3 mb-2" />
                    <div className="flex items-center justify-between">
                        <span className="text-primary font-bold text-sm">$1.200</span>
                        <div className="bg-primary text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                            <span className="material-icons-round text-sm">add_shopping_cart</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
        imageLeft: true,
    },
    {
        title: "Meta Ads",
        description:
            "Gestionamos campañas en Facebook e Instagram para conectar con tu audiencia ideal, generando leads y ventas con creatividades impactantes y segmentación precisa.",
        bullets: [
            "Campañas en Facebook e Instagram",
            "Segmentación avanzada de audiencias",
            "Reportes y métricas claras",
        ],
        icon: "campaign",
        visual: (
            <div className="relative w-full h-72 bg-blue-50 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl" />
                {/* Meta Ads mockup */}
                <div className="relative z-10 bg-white rounded-2xl shadow-xl w-72 overflow-hidden border border-gray-200">
                    {/* Header Facebook-style */}
                    <div className="bg-[#1877F2] px-4 py-2.5 flex items-center justify-between">
                        <span className="text-white font-bold text-lg tracking-tight">f</span>
                        <div className="flex items-center gap-2">
                            <span className="material-icons-round text-white text-base">search</span>
                            <span className="material-icons-round text-white text-base">notifications</span>
                        </div>
                    </div>
                    {/* Ad card */}
                    <div className="p-3">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-[#1877F2]/20 flex items-center justify-center">
                                <span className="material-icons-round text-[#1877F2] text-sm">store</span>
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-gray-800">Tu Marca</div>
                                <div className="text-[10px] text-gray-400">Publicidad · <span className="material-icons-round text-[10px] align-middle">public</span></div>
                            </div>
                        </div>
                        <div className="h-2.5 bg-gray-100 rounded w-full mb-1" />
                        <div className="h-2.5 bg-gray-100 rounded w-4/5 mb-2" />
                        <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center mb-2">
                            <span className="material-icons-round text-gray-300 text-3xl">image</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-[10px] text-gray-400">tusitio.com</div>
                                <div className="text-xs font-semibold text-gray-800">Tu producto destacado</div>
                            </div>
                            <div className="bg-[#1877F2] text-white text-[10px] font-semibold px-2.5 py-1 rounded">
                                Más info
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        imageLeft: false,
    },
    {
        title: "Mantenimiento Web",
        description:
            "Nos ocupamos del mantenimiento integral de tu web: actualizaciones, monitoreo, copias de seguridad y soporte proactivo para evitar caídas.",
        bullets: [
            "Actualizaciones y parches de seguridad",
            "Monitoreo 24/7 y backups automáticos",
            "Soporte técnico proactivo",
        ],
        icon: "build",
        visual: (
            <div className="relative w-full h-72 bg-indigo-50 rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-3xl" />
                {/* Status/monitoring mockup */}
                <div className="relative z-10 bg-white rounded-2xl shadow-xl w-72 overflow-hidden border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-gray-700">Estado del sistema</span>
                        <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
                            Online
                        </span>
                    </div>
                    <div className="space-y-2">
                        {["Sitio web", "Base de datos", "Backups"].map((item) => (
                            <div key={item} className="flex items-center justify-between py-1.5 border-b border-gray-50">
                                <span className="text-xs text-gray-600">{item}</span>
                                <span className="material-icons-round text-green-500 text-sm">check_circle</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-400 rounded-full" style={{ width: "94%" }} />
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Uptime 99.4%</div>
                </div>
            </div>
        ),
        imageLeft: true,
    },
];

export default function Services() {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="font-montserrat text-3xl font-extrabold text-blue-600 sm:text-4xl">
                        Nuestros Servicios
                    </h2>
                    <p className="font-inter mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Soluciones integrales para potenciar tu presencia digital y hacer crecer tu negocio.
                    </p>
                </div>

                {/* Services List */}
                <div className="space-y-28">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className={`flex flex-col ${service.imageLeft ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-16`}
                        >
                            {/* Text Side */}
                            <div className="flex-1 w-full">
                                <h3 className="font-montserrat text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="font-inter text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {service.bullets.map((bullet) => (
                                        <li key={bullet} className="font-inter flex items-start gap-3 text-gray-900 dark:text-gray-700 text-base font-semibold">
                                            <span className="material-icons-round text-primary text-base mt-0.5 flex-shrink-0">arrow_forward</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center gap-4">
                                    <a
                                        href="#contact"
                                        className="font-inter bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-primary/30 hover:-translate-y-0.5"
                                    >
                                        Empezar ahora
                                    </a>
                                    <a
                                        href="#contact"
                                        className="font-inter border border-gray-300 hover:border-primary hover:text-primary text-gray-600 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
                                    >
                                        Ver más
                                    </a>
                                </div>
                            </div>

                            {/* Visual Side */}
                            <div className="flex-1 w-full">
                                {service.visual}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
