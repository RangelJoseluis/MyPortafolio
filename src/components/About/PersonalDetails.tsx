import React from 'react';
import { personalData } from './AboutData';

export default function PersonalDetails() {
    return (
        <div className="flex flex-col gap-8 h-full w-full transform-gpu">
            {/* Tarjeta de Datos Personales */}
            <div className="relative group w-full">
                {/* Efecto de borde brillante animado */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-30 group-hover:opacity-70 blur-lg transition duration-500 will-change-opacity"></div>

                {/* Contenedor principal con esquinas menos redondeadas para evitar cortes */}
                <div className="relative h-full bg-[#0a0e27]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 hover:border-white/20 transition-colors duration-300 flex flex-col justify-center shadow-2xl backface-hidden">

                    {/* Encabezado de la tarjeta */}
                    <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                        <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Datos Personales</h3>
                    </div>

                    {/* Lista de datos */}
                    <ul className="space-y-8">
                        <DetailItem
                            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />}
                            label="Cumpleaños"
                            value={personalData.birthDate}
                        />
                        <DetailItem
                            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />}
                            label="Teléfono"
                            value={personalData.phone}
                        />
                        <DetailItem
                            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                            label="Email"
                            value={personalData.email}
                            isLink
                            href={`mailto:${personalData.email}`}
                        />
                        <DetailItem
                            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />}
                            label="Ubicación"
                            value={personalData.address}
                        />

                        <li className="pt-4 mt-4 border-t border-white/5">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                                <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Cargo Actual</span>
                                <span className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 px-4 py-2 rounded-lg text-sm font-bold border border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.1)] text-center whitespace-nowrap">
                                    {personalData.role}
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Botón Descargar CV - Movido aquí */}
            <div className="w-full transform-gpu">
                <button className="group relative w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white text-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex items-center justify-center gap-3 will-change-transform">
                    <span className="relative z-10 flex items-center gap-3 whitespace-nowrap">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Descargar CV
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
            </div>
        </div>
    );
}

function DetailItem({ icon, label, value, isLink, href }: { icon: React.ReactNode, label: string, value: string, isLink?: boolean, href?: string }) {
    return (
        <li className="flex items-start gap-5 group/item transform-gpu">
            <div className="mt-1 text-gray-500 group-hover/item:text-cyan-400 transition-colors duration-300 will-change-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {icon}
                </svg>
            </div>
            <div className="flex-1">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1.5">{label}</p>
                {isLink ? (
                    <a href={href} className="text-lg md:text-xl text-white hover:text-cyan-400 transition-colors font-medium break-all leading-snug block">
                        {value}
                    </a>
                ) : (
                    <p className="text-lg md:text-xl text-white font-medium leading-snug">{value}</p>
                )}
            </div>
        </li>
    );
}
