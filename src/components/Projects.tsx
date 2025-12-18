'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Moderno',
    description: 'Plataforma de compras completa con carrito, pagos y gestión de inventario',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70f504de?w=400&h=300&fit=crop',
    category: 'Web',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    link: '#',
  },
  {
    id: 2,
    title: 'App de Tareas Colaborativa',
    description: 'Aplicación de gestión de tareas con soporte para equipos y tiempo real',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    category: 'Web',
    tags: ['React', 'Firebase', 'Tailwind'],
    link: '#',
  },
  {
    id: 3,
    title: 'Dashboard Analítico',
    description: 'Panel de control con gráficos interactivos y estadísticas en tiempo real',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    category: 'Dashboard',
    tags: ['Next.js', 'D3.js', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 4,
    title: 'Portfolio Personal',
    description: 'Sitio web de portafolio con efectos visuales impactantes y animaciones',
    image: 'https://images.unsplash.com/photo-1467232557539-ea2500142f5f?w=400&h=300&fit=crop',
    category: 'Diseño',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    id: 5,
    title: 'Red Social Minimalista',
    description: 'Plataforma social con feed, comentarios y sistema de notificaciones',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab655c0c1?w=400&h=300&fit=crop',
    category: 'Social',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    id: 6,
    title: 'Blog de Tecnología',
    description: 'Blog dinámico con búsqueda, categorías y sistema de comentarios',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    category: 'Blog',
    tags: ['Next.js', 'MDX', 'Contentful'],
    link: '#',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const categories = ['Todos', 'Web', 'Dashboard', 'Diseño', 'Social', 'Blog'];

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="w-full h-screen bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#020c1b] relative overflow-hidden">
      {/* Overlay difuminado superior para transición suave */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0f3460]/30 to-transparent pointer-events-none z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col justify-center relative z-10">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Mi <span className="text-cyan-400">Portafolio</span>
          </h2>
          <div className="w-20 md:w-24 h-1.5 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        {/* Filtros de Categorías */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 md:px-5 py-2 rounded-full font-semibold transition-all duration-300 text-xs md:text-sm ${activeCategory === category
                ? 'bg-linear-to-r from-cyan-400 to-blue-500 text-white'
                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden group hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
            >
              {/* Imagen con Overlay */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold px-5 py-2 rounded-lg transition-all duration-300 transform text-sm"
                  >
                    Ver Proyecto
                  </a>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                <p className="text-gray-300 text-xs mb-3 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-400/30 hover:bg-cyan-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
