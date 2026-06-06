"use client";

import { useState } from "react";
import { navItems } from "../mock/nav";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.for}
              onClick={() => scrollTo(item.for)}
              className="text-white/80 hover:text-white text-sm transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo("nosotros")}
            className="border border-white/60 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            Conoce más
          </button>
          <button
            onClick={() => scrollTo("contacto")}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors cursor-pointer"
          >
            Reservar
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 cursor-pointer"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f0a2e] border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.for}
              onClick={() => scrollTo(item.for)}
              className="text-white/80 hover:text-white text-sm py-2.5 text-left transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
          <div className="flex flex-col gap-2 pt-3 border-t border-white/10 mt-2">
            <button
              onClick={() => scrollTo("nosotros")}
              className="border border-white/60 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              Conoce más
            </button>
            <button
              onClick={() => scrollTo("contacto")}
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              Reservar
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
