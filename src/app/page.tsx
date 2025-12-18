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
    <main>
      <Header />
      <HeroInteractive />
      <About />
      <Skills />
      <Curriculum />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
