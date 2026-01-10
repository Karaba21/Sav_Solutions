"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import FadeIn from './ui/FadeIn';

export default function Team() {
    const { t } = useLanguage();

    return (
        <section className="team" id="equipo">
            <div className="container">
                <FadeIn className="team-content">
                    <div className="team-image">
                        <img src="/assets/foto-mia.jpeg" alt="Equipo de Apollo Solutions trabajando" className="team-photo" />
                    </div>
                    <div className="team-text">
                        <h2>{t('team.name')}</h2>
                        <p>{t('team.description')}</p>
                        <a href="https://www.linkedin.com/in/agustín-karabajich-494266196" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                            <img src="/assets/LinkedIn_logo_initials.png" alt="Conecta conmigo en LinkedIn" className="linkedin-logo" />
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
