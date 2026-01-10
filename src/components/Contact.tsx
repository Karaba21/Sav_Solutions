"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import FadeIn from './ui/FadeIn';

export default function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        nombre: '',
        rubro: '',
        servicio: '',
        tiempo: ''
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

        const { nombre, rubro, servicio, tiempo } = formData;

        if (!nombre || !rubro || !servicio || !tiempo) {
            alert('Por favor, completá todos los campos del formulario.');
            return;
        }

        const mensaje = `Hola Sav Solutions! 👋\n\nMi nombre es: ${nombre}\nRubro de mi emprendimiento/empresa: ${rubro}\nServicio que busco: ${servicio}\nTiempo deseado: ${tiempo}\n\nMe gustaría recibir más información sobre este servicio. ¡Gracias!`;

        const mensajeCodificado = encodeURIComponent(mensaje);
        const numeroWhatsApp = '59893350714';
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

        window.open(urlWhatsApp, '_blank');
    };

    return (
        <section className="contact-section" id="form">
            <div className="container">
                <h2 className="section-title">{t('contact.title')}</h2>
                <div className="contact-content">
                    <FadeIn className="contact-form-container">
                        <div className="contact-info">
                            <p>{t('contact.description')}</p>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit} id="contactForm">
                            <div className="form-group">
                                <label htmlFor="nombre">{t('contact.name_label')}</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    required
                                    placeholder={t('contact.name_placeholder')}
                                    value={formData.nombre}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="rubro">{t('contact.business_label')}</label>
                                <input
                                    type="text"
                                    id="rubro"
                                    name="rubro"
                                    required
                                    placeholder={t('contact.business_placeholder')}
                                    value={formData.rubro}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group form-group-wide">
                                <label htmlFor="servicio">{t('contact.service_label')}</label>
                                <textarea
                                    id="servicio"
                                    name="servicio"
                                    required
                                    placeholder={t('contact.service_placeholder')}
                                    rows={3}
                                    value={formData.servicio}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="tiempo">{t('contact.time_label')}</label>
                                <input
                                    type="text"
                                    id="tiempo"
                                    name="tiempo"
                                    required
                                    placeholder={t('contact.time_placeholder')}
                                    value={formData.tiempo}
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className="btn-whatsapp" id="whatsappBtn">
                                {t('contact.whatsapp_button')}
                            </button>
                        </form>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
