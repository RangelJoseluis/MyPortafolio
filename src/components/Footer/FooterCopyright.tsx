'use client';

import React from 'react';

export default function FooterCopyright() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="border-t border-white/10 pt-8 relative flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
            <p className="text-gray-500 text-sm font-medium text-center">
                © {new Date().getFullYear()} <span className="text-gray-300">DevJose Luis</span>. Todos los derechos reservados.
            </p>

            <div className="md:absolute md:right-0">
                <button
                    onClick={scrollToTop}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                    title="Volver arriba"
                >
                    <span className="text-xs font-bold text-gray-400 group-hover:text-cyan-400 transition-colors">SUBIR</span>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300 group-hover:-translate-y-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
}
