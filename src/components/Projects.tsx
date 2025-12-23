'use client';

import React, { useState } from 'react';
import ProjectCard from './Projects/ProjectCard';
import ProjectModal from './Projects/ProjectModal';
import { projectsData, Project } from './Projects/ProjectsData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="proyectos" className="pt-15 pb-10 px-6 sm:px-12 lg:px-24 min-h-[60vh]">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Encabezado */}
        <div className="mb-8 flex flex-col items-center">
          <div className="relative inline-block text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 tracking-tight">
              Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Proyectos</span>
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.3)]"></div>
          </div>
          <p className="mt-2 text-gray-400 max-w-2xl mx-auto text-xs md:text-sm">
            Explora una selección de mis trabajos más recientes.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}

          {/* Tarjeta de "Próximamente" */}
          <div className="group relative bg-[#0f1635]/30 rounded-xl border-2 border-dashed border-white/10 hover:border-cyan-500/30 hover:bg-[#0f1635]/50 transition-all duration-300 flex flex-col items-center justify-center h-full min-h-[200px] p-6 text-center cursor-default">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 group-hover:bg-cyan-500/10">
              <svg className="w-6 h-6 text-gray-500 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-gray-400 group-hover:text-white transition-colors mb-2">Más Proyectos</h3>
            <p className="text-gray-600 group-hover:text-gray-400 text-xs transition-colors max-w-[180px]">
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
