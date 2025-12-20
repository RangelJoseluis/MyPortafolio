'use client';

import React from 'react';
import BioSection from './About/BioSection';
import InterestsSection from './About/InterestsSection';
import AboutImage from './About/AboutImage';

export default function About() {
  return (
    <section id="sobremi" className="flex items-center justify-center pt-15 pb-8 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Encabezado de sección - Centrado */}
        <div className="mb-8 flex flex-col items-center">
          <div className="relative inline-block text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Mí</span>
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.3)]"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Columna Izquierda: Foto con Overlay Interactivo */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <AboutImage />
          </div>

          {/* Columna Derecha: Bio e Intereses */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-[#0f1635]/30 backdrop-blur-sm border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
              <BioSection />

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <div className="pt-0">
                <InterestsSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}