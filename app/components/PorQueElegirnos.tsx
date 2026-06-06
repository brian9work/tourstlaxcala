import { porQueContent, features, type Feature } from "../mock/porQueElegirnos";

const icons: Record<Feature["icon"], React.ReactNode> = {
  shield: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M11 2L3 5.5V10c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V5.5L11 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  group: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 19c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="16" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M16 13c2.2.5 4 2.5 4 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  leaf: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M11 20C11 20 3 15 3 8a8 8 0 0116 0c0 7-8 12-8 12z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M11 20V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  star: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M11 2l2.6 5.3 5.9.9-4.3 4.1 1 5.9L11 15.4l-5.2 2.8 1-5.9L2.5 8.2l5.9-.9L11 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0">
        {icons[feature.icon]}
      </div>
      <div>
        <h3 className="text-white font-bold text-base mb-2">{feature.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
}

export default function PorQueElegirnos() {
  const { label, heading, sub } = porQueContent;

  return (
    <section id="nosotros" className="py-20 px-6 sm:px-10 lg:px-20 bg-brand-navy">
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
          className="font-[var(--font-playfair)] text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {heading}
        </h2>
        <p className="text-white/60 text-base max-w-lg mx-auto">{sub}</p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}
