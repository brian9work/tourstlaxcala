import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { footerContent, socialLinks, type SocialLink } from "../mock/footer";
import { tours } from "../mock/tours";
import { contact } from "../mock/contact";

const SvgWhatsApp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.528 5.862L0 24l6.336-1.51A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.213-3.73.888.929-3.63-.233-.373A9.818 9.818 0 1112 21.818z"/>
  </svg>
);

const SvgInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const SvgFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const SvgTikTok = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
  </svg>
);

const socialIcons: Record<SocialLink["icon"], React.ReactNode> = {
  whatsapp:  <SvgWhatsApp />,
  instagram: <SvgInstagram />,
  facebook:  <SvgFacebook />,
  tiktok:    <SvgTikTok />,
};

export default function Footer() {
  const { tagline, copyright, tagRight, cols, location, mapEmbedUrl } = footerContent;

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — Logo + tagline + social */}
        <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="text-white/50 text-sm leading-relaxed">{tagline}</p>
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              >
                {socialIcons[s.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Experiencias */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-brand-orange font-semibold mb-5">
            {cols.experiencias}
          </p>
          <ul className="flex flex-col gap-3">
            {tours.map((tour) => (
              <li key={tour.id}>
                <a
                  href="#tours"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {tour.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Visítanos */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-brand-orange font-semibold mb-5">
            {cols.visitanos}
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-white/60 text-sm">
              <MapPin size={15} className="shrink-0 mt-0.5 text-white/40" />
              {location}
            </li>
            <li>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3 text-white/60 hover:text-white text-sm transition-colors"
              >
                <Phone size={15} className="shrink-0 mt-0.5 text-white/40" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-3 text-white/60 hover:text-white text-sm transition-colors"
              >
                <Mail size={15} className="shrink-0 mt-0.5 text-white/40" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4 — Ubicación / mapa */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-brand-orange font-semibold mb-5">
            {cols.ubicacion}
          </p>
          <div className="w-full h-36 rounded-xl overflow-hidden bg-white/5 border border-white/10">
            {mapEmbedUrl ? (
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <MapPin size={24} className="text-white/20" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/30 text-xs max-w-6xl mx-auto w-full">
        <span>{copyright}</span>
        <span>{tagRight}</span>
      </div>
    </footer>
  );
}
