import { 
  Hero,
  About,
  Projects,
  Services,
  Cta,
} from '@/components'

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Cta />
    </main>
  );
}
