export interface Experience {
    id: number;
    role: string;
    company: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
    tech?: string[];
}

export interface Education {
    id: number;
    degree: string;
    institution: string;
    location: string;
    period: string;
}

export const experienceData: Experience[] = [
    {
        id: 1,
        role: "Desarrollador Backend",
        company: "S.G.S. COLOMBIA HOLDING S.A.S.",
        location: "Riohacha, La Guajira, Colombia (Remoto)",
        period: "Julio 2024 – Abril 2025",
        description: "Desarrollo de un sistema académico para la gestión de horarios, trazabilidad de competencias y automatización de tareas formativas.",
        achievements: [
            "Implementación de lógica backend con Java y Spring Boot, enfocada en modularidad y eficiencia.",
            "Integración de estructuras escalables para el seguimiento de procesos educativos.",
            "Mejora de flujos internos y adaptación de herramientas a las necesidades institucionales.",
            "Documentación técnica detallada y claridad operativa en el código."
        ],
        tech: ["Java", "Spring Boot", "SQL", "APIs REST"]
    },
    {
        id: 2,
        role: "Desarrollador FullStack",
        company: "Proyecto Personal – Plataforma de Venta de Lotes",
        location: "Maicao, La Guajira, Colombia",
        period: "Agosto 2025 – Actualidad",
        description: "Diseño e implementación de un sistema integral para la gestión de venta de lotes, incluyendo control de pagos, penalizaciones configurables y facturación.",
        achievements: [
            "Desarrollo backend robusto con NestJS y TypeScript, adaptando la lógica a distintos modelos de negocio.",
            "Frontend moderno construido con React, Tailwind CSS y Vite para máxima velocidad y claridad visual.",
            "Implementación de sistema de penalizaciones por mora y generación automática de facturas.",
            "Optimización de la experiencia de usuario y migración progresiva a Next.js para mejorar la escalabilidad."
        ],
        tech: ["NestJS", "TypeScript", "React", "Tailwind CSS", "Vite", "PostgreSQL"]
    }
];

export const educationData: Education[] = [
    {
        id: 1,
        degree: "Tecnólogo en Análisis y Desarrollo de Software",
        institution: "Centro Industrial y de Energías Alternativas - SENA",
        location: "Maicao, La Guajira, Colombia",
        period: "Agosto 2025"
    }
];
