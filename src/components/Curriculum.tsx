'use client';

interface TimelineItem {
  title: string;
  company: string;
  date: string;
  description: string;
}

export default function Curriculum() {
  const education: TimelineItem[] = [
    {
      title: 'Ingeniero en Software',
      company: 'Universidad Tecnológica',
      date: '2018 - 2022',
      description: 'Formación especializada en desarrollo de software con énfasis en tecnologías web modernas.',
    },
    {
      title: 'Certificado Full Stack Developer',
      company: 'Bootcamp de Programación',
      date: '2017 - 2018',
      description: 'Programa intensivo de 6 meses en desarrollo front-end y back-end.',
    },
    {
      title: 'Educación Media',
      company: 'Instituto Educativo',
      date: '2010 - 2016',
      description: 'Formación académica general con énfasis en ciencias y matemáticas.',
    },
  ];

  const experience: TimelineItem[] = [
    {
      title: 'Desarrollador Full Stack Senior',
      company: 'Tech Solutions Inc',
      date: '2022 - Presente',
      description: 'Desarrollo de aplicaciones web escalables con React, Node.js y TypeScript. Liderazgo de equipo y arquitectura de sistemas.',
    },
    {
      title: 'Desarrollador Full Stack Junior',
      company: 'Digital Innovations',
      date: '2020 - 2022',
      description: 'Implementación de features, corrección de bugs y colaboración en proyectos con metodologías ágiles.',
    },
    {
      title: 'Desarrollador Frontend',
      company: 'Web Studio',
      date: '2018 - 2020',
      description: 'Creación de interfaces de usuario responsivas y mantenimiento de aplicaciones legacy.',
    },
  ];

  return (
    <section id="curriculum" className="w-full h-screen bg-gradient-to-br from-[#16213e] via-[#0f3460] to-[#0a192f] relative overflow-hidden">
      {/* Overlay difuminado superior para transición suave */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1a1a2e]/30 to-transparent pointer-events-none z-10"></div>

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 flex flex-col justify-center relative z-10">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Mi <span className="text-cyan-400">Trayectoria</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Educación - Izquierda */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 text-center">Educación</h3>
            <div className="relative">
              {/* Línea vertical */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-cyan-400 to-blue-500"></div>

              {education.map((item, idx) => (
                <div key={idx} className="mb-6 relative">
                  {/* Contenedor del item - alternado derecha */}
                  <div className="w-1/2 pr-8">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:border-cyan-400/50 transition-all duration-300">
                      {/* Círculo en la línea */}
                      <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-blue-950"></div>

                      <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-cyan-400 font-semibold text-xs mb-2">{item.company}</p>
                      <p className="text-blue-300 text-xs mb-2">{item.date}</p>
                      <p className="text-gray-300 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experiencia - Derecha */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 text-center">Experiencia</h3>
            <div className="relative">
              {/* Línea vertical */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-blue-500 to-cyan-400"></div>

              {experience.map((item, idx) => (
                <div key={idx} className="mb-6 relative">
                  {/* Contenedor del item - alternado izquierda */}
                  <div className="w-1/2 ml-1/2 pl-8">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:border-cyan-400/50 transition-all duration-300">
                      {/* Círculo en la línea */}
                      <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-blue-950"></div>

                      <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-cyan-400 font-semibold text-xs mb-2">{item.company}</p>
                      <p className="text-blue-300 text-xs mb-2">{item.date}</p>
                      <p className="text-gray-300 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
