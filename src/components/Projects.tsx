'use client';

import React, { useState } from 'react';
import ProjectCard from './Projects/ProjectCard';
import ProjectModal from './Projects/ProjectModal';
import { projectsData, Project } from './Projects/ProjectsData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="w-full min-h-screen bg-[#0a0e27] relative overflow-hidden flex items-start pb-10 px-4 sm:px-6 lg:px-8">
      {/* Fondo con degradado sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#0f1635] to-[#0a0e27] opacity-90"></div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[90rem] mx-auto w-full relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tight">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Proyectos</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto shadow-[0_0_15px_rgba(34,211,238,0.4)]"></div>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Explora una selección de mis trabajos más recientes.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}

          {/* Tarjeta de "Próximamente" */}
          <div className="group relative bg-[#0f1635]/30 rounded-xl border-2 border-dashed border-white/10 hover:border-cyan-500/30 hover:bg-[#0f1635]/50 transition-all duration-300 flex flex-col items-center justify-center h-full min-h-[200px] p-4 text-center cursor-default">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 group-hover:bg-cyan-500/10">
              <svg className="w-6 h-6 text-gray-500 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-gray-400 group-hover:text-white transition-colors mb-1">Más Proyectos</h3>
            <p className="text-gray-600 group-hover:text-gray-400 text-[10px] transition-colors max-w-[150px]">
              Trabajando en nuevas ideas y soluciones innovadoras.
            </p>
          </div>
        </div>

        {/* Modal de Proyecto */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
