'use client';

import React from 'react';
import { interests } from './AboutData';

export default function InterestsSection() {
    return (
        <div className="w-full">
            <div className="flex items-center gap-2 mb-4">
                <div className="h-5 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
                <h3 className="text-base md:text-lg font-bold text-white tracking-wide">
                    Intereses & Hobbies
                </h3>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {interests.map((interest, idx) => (
                    <div
                        key={idx}
                        className="group relative bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 rounded-xl p-2 flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:-translate-y-1 transform-gpu"
                    >
                        <span className="text-xl filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                            {interest.icon}
                        </span>
                        <span className="text-[8px] font-bold text-gray-400 group-hover:text-white transition-colors tracking-wider uppercase text-center">
                            {interest.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
