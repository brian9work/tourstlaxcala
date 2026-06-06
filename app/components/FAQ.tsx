"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { faqContent, faqItems, type FaqItem } from "../mock/faq";

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left cursor-pointer group"
      >
        <span className="font-[var(--font-playfair)] text-gray-900 text-lg group-hover:text-brand-orange transition-colors">
          {item.question}
        </span>
        <span className="text-brand-orange shrink-0">
          {open ? <X size={22} /> : <Plus size={22} />}
        </span>
      </button>

      {open && (
        <p className="text-gray-500 text-sm leading-relaxed pb-5 max-w-2xl">
          {item.answer}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  const { label, heading } = faqContent;

  return (
    <section id="faq" className="py-20 px-6 sm:px-10 lg:px-20 bg-brand-cream">
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
          className="font-[var(--font-playfair)] text-gray-900 leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          {heading}
        </h2>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto">
        {faqItems.map((item) => (
          <FaqRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
