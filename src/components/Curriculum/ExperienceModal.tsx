import React from 'react';
import { Experience } from './CurriculumData';

interface ExperienceModalProps {
    data: Experience;
    isOpen: boolean;
    onClose: () => void;
}

export default function ExperienceModal({ data, isOpen, onClose }: ExperienceModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 animate-in fade-in duration-300"
            onClick={onClose}
        >
            {/* Overlay oscuro con blur */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

            {/* Modal ajustado */}
            <div
                className="relative bg-[#0a0e27]/95 backdrop-blur-2xl border border-white/20 rounded-xl shadow-2xl shadow-cyan-500/20 max-w-2xl w-full max-h-[85vh] flex flex-col transform-gpu"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Borde brillante animado */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-20 blur-xl pointer-events-none"></div>

                {/* Encabezado fijo */}
                <div className="relative p-4 md:p-6 border-b border-white/10">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group z-10"
                    >
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="pr-10">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-1 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {data.role}
                        </h2>
                        <p className="text-cyan-200 font-semibold text-sm md:text-base mb-2">{data.company}</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] md:text-xs font-bold border border-cyan-500/20">
                                {data.period}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-white/5 text-gray-300 text-[10px] md:text-xs border border-white/10">
                                📍 {data.location}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Contenido scrolleable */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
                    {/* Descripción */}
                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                            <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></span>
                            Descripción
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-xs md:text-sm">
                            {data.description}
                        </p>
                    </div>

                    {/* Logros */}
                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></span>
                            Logros y Responsabilidades
                        </h3>
                        <ul className="space-y-2">
                            {data.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-300 bg-white/5 rounded-lg p-2.5 border border-white/5 hover:border-cyan-500/20 transition-colors">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
                                    <span className="text-xs md:text-sm">{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tecnologías */}
                    {data.tech && (
                        <div>
                            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></span>
                                Tecnologías Utilizadas
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                                {data.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2.5 py-1 text-[10px] md:text-xs font-semibold text-white bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
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
}
