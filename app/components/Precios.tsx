import {
  Moon,
  TreePine,
  Building2,
  Heart,
  Mountain,
  MessageCircle,
} from "lucide-react";
import { preciosContent, precios, type Precio, type PrecioIcon } from "../mock/precios";
import { contact } from "../mock/contact";

const iconMap: Record<PrecioIcon, React.ReactNode> = {
  Moon:      <Moon size={22} strokeWidth={1.5} />,
  TreePine:  <TreePine size={22} strokeWidth={1.5} />,
  Building2: <Building2 size={22} strokeWidth={1.5} />,
  Heart:     <Heart size={22} strokeWidth={1.5} />,
  Mountain:  <Mountain size={22} strokeWidth={1.5} />,
};

function PrecioCard({ precio }: { precio: Precio }) {
  const phone = contact.whatsapp.replace(/\D/g, "");
  const msg = `Hola, me interesa el tour ${precio.label}`;
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 p-6 gap-4">
      {/* Accent top border */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ backgroundColor: precio.accentColor }}
      />

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mt-1"
        style={{ backgroundColor: `${precio.accentColor}15`, color: precio.accentColor }}
      >
        {iconMap[precio.icon]}
      </div>

      {/* Label */}
      <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold -mb-2">
        {precio.label}
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-gray-900">
          ${precio.price.toLocaleString()}
        </span>
        <span className="text-xs text-gray-400 font-semibold">{precio.currency}</span>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed flex-1">
        {precio.description}
      </p>

      {/* Reservar button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="precio-btn mt-auto flex items-center justify-center py-2.5 rounded-full border text-sm font-semibold transition-colors"
        style={{
          borderColor: precio.accentColor,
          color: precio.accentColor,
          ["--btn-accent" as string]: precio.accentColor,
        } as React.CSSProperties}
      >
        Reservar
      </a>
    </div>
  );
}

export default function Precios() {
  const { label, heading, sub, whatsappLabel, whatsappNote } = preciosContent;

  const phone = contact.whatsapp.replace(/\D/g, "");
  const waHref = `https://wa.me/${phone}?text=${encodeURIComponent("Hola, me interesa reservar un tour")}`;

  return (
    <section id="precios" className="py-20 px-6 sm:px-10 lg:px-20 bg-brand-cream">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-px bg-brand-orange" />
          <span className="text-brand-orange text-xs tracking-[0.25em] uppercase font-semibold">
            {label}
          </span>
          <div className="w-8 h-px bg-brand-orange" />
        </div>
        <h2
          className="font-[var(--font-playfair)] text-gray-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {heading}
        </h2>
        <p className="text-gray-500 text-base max-w-lg mx-auto">{sub}</p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
        {precios.map((precio) => (
          <PrecioCard key={precio.id} precio={precio} />
        ))}
      </div>

      {/* WhatsApp CTA */}
      <div className="flex flex-col items-center gap-3">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors cursor-pointer text-sm"
        >
          <MessageCircle size={18} />
          {whatsappLabel}
        </a>
        <p className="text-gray-400 text-xs">{whatsappNote}</p>
      </div>
    </section>
  );
}
