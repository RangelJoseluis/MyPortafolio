'use client';

import React from 'react';
import BioSection from './About/BioSection';
import PersonalDetails from './About/PersonalDetails';
import InterestsSection from './About/InterestsSection';

export default function About() {
  return (
    <section id="sobremi" className="w-full min-h-screen bg-[#0a0e27] relative overflow-hidden flex items-center pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Fondo con degradado sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0a0e27] to-[#0f3460] opacity-80"></div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Encabezado de sección - Alineado a la izquierda */}
        <div className="mb-12 flex flex-col items-center md:items-start">
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Mí</span>
            </h2>
            {/* Línea decorativa justo debajo del texto y del mismo ancho */}
            <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)]"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Columna Izquierda: Bio e Intereses (7 columnas) */}
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
            <BioSection />
            <InterestsSection />
          </div>

          {/* Columna Derecha: Tarjeta de Detalles (5 columnas) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 order-1 lg:order-2">
            <PersonalDetails />
          </div>
        </div>
      </div>
    </section>
  );
}