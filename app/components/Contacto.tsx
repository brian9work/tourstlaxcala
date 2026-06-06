import { MessageCircle, Phone, Mail, Clock } from "lucide-react";
import {
  contactoContent,
  contactMethods,
  socialMethods,
  type ContactMethod,
} from "../mock/contact";

const SvgInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const SvgFacebook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const iconMap: Record<ContactMethod["icon"], React.ReactNode> = {
  whatsapp:  <MessageCircle size={20} strokeWidth={1.8} />,
  phone:     <Phone size={20} strokeWidth={1.8} />,
  mail:      <Mail size={20} strokeWidth={1.8} />,
  instagram: <SvgInstagram />,
  facebook:  <SvgFacebook />,
};

function ContactCard({ method }: { method: ContactMethod }) {
  return (
    <a
      href={method.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: method.iconBg, color: method.iconColor }}
      >
        {iconMap[method.icon]}
      </div>
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-0.5">
          {method.label}
        </p>
        <p className="text-gray-800 text-sm font-medium group-hover:text-brand-orange transition-colors">
          {method.value}
        </p>
      </div>
    </a>
  );
}

export default function Contacto() {
  const { label, heading, sub, socialHeading, horariosHeading, horarios } = contactoContent;

  return (
    <section id="contacto" className="py-20 px-6 sm:px-10 lg:px-20 ">
      {/* Header */}
      <div className="text-center mb-14">
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

      {/* Two columns */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* Left — main contact */}
        <div className="flex flex-col gap-4">
          <p className="text-gray-500 text-base leading-relaxed mb-2">{sub}</p>
          {contactMethods.map((method) => (
            <ContactCard key={method.id} method={method} />
          ))}
        </div>

        {/* Right — social + horarios */}
        <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 flex flex-col gap-7">

          {/* Social */}
          <div>
            <h3 className="font-[var(--font-playfair)] text-gray-900 text-xl mb-4">
              {socialHeading}
            </h3>
            <div className="flex flex-col gap-3">
              {socialMethods.map((method) => (
                <ContactCard key={method.id} method={method} />
              ))}
            </div>
          </div>

          <div className="h-px bg-gray-100" />

          {/* Horarios */}
          <div>
            <div className="flex items-center gap-2 text-gray-900 font-semibold mb-4">
              <Clock size={16} className="text-brand-orange" />
              <h3 className="font-[var(--font-playfair)] text-xl">{horariosHeading}</h3>
            </div>
            <div className="flex flex-col gap-3">
              {horarios.map((h) => (
                <div key={h.days} className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{h.days}</span>
                  <span className="text-gray-800 font-medium">{h.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
