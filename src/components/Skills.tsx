'use client';

import { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

export default function Skills() {
  const [animateSkills, setAnimateSkills] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technicalSkills: Skill[] = [
    { name: 'React', percentage: 90 },
    { name: 'Next.js', percentage: 85 },
    { name: 'TypeScript', percentage: 88 },
    { name: 'Tailwind CSS', percentage: 92 },
    { name: 'Node.js', percentage: 80 },
    { name: 'PostgreSQL', percentage: 75 },
  ];

  const professionalSkills: Skill[] = [
    { name: 'Comunicación', percentage: 85 },
    { name: 'Trabajo en Equipo', percentage: 90 },
    { name: 'Liderazgo', percentage: 78 },
    { name: 'Resolución de Problemas', percentage: 88 },
    { name: 'Creatividad', percentage: 92 },
    { name: 'Gestión de Proyectos', percentage: 80 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animateSkills) {
          setAnimateSkills(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animateSkills]);

  const SkillBar = ({ skill }: { skill: Skill }) => (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-semibold text-sm md:text-base">{skill.name}</span>
        <span className="text-cyan-400 font-bold text-xs md:text-sm">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2 md:h-3 overflow-hidden">
        <div
          className="bg-linear-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animateSkills ? `${skill.percentage}%` : '0%',
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="w-full h-screen bg-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 flex flex-col justify-center relative z-10">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Mis <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 md:w-24 h-1.5 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        {/* Grid de Skills */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3">
              <span className="text-2xl">⚙️</span>
              Technical Skills
            </h3>
            <div className="space-y-3 md:space-y-5">
              {technicalSkills.map((skill, idx) => (
                <SkillBar key={idx} skill={skill} />
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              Professional Skills
            </h3>
            <div className="space-y-3 md:space-y-5">
              {professionalSkills.map((skill, idx) => (
                <SkillBar key={idx} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
