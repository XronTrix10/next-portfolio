import About from "../sections/About";
import Certificates from "../sections/Certificates";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import ScrollButton from "../components/ui/ScrollButton";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects/Projects";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="w-full bg-black text-white">
      <Navbar land="home" />

      <ScrollButton />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />

    </main>
  );
}