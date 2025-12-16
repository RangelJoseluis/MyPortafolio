'use client';

interface Interest {
  icon: string;
  label: string;
}

interface PersonalData {
  birthDate: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  role: string;
}

export default function About() {
  const personalData: PersonalData = {
    birthDate: '15-01-2000',
    phone: '+506 8765-4321',
    email: 'tu.email@example.com',
    website: 'www.ejemplo.com',
    address: 'San José, Costa Rica',
    role: 'Full Stack Developer',
  };

  const interests: Interest[] = [
    { icon: '🎮', label: 'Juegos' },
    { icon: '🎵', label: 'Música' },
    { icon: '✈️', label: 'Viajar' },
    { icon: '⛹️', label: 'Deporte' },
    { icon: '🚗', label: 'Autos' },
    { icon: '📷', label: 'Fotografía' },
  ];

  return (
    <section id="sobremi" className="bg-white/5 py-0">
      <div className="max-w-7xl mx-auto w-full py-20">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-cyan-400">Mí</span>
          </h2>
          <div className="w-20 md:w-24 h-1.5 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        {/* Contenido Principal */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 items-start w-full">
          {/* Datos Personales */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8 hover:border-cyan-400/50 transition-colors duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Datos Personales</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-cyan-400 font-bold min-w-fit text-sm md:text-base">Cumpleaños:</span>
                <span className="text-gray-300 text-sm md:text-base">{personalData.birthDate}</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-cyan-400 font-bold min-w-fit text-sm md:text-base">Teléfono:</span>
                <span className="text-gray-300 text-sm md:text-base">{personalData.phone}</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-cyan-400 font-bold min-w-fit text-sm md:text-base">Email:</span>
                <span className="text-gray-300 text-sm md:text-base">{personalData.email}</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-cyan-400 font-bold min-w-fit text-sm md:text-base">Website:</span>
                <span className="text-gray-300 text-sm md:text-base">{personalData.website}</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-cyan-400 font-bold min-w-fit text-sm md:text-base">Dirección:</span>
                <span className="text-gray-300 text-sm md:text-base">{personalData.address}</span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-cyan-400 font-bold min-w-fit text-sm md:text-base">Cargo:</span>
                <span className="inline-block bg-cyan-400 text-blue-900 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold">
                  {personalData.role}
                </span>
              </li>
            </ul>
          </div>

          {/* Descripción */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
              Hola, soy un desarrollador full stack apasionado por crear soluciones web innovadoras. 
              Con experiencia en tecnologías modernas como React, Next.js y Node.js, me dedico a 
              transformar ideas en aplicaciones funcionales y hermosas.
            </p>
            <p className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
              Me encanta aprender nuevas tecnologías y enfrentarme a desafíos que me ayuden a crecer 
              como profesional. Creo en la importancia del diseño limpio, el código mantenible y 
              la experiencia del usuario.
            </p>
            <button className="bg-linear-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 w-fit text-sm md:text-base">
              Descargar CV
            </button>
          </div>
        </div>

        {/* Intereses */}
        <div className="mt-16 md:mt-20 pt-8 md:pt-12 border-t border-white/10 w-full">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-10 text-center">Intereses</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-2">
            {interests.map((interest, idx) => (
              <button
                key={idx}
                className="neon-button flex flex-col items-center justify-center text-center p-3 md:p-5 lg:p-6 rounded-xl"
              >
                <span className="text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2 lg:mb-3">{interest.icon}</span>
                <span className="text-xs md:text-sm lg:text-base">{interest.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
