import React from 'react';

export default function FooterLinks() {
    const links = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Portafolio', href: '#portfolio' },
        { name: 'Sobre Mí', href: '#sobremi' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-cyan-500 rounded-full"></span>
                Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group text-sm"
                        >
                            <span className="w-0 group-hover:w-2 h-[1px] bg-cyan-400 transition-all duration-300"></span>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
