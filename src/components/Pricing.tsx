"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Pricing() {
    const { t } = useLanguage();

    return (
        <section className="pricing" id="planes">
            <div className="container">
                <h2 className="section-title">{t('pricing.title')}</h2>
                <div className="pricing-grid">
                    {/* Freemium / Landing Plan */}
                    <div className="pricing-card">
                        <div className="pricing-header">
                            <h3 className="plan-name freemium">{t('pricing.landing.title')}</h3>
                            <p className="plan-description">{t('pricing.landing.description')}</p>
                            <div className="price">
                                <span className="amount">180usd</span>
                            </div>
                        </div>
                        <div className="pricing-features">
                            <ul>
                                <li><i className="fas fa-check"></i> <span>{t('pricing.landing.feature1')}</span></li>
                                <li><i className="fas fa-check"></i> <span>{t('pricing.landing.feature2')}</span></li>
                                <li><i className="fas fa-check"></i> <span>{t('pricing.landing.feature3')}</span></li>
                                <li><i className="fas fa-check"></i> <span>{t('pricing.landing.feature4')}</span></li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a href="#form" className="btn-pricing multi-btn">{t('pricing.request_info')}</a>
                        </div>
                    </div>

                    {/* Express */}
                    <div className="pricing-card popular">
                        <div className="pricing-header">
                            <h3 className="plan-name growth">{t('pricing.express.title')}</h3>
                            <p className="plan-description">{t('pricing.express.description')}</p>
                            <div className="price">
                                <span className="amount">300usd</span>
                            </div>
                        </div>
                        <div className="pricing-features">
                            <ul>
                                <li><i className="fas fa-check"></i> <span>{t('pricing.express.feature1')}</span></li>
                                <li><i className="fas fa-check"></i> <span>{t('pricing.express.feature2')}</span></li>
                                <li><i className="fas fa-check"></i> <span>{t('pricing.express.feature3')}</span></li>
                                <li><i className="fas fa-check"></i> <span>{t('pricing.express.feature4')}</span></li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a href="#form" className="btn-pricing growth-btn">{t('pricing.request_info')}</a>
                        </div>
                    </div>

                    {/* Business Plan */}
                    <div className="pricing-card">
                        <div className="pricing-header">
                            <h3 className="plan-name multi">{t('pricing.business.title')}</h3>
                            <p className="plan-description">{t('pricing.business.description')}</p>
                            <div className="price">
                                <span className="amount">700usd</span>
                            </div>
                        </div>
                        <div className="pricing-features">
                            <ul>
                                <li><i className="fas fa-check"></i> <span>{t('pricing.business.feature1')}</span></li>
                                <li><i className="fas fa-check"></i> <span>{t('pricing.business.feature2')}</span></li>
                                <li><i className="fas fa-check"></i> <span>{t('pricing.business.feature5')}</span></li>
                                <li><i className="fas fa-check"></i> <span>{t('pricing.business.feature6')}</span></li>
                                <li><i className="fas fa-check"></i> <span>{t('pricing.business.feature7')}</span></li>
                            </ul>
                        </div>
                        <div className="pricing-footer">
                            <a href="#form" className="btn-pricing multi-btn">{t('pricing.request_info')}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="disclaimers-container">
                <div className="disclaimer-card">
                    <div className="disclaimer-icon">
                        <i className="fas fa-info-circle"></i>
                    </div>
                    <div className="disclaimer-content">
                        <h4>{t('disclaimers.included.title')}</h4>
                        <p>{t('disclaimers.included.description')}</p>
                    </div>
                </div>

                <div className="disclaimer-card">
                    <div className="disclaimer-icon">
                        <i className="fas fa-external-link-alt"></i>
                    </div>
                    <div className="disclaimer-content">
                        <h4>{t('disclaimers.additional.title')}</h4>
                        <p>{t('disclaimers.additional.description')}</p>
                    </div>
                </div>

                <div className="disclaimer-card">
                    <div className="disclaimer-icon">
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="disclaimer-content">
                        <h4>{t('disclaimers.business.title')}</h4>
                        <p>{t('disclaimers.business.description')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
