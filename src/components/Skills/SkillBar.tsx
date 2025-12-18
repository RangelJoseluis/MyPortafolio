import React from 'react';

interface SkillBarProps {
    name: string;
    level: number;
    delay?: number;
    isVisible?: boolean;
}

export default function SkillBar({ name, level, delay = 0, isVisible = false }: SkillBarProps) {
    return (
        <div className="mb-6 group relative">
            <div className="flex justify-between items-end mb-2">
                <span className="text-gray-200 font-medium text-base group-hover:text-cyan-400 transition-colors duration-300">
                    {name}
                </span>
                <span className="text-cyan-500 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {level}%
                </span>
            </div>

            <div className="h-2.5 w-full bg-[#0a0e27] rounded-full overflow-hidden border border-white/5 relative">
                {/* Fondo sutil */}
                <div className="absolute inset-0 bg-white/5"></div>

                {/* Barra de progreso animada */}
                <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full relative shadow-[0_0_10px_rgba(6,182,212,0.5)] transform-gpu transition-all duration-1000 ease-out overflow-hidden"
                    style={{
                        width: isVisible ? `${level}%` : '0%',
                        transitionDelay: `${delay}ms`
                    }}
                >
                    {/* Brillo superior estático */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/40"></div>

                    {/* Efecto de carga activa al pasar el mouse (Shimmer) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer w-full h-full"></div>
                </div>
            </div>
        </div>
    );
}
