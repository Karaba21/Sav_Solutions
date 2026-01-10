"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import FadeIn from './ui/FadeIn';

export default function Services() {
    const { t } = useLanguage();
    const [activeModal, setActiveModal] = useState<'web' | 'ecommerce' | null>(null);

    const openModal = (modal: 'web' | 'ecommerce') => {
        setActiveModal(modal);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setActiveModal(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <section className="services" id="servicios">
                <div className="container">
                    <h2 className="section-title">{t('services.title')}</h2>
                    <div className="services-grid">
                        <FadeIn className="service-card">
                            <div className="service-content">
                                <div className="service-text">
                                    <h3>{t('services.web.title')}</h3>
                                    <h4>{t('services.web.subtitle')}</h4>
                                </div>
                                <div className="service-illustration">
                                    <img src="/assets/web-creation.png" alt="Creación de páginas web" className="service-illustration-image" />
                                </div>
                            </div>
                            <div className="service-footer">
                                <button className="btn-more-info" onClick={() => openModal('web')}>{t('services.more_info')}</button>
                            </div>
                        </FadeIn>

                        <FadeIn className="service-card" delay={0.2}>
                            <div className="service-content">
                                <div className="service-text">
                                    <h3>{t('services.ecommerce.title')}</h3>
                                    <h4>{t('services.ecommerce.subtitle')}</h4>
                                </div>
                                <div className="crm-illustration">
                                    <div className="hubspot-logo-container">
                                        <img src="/assets/Shopify-logo.png" alt="Shopify Logo" className="hubspot-logo" />
                                    </div>
                                </div>
                            </div>
                            <div className="service-footer">
                                <button className="btn-more-info" onClick={() => openModal('ecommerce')}>{t('services.more_info')}</button>
                            </div>
                        </FadeIn>

                        <FadeIn className="service-card" delay={0.4}>
                            <div className="service-content">
                                <div className="service-text">
                                    <h3>{t('services.database.title')}</h3>
                                    <h4>{t('services.database.subtitle')}</h4>
                                </div>
                                <div className="crm-illustration">
                                    <div className="hubspot-logo-container">
                                        <img src="/assets/supabase.png" alt="Supabase logo" className="hubspot-logo" />
                                    </div>
                                </div>
                            </div>
                            <div className="service-footer">
                                <button className="btn-more-info" data-service="basededatos">{t('services.more_info')}</button>
                            </div>
                        </FadeIn>

                        <FadeIn className="service-card" delay={0.6}>
                            <div className="service-content">
                                <div className="service-text">
                                    <h3>{t('services.reservas.title')}</h3>
                                    <h4>{t('services.reservas.subtitle')}</h4>
                                </div>
                                <div className="crm-illustration">
                                    <div className="hubspot-logo-container">
                                        <img src="/assets/Calendly_logo.png" alt="Calendly logo" className="hubspot-logo" />
                                    </div>
                                </div>
                            </div>
                            <div className="service-footer">
                                <button className="btn-more-info" data-service="reservas">{t('services.more_info')}</button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Modals */}
            <div id="modal-web" className={`modal ${activeModal === 'web' ? 'show' : ''}`} style={{ display: activeModal === 'web' ? 'block' : 'none', opacity: activeModal === 'web' ? 1 : 0, visibility: activeModal === 'web' ? 'visible' : 'hidden' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>{t('modal.web.title')}</h2>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-image">
                            <img src="/assets/web-creation.png" alt="Desarrollo Web" className="modal-img" />
                        </div>
                        <div className="modal-text">
                            <h3>{t('modal.web.subtitle')}</h3>
                            <p>{t('modal.web.description')}</p>

                            <div className="modal-features">
                                <div className="feature-item">
                                    <i className="fas fa-mobile-alt"></i>
                                    <div>
                                        <h4>{t('modal.web.feature1.title')}</h4>
                                        <p>{t('modal.web.feature1.description')}</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <i className="fas fa-rocket"></i>
                                    <div>
                                        <h4>{t('modal.web.feature2.title')}</h4>
                                        <p>{t('modal.web.feature2.description')}</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <i className="fas fa-shield-alt"></i>
                                    <div>
                                        <h4>{t('modal.web.feature3.title')}</h4>
                                        <p>{t('modal.web.feature3.description')}</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <i className="fas fa-chart-line"></i>
                                    <div>
                                        <h4>{t('modal.web.feature4.title')}</h4>
                                        <p>{t('modal.web.feature4.description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="modal-ecommerce" className={`modal ${activeModal === 'ecommerce' ? 'show' : ''}`} style={{ display: activeModal === 'ecommerce' ? 'block' : 'none', opacity: activeModal === 'ecommerce' ? 1 : 0, visibility: activeModal === 'ecommerce' ? 'visible' : 'hidden' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>{t('modal.ecommerce.title')}</h2>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-image">
                            <img src="/assets/Shopify-logo.png" alt="Shopify E-commerce" className="modal-img" />
                        </div>
                        <div className="modal-text">
                            <h3>{t('modal.ecommerce.subtitle')}</h3>
                            <p>{t('modal.ecommerce.description')}</p>

                            <div className="modal-features">
                                <div className="feature-item">
                                    <i className="fas fa-shopping-cart"></i>
                                    <div>
                                        <h4>{t('modal.ecommerce.feature1.title')}</h4>
                                        <p>{t('modal.ecommerce.feature1.description')}</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <i className="fas fa-credit-card"></i>
                                    <div>
                                        <h4>{t('modal.ecommerce.feature2.title')}</h4>
                                        <p>{t('modal.ecommerce.feature2.description')}</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <i className="fas fa-truck"></i>
                                    <div>
                                        <h4>{t('modal.ecommerce.feature3.title')}</h4>
                                        <p>{t('modal.ecommerce.feature3.description')}</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <i className="fas fa-mobile-alt"></i>
                                    <div>
                                        <h4>{t('modal.ecommerce.feature4.title')}</h4>
                                        <p>{t('modal.ecommerce.feature4.description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
