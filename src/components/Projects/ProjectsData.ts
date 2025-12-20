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
        thumbnail: "/images/projects/lotes_dashboard.png",
        status: "Finalizado",
        technologies: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
        album: [
            {
                url: "/images/projects/lotes_dashboard.png",
                caption: "Dashboard principal con métricas de ventas y disponibilidad de lotes en tiempo real."
            },
            {
                url: "/images/projects/lotes_map.png",
                caption: "Mapa interactivo para selección de lotes con filtrado por precio y tamaño."
            }
        ]
    },
    {
        id: 2,
        title: "Sistema de Gestión Académica",
        shortDescription: "Plataforma para el seguimiento de competencias y horarios escolares.",
        fullDescription: "Sistema diseñado para instituciones educativas que facilita la gestión de horarios, asignación de aulas y el seguimiento detallado del progreso académico de los estudiantes basado en competencias.",
        thumbnail: "/images/projects/academic_system.png",
        status: "En Desarrollo",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        album: [
            {
                url: "/images/projects/academic_system.png",
                caption: "Vista de calendario para la gestión de horarios de clases y disponibilidad de docentes."
            }
        ]
    }
];
