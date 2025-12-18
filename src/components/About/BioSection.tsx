import React from 'react';

export default function BioSection() {
    return (
        <div className="flex flex-col justify-center h-full">
            <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight text-center md:text-left">
                    Desarrollando el <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Futuro Digital</span>
                </h3>

                <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed font-light text-center md:text-left">
                    <p>
                        Hola, soy un desarrollador <span className="text-cyan-400 font-semibold">Full Stack</span> versátil. Mi fortaleza radica en combinar la robustez de <span className="text-white font-medium">Java y Spring Boot</span> con la agilidad del ecosistema <span className="text-white font-medium">TypeScript (Node.js, NestJS)</span> para construir backends escalables y seguros.
                    </p>

                    <p>
                        En el frontend, creo interfaces modernas y reactivas utilizando <span className="text-white font-medium">React, Next.js y Tailwind CSS</span>, potenciadas por <span className="text-white font-medium">Vite</span>. Me apasiona escribir <span className="text-cyan-400">código limpio</span> y eficiente, transformando desafíos complejos en experiencias de usuario excepcionales.
                    </p>
                </div>
            </div>
        </div>
    );
}
