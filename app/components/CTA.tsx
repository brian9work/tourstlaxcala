import Image from "next/image";
import { ctaContent } from "../mock/cta";
import { images } from "../mock/images";
import { contact } from "../mock/contact";

export default function CTA() {
  const { label, heading, sub, btnPrimary, btnSecondary } = ctaContent;
  const phone = contact.whatsapp.replace(/\D/g, "");
  const waHref = `https://wa.me/${phone}?text=${encodeURIComponent("Hola, me interesa reservar un tour")}`;

  return (
    <section className="relative py-28 px-6 sm:px-10 overflow-hidden flex items-center justify-center">
      {/* Background image */}
      <Image
        src={images.cta}
        alt="Tlaxcala"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-navy/65" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-white/50" />
          <span className="text-white/70 text-xs tracking-[0.25em] uppercase font-semibold">
            {label}
          </span>
          <div className="w-8 h-px bg-white/50" />
        </div>

        <h2
          className="font-[var(--font-playfair)] text-white leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
        >
          {heading}
        </h2>

        <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {sub}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue hover:opacity-90 text-white font-semibold px-8 py-3.5 rounded-full transition-opacity cursor-pointer text-sm"
          >
            {btnPrimary}
          </a>
          <a
            href="#tours"
            className="border border-white/50 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors cursor-pointer text-sm"
          >
            {btnSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
