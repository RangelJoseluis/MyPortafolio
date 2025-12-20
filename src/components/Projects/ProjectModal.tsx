import React, { useState, useEffect, useRef } from 'react';
import { Project } from './ProjectsData';

interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageExpanded, setIsImageExpanded] = useState(false);
    const scrollPosition = useRef(0);

    // Bloquear scroll cuando el modal está abierto
    useEffect(() => {
        if (isOpen) {
            // Guardar el scroll actual solo cuando se abre
            scrollPosition.current = window.scrollY;
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition.current}px`;
            document.body.style.width = '100%';

            return () => {
                // Restaurar scroll solo cuando se cierra - SIN animación
                // Desactivar temporalmente el smooth scroll global
                const htmlElement = document.documentElement;
                const originalScrollBehavior = htmlElement.style.scrollBehavior;
                htmlElement.style.scrollBehavior = 'auto';

                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';

                // Restaurar posición instantáneamente
                window.scrollTo(0, scrollPosition.current);

                // Restaurar el smooth scroll después de un momento
                setTimeout(() => {
                    htmlElement.style.scrollBehavior = originalScrollBehavior;
                }, 100);
            };
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.album.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.album.length) % project.album.length);
    };

    const toggleImageExpansion = () => {
        setIsImageExpanded(!isImageExpanded);
    };

    const currentImage = project.album[currentImageIndex];

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 animate-in fade-in duration-300"
            onClick={onClose}
        >
            {/* Overlay color de fonod modals*/}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            {/* Modal Content */}
            <div
                className="relative bg-[#0a0e27] border border-white/10 rounded-2xl w-full max-w-5xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl shadow-cyan-500/20 transform-gpu"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Borde brillante animado */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded-2xl opacity-20 blur-2xl pointer-events-none"></div>

                {/* Header - Fijo */}
                <div className="relative p-2.5 md:p-3 border-b border-white/10 flex justify-between items-center bg-[#0f1635]/80 backdrop-blur-md z-10">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-base md:text-lg font-bold text-white tracking-tight">{project.title}</h3>
                        <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, idx) => (
                                <span key={idx} className="text-[8px] md:text-[9px] px-1.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-400 transition-all duration-300 text-gray-400 border border-white/10"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Main Content - No Scroll Needed */}
                <div className="flex-1 overflow-hidden bg-[#060918]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 md:p-5 h-full">

                        {/* Left Column: Project Info */}
                        <div className="lg:col-span-3 space-y-3 order-2 lg:order-1 overflow-y-auto custom-scrollbar">
                            <div className="bg-[#0f1635]/50 rounded-xl p-4 border border-white/5">
                                <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Sobre el Proyecto</h5>
                                <p className="text-gray-400 text-xs leading-relaxed italic">
                                    "{project.fullDescription}"
                                </p>

                                {/* Thumbnails Navigation */}
                                <div className="mt-4 pt-3 border-t border-white/5">
                                    <h5 className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-2">Navegación</h5>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.album.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={`relative w-10 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 ${idx === currentImageIndex
                                                    ? 'border-cyan-500 scale-105 shadow-lg shadow-cyan-500/20'
                                                    : 'border-white/10 hover:border-white/30 grayscale hover:grayscale-0'
                                                    }`}
                                                title={img.caption}
                                            >
                                                <img src={img.url} alt="" className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center Column: Image with Title Above */}
                        <div className="lg:col-span-6 space-y-2 order-1 lg:order-2 flex flex-col">
                            {/* Title Above Image */}
                            <div className="flex items-center gap-2 bg-[#0f1635]/50 rounded-xl p-2 border border-white/5">
                                <div className="p-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <span className="text-[8px] font-bold text-cyan-500 uppercase tracking-[0.2em]">
                                        Vista {currentImageIndex + 1} de {project.album.length}
                                    </span>
                                    <h4 className="text-sm md:text-base font-bold text-white">
                                        {currentImage.caption}
                                    </h4>
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className="relative bg-black/40 rounded-xl flex items-center justify-center overflow-hidden group border border-white/5 flex-1">
                                <div className="relative w-full h-full flex items-center justify-center p-3">
                                    <div className="relative group/img">
                                        <div className="absolute -inset-4 bg-cyan-500/10 blur-2xl rounded-full opacity-0 group-hover/img:opacity-100 transition-opacity duration-700"></div>
                                        <img
                                            src={currentImage.url}
                                            alt={currentImage.caption}
                                            onClick={toggleImageExpansion}
                                            className="max-h-[45vh] w-auto object-contain rounded-xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border border-white/5 relative z-10 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                                            title="Click para expandir"
                                        />
                                    </div>
                                </div>

                                {/* Navigation Buttons */}
                                {project.album.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-2 p-1.5 rounded-lg bg-black/60 hover:bg-cyan-500 text-white backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 border border-white/10 shadow-xl z-20"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-2 p-1.5 rounded-lg bg-black/60 hover:bg-cyan-500 text-white backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 border border-white/10 shadow-xl z-20"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Description */}
                        <div className="lg:col-span-3 order-3 overflow-y-auto custom-scrollbar">
                            <div className="bg-[#0f1635]/50 rounded-xl p-3 border border-white/5 h-full">
                                <h5 className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest mb-2">Descripción</h5>
                                <p className="text-gray-300 text-[10px] md:text-xs leading-relaxed">
                                    {currentImage.description || "Sin descripción disponible para esta vista."}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Fullscreen Image Overlay */}
            {isImageExpanded && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-300"
                    onClick={toggleImageExpansion}
                >
                    {/* Close Button */}
                    <button
                        onClick={toggleImageExpansion}
                        className="absolute top-16 right-6 p-3 rounded-xl bg-red-500/20 hover:bg-red-500/40 text-red-400 hover:text-red-300 transition-all duration-300 border border-red-500/30 z-10 shadow-xl"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Image Info - Moved to Bottom */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md rounded-xl p-2 border border-cyan-500/30 max-w-2xl shadow-xl text-center">
                        <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">
                            Vista {currentImageIndex + 1} de {project.album.length}
                        </span>
                        <h4 className="text-white font-bold text-lg mt-1">{currentImage.caption}</h4>
                    </div>

                    {/* Expanded Image */}
                    <div className="relative max-w-[80vw] max-h-[70vh]" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={currentImage.url}
                            alt={currentImage.caption}
                            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl border border-white/10"
                        />
                    </div>

                    {/* Navigation in Fullscreen */}
                    {project.album.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(e); }}
                                className="absolute left-6 p-4 rounded-2xl bg-black/60 hover:bg-cyan-500 text-white backdrop-blur-md transition-all duration-300 border border-white/20 shadow-2xl"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(e); }}
                                className="absolute right-6 p-4 rounded-2xl bg-black/60 hover:bg-cyan-500 text-white backdrop-blur-md transition-all duration-300 border border-white/20 shadow-2xl"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}

                </div>
            )}

        </div>
    );
}
