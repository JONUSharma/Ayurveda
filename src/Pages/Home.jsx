import Hero from '../Component/Hero';
import TreatmentCards from './Treatment';
import About from "./About.jsx"
import Contact from "./Contact.jsx"
export default function Home() {
  return (
    <div>
      <Hero />
      <section className="max-w-5xl mx-auto p-4 text-center">
        <TreatmentCards/>
        <About/>
        <Contact/>
      </section>
    </div>
  );
}
