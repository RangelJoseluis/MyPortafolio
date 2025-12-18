import React, { useState } from 'react';
import { Experience } from './CurriculumData';
import ExperienceModal from './ExperienceModal';

interface TimelineItemProps {
    data: Experience;
    isLast?: boolean;
    delay?: number;
}

export default function TimelineItem({ data, isLast = false, delay = 0 }: TimelineItemProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div
                className="relative flex gap-4 md:gap-8 group cursor-pointer"
                style={{ animationDelay: `${delay}ms` }}
                onClick={() => setIsModalOpen(true)}
            >
                {/* Línea de tiempo */}
                <div className="flex flex-col items-center">
                    {/* Punto brillante */}
                    <div className="w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10 mt-1.5 group-hover:scale-125 transition-transform duration-300"></div>
                    {/* Línea conectora */}
                    {!isLast && (
                        <div className="w-0.5 h-full bg-gradient-to-b from-cyan-500/50 to-transparent my-2 group-hover:bg-cyan-500/30 transition-colors"></div>
                    )}
                </div>

                {/* Contenido de la tarjeta compacta */}
                <div className="flex-1 pb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-5 hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 group-hover:border-l-cyan-500/50 border-l-4 border-l-transparent relative overflow-hidden">

                        {/* Indicador de "click para ver más" */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="p-1.5 bg-cyan-500/20 rounded-full border border-cyan-500/30">
                                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                        </div>

                        {/* Encabezado: Rol y Empresa */}
                        <div className="flex flex-col gap-2 pr-10">
                            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {data.role}
                            </h3>
                            <p className="text-cyan-200 font-medium text-sm md:text-base">{data.company}</p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20">
                                    {data.period}
                                </span>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs border border-white/5">
                                    {data.location}
                                </span>
                            </div>
                        </div>

                        {/* Hint de "Click para más detalles" */}
                        <p className="text-gray-500 text-xs mt-3 italic group-hover:text-cyan-400/70 transition-colors">
                            Click para ver detalles completos →
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <ExperienceModal
                data={data}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
