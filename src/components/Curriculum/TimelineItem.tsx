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
                className="relative flex gap-3 md:gap-4 group cursor-pointer pb-5 last:pb-0"
                style={{ animationDelay: `${delay}ms` }}
                onClick={() => setIsModalOpen(true)}
            >
                {/* Línea de tiempo */}
                <div className="flex flex-col items-center relative">
                    {/* Punto brillante - Alineado con el título */}
                    <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] z-10 mt-5 group-hover:scale-110 transition-transform duration-300"></div>
                    {/* Línea conectora absoluta para evitar huecos */}
                    {!isLast && (
                        <div className="absolute top-8 bottom-0 w-0.5 bg-cyan-500/30 group-hover:bg-cyan-500 transition-colors"></div>
                    )}
                </div>

                {/* Contenido de la tarjeta compacta */}
                <div className="flex-1">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-2.5 md:p-3 hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10 group-hover:border-l-cyan-500/50 border-l-4 border-l-transparent relative overflow-hidden">

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
                        <div className="flex flex-col gap-0.5 pr-10">
                            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                                {data.role}
                            </h3>
                            <p className="text-cyan-200 font-medium text-[10px] md:text-xs">{data.company}</p>

                            <div className="flex flex-wrap gap-1.5 mt-1.5">
                                <span className="inline-block px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[9px] font-bold border border-cyan-500/20">
                                    {data.period}
                                </span>
                                <span className="inline-block px-2 py-0.5 rounded-full bg-white/5 text-gray-400 text-[9px] border border-white/5">
                                    {data.location}
                                </span>
                            </div>
                        </div>

                        {/* Hint de "Click para más detalles" */}
                        <p className="text-gray-500 text-[9px] mt-2 italic group-hover:text-cyan-400/70 transition-colors">
                            Detalles →
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
