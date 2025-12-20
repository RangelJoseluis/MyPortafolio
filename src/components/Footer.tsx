'use client';

import React from 'react';
import FooterLinks from './Footer/FooterLinks';
import FooterSocial from './Footer/FooterSocial';
import FooterCopyright from './Footer/FooterCopyright';
import ScrollToTop from './Footer/ScrollToTop';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0e27] overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-4 relative z-10">
        <div className="flex flex-col items-center gap-6 mb-6">
          {/* Enlaces Horizontales */}
          <FooterLinks />

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Redes Sociales Horizontales */}
            <FooterSocial />

            <div className="hidden md:block w-px h-6 bg-white/10"></div>

            {/* Botón de subir al inicio */}
            <ScrollToTop />
          </div>
        </div>

        {/* Copyright */}
        <FooterCopyright />
      </div>
    </footer>
  );
}
