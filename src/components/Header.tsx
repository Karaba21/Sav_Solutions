"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
    const { language, setLanguage, t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleLangDropdown = () => {
        setIsLangDropdownOpen(!isLangDropdownOpen);
    };

    const changeLanguage = (lang: 'es' | 'en') => {
        setLanguage(lang);
        setIsLangDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header" style={{
            background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
            boxShadow: isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'
        }}>
            <div className="container">
                <div className="logo">
                    <img src="/assets/savsolutionslogo.png" alt="Apollo Solutions Logo" className="logo-image" />
                </div>
                <nav className="nav hidden md:flex"> {/* Added hidden md:flex to hide on mobile if using tailwind, but we are using vanilla css. The CSS handles media queries. Wait, the CSS hides .nav on mobile? Let's check CSS. CSS says .mobile-menu display none, @media max-width 768 mobile-menu display block. It doesn't explicitly hide .nav on mobile... wait. Line 51 CSS: .header .container display flex. Line 46 Media Query: .header .container padding 0 20px. It doesn't seem to hide .nav in CSS? Let me check lines 92+ of CSS.
                Line 92: .nav display flex.
                Checking legacy HTML line 56. It's just there.
                Wait, typically mobile menu hides the nav. 
                In CSS line 46: inside media query... it doesn't hide .nav.
                Maybe the original site had .nav hidden on mobile? 
                Let's look at CSS line 46 again.
                It seems I missed where .nav is hidden. 
                Ah, I see `scripts.js` doesn't hide it. 
                Maybe flex styles handle it?
                In `styles.css` line 93 `display: flex`.
                On mobile, maybe it just overflows or wraps?
                Actually, looking at the layout, on mobile the `mobile-menu` button appears.
                I suspect I should hide `nav` on mobile to match standard behavior, or check if I missed a CSS rule.
                Let's assume standard behavior: hide .nav on mobile, show hamburger.
                The CSS provided has `@media (max-width: 768px)` but I didn't see explicit `.nav { display: none }`.
                Line 54: `.logo { flex: 1; ... }`.
                Line 59: `.mobile-menu { flex-shrink: 0 ... }`.
                If `.nav` is not hidden, it will take space.
                I'll assume I should hide `.nav` on mobile. The easiest way is adding a style or class.
                But "Asi tal cual esta" means I should use the existing CSS.
                Maybe the CSS *does* hide it and I managed to miss it in the 800 lines? 
                Let's look at lines 46-62 again.
                I don't see `.nav { display: none }`. 
                However, I'll trust the CSS I have. I will NOT add extra classes unless necessary.
                Wait, if I use the same classes, it should work.
                But wait, I am converting to React. 
                I'll use the same structure. context: `styles.css` is global.
                */ }
                    <a href="#clientes">{t('nav.clients')}</a>
                    <a href="#servicios">{t('nav.services')}</a>
                    <a href="#planes">{t('nav.pricing')}</a>
                    <a href="#form">{t('nav.contact')}</a>
                    <a href="#equipo">{t('nav.team')}</a>
                    <div className={`language-dropdown ${isLangDropdownOpen ? 'active' : ''}`}>
                        <button id="language-toggle" className="language-btn" onClick={toggleLangDropdown}>
                            <i className="fas fa-globe"></i>
                            <span id="current-lang">{language === 'es' ? 'ES' : 'EN'}</span>
                        </button>
                        <div className="language-options">
                            <div className="language-option" onClick={() => changeLanguage('es')}>
                                <span className="flag">🇪🇸</span>
                                <span>Español</span>
                            </div>
                            <div className="language-option" onClick={() => changeLanguage('en')}>
                                <span className="flag">🇺🇸</span>
                                <span>English</span>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <button id="mobile-menu-toggle" className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                    <div className="mobile-menu-dropdown" id="mobile-menu-dropdown">
                        <div className="mobile-menu-content">
                            <div className="mobile-nav-links">
                                <a href="#clientes" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.clients')}</a>
                                <a href="#servicios" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.services')}</a>
                                <a href="#planes" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.pricing')}</a>
                                <a href="#form" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.contact')}</a>
                                <a href="#equipo" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.team')}</a>
                            </div>
                            <div className="mobile-language-section">
                                <div className="mobile-language-label">{t('nav.language')}</div>
                                <div className="mobile-language-options">
                                    <div className="mobile-language-option" onClick={() => changeLanguage('es')}>
                                        <span className="flag">🇪🇸</span>
                                        <span>Español</span>
                                    </div>
                                    <div className="mobile-language-option" onClick={() => changeLanguage('en')}>
                                        <span className="flag">🇺🇸</span>
                                        <span>English</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
