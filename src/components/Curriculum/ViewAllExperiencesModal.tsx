import React, { useState } from 'react';
import { experienceData } from './CurriculumData';

interface ViewAllExperiencesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ViewAllExperiencesModal({ isOpen, onClose }: ViewAllExperiencesModalProps) {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    if (!isOpen) return null;

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={onClose}
        >
            {/* Overlay oscuro con blur */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md"></div>

            {/* Modal amplio */}
            <div
                className="relative bg-[#0a0e27]/95 backdrop-blur-2xl border border-white/20 rounded-xl shadow-2xl shadow-cyan-500/20 max-w-5xl w-full max-h-[90vh] overflow-y-auto transform-gpu"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Borde brillante animado */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-20 blur-xl"></div>

                {/* Contenido */}
                <div className="relative p-6 md:p-8">
                    {/* Botón cerrar */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group z-10"
                    >
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Encabezado */}
                    <div className="mb-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Experiencia Profesional Completa
                        </h2>
                        <p className="text-gray-400 text-sm">
                            Haz clic en cada experiencia para ver más detalles
                        </p>
                        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mx-auto mt-2"></div>
                    </div>

                    {/* Lista de experiencias estilo acordeón */}
                    <div className="space-y-3">
                        {experienceData.map((exp) => {
                            const isExpanded = expandedId === exp.id;

                            return (
                                <div
                                    key={exp.id}
                                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
                                >
                                    {/* Encabezado clickeable */}
                                    <button
                                        onClick={() => toggleExpand(exp.id)}
                                        className="w-full p-4 md:p-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
                                    >
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                                                {exp.role}
                                            </h3>
                                            <p className="text-cyan-200 font-medium text-sm">{exp.company}</p>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
                                                    {exp.period}
                                                </span>
                                                <span className="px-2 py-0.5 rounded-full bg-white/5 text-gray-300 text-xs border border-white/10">
                                                    📍 {exp.location}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Icono de expandir/contraer */}
                                        <div className="ml-4">
                                            <svg
                                                className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </button>

                                    {/* Contenido expandible */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="px-4 md:px-5 pb-5 pt-2 border-t border-white/10">
                                            {/* Descripción */}
                                            <div className="mb-4">
                                                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                                    {exp.description}
                                                </p>
                                            </div>

                                            {/* Logros */}
                                            <div className="mb-4">
                                                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                                                    <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></span>
                                                    Logros y Responsabilidades
                                                </h4>
                                                <ul className="space-y-2">
                                                    {exp.achievements.map((achievement, achIdx) => (
                                                        <li key={achIdx} className="flex items-start gap-2 text-gray-300 text-sm">
                                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0"></span>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Tecnologías */}
                                            {exp.tech && (
                                                <div>
                                                    <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                                                        <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></span>
                                                        Tecnologías
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.tech.map((tech, techIdx) => (
                                                            <span
                                                                key={techIdx}
                                                                className="px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg border border-cyan-500/30"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-500 text-xs italic">
                            Esta sección se actualizará con nuevas experiencias futuras
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
