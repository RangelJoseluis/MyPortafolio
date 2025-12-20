import Header from '@/components/Header';
import HeroInteractive from '@/components/HeroInteractive';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Curriculum from '@/components/Curriculum';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full">
      <Header />

      {/* Sección 1: Inicio con su propio fondo azul */}
      <HeroInteractive />

      {/* Sección 2: Bloque unificado para el resto de secciones */}
      <div className="bg-[#0a0e27] w-full relative overflow-hidden">
        {/* Luces de fondo globales para evitar cortes entre secciones */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[10%] -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-[30%] -left-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-[50%] right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]"></div>
          <div className="absolute top-[70%] left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[10%] right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10">
          <About />
          <Skills />
          <Curriculum />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
