'use client';

import { useState, useRef } from 'react';

interface InfoPanel {
  title: string;
  description: string;
  skills: string[];
}

export default function HeroInteractive() {
  const [showPanel, setShowPanel] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const infoPanelData: InfoPanel = {
    title: 'Desarrollador Full Stack',
    description: 'Especializado en crear experiencias web modernas con tecnologías de punta.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Bases de Datos'],
  };

  const handleMouseEnter = () => {
    setShowPanel(true);
  };

  const handleMouseLeave = () => {
    setShowPanel(false);
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-linear-to-br from-[#0071bc] via-[#004a99] to-[#003d7a] flex items-center justify-center py-12 md:py-20 pt-20 md:pt-28 px-3 sm:px-6 lg:px-8 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 max-w-6xl w-full items-center">
        {/* Lado izquierdo - Texto */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-6 leading-tight">
            ¡Hola! Soy <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-[#0071bc] to-white bg-clip-text text-transparent">Desarrollador</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-50 mb-6 md:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Apasionado por crear aplicaciones web modernas y soluciones innovadoras.
            Especializado en React, Next.js y desarrollo full-stack.
          </p>

          <div className="flex gap-2 md:gap-4 flex-wrap justify-center lg:justify-start mb-6 md:mb-8">
            <button className="bg-white hover:bg-blue-50 text-[#0071bc] px-5 md:px-7 py-2 md:py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg text-xs md:text-sm">
              Ver mis proyectos
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#0071bc] text-white px-5 md:px-7 py-2 md:py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-xs md:text-sm">
              Descargar CV
            </button>
          </div>

          {/* Redes Sociales */}
          <div className="flex gap-3 md:gap-4">
            <a href="#" className="w-9 h-9 md:w-10 md:h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110" title="Facebook">
              <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 md:w-10 md:h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110" title="Twitter">
              <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.836.856 4.958 4.958 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 md:w-10 md:h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110" title="LinkedIn">
              <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.731 1.39 3.731 4.377v5.619zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.958-1.715 1.188 0 1.915.762 1.915 1.715 0 .953-.727 1.715-1.958 1.715zm1.581 11.597H3.756V9.538h3.162v10.914zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 md:w-10 md:h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110" title="GitHub">
              <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        {/* Lado derecho - Card con efecto hover */}
        <div className="flex justify-center items-center w-full md:w-1/2 px-2">
          <div
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-sm h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group border-4 border-white/30"
          >
            {/* Imagen de fondo */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-600 ease-out group-hover:scale-110"
              style={{
                backgroundImage: 'url(/profile.jpg)',
              }}
            >
              {/* Overlay gradient mejorado */}
              <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/40 transition-opacity duration-600 group-hover:opacity-80" />
            </div>

            {/* Panel deslizante desde la izquierda */}
            <div
              className={`absolute inset-0 w-3/5 bg-black/40 backdrop-blur-md flex flex-col justify-center p-6 transition-all duration-600 ease-out transform ${
                showPanel ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <div className="space-y-4">
                {/* Nombre/Título */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {infoPanelData.title}
                  </h2>
                  <p className="text-cyan-300 text-sm font-semibold">Full Stack Developer</p>
                </div>

                {/* Descripción */}
                <p className="text-gray-200 text-sm leading-relaxed line-clamp-3">
                  {infoPanelData.description}
                </p>

                {/* Skills en tags */}
                <div className="space-y-2">
                  <p className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    Habilidades
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {infoPanelData.skills.slice(0, 4).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-cyan-500/30 text-cyan-200 px-2 py-1 rounded-full border border-cyan-400/50 hover:bg-cyan-500/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botón de contacto */}
                <button className="w-full mt-4 bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                  Contactar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
