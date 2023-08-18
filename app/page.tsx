import About from "./components/home/About";
import Certificates from "./components/home/Certificates";
import Contact from "./components/home/Contact";
import Hero from "./components/home/Hero";
import ScrollButton from "./components/home/ScrollButton";
import Skills from "./components/home/Skills";
import Projects from "./components/home/Projects";
import Background from "./components/ui/Background";

export default function Home() {
  return (
    <main className="w-full bg-black text-white">
      <ScrollButton />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />

      {/* <Background /> */}
    </main>
  );
}
