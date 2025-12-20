import React from 'react';
import { Education } from './CurriculumData';

interface EducationItemProps {
    data: Education;
    delay?: number;
}

export default function EducationItem({ data, delay = 0 }: EducationItemProps) {
    return (
        <div
            className="relative flex gap-4 md:gap-6 group transition-all duration-700"
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Icono de educación */}
            <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/20 z-10 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                </div>
                <div className="w-0.5 h-full bg-gradient-to-b from-blue-600/50 to-transparent my-1.5"></div>
            </div>

            {/* Contenido */}
            <div className="flex-1 pb-1.5">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/5">
                    <div className="flex flex-col justify-between items-start gap-0.5 mb-1">
                        <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                            {data.degree}
                        </h3>
                        <span className="px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[9px] font-bold border border-blue-500/20">
                            {data.period}
                        </span>
                    </div>
                    <p className="text-cyan-200 font-medium text-[10px] mb-0.5">{data.institution}</p>
                    <p className="text-gray-400 text-[9px]">{data.location}</p>
                </div>
            </div>
        </div>
    );
}
