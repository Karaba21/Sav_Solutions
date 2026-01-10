"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Portfolio() {
    const { t } = useLanguage();

    return (
        <section className="portfolio" id="clientes">
            <div className="container">
                <h2 className="section-title">{t('portfolio.title')}</h2>
                <p className="section-subtitle">{t('portfolio.subtitle')}</p>
                <div className="portfolio-grid">
                    {/* GP Automóviles */}
                    <div className="portfolio-card">
                        <div className="portfolio-content">
                            <div className="portfolio-text">
                                <h3>{t('portfolio.gp.title')}</h3>
                                <div className="portfolio-image">
                                    <img src="/assets/GPfotopagina.png" alt="GP Automóviles" className="portfolio-logo" />
                                </div>
                                <p className="portfolio-description">{t('portfolio.gp.description')}</p>
                                <div className="portfolio-buttons">
                                    <a href="https://gpautomovilesuy.com" target="_blank" rel="noopener noreferrer" className="btn-portfolio-primary">{t('portfolio.gp.button')}</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cockpit UY */}
                    <div className="portfolio-card">
                        <div className="portfolio-content">
                            <div className="portfolio-text">
                                <h3>{t('portfolio.cockpit.title')}</h3>
                                <div className="portfolio-image">
                                    <img src="/assets/ogimage1200x630.png" alt="Cockpit UY" className="portfolio-logo" />
                                </div>
                                <p className="portfolio-description">{t('portfolio.cockpit.description')}</p>
                                <div className="portfolio-buttons">
                                    <a href="https://cockpituy.com" target="_blank" rel="noopener noreferrer" className="btn-portfolio-primary">{t('portfolio.cockpit.button')}</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Infinite Agency CRM */}
                    <div className="portfolio-card">
                        <div className="portfolio-content">
                            <div className="portfolio-text">
                                <h3>{t('portfolio.infinite.title')}</h3>
                                <div className="portfolio-image">
                                    <img src="/assets/infiniteagencycrm.png" alt="Infinite Agency CRM" className="portfolio-logo" />
                                </div>
                                <p className="portfolio-description">{t('portfolio.infinite.description')}</p>
                                <div className="portfolio-buttons">
                                    <a href="https://infiniteagencycrm.com" target="_blank" rel="noopener noreferrer" className="btn-portfolio-primary">{t('portfolio.infinite.button')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
