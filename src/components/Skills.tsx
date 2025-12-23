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
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="habilidades" ref={sectionRef} className="flex items-center justify-center pt-15 pb-10 py-6 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Encabezado de sección */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Habilidades</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto shadow-[0_0_10px_rgba(34,211,238,0.3)]"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Un conjunto de tecnologías modernas que utilizo para construir soluciones digitales robustas y escalables.
          </p>
        </div>

        {/* Grid de Categorías */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
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
