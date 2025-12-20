'use client';

import React from 'react';
import ContactForm from './Contact/ContactForm';
import ContactInfo from './Contact/ContactInfo';
import ContactMap from './Contact/ContactMap';

export default function Contact() {
  return (
    <section id="contacto" className="flex items-center justify-center pt-15 pb-12 px-6 sm:px-12 lg:px-24 min-h-[70vh]">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Encabezado */}
        <div className="mb-6 flex flex-col items-center">
          <div className="relative inline-block text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight">
              Ponte en <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Contacto</span>
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.3)]"></div>
          </div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-xs md:text-sm text-center">
            ¿Tienes una idea en mente o quieres colaborar? Escríbeme y hagamos realidad tu próximo proyecto.
          </p>
        </div>

        {/* Grid Principal: Info + Formulario + Mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Columna 1: Info (3 columnas) */}
          <div className="lg:col-span-3 flex">
            <ContactInfo />
          </div>

          {/* Columna 2: Formulario (5 columnas) */}
          <div className="lg:col-span-5 flex">
            <ContactForm />
          </div>

          {/* Columna 3: Mapa (4 columnas) */}
          <div className="lg:col-span-4 flex">
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
}
