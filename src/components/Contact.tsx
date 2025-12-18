'use client';

import React from 'react';
import ContactForm from './Contact/ContactForm';
import ContactInfo from './Contact/ContactInfo';
import ContactMap from './Contact/ContactMap';

export default function Contact() {
  return (
    <section id="contacto" className="w-full min-h-screen bg-[#020c1b] relative overflow-hidden flex items-center px-4 sm:px-6 lg:px-8">
      {/* Fondo con degradado y efectos */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020c1b] via-[#0a192f] to-[#020c1b]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>

      {/* Orbes decorativos */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            Ponte en <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Contacto</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto shadow-[0_0_15px_rgba(34,211,238,0.4)]"></div>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto text-base">
            ¿Tienes una idea en mente o quieres colaborar? Escríbeme y hagamos realidad tu próximo proyecto.
          </p>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Columna Izquierda: Info + Mapa (5 columnas) */}
          <div className="lg:col-span-5 space-y-6">
            <ContactInfo />
            <ContactMap />
          </div>

          {/* Columna Derecha: Formulario (7 columnas) */}
          <div className="lg:col-span-7 h-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
