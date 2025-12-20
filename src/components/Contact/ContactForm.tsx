'use client';

import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulación de envío
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Formulario enviado:', formData);
        alert('¡Gracias por tu mensaje! Pronto nos comunicaremos.');
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <div className="bg-[#0f1635]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl shadow-cyan-500/5 w-full flex flex-col h-full">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></span>
                Envíame un Mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-2 flex-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {/* Nombre */}
                    <div className="group">
                        <label className="block text-gray-400 text-[10px] font-bold mb-1 uppercase tracking-wider group-focus-within:text-cyan-400 transition-colors">
                            Tu Nombre
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Juan Pérez"
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-900/10 transition-all duration-300"
                            required
                        />
                    </div>

                    {/* Teléfono */}
                    <div className="group">
                        <label className="block text-gray-400 text-[10px] font-bold mb-1 uppercase tracking-wider group-focus-within:text-cyan-400 transition-colors">
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+57 300 123 4567"
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-900/10 transition-all duration-300"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="group">
                    <label className="block text-gray-400 text-[10px] font-bold mb-1 uppercase tracking-wider group-focus-within:text-cyan-400 transition-colors">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-900/10 transition-all duration-300"
                        required
                    />
                </div>

                {/* Asunto */}
                <div className="group">
                    <label className="block text-gray-400 text-[10px] font-bold mb-1 uppercase tracking-wider group-focus-within:text-cyan-400 transition-colors">
                        Asunto
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Consulta sobre desarrollo web"
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-900/10 transition-all duration-300"
                        required
                    />
                </div>

                {/* Mensaje */}
                <div className="group flex-1 flex flex-col min-h-[80px]">
                    <label className="block text-gray-400 text-[10px] font-bold mb-1 uppercase tracking-wider group-focus-within:text-cyan-400 transition-colors">
                        Mensaje
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntame sobre tu proyecto..."
                        className="w-full flex-1 bg-black/20 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-900/10 transition-all duration-300 resize-none"
                        required
                    ></textarea>
                </div>

                {/* Botón de Envío Premium */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0f1635] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:-translate-y-0.5"
                >
                    <div className="relative flex items-center justify-center gap-2 rounded-xl bg-[#0a0e27]/80 px-4 py-1.5 text-[11px] font-bold text-white transition-all duration-300 group-hover:bg-transparent group-hover:text-white backdrop-blur-sm">
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin h-4 w-4 text-cyan-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Enviando...</span>
                            </>
                        ) : (
                            <>
                                <span>Enviar Mensaje</span>
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-cyan-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </>
                        )}
                    </div>
                </button>
            </form>
        </div>
    );
}
