'use client';

import React, { useState } from 'react';
import TimelineItem from './Curriculum/TimelineItem';
import EducationItem from './Curriculum/EducationItem';
import ViewAllExperiencesModal from './Curriculum/ViewAllExperiencesModal';
import { experienceData, educationData } from './Curriculum/CurriculumData';

export default function Curriculum() {
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);

  return (
    <section id="curriculum" className="flex items-center justify-center pt-16 pb-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Encabezado de sección */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            Mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Trayectoria</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto shadow-[0_0_10px_rgba(34,211,238,0.3)]"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Experiencia profesional y formación académica.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Columna Izquierda: Experiencia (8 columnas) */}
          <div className="lg:col-span-8">
            <h3 className="text-base md:text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="p-1 bg-cyan-500/10 rounded text-cyan-400 border border-cyan-500/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Experiencia Profesional
            </h3>

            <div className="relative pl-2">
              <div className="absolute left-[19px] top-4 bottom-0 w-0.5 bg-white/5"></div>
              <div className="flex flex-col gap-0">
                {experienceData.map((exp, idx) => (
                  <TimelineItem
                    key={exp.id}
                    data={exp}
                    isLast={idx === experienceData.length - 1}
                    delay={idx * 200}
                  />
                ))}
              </div>

              <div className="mt-6 flex justify-center relative z-20">
                <button
                  onClick={() => setIsViewAllOpen(true)}
                  className="group relative px-5 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 hover:from-cyan-500/20 hover:to-blue-600/20 border border-cyan-500/30 hover:border-cyan-400/50 rounded-lg text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 overflow-hidden text-xs"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Ver toda mi experiencia
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Educación (4 columnas) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h3 className="text-base md:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="p-1 bg-blue-600/10 rounded text-blue-400 border border-blue-600/20">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </span>
                Educación
              </h3>

              <div className="space-y-6">
                {educationData.map((edu, idx) => (
                  <EducationItem
                    key={edu.id}
                    data={edu}
                    delay={idx * 200 + 400}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ViewAllExperiencesModal
        isOpen={isViewAllOpen}
        onClose={() => setIsViewAllOpen(false)}
      />
    </section>
  );
}
