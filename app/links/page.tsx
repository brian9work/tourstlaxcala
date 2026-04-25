import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tours Tlaxcala — Contacto y Redes Sociales",
  description: "Síguenos en redes sociales y contáctanos para reservar tu tour en Tlaxcala.",
};

const LINKS = [
  {
    label: "Visita nuestra Página Web",
    sub: "tourstlaxcala.com",
    href: "https://tourstlaxcala.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    bg: "bg-[#1a0a3c]",
    border: "border-[#3d1f7a]",
    hover: "hover:bg-[#2d1260]",
  },
  {
    label: "Síguenos en Instagram",
    sub: "@tourstlaxcala",
    href: "https://instagram.com/tourstlaxcala",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
    bg: "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#f77737]",
    border: "border-transparent",
    hover: "hover:opacity-90",
  },
  {
    label: "Síguenos en Facebook",
    sub: "Tours Tlaxcala",
    href: "https://facebook.com/tourstlaxcala",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    bg: "bg-[#1877f2]",
    border: "border-transparent",
    hover: "hover:bg-[#1565d8]",
  },
  {
    label: "Escríbenos por WhatsApp",
    sub: "+52 555 478 6417",
    href: "https://wa.me/5554786417",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.057 23.886a.5.5 0 0 0 .613.613l6.083-1.456A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 0 1-5.072-1.388l-.362-.214-3.754.899.916-3.667-.235-.374A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    bg: "bg-[#25d366]",
    border: "border-transparent",
    hover: "hover:bg-[#1ebe5d]",
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-[#0a0318] flex flex-col items-center justify-center px-4 py-16">
      {/* Dot grid bg */}
      <div className="fixed inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#1d0d44 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-6">
        {/* Logo + name */}
        <div className="flex flex-col items-center gap-3 mb-2">
          <div className="w-40 h-auto flex items-center justify-center overflow-hidden">
            <Image src="/images/logo.webp" alt="Tours Tlaxcala" width={200} height={200} className="object-contain" priority />
          </div>
          <p className="text-white/50 text-sm text-center max-w-xs">
            Descubre la magia de Tlaxcala con guías locales expertos
          </p>
          {/* Orange accent line */}
          <div className="w-16 h-0.5 bg-[#f97316] rounded-full" />
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl border ${link.bg} ${link.border} ${link.hover} transition-all duration-200 cursor-pointer group shadow-lg`}
            >
              <div className="text-white opacity-90 shrink-0">
                {link.icon}
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-white font-semibold text-sm">{link.label}</span>
                <span className="text-white/60 text-xs">{link.sub}</span>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-4 h-4 opacity-40 group-hover:opacity-80 group-hover:translate-x-0.5 transition-all">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="text-white/20 text-xs mt-4">© 2024 Tours Tlaxcala</p>
      </div>
    </div>
  );
}
