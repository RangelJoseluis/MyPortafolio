import React from 'react';
import { interests } from './AboutData';

export default function InterestsSection() {
    return (
        <div className="w-full pt-10 border-t border-white/5">
            <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-1.5 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.3)]"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Intereses & Hobbies
                </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
                {interests.map((interest, idx) => (
                    <div
                        key={idx}
                        className="group relative bg-[#0a0e27]/50 hover:bg-white/5 border border-white/5 hover:border-cyan-500/30 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10 transform-gpu will-change-transform backface-hidden"
                    >
                        <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 drop-shadow-lg will-change-filter">
                            {interest.icon}
                        </span>
                        <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors tracking-wide">
                            {interest.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
