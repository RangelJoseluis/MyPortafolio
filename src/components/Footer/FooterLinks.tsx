import React from 'react';

export default function FooterLinks() {
    const links = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Portafolio', href: '#portfolio' },
        { name: 'Sobre Mí', href: '#sobremi' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group text-sm font-medium"
                >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-cyan-400 transition-all duration-300"></span>
                    {link.name}
                </a>
            ))}
        </div>
    );
}
