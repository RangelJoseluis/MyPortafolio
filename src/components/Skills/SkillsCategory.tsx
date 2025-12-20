import React from 'react';
import SkillBar from './SkillBar';
import { Skill } from './SkillsData';

interface SkillsCategoryProps {
    title: string;
    skills: Skill[];
    delay?: number;
    isVisible?: boolean;
}

export default function SkillsCategory({ title, skills, delay = 0, isVisible = false }: SkillsCategoryProps) {
    return (
        <div
            className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:border-cyan-500/30 transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 group h-full transform-gpu ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></span>
                {title}
            </h3>

            <div className="space-y-1">
                {skills.map((skill, idx) => (
                    <SkillBar
                        key={idx}
                        name={skill.name}
                        level={skill.level}
                        delay={delay + (idx * 100)}
                        isVisible={isVisible}
                    />
                ))}
            </div>
        </div>
    );
}
