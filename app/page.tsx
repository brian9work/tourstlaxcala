"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { images, WA_LINK } from "./lib/images";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { attractions } from "./mock/attractions";
import { destinations } from "./mock/destinations";
import { testimonials } from "./mock/testimonials";
import { LoadingScreen } from "./components/LoadingScreen";

const CRAFT_IMGS = [
  images.crafts.textile,
  images.crafts.huamantla,
  images.crafts.huehues,
  images.crafts.talavera,
];

const WHY_ICONS = ["👤", "∞", "👥"];
const CULINARY_ICONS = ["H", "✦"];
const INTERVAL = 4000;

function ImageBox({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative bg-gray-300 overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
    </div>
  );
}

function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-full p-1">
      <button
        onClick={() => setLocale("es")}
        className={`text-xs font-bold px-2.5 py-1 rounded-full transition-colors cursor-pointer ${locale === "es" ? "bg-orange-500 text-white" : "text-white/70 hover:text-white"}`}
      >
        ES
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`text-xs font-bold px-2.5 py-1 rounded-full transition-colors cursor-pointer ${locale === "en" ? "bg-orange-500 text-white" : "text-white/70 hover:text-white"}`}
      >
        EN
      </button>
    </div>
  );
}

function CapturingSlider() {
  const { locale, t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const total = attractions.length;

  const prev = useCallback(() => { setCurrent((c) => (c - 1 + total) % total); setProgress(0); }, [total]);
  const next = useCallback(() => { setCurrent((c) => (c + 1) % total); setProgress(0); }, [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => { setCurrent((c) => (c + 1) % total); setProgress(0); }, INTERVAL);
    return () => clearInterval(id);
  }, [paused, total]);

  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const step = 100 / (INTERVAL / 100);
    const id = setInterval(() => setProgress((p) => Math.min(p + step, 100)), 100);
    return () => clearInterval(id);
  }, [current, paused]);

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    setTouchStart(null);
  };

  const visible = [attractions[current], attractions[(current + 1) % total]];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-orange-500 uppercase tracking-widest font-semibold">{t.capturing.label}</span>
        <div className="flex items-center gap-3">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer">
            {t.capturing.bookNow}
          </a>
          <button onClick={prev} aria-label="Anterior"
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer text-gray-600">
            ‹
          </button>
          <button onClick={next} aria-label="Siguiente"
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer text-gray-600">
            ›
          </button>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.capturing.title}</h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 touch-pan-y"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {visible.map((item) => (
          <div key={item.id} className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
            <ImageBox src={item.img} alt={item[locale].title} className="h-56 w-full" />
            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-900 mb-1">{item[locale].title}</h3>
              <p className="text-gray-500 text-sm">{item[locale].desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {attractions.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setProgress(0); }}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === current ? "bg-orange-500 w-4" : "bg-gray-300 w-2"}`}
            aria-label={`Ir a ${i + 1}`}
          />
        ))}
      </div>

      <div className="w-24 h-0.5 bg-gray-200 rounded-full mx-auto mt-3 overflow-hidden">
        <div className="h-full bg-orange-400 rounded-full" style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { locale, t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const total = testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    setTouchStart(null);
  };

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % total],
    testimonials[(current + 2) % total],
  ];

  return (
    <section id="testimonios" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-2">{t.testimonials.label}</p>
          <h2 className="text-3xl font-bold text-gray-900">{t.testimonials.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 touch-pan-y" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {visible.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
              <div className="flex gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-orange-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">"{item[locale].text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                  <Image src={item.photo} alt={item.name} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                  <p className="text-gray-400 text-xs">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
          <button onClick={prev} aria-label="Anterior"
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer text-gray-600">
            ‹
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === current ? "bg-orange-500 w-4" : "bg-gray-300 w-2"}`}
                aria-label={`Ir a ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Siguiente"
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer text-gray-600">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

function PageContent() {
  const { t, locale } = useLanguage();

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-[#1a0a3c]">
        <Image src={images.logo} alt="Tours Tlaxcala" width={140} height={60} className="object-contain" priority />
        <ul className="hidden md:flex gap-6">
          {([
            [t.nav.attractions, "#atracciones"],
            [t.nav.gastronomy, "#gastronomia"],
            [t.nav.culture, "#cultura"],
            [t.nav.about, "#nosotros"],
          ] as [string, string][]).map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); }}
                className="text-white text-sm hover:text-orange-400 transition-colors cursor-pointer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer">
            {t.nav.bookNow}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src={images.hero} alt="Tlaxcala" fill className="object-cover object-bottom" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Text */}
          <div className="text-center md:text-left flex-1">
            <div className="flex justify-center md:justify-start mb-6">
              <div className="bg-[#1a0a3c] p-5 rounded-xl flex items-center justify-center">
                <Image src={images.logo} alt="Tours Tlaxcala" width={100} height={100} className="object-contain" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              {t.hero.heading1}<br />
              {t.hero.heading2} <span className="text-orange-400">{t.hero.heading3}</span> {t.hero.heading4}
            </h1>
            <p className="text-white/80 text-base mb-8 max-w-xl">{t.hero.sub}</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1a0a3c] hover:bg-[#2d1260] text-white font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer">
              {t.hero.cta}
            </a>
          </div>

          {/* Mascot */}
          <div className="flex-shrink-0 hidden md:block animate-[float_3s_ease-in-out_infinite]">
            <Image
              src={images.mascot}
              alt="Mascota Tours Tlaxcala"
              width={280}
              height={280}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* CAPTURING THE SPIRIT — SLIDER */}
      <CapturingSlider />

      {/* FEATURED DESTINATIONS */}
      <section id="atracciones" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
          <div>
            <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-1">{t.destinations.label}</p>
            <h2 className="text-3xl font-bold text-gray-900">{t.destinations.title}</h2>
          </div>
          <div className="flex flex-col items-end gap-2">
            <p className="text-gray-500 text-sm max-w-xs text-right">{t.destinations.sub}</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer">
              {t.destinations.bookNow}
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((d) => (
            <div key={d.id} className="relative rounded-2xl overflow-hidden shadow-md h-64 cursor-pointer">
              <ImageBox src={d.img} alt={d[locale].name} className="absolute inset-0 w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block">{d[locale].tag}</span>
                <h3 className="text-white font-bold text-xl">{d[locale].name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CULINARY LEGACY */}
      <section id="gastronomia" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-2">{t.culinary.label}</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.culinary.title}</h2>
            <p className="text-gray-500 text-sm mb-6">{t.culinary.sub}</p>
            <div className="flex flex-col gap-5 mb-8">
              {t.culinary.items.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center font-bold text-sm shrink-0">
                    {CULINARY_ICONS[i]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer">
              {t.culinary.cta}
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <ImageBox src={images.culinary.food} alt="Tlaxcalan cuisine" className="h-80 w-full" />
          </div>
        </div>
      </section>

      {/* HANDS CRAFTED BY HISTORY */}
      <section id="cultura" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
          <div>
            <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-1">{t.crafts.label}</p>
            <h2 className="text-3xl font-bold text-gray-900">{t.crafts.title}</h2>
            <p className="text-gray-500 text-sm mt-2 max-w-sm">{t.crafts.sub}</p>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="bg-[#1a0a3c] hover:bg-[#2d1260] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer">
            {t.crafts.cta}
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px]">
          <div className="relative rounded-2xl overflow-hidden row-span-2 col-span-1">
            <ImageBox src={CRAFT_IMGS[0]} alt={t.crafts.items[0].title} className="absolute inset-0 w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-bold">{t.crafts.items[0].title}</h3>
              <p className="text-white/70 text-xs">{t.crafts.items[0].desc}</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden col-span-1 md:col-span-2 bg-orange-500 flex flex-col justify-end p-4">
            <ImageBox src={CRAFT_IMGS[1]} alt={t.crafts.items[1].title} className="absolute inset-0 w-full h-full opacity-40" />
            <div className="relative z-10">
              <h3 className="text-white font-bold">{t.crafts.items[1].title}</h3>
              <p className="text-white/80 text-xs">{t.crafts.items[1].desc}</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-[#1a0a3c] flex flex-col justify-end p-4">
            <ImageBox src={CRAFT_IMGS[2]} alt={t.crafts.items[2].title} className="absolute inset-0 w-full h-full opacity-30" />
            <div className="relative z-10">
              <h3 className="text-white font-bold text-sm">{t.crafts.items[2].title}</h3>
              <p className="text-white/70 text-xs">{t.crafts.items[2].desc}</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-orange-100 flex flex-col justify-end p-4">
            <ImageBox src={CRAFT_IMGS[3]} alt={t.crafts.items[3].title} className="absolute inset-0 w-full h-full opacity-40" />
            <div className="relative z-10">
              <h3 className="text-gray-900 font-bold text-sm">{t.crafts.items[3].title}</h3>
              <p className="text-gray-600 text-xs">{t.crafts.items[3].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* CTA BANNER */}
      <section className="py-20 px-6 bg-[#1a0a3c] text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{t.cta.heading1}</h2>
        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6">{t.cta.heading2}</h2>
        <p className="text-white/70 text-sm max-w-md mx-auto mb-8">{t.cta.sub}</p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-base transition-colors cursor-pointer">
          {t.cta.button}
        </a>
      </section>

      {/* WHY TOUR WITH US */}
      <section id="nosotros" className="py-20 px-6 max-w-6xl mx-auto text-center">
        <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold mb-2">{t.why.label}</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-12">{t.why.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {t.why.items.map((w, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                {WHY_ICONS[i]}
              </div>
              <h3 className="font-bold text-gray-900">{w.title}</h3>
              <p className="text-gray-500 text-sm">{w.desc}</p>
            </div>
          ))}
        </div>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1a0a3c] hover:bg-[#2d1260] text-white font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer">
          {t.why.cta}
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a0a3c] text-white/60 py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <Image src={images.logo} alt="Tours Tlaxcala" width={100} height={44} className="object-contain" />
        <span>{t.footer.rights}</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors cursor-pointer">{t.footer.privacy}</a>
          <a href="#" className="hover:text-white transition-colors cursor-pointer">{t.footer.terms}</a>
          <a href="#" className="hover:text-white transition-colors cursor-pointer">{t.footer.contact}</a>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <LanguageProvider>
        <PageContent />
      </LanguageProvider>
    </>
  );
}
