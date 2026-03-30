import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/59893350714"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 z-50"
      aria-label="Contactarnos por WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
    </a>
  );
};

export default WhatsAppButton;
