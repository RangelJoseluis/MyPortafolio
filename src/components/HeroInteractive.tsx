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
    <section id="inicio" className="flex flex-col items-center justify-center pt-16 pb-8 px-6 bg-[var(--cyan-primary)] relative overflow-hidden w-full h-screen">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-200/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      {/* Layout vertical centrado - Más compacto */}
      <div className="relative flex flex-col gap-4 max-w-3xl w-full items-center justify-center text-center z-30">

        {/* Foto circular centrada arriba - Tamaño optimizado */}
        <div className="flex justify-center items-center">
          <div
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-cyan-400/50 hover:scale-105 border-4 border-white/20"
            style={{
              transform: isHovered
                ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)`
                : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
            }}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
              <Image
                src="/assets/me.jpg"
                alt="Jose Luis R."
                fill
                className="object-cover pointer-events-none select-none relative z-10"
                priority
                sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
              />
            </div>
          </div>
        </div>

        {/* Texto centrado debajo - Tamaños ajustados */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
            Jose Luis R. <br className="hidden sm:block" />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">Full Stack Developer</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-blue-50 leading-relaxed max-w-xl px-4 font-medium">
            Construyendo software con identidad local y visión global
          </p>

          <p className="text-[10px] sm:text-xs text-blue-100/80 leading-relaxed max-w-md px-4 italic">
            Apasionado por crear aplicaciones web modernas y soluciones innovadoras.
            Especializado en React, Next.js y desarrollo full-stack.
          </p>

          {/* Botones de acción - Más compactos */}
          <div className="flex gap-3 flex-wrap justify-center mt-2">
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-blue-50 text-[#0071bc] px-6 py-2 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg text-xs md:text-sm"
            >
              Ver mis proyectos
            </button>
            <a
              href="/archivos/CV_JoseLuisRangel.pdf"
              download="CV_JoseLuisRangel.pdf"
              className="border-2 border-white hover:bg-white hover:text-[#0071bc] text-white px-6 py-2 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-xs md:text-sm inline-block"
            >
              Descargar CV
            </a>
          </div>

          {/* Redes Sociales - Más compactas */}
          <div className="flex gap-3 mt-2">
            <SocialIcon href="https://www.facebook.com/joseluis.riverarangel.71?locale=es_LA" title="Facebook" icon={<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />} />
            <SocialIcon href="https://linkedin.com/in/joseluisrangelperez" title="LinkedIn" icon={<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.731 1.39 3.731 4.377v5.619zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.958-1.715 1.188 0 1.915.762 1.915 1.715 0 .953-.727 1.715-1.958 1.715zm1.581 11.597H3.756V9.538h3.162v10.914zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />} />
            <SocialIcon href="https://github.com/RangelJoseluis" title="GitHub" icon={<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />} />
          </div>
        </div>
      </div>

      {/* Ajusta si deseasTransición orgánica hacia la siguiente sección */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden line-height-0 z-20">
        <svg
          className="relative block w-full h-[60px] md:h-[20px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,113.15,145.69,125.32,213.27,115.32,288.71,104.13,321.39,56.44,321.39,56.44Z"
            fill="#0a0e27"
          ></path>
        </svg>
      </div>

      {/* Overlay de degradado extra para suavizar aún más */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0e27] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}

function SocialIcon({ href, title, icon }: { href: string, title: string, icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110" title={title}>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
    </a>
  );
}
