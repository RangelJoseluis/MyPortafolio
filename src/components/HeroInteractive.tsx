'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

export default function HeroInteractive() {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section id="inicio" className="relative h-screen w-screen bg-linear-to-br from-[#0071bc] via-[#004a99] to-[#003d7a] flex flex-col items-center justify-start px-3 sm:px-6 lg:px-8 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Ajsutar si es deasdoESPACIADOR EXPLÍCITO - Fuerza bruta para bajar el contenido */}
      <div className="w-full h-32 sm:h-12 shrink-0"></div>

      {/* Layout vertical centrado - Opción A ajustado */}
      <div className="relative flex flex-col gap-3 md:gap-4 max-w-3xl w-full items-center justify-center text-center mb-8 z-10">

        {/* Foto circular centrada arriba - TAMAÑO REDUCIDO */}
        <div className="flex justify-center items-center">
          <div
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-cyan-400/50 hover:scale-105 border-4 border-white/20"
            style={{
              transform: isHovered
                ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)`
                : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
            }}
          >
            {/* Imagen de perfil */}
            <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <img
                src="/assets/me.jpg"
                alt="Jose Luis Rangel"
                className="w-full h-full object-cover pointer-events-none select-none"
                onError={(e) => {
                  console.error("Error cargando imagen:", e);
                  // No ocultamos el elemento para ver si aparece el icono de error
                }}
              />
              {/* Overlay de brillo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Texto centrado debajo - COMPACTO */}
        <div className="flex flex-col items-center gap-2 md:gap-3">
          {/* Título con efecto degradado restaurado */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            ¡Hola! Soy <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-cyan-400 to-white bg-clip-text text-transparent">Desarrollador</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-blue-50 leading-relaxed max-w-xl px-4">
            Apasionado por crear aplicaciones web modernas y soluciones innovadoras.
            Especializado en React, Next.js y desarrollo full-stack.
          </p>

          {/* Botones de acción - MÁS COMPACTOS */}
          <div className="flex gap-2 md:gap-3 flex-wrap justify-center mt-1">
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-blue-50 text-[#0071bc] px-5 md:px-7 py-2 md:py-2.5 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg text-xs md:text-sm"
            >
              Ver mis proyectos
            </button>
            <a
              href="/archivos/CV - Jose Luis Rangel Perez Aspirante.pdf"
              download
              className="border-2 border-white hover:bg-white hover:text-[#0071bc] text-white px-5 md:px-7 py-2 md:py-2.5 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-xs md:text-sm inline-block"
            >
              Descargar CV
            </a>
          </div>

          {/* Redes Sociales - MÁS COMPACTAS */}
          <div className="flex gap-3 md:gap-4 mt-1">
            <a href="#" className="w-10 h-10 md:w-11 md:h-11 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110" title="Facebook">
              <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="#" className="w-10 h-10 md:w-11 md:h-11 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110" title="Twitter">
              <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.836.856 4.958 4.958 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
            <a href="#" className="w-10 h-10 md:w-11 md:h-11 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110" title="LinkedIn">
              <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.731 1.39 3.731 4.377v5.619zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.958-1.715 1.188 0 1.915.762 1.915 1.715 0 .953-.727 1.715-1.958 1.715zm1.581 11.597H3.756V9.538h3.162v10.914zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
            </a>
            <a href="#" className="w-10 h-10 md:w-11 md:h-11 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110" title="GitHub">
              <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
