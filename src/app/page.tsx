import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
}
