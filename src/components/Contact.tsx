"use client";

import React, { useState } from "react";

const contactItems = [
    {
        icon: "email",
        label: "Email",
        value: "agustin.karabajich@gmail.com",
        href: "mailto:agustin.karabajich@gmail.com",
        colorClass: "text-primary",
        hoverClass: "hover:text-primary",
    },
    {
        icon: null,
        faIcon: "fa-brands fa-whatsapp",
        label: "WhatsApp",
        value: "+598 93 350 714",
        href: "https://wa.me/59893350714",
        colorClass: "text-green-500",
        hoverClass: "hover:text-green-500",
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { nombre, email, mensaje } = formData;

        if (!nombre || !email || !mensaje) {
            alert("Por favor, completá todos los campos.");
            return;
        }

        const textoWhatsApp = `Hola Sav Solutions! 👋\n\nSoy ${nombre}\nEmail: ${email}\n\nMensaje: ${mensaje}`;
        const mensajeCodificado = encodeURIComponent(textoWhatsApp);
        const urlWhatsApp = `https://wa.me/59893350714?text=${mensajeCodificado}`;
        window.open(urlWhatsApp, "_blank");
    };

    return (
        <section className="py-24 bg-white" id="contact">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header — same style as Services & Pricing */}
                <div className="text-center mb-16">
                    <h2 className="font-montserrat text-3xl font-extrabold text-blue-600 sm:text-4xl">
                        Conectá con nosotros
                    </h2>
                    <p className="font-inter mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        ¿Listo para transformar tu negocio? Completá el formulario y recibirás una respuesta en menos de 24 horas.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Form Card */}
                    <div className="bg-white rounded-3xl border border-gray-200 shadow-md p-8 relative overflow-hidden">
                        {/* Accent top line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary rounded-t-3xl" />

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Nombre */}
                            <div>
                                <label
                                    htmlFor="nombre"
                                    className="font-inter block text-sm font-semibold text-gray-700 mb-1.5"
                                >
                                    Nombre completo
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    placeholder="Ej: Juan Pérez"
                                    required
                                    className="font-inter w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-sm"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="font-inter block text-sm font-semibold text-gray-700 mb-1.5"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="juan@empresa.com"
                                    required
                                    className="font-inter w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 text-sm"
                                />
                            </div>

                            {/* Mensaje */}
                            <div>
                                <label
                                    htmlFor="mensaje"
                                    className="font-inter block text-sm font-semibold text-gray-700 mb-1.5"
                                >
                                    ¿Cómo podemos ayudarte?
                                </label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Contanos sobre tu proyecto o necesidad..."
                                    required
                                    className="font-inter w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none text-sm"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="font-inter w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 group text-sm"
                            >
                                Solicitar Auditoría Gratuita
                                <span className="material-icons-round text-base group-hover:translate-x-1 transition-transform duration-200">
                                    send
                                </span>
                            </button>

                            <p className="font-inter text-center text-xs text-gray-400">
                                Al enviar este formulario aceptás nuestra política de privacidad.
                            </p>
                        </form>
                    </div>

                    {/* Info Side */}
                    <div className="flex flex-col justify-center gap-6 lg:pt-4">

                        {/* Contact items */}
                        {contactItems.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-start gap-4 bg-blue-50 border border-blue-100 rounded-2xl p-5"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    {item.icon ? (
                                        <span className={`material-icons-round ${item.colorClass} text-xl`}>
                                            {item.icon}
                                        </span>
                                    ) : (
                                        <i className={`${item.faIcon} ${item.colorClass} text-xl`} />
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-montserrat font-bold text-gray-900 text-sm">
                                        {item.label}
                                    </h4>
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        className={`font-inter text-sm text-gray-500 ${item.hoverClass} transition-colors duration-200`}
                                    >
                                        {item.value}
                                    </a>
                                </div>
                            </div>
                        ))}

                        {/* Extra trust blurb */}
                        <div className="flex items-start gap-4 bg-blue-50 border border-blue-100 rounded-2xl p-5">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <span className="material-icons-round text-primary text-xl">schedule</span>
                            </div>
                            <div>
                                <h4 className="font-montserrat font-bold text-gray-900 text-sm">
                                    Tiempo de respuesta
                                </h4>
                                <p className="font-inter text-sm text-gray-500 mt-0.5">
                                    Respondemos en menos de 24 horas hábiles.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-blue-50 border border-blue-100 rounded-2xl p-5">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <span className="material-icons-round text-primary text-xl">verified</span>
                            </div>
                            <div>
                                <h4 className="font-montserrat font-bold text-gray-900 text-sm">
                                    Sin compromiso
                                </h4>
                                <p className="font-inter text-sm text-gray-500 mt-0.5">
                                    La consulta inicial es completamente gratuita y sin obligación.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
