'use client';

import React from 'react';
import FooterLinks from './Footer/FooterLinks';
import FooterSocial from './Footer/FooterSocial';
import FooterCopyright from './Footer/FooterCopyright';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#050a1f] border-t border-white/5 overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mb-12">
          {/* Enlaces */}
          <div>
            <FooterLinks />
          </div>

          {/* Redes Sociales */}
          <div>
            <FooterSocial />
          </div>
        </div>

        {/* Copyright y Botón */}
        <FooterCopyright />
      </div>
    </footer>
  );
}
