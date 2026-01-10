"use client";

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t, language } = useLanguage();
    const [displayedTitle, setDisplayedTitle] = useState('');

    // Typing effect for title (only for Spanish as per original script)
    useEffect(() => {
        if (language === 'es') {
            const text = t('hero.title');
            setDisplayedTitle('');
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    setDisplayedTitle((prev) => prev + text.charAt(i));
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, 100);
            return () => clearInterval(timer);
        } else {
            setDisplayedTitle(t('hero.title'));
        }
    }, [language, t]);

    // Parallax effect logic (simplified reacting to window scroll)
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            const heroVisuals = document.querySelector('.hero-visuals') as HTMLElement;
            const backgroundLines = document.querySelector('.background-lines') as HTMLElement;

            if (heroVisuals) {
                heroVisuals.style.transform = `translate(-50%, -50%) translateY(${rate}px)`;
            }
            if (backgroundLines) {
                backgroundLines.style.transform = `translateY(${rate * 0.3}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">{displayedTitle}</h1>
                    <p className="hero-subtitle">{t('hero.subtitle')}</p>
                    <a href="#form" className="btn-primary">{t('hero.contact')}</a>
                </div>
                <div className="hero-visuals">
                    <div className="phone-3d">
                        <div className="phone-screen">
                            <div className="app-icons">
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                            </div>
                        </div>
                    </div>
                    <div className="desktop-3d">
                        <div className="desktop-screen">
                            <div className="chart">
                                <div className="bar bar1"></div>
                                <div className="bar bar2"></div>
                                <div className="bar bar3"></div>
                            </div>
                            <div className="sidebar">
                                <div className="btn btn-blue"></div>
                                <div className="btn btn-blue"></div>
                                <div className="btn btn-pink"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="background-lines">
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
        </section>
    );
}
