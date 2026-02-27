"use client";

import React from 'react';

export default function Founder() {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="founder">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-3xl transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition duration-500"></div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/assets/foto-mia.jpeg"
                            alt="Agustín Karabajich"
                            className="relative rounded-3xl shadow-2xl w-full max-w-sm mx-auto block object-cover aspect-[4/5] transform transition duration-500 group-hover:scale-[1.01]"
                        />
                    </div>

                    <div className="md:pl-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-xs uppercase tracking-wider mb-6 font-inter">
                            <span className="material-icons-round text-sm">verified</span>
                            Expertise & Vision
                        </div>
                        <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-blue-600 mb-6 leading-tight">
                            Más que una agencia, <br />
                            <span className="text-primary">tu socio tecnológico.</span>
                        </h2>
                        <p className="font-inter text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Hola, soy Agustín. Fundé <span className="font-bold text-deep-blue dark:text-white">Sav Solutions</span> con el objetivo de democratizar el acceso a tecnología de nivel empresarial para negocios que buscan escalar.
                        </p>
                        <p className="font-inter text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Entendemos que cada segundo de desconexión o cada cliente perdido por una web lenta cuenta. Por eso, nos obsesionamos con la <strong>velocidad, seguridad y estabilidad</strong> de cada solución que entregamos.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <a href="https://www.linkedin.com/in/agust%C3%ADn-karabajich-494266196/" target="_blank" rel="noopener noreferrer" className="font-inter inline-flex items-center gap-2 bg-[#0077b5] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#006396] transition shadow-lg shadow-blue-500/20">
                                <span className="material-icons-round">work</span>
                                Conectar en LinkedIn
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
