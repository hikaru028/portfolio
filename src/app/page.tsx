import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Cta from "@/components/cta/Cta";
export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Cta />
    </main>
  );
}
