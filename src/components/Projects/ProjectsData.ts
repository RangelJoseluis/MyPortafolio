export interface ProjectImage {
    url: string;
    caption: string; // Descripción específica de esta imagen/pantalla
}

export interface Project {
    id: number;
    title: string;
    shortDescription: string; // Descripción corta para la tarjeta
    fullDescription: string; // Descripción detallada para el modal
    thumbnail: string; // Imagen principal para la tarjeta
    status: 'Finalizado' | 'En Desarrollo';
    technologies: string[];
    album: ProjectImage[]; // Array de imágenes para el modal
    githubUrl?: string;
    liveUrl?: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Plataforma de Venta de Lotes",
        shortDescription: "Sistema integral para la gestión y venta de terrenos inmobiliarios.",
        fullDescription: "Una solución completa para inmobiliarias que permite gestionar el inventario de lotes, procesar ventas, generar contratos automáticos y visualizar el estado de los terrenos en un mapa interactivo.",
        thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80", // Placeholder
        status: "Finalizado",
        technologies: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
        album: [
            {
                url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
                caption: "Dashboard principal con métricas de ventas y disponibilidad de lotes en tiempo real."
            },
            {
                url: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1200&q=80",
                caption: "Mapa interactivo para selección de lotes con filtrado por precio y tamaño."
            },
            {
                url: "https://images.unsplash.com/photo-1460925895917-afdab655c0c1?w=1200&q=80",
                caption: "Módulo de administración de clientes y seguimiento de pagos."
            }
        ]
    },
    {
        id: 2,
        title: "Sistema de Gestión Académica",
        shortDescription: "Plataforma para el seguimiento de competencias y horarios escolares.",
        fullDescription: "Sistema diseñado para instituciones educativas que facilita la gestión de horarios, asignación de aulas y el seguimiento detallado del progreso académico de los estudiantes basado en competencias.",
        thumbnail: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80", // Placeholder
        status: "En Desarrollo",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        album: [
            {
                url: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80",
                caption: "Vista de calendario para la gestión de horarios de clases y disponibilidad de docentes."
            },
            {
                url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
                caption: "Panel de evaluación de competencias y generación de reportes académicos."
            }
        ]
    }
];
