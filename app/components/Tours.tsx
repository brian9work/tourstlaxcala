import Image from "next/image";
import { tours, type Tour, type TourCategory } from "../mock/tours";
import BtnReservar from "./BtnReservar";

const categoryStyles: Record<TourCategory, string> = {
  nocturno: "bg-gray-900 text-white",
  naturaleza: "bg-blue-600 text-white",
  cultural: "bg-brand-orange text-white",
  familiar: "bg-orange-400 text-white",
  aventura: "bg-brand-navy text-white",
};

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0">
      <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6.5 3.5V6.5L8.5 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0">
      <circle cx="5" cy="4" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1 11c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="10" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.1" />
      <path d="M10 8.5c1.1.3 2 1.3 2 2.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Image area */}
      <div className="relative h-44 bg-brand-navy">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Badge */}
        <span
          className={`absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${categoryStyles[tour.category]}`}
        >
          {tour.categoryLabel}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
          <span className="flex items-center gap-1.5">
            <ClockIcon />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <GroupIcon />
            {tour.groupType}
          </span>
        </div>

        <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2">
          {tour.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
          {tour.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
              Desde
            </p>
            <p className="text-gray-900 font-bold text-base">
              ${tour.price.toLocaleString()}{" "}
              <span className="text-xs font-normal text-gray-400">MXN/persona</span>
            </p>
          </div>
          <BtnReservar tourName={tour.title} />
        </div>
      </div>
    </div>
  );
}

export default function Tours() {
  return (
    <section id="tours" className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-px bg-brand-orange" />
          <span className="text-brand-orange text-xs tracking-[0.25em] uppercase font-semibold">
            Nuestras Experiencias
          </span>
          <div className="w-8 h-px bg-brand-orange" />
        </div>
        <h2
          className="font-[var(--font-playfair)] text-gray-900 leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Rutas para descubrir Tlaxcala
        </h2>
        <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
          Cada tour es guiado por expertos locales con profundo conocimiento del
          territorio y la cultura tlaxcalteca.
        </p>
      </div>

      {/* Grid — adapta a cualquier número de tours */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}
