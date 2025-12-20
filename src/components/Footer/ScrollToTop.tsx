'use client';

import React, { useState } from 'react';

export default function ScrollToTop() {
    const [isLaunching, setIsLaunching] = useState(false);

    const scrollToTop = () => {
        if (isLaunching) return;
        setIsLaunching(true);

        window.scrollTo({ top: 0, behavior: 'smooth' });

        setTimeout(() => {
            setIsLaunching(false);
        }, 2000);
    };

    return (
        <button
            onClick={scrollToTop}
            className="group relative flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
            title="Despegar al inicio"
        >
            <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all ease-in-out z-10 ${isLaunching ? 'duration-[1500ms] -translate-y-[150px] scale-75 opacity-0' : 'duration-300 -translate-y-0.5 group-hover:-translate-y-1'}`}>
                <svg className={`w-4 h-4 ${isLaunching ? 'animate-pulse' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
            </div>
            <span className={`text-[9px] font-bold tracking-widest text-gray-500 group-hover:text-cyan-400 transition-colors ${isLaunching ? 'opacity-0' : 'opacity-100'}`}>
                SUBIR
            </span>

            {/* Estela de fuego */}
            <div className={`absolute left-6 bottom-4 w-3 h-8 bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent blur-sm rounded-full transition-all duration-[1500ms] ease-in-out ${isLaunching ? '-translate-y-[140px] opacity-0 scale-y-150' : 'opacity-0 translate-y-4 scale-y-0'}`}></div>
        </button>
    );
}
