import { 
  Hero,
  About,
  Projects,
  Services,
  Cta,
} from '@/components'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Cta />
    </main>
  );
}
