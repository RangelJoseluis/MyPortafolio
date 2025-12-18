export interface Skill {
    name: string;
    level: number; // 0 to 100
    icon?: string; // Emoji or SVG path
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export const skillsData: SkillCategory[] = [
    {
        title: "Lenguajes",
        skills: [
            { name: "Java", level: 70 },
            { name: "TypeScript", level: 75 },
            { name: "JavaScript", level: 80 },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Spring Boot", level: 65 },
            { name: "NestJS", level: 60 },
            { name: "Node.js", level: 70 },
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: "React", level: 75 },
            { name: "Next.js", level: 70 },
            { name: "Tailwind CSS", level: 85 },
            { name: "Vite", level: 80 },
            { name: "CSS", level: 85 },
        ]
    },
    {
        title: "Base de Datos",
        skills: [
            { name: "PostgreSQL", level: 65 },
            { name: "MySQL", level: 70 },
        ]
    }
];
