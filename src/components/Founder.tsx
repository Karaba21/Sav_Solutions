"use client";

import React from 'react';

export default function Founder() {
    return (
        <section className="py-24 bg-white dark:bg-surface-dark relative overflow-hidden" id="founder">
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

                        {/* <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-xs">
                            <p className="text-gray-600 dark:text-gray-300 text-sm italic mb-4">&quot;Nuestra misión es simple: que la tecnología sea el motor de tu crecimiento, no un obstáculo.&quot;</p>
                            <div className="flex items-center gap-3">
                                <img src="/assets/foto-mia.jpeg" alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white text-sm">Agustín Karabajich</p>
                                    <p className="text-xs text-primary">Founder & CEO</p>
                                </div>
                            </div>
                        </div> */}

                    </div>

                    <div className="md:pl-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-xs uppercase tracking-wider mb-6">
                            <span className="material-icons-round text-sm">verified</span>
                            Expertise & Vision
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                            Más que una agencia, <br />
                            <span className="text-primary">tu socio tecnológico.</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Hola, soy Agustín. Fundé <span className="font-bold text-gray-900 dark:text-white">Sav Solutions</span> con el objetivo de democratizar el acceso a tecnología de nivel empresarial para negocios que buscan escalar.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Entendemos que cada segundo de desconexión o cada cliente perdido por una web lenta cuenta. Por eso, nos obsesionamos con la <strong>velocidad, seguridad y estabilidad</strong> de cada solución que entregamos.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <a href="https://www.linkedin.com/in/agust%C3%ADn-karabajich-494266196/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0077b5] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#006396] transition shadow-lg shadow-blue-500/20">
                                <span className="material-icons-round">work</span>
                                Conectar en LinkedIn
                            </a>
                            <a href="#contact" className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                                Agendar Reunión
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
