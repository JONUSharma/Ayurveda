import Hero from '../Component/Hero';
import TreatmentCards from './Treatment';
import About from "./About.jsx"
export default function Home() {
  return (
    <div>
      <Hero />
      <section className="max-w-5xl mx-auto p-4 text-center">
        <TreatmentCards/>
        <About/>
      </section>
    </div>
  );
}
