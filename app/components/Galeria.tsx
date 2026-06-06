"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  galeriaContent,
  galeriaFilters,
  galeriaItems,
  type GaleriaFilter,
} from "../mock/galeria";

function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: typeof galeriaItems;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors cursor-pointer z-10"
        aria-label="Cerrar"
      >
        <X size={22} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors cursor-pointer"
        aria-label="Anterior"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Image */}
      <div
        className="relative w-full max-w-4xl mx-16 h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-contain"
          sizes="100vw"
        />
        {/* Caption */}
        <p className="absolute bottom-0 left-0 right-0 text-center text-white/60 text-sm py-3">
          {item.alt}
        </p>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors cursor-pointer"
        aria-label="Siguiente"
      >
        <ChevronRight size={26} />
      </button>

      {/* Counter */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs">
        {index + 1} / {items.length}
      </p>
    </div>
  );
}

export default function Galeria() {
  const [activeFilter, setActiveFilter] = useState<GaleriaFilter["id"]>("todo");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "todo"
      ? galeriaItems
      : galeriaItems.filter((item) => item.category === activeFilter);

  const handleFilterChange = (id: GaleriaFilter["id"]) => {
    setActiveFilter(id);
    setSelectedIndex(null);
  };

  const close = useCallback(() => setSelectedIndex(null), []);
  const prev = useCallback(
    () => setSelectedIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null)),
    [filtered.length]
  );
  const next = useCallback(
    () => setSelectedIndex((i) => (i !== null ? (i + 1) % filtered.length : null)),
    [filtered.length]
  );

  const { label, heading } = galeriaContent;

  return (
    <section id="galeria" className="py-20 px-6 sm:px-10 lg:px-20 bg-brand-cream">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-px bg-brand-orange" />
          <span className="text-brand-orange text-xs tracking-[0.25em] uppercase font-semibold">
            {label}
          </span>
          <div className="w-8 h-px bg-brand-orange" />
        </div>
        <h2
          className="font-[var(--font-playfair)] text-gray-900 leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {heading}
        </h2>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {galeriaFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleFilterChange(filter.id)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors cursor-pointer ${
              activeFilter === filter.id
                ? "bg-brand-blue text-white border-brand-blue"
                : "bg-transparent text-gray-600 border-gray-300 hover:border-gray-500"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setSelectedIndex(index)}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-blue"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/40 transition-colors duration-300 flex items-end p-4">
              <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.alt}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <Lightbox
          items={filtered}
          index={selectedIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
