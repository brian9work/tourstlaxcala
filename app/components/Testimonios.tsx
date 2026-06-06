import { Star } from "lucide-react";
import { testimoniosContent, testimonios, type Testimonio } from "../mock/testimonios";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="text-brand-gold fill-brand-gold" />
      ))}
    </div>
  );
}

function TestimonioCard({ testimonio }: { testimonio: Testimonio }) {
  return (
    <div className="flex flex-col gap-5 bg-white/10 rounded-2xl p-6">
      <Stars count={testimonio.rating} />

      <p className="text-white/90 text-sm leading-relaxed italic flex-1">
        &ldquo;{testimonio.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-2">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center shrink-0">
          <span className="text-white text-xs font-bold">{testimonio.initials}</span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{testimonio.name}</p>
          <p className="text-white/60 text-xs">{testimonio.city}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonios() {
  const { label, heading } = testimoniosContent;

  return (
    <section id="testimonios" className="py-20 px-6 sm:px-10 lg:px-20 bg-brand-blue">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-px bg-brand-gold" />
          <span className="text-brand-gold text-xs tracking-[0.25em] uppercase font-semibold">
            {label}
          </span>
          <div className="w-8 h-px bg-brand-gold" />
        </div>
        <h2
          className="font-[var(--font-playfair)] text-white leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {heading}
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonios.map((t) => (
          <TestimonioCard key={t.id} testimonio={t} />
        ))}
      </div>
    </section>
  );
}
