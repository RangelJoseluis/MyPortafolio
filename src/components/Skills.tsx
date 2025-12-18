'use client';

import React, { useState, useEffect, useRef } from 'react';
import SkillsCategory from './Skills/SkillsCategory';
import { skillsData } from './Skills/SkillsData';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Solo animar una vez
        }
      },
      { threshold: 0.1 } // Disparar cuando el 10% sea visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="w-full min-h-screen bg-[#0a0e27] relative overflow-hidden flex items-center py-24 px-4 sm:px-6 lg:px-8">
      {/* Fondo con degradado sutil */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0f3460] via-[#0a0e27] to-[#1a1a2e] opacity-90"></div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Encabezado de sección */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Habilidades</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto shadow-[0_0_15px_rgba(34,211,238,0.4)]"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Un conjunto de tecnologías modernas que utilizo para construir soluciones digitales robustas y escalables.
          </p>
        </div>

        {/* Grid de Categorías */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {skillsData.map((category, idx) => (
            <SkillsCategory
              key={idx}
              title={category.title}
              skills={category.skills}
              delay={idx * 200}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
