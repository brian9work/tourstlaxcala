import Hero from "./components/Hero";
import Tours from "./components/Tours";
import Nosotros from "./components/Nosotros";
import PorQueElegirnos from "./components/PorQueElegirnos";
import Precios from "./components/Precios";
import Testimonios from "./components/Testimonios";
import Galeria from "./components/Galeria";
import FAQ from "./components/FAQ";
import Contacto from "./components/Contacto";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Tours />
      <Nosotros />
      <PorQueElegirnos />
      <Precios />
      <Testimonios />
      <Galeria />
      <FAQ />
      <Contacto />
      <CTA />
    </main>
  );
}
