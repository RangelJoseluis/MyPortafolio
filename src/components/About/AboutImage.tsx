'use client';

import React from 'react';
import Image from 'next/image';

import PersonalDetails from './PersonalDetails';

export default function AboutImage() {
    return (
        <div className="relative group w-full max-w-[380px] h-[405px] mx-auto overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl cursor-pointer">
            {/* Imagen de fondo */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <Image
                    src="/assets/perfil_elegant.png"
                    alt="Jose Luis R."
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradiente inicial */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            </div>

            {/* Overlay de Texto (Slide-in) */}
            <div className="absolute top-0 -left-full group-hover:left-0 w-[75%] h-full bg-[#0a0e27]/40 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col justify-center transition-all duration-500 ease-in-out z-20">
                <div className="space-y-1 mb-4">
                    <h2 className="text-xl font-bold text-white tracking-tight">Jose Luis R.</h2>
                    <p className="text-cyan-400 text-xs font-medium">Full Stack Developer</p>
                </div>

                <div className="custom-scrollbar overflow-y-auto pr-2">
                    <PersonalDetails />
                </div>
            </div>

            {/* Decoración inferior (visible cuando no hay hover) */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl transform translate-y-0 opacity-100 group-hover:translate-y-10 group-hover:opacity-0 transition-all duration-500 z-10">
                <p className="text-white font-bold text-sm text-center">Jose Luis R.</p>
                <p className="text-cyan-400 text-xs text-center">Full Stack Developer</p>
            </div>

            {/* Efectos de luz flotantes */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors duration-700"></div>
        </div>
    );
}
