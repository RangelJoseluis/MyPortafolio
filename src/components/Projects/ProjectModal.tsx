import React, { useState } from 'react';
import { Project } from './ProjectsData';

interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!isOpen) return null;

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.album.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.album.length) % project.album.length);
    };

    const currentImage = project.album[currentImageIndex];

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 animate-in fade-in duration-300"
            onClick={onClose}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

            {/* Modal Content */}
            <div
                className="relative bg-[#0a0e27] border border-white/10 rounded-xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl shadow-cyan-500/10 transform-gpu"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Borde brillante animado */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-20 blur-xl pointer-events-none"></div>

                {/* Header - Fijo */}
                <div className="relative p-3 md:p-4 border-b border-white/10 flex justify-between items-center bg-[#0f1635] z-10">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-0.5">{project.title}</h3>
                        <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, idx) => (
                                <span key={idx} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Contenido Scrolleable */}
                <div className="flex-1 overflow-y-auto custom-scrollbar relative">
                    {/* Gallery Area */}
                    <div className="relative bg-black/20 flex items-center justify-center min-h-[200px] md:min-h-[300px] overflow-hidden group">
                        {/* Main Image */}
                        <div className="relative w-full h-full flex items-center justify-center p-4">
                            <img
                                src={currentImage.url}
                                alt={currentImage.caption}
                                className="max-h-[35vh] md:max-h-[45vh] w-auto object-contain rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Navigation Buttons */}
                        {project.album.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 p-2 rounded-full bg-black/50 hover:bg-cyan-500/80 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 p-2 rounded-full bg-black/50 hover:bg-cyan-500/80 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>

                    {/* Caption & Description Area */}
                    <div className="p-4 bg-[#0f1635]/50">
                        <div className="flex flex-col gap-3">
                            {/* Image Caption */}
                            <div className="flex items-start gap-3">
                                <span className="mt-1 p-1 rounded-full bg-cyan-500/20 text-cyan-400">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <div>
                                    <h4 className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-0.5">
                                        Vista {currentImageIndex + 1} de {project.album.length}
                                    </h4>
                                    <p className="text-white text-xs md:text-sm font-medium leading-relaxed">
                                        {currentImage.caption}
                                    </p>
                                </div>
                            </div>

                            {/* Project Full Description */}
                            <div className="mt-1 pt-3 border-t border-white/5">
                                <p className="text-gray-400 text-[11px] leading-relaxed">
                                    {project.fullDescription}
                                </p>
                            </div>
                        </div>

                        {/* Thumbnails Indicator */}
                        <div className="flex justify-center gap-1.5 mt-4">
                            {project.album.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`h-1 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 bg-cyan-500' : 'w-1.5 bg-white/20 hover:bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
