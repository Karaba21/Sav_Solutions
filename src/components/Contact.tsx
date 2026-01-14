"use client";

import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { nombre, email, mensaje } = formData;

        if (!nombre || !email || !mensaje) {
            alert('Por favor, completá todos los campos.');
            return;
        }

        const textoWhatsApp = `Hola Sav Solutions! 👋\n\nSoy ${nombre}\nEmail: ${email}\n\nMensaje: ${mensaje}`;
        const mensajeCodificado = encodeURIComponent(textoWhatsApp);
        const numeroWhatsApp = '59893350714';
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

        window.open(urlWhatsApp, '_blank');
    };

    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-surface-dark" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Formulario */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-4">Conectá con nosotros</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                ¿Listo para transformar tu negocio? Completá el formulario y recibirás una respuesta en menos de 24 horas.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-card-dark p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                            {/* Decorative top border gradient */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-primary"></div>

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre Completo</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-200"
                                        placeholder="Ej: Juan Pérez"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Corporativo</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-200"
                                        placeholder="juan@empresa.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">¿Cómo podemos ayudarte?</label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-200 resize-none"
                                        placeholder="Contanos sobre tu proyecto o necesidad..."
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-primary hover:from-blue-700 hover:to-primary-dark text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 flex justify-center items-center gap-2 group">
                                Solicitar Auditoría Gratuita
                                <span className="material-icons-round group-hover:translate-x-1 transition-transform">send</span>
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-4">
                                Al enviar este formulario aceptas nuestra política de privacidad.
                            </p>
                        </form>
                    </div>

                    {/* Info / Calendar Side */}
                    <div className="flex flex-col justify-center space-y-8">
                        {/* 
                        <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition duration-700"></div>
                            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-black/10 rounded-full blur-2xl"></div>

                            <h3 className="text-2xl font-bold mb-4 relative z-10">¿Preferís una llamada rápida?</h3>
                            <p className="text-blue-100 mb-8 relative z-10">Agenda una reunión de 15 minutos con Agustín para evaluar tu caso sin compromiso.</p>

                            <a href="https://calendly.com/savsolutions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg relative z-10">
                                <span className="material-icons-round">calendar_today</span>
                                Agendar en Calendly
                            </a>
                        </div> 
                        */}

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-surface-dark shadow-md flex items-center justify-center text-primary flex-shrink-0">
                                    <span className="material-icons-round">email</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Email</h4>
                                    <a href="mailto:agustin.karabajich@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition">agustin.karabajich@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-surface-dark shadow-md flex items-center justify-center text-green-500 flex-shrink-0">
                                    <i className="fa-brands fa-whatsapp text-2xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">WhatsApp</h4>
                                    <a href="https://wa.me/59893350714" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition">+598 93 350 714</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
