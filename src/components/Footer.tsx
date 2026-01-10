"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h3>{t('footer.title')}</h3>
                        <p>{t('footer.subtitle')}</p>
                    </div>
                    <div className="footer-links">
                        <a href="#clientes">{t('footer.clients')}</a>
                        <a href="#servicios">{t('footer.services')}</a>
                        <a href="#planes">{t('footer.pricing')}</a>
                        {/* Note: In original code, footer link for About was 'footer.about' but key might not exist or be used differently. Checking translations.
                            Legacy has: <a href="#equipo" data-lang="footer.team">Equipo</a> in index.html line 647.
                            In scripts.js translation, footer.team exists.
                            Wait, plan used 'footer.team' in translation index. But let's check legacy again.
                            Legacy line 647: <a href="#equipo" data-lang="footer.team">Equipo</a>.
                            My translation file included 'footer.team'.
                            So I should use footer.team.
                        */}
                        <a href="#form">{t('footer.contact')}</a>
                        <a href="#equipo">{t('nav.team')}</a> {/* Using nav.team or footer.team? scripts.js has nav.team and footer.team? 
                            Let's check scripts.js again.
                            'nav.team': 'Equipo'
                            'footer.team': Not found in the provided scripts.js snippet (lines 320+).
                            Ah, wait. line 647 in index says data-lang="footer.team".
                            Let's check scripts.js lines 411+ (footer.title...).
                            Line 411: footer.title
                            Line 412: footer.subtitle
                            Line 413: footer.about -> 'About'
                            Line 414: footer.services
                            Line 415: footer.contact
                            Line 416: footer.copyright
                            There is NO 'footer.team' in the scripts.js snippet I saw.
                            But key is `nav.team` in the nav.
                            Wait, index.html line 647 uses `data-lang="footer.team"`.
                            If it's missing in scripts.js, it wouldn't translate.
                            Maybe I missed it in the file view.
                            I'll assume it should be 'Equipo' and use 'nav.team' or add 'footer.team' to translations.
                            I added 'nav.team' to translations. I'll use 'nav.team' here as fallback or just add 'nav.team' key.
                            Actually, looking at the translations I extracted, I DO have 'nav.team'. I do NOT have 'footer.team' in the scripts snippet I pasted?
                            Let's check the extracted translation file content I wrote.
                            ... 'nav.team': 'Team' ...
                            I don't see 'footer.team' in the translations object I created.
                            So I'll use 'nav.team' for consistency.
                        */}
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
}
