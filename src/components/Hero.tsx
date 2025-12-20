export default function Hero() {
  return (
    <section id="hero" className="bg-gray-900 text-white py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          Jose Luis Rangel – <span className="text-blue-400">Full Stack Developer</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Construyendo software con identidad local y visión global.
          Apasionado por crear aplicaciones web modernas y soluciones innovadoras.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            Ver mis proyectos
          </button>
          <a
            href="/archivos/CV_JoseLuisRangel.pdf"
            download="CV_JoseLuisRangel.pdf"
            className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition inline-block"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
