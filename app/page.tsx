import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Methodology from "@/components/Methodology";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Extracurricular from "@/components/Extracurricular";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Methodology />
        <Projects />
        <Experience />
        <Education />
        <Extracurricular />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
