'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre Mí', href: '#sobremi' },
    { label: 'Skills', href: '#skills' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 0; // Usar scroll-padding-top del CSS
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center h-12">
          {/* Logo - Más a la izquierda y más grande */}
          <div className="shrink-0">
            <a href="#inicio" className="text-xl md:text-2xl font-bold text-white hover:text-cyan-300 transition-colors duration-300 flex items-center">
              Dev<span className="text-cyan-400">Jose Luis</span>
            </a>
          </div>

          {/* Navegación Desktop - Espaciado optimizado */}
          <nav className="hidden md:flex gap-1 lg:gap-2 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="neon-nav-button text-sm md:text-[15px] whitespace-nowrap font-semibold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botón Hamburguesa */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-cyan-300 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Navegación Mobile */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in duration-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-white hover:text-cyan-300 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
