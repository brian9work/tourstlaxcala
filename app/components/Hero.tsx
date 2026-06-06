import Image from "next/image";
import { heroContent, heroTags, type HeroTag } from "../mock/hero";
import { images } from "../mock/images";

const icons: Record<HeroTag["icon"], React.ReactNode> = {
  moon: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M12 7.5A5.5 5.5 0 016.5 2a5.5 5.5 0 100 11A5.5 5.5 0 0012 7.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  ),
  tree: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1L11 7H9l2 4H3l2-4H3L7 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  ),
  building: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="2" y="5" width="10" height="8" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 13V9h4v4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 5l5-4 5 4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  ),
  heart: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 12S2 8.5 2 5a3 3 0 015-2.24A3 3 0 0112 5c0 3.5-5 7-5 7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  ),
  mountain: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 12L5.5 4 8 8l2-2.5L13 12H1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  ),
};

export default function Hero() {
  const { label, heading, sub, ctaPrimary, ctaSecondary, scroll } = heroContent;

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-16 overflow-hidden">
      {/* Background image */}
      <Image
        src={images.hero}
        alt="Tlaxcala"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0f0a2e]" />

      {/* Content — above overlay */}
      <div className="relative z-10 flex flex-col">

      {/* Label */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-px bg-white/50" />
        <span className="text-white/60 text-xs tracking-[0.25em] uppercase font-[var(--font-inter)]">
          {label}
        </span>
      </div>

      {/* Heading */}
      <h1
        className="font-[var(--font-playfair)] text-white leading-none mb-2"
        style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
      >
        {heading.line1}
        <br />
        {heading.line2Prefix}
        <span className="italic text-brand-gold">{heading.line2Accent}</span>
        <br />
        {heading.line3}
      </h1>

      {/* Subtitle */}
      <p className="text-white/70 text-base sm:text-lg max-w-xl mb-5 leading-relaxed">
        {sub}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {heroTags.map((tag) => (
          <div
            key={tag.id}
            className="flex items-center gap-2 border border-white/30 text-white/80 text-xs sm:text-sm px-4 py-2 rounded-full hover:border-white/60 hover:text-white transition-colors"
          >
            {icons[tag.icon]}
            {tag.label}
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        <button className="bg-brand-blue hover:opacity-90 text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-opacity cursor-pointer">
          {ctaPrimary}
        </button>
        <button className="border border-white/50 hover:border-white text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors cursor-pointer">
          {ctaSecondary}
        </button>
      </div>

      </div>{/* end relative content */}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="1.5" />
          <rect x="9" y="7" width="4" height="6" rx="2" fill="currentColor" />
        </svg>
        <span className="text-[10px] tracking-[0.3em] uppercase">{scroll}</span>
      </div>
    </section>
  );
}
