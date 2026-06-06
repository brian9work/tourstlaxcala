import Image from "next/image";
import { nosotrosContent, stats } from "../mock/nosotros";
import { images } from "../mock/images";

function ArchImage() {
  const { badge } = nosotrosContent;

  return (
    <div className="relative w-64 sm:w-72 mx-auto lg:mx-0 shrink-0">
      {/* Arch */}
      <div className="relative h-[360px] sm:h-[420px] rounded-t-[9999px] overflow-hidden border-2 border-white/70">
        <Image
          src={images.nosotros}
          alt="Equipo Tours Tlaxcala"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 256px, 288px"
        />
      </div>

      {/* Badge circular */}
      <div className="absolute -bottom-3 -right-3 w-[88px] h-[88px] rounded-full bg-brand-orange flex flex-col items-center justify-center text-white text-center shadow-md">
        <span className="text-3xl font-bold leading-none">{badge.number}</span>
        <span className="text-[8px] uppercase tracking-wide leading-tight mt-1 px-2">
          {badge.label.split("\n").map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </span>
      </div>
    </div>
  );
}

export default function Nosotros() {
  const { heading, paragraphs } = nosotrosContent;

  return (
    <section id="nosotros" className="py-20 px-6 sm:px-10 lg:px-20 bg-brand-cream">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left — arch image */}
        <ArchImage />

        {/* Right — content */}
        <div className="flex-1">
          <h2
            className="font-[var(--font-playfair)] text-brand-navy leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {heading}
          </h2>

          <div className="flex flex-col gap-4 mb-10">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-brand-blue font-bold text-2xl sm:text-3xl leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-xs uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
