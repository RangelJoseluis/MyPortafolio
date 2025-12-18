'use client';

// Interfaz para los intereses del desarrollador
interface Interest {
  icon: string;
  label: string;
}

// Interfaz para los datos personales
interface PersonalData {
  birthDate: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  role: string;
}

export default function About() {
  // Datos personales del desarrollador
  const personalData: PersonalData = {
    birthDate: '11-03-2004',
    phone: '+57 3005450866',
    email: 'zerepjosxd@gmail.com',
    website: 'https://my-portfolio-dev-jose-luis.vercel.app/#skills',
    address: 'Maicao, La Guajira, Colombia',
    role: 'Full Stack Developer',
  };

  // Array de intereses con emojis e labels
  const interests: Interest[] = [
    { icon: '🎮', label: 'Juegos' },
    { icon: '🎵', label: 'Música' },
    { icon: '✈️', label: 'Viajar' },
    { icon: '⛹️', label: 'Deporte' },
    { icon: '🚗', label: 'Autos' },
  ];

  return (
    <section id="sobremi" className="w-full h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
      {/* Overlay difuminado superior para transición suave */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#003d7a]/30 to-transparent pointer-events-none z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col justify-center h-full relative z-10 py-4">

        {/* ========== SECCIÓN 1: TÍTULO PRINCIPAL ========== */}
        <div className="text-center mb-4 md:mb-5 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-2 md:mb-2">
            Sobre <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Mí</span>
          </h2>
          {/* Línea decorativa bajo el título */}
          <div className="w-10 sm:w-12 md:w-16 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* ========== SECCIÓN 2: PRESENTACIÓN + DATOS PERSONALES ========== */}
        <div className="grid md:grid-cols-5 gap-3 md:gap-5 mb-4 md:mb-5 items-stretch animate-on-scroll-delay-1">

          {/* Columna Izquierda: Descripción e Introducción (3 columnas) */}
          <div className="md:col-span-3 flex flex-col justify-center space-y-1 md:space-y-2 order-2 md:order-1 animate-on-scroll-delay-1">
            {/* Primer párrafo: Presentación como desarrollador */}
            <p className="text-gray-200 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed">
              Hola, soy un desarrollador <span className="text-cyan-400 font-semibold">full stack</span> apasionado por crear soluciones web innovadoras.
              Con experiencia en tecnologías modernas como <span className="text-cyan-400 font-semibold">React, Next.js y Node.js</span>, me dedico a
              transformar ideas en aplicaciones funcionales y hermosas.
            </p>

            {/* Segundo párrafo: Filosofía y valores profesionales */}
            <p className="text-gray-200 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed">
              Me encanta aprender nuevas tecnologías y enfrentarme a desafíos que me ayuden a crecer
              como profesional. Creo en la importancia del <span className="text-cyan-400 font-semibold">diseño limpio</span>, el <span className="text-cyan-400 font-semibold">código mantenible</span> y
              la <span className="text-cyan-400 font-semibold">experiencia del usuario</span>.
            </p>

            {/* Botón para descargar CV */}
            <div className="pt-0.5">
              <button className="bg-linear-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-2 md:py-2 px-5 md:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 w-fit text-xs sm:text-sm md:text-sm shadow-lg hover:shadow-cyan-400/50">
                📥 Descargar CV
              </button>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Datos Personales (2 columnas) */}
          <div className="md:col-span-2 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-3 md:p-4 lg:p-5 hover:border-cyan-400/50 transition-all duration-300 shadow-2xl order-1 md:order-2 h-full animate-on-scroll-delay-2">
            {/* Título de la sección de datos personales */}
            <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
              <span className="text-cyan-400 text-lg md:text-xl">👤</span>
              Datos Personales
            </h3>

            {/* Lista de datos personales */}
            <ul className="space-y-2 md:space-y-3">
              {/* Cumpleaños */}
              <li className="flex items-start gap-2 pb-2 md:pb-3 border-b border-white/10">
                <span className="text-cyan-400 font-bold text-sm md:text-base min-w-fit">📅</span>
                <div className="flex-1">
                  <p className="text-cyan-300 font-bold text-xs uppercase tracking-wide">Cumpleaños</p>
                  <p className="text-gray-200 text-xs md:text-sm mt-0.5">{personalData.birthDate}</p>
                </div>
              </li>

              {/* Teléfono */}
              <li className="flex items-start gap-3 pb-4 border-b border-white/10">
                <span className="text-cyan-400 font-bold text-base md:text-lg min-w-fit">📱</span>
                <div className="flex-1">
                  <p className="text-cyan-300 font-bold text-xs md:text-sm uppercase tracking-wide">Teléfono</p>
                  <p className="text-gray-200 text-sm md:text-base mt-1">{personalData.phone}</p>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3 pb-4 border-b border-white/10">
                <span className="text-cyan-400 font-bold text-base md:text-lg min-w-fit">✉️</span>
                <div className="flex-1">
                  <p className="text-cyan-300 font-bold text-xs md:text-sm uppercase tracking-wide">Email</p>
                  <p className="text-gray-200 text-sm md:text-base mt-1 break-all">{personalData.email}</p>
                </div>
              </li>

              {/* Website */}
              <li className="flex items-start gap-3 pb-4 border-b border-white/10">
                <span className="text-cyan-400 font-bold text-base md:text-lg min-w-fit">🌐</span>
                <div className="flex-1">
                  <p className="text-cyan-300 font-bold text-xs md:text-sm uppercase tracking-wide">Website</p>
                  <p className="text-gray-200 text-sm md:text-base mt-1">{personalData.website}</p>
                </div>
              </li>

              {/* Dirección */}
              <li className="flex items-start gap-3 pb-4 border-b border-white/10">
                <span className="text-cyan-400 font-bold text-base md:text-lg min-w-fit">📍</span>
                <div className="flex-1">
                  <p className="text-cyan-300 font-bold text-xs md:text-sm uppercase tracking-wide">Dirección</p>
                  <p className="text-gray-200 text-sm md:text-base mt-1">{personalData.address}</p>
                </div>
              </li>

              {/* Cargo/Rol con badge destacado */}
              <li className="flex items-start gap-3 pt-2">
                <span className="text-cyan-400 font-bold text-base md:text-lg min-w-fit">💼</span>
                <div className="flex-1">
                  <p className="text-cyan-300 font-bold text-xs md:text-sm uppercase tracking-wide mb-2">Cargo</p>
                  <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-blue-900 px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold">
                    {personalData.role}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ========== SECCIÓN 3: INTERESES Y HOBBIES ========== */}
        <div className="w-full py-4 md:py-5 border-t border-white/20 animate-on-scroll-delay-2">
          {/* Título de la sección intereses */}
          <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-4 md:mb-5 text-center animate-on-scroll-delay-2">
            Mis <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Intereses</span>
          </h3>

          {/* Grid de intereses con efectos hover */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {/* Mapeo de cada interés con tarjeta interactiva */}
            {interests.map((interest, idx) => (
              <button
                key={idx}
                className="group relative flex flex-col items-center justify-center text-center p-3 sm:p-4 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/50 overflow-hidden"
              >
                {/* Overlay de fondo en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Emoji del interés con animación */}
                <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-1 relative z-10 transition-transform duration-300 group-hover:scale-125">
                  {interest.icon}
                </span>

                {/* Label del interés */}
                <span className="text-xs sm:text-xs md:text-xs font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors duration-300 relative z-10">
                  {interest.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ========== SECCIÓN 4: LLAMADA A LA ACCIÓN - CONTACTO ========== */}
        <div className="py-4 md:py-5 border-t border-white/20 text-center animate-on-scroll-delay-3">
          {/* Texto motivacional */}
          <p className="text-gray-300 text-xs sm:text-sm md:text-sm mb-3 md:mb-4">
            ¿Listo para trabajar juntos?
          </p>

          {/* Botón CTA que lleva a la sección de contacto */}
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-2 md:py-2.5 px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-sm shadow-lg hover:shadow-cyan-400/50"
          >
            💬 Contáctame
          </a>
        </div>
      </div>
    </section>
  );
}