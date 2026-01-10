"use client";

import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            className="scroll-to-top"
            onClick={scrollToTop}
            style={{
                display: 'block', // Added because class definition might not have display block or it is dynamic
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? 'visible' : 'hidden',
                position: 'fixed',
                bottom: '100px',
                right: '30px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                zIndex: 1000,
                boxShadow: '0 5px 15px rgba(99, 102, 241, 0.3)',
                transition: 'all 0.3s ease',
            }}
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
}

/* Note: styles are inline here to match scripts.js injection, but could be moved to globals.css. 
   scripts.js injected these styles specifically. 
   I will keep them inline or I should have added them to CSS file. 
   Since usage "Asi tal cual esta" implies mimicking behavior, and scripts.js did it inline, inline is fine.
   Wait, originally they were injected via JS. So inline styles here is appropriate to replicate that "dynamic" feel or just put in CSS.
   It's cleaner in React to use CSS modules or classes, but I am porting quick. Inline is robust here.
*/
