import React from 'react';
import { Project } from './ProjectsData';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <div
            className="group relative bg-[#0f1635] rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer flex flex-col h-full"
            onClick={onClick}
        >
            {/* Image Container */}
            <div className="relative h-45 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1635] to-transparent z-10 opacity-60"></div>
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Status Badge */}
                <div className="absolute top-2 right-2 z-20">
                    <span className={`px-2 py-1 rounded-full text-[9px] font-bold border ${project.status === 'Finalizado'
                        ? 'bg-green-500/10 text-green-400 border-green-500/20'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        }`}>
                        {project.status}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors leading-tight">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-3 line-clamp-2 flex-1">
                    {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-[9px] md:text-[10px] px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="text-[9px] md:text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>

                {/* Action Hint */}
                <div className="flex items-center text-cyan-400 text-[10px] md:text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>Ver Galería</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
