import About from "../components/sections/About";
import Certificates from "../components/sections/Certificates";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import ScrollButton from "../components/ui/ScrollButton";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects/Projects";
import Navbar from "../components/navbar/Navbar";

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
