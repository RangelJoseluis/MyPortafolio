import React from 'react';

export default function ContactMap() {
    return (
        <div className="bg-[#0f1635]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl shadow-cyan-500/5 h-[200px] md:h-[200px] min-h-[200px] relative overflow-hidden group">
            {/* Overlay de brillo */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 pointer-events-none z-10 rounded-xl"></div>

            {/* Mapa */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62456.96366030666!2d-72.283333!3d11.383333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8b671060e1e09d%3A0x6006093215570!2sMaicao%2C%20La%20Guajira!5e0!3m2!1ses!2sco!4v1650000000000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(85%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            ></iframe>

            {/* Etiqueta flotante */}
            <div className="absolute bottom-4 left-4 z-20 bg-[#0a0e27]/90 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 shadow-lg flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                <span className="text-white text-xs font-bold">Maicao, La Guajira</span>
            </div>
        </div>
    );
}
