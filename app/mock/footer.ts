export const footerContent = {
  tagline:
    "Experiencias auténticas guiadas por nativos tlaxcaltecas. Turismo responsable que transforma vidas y comunidades.",
  copyright: `© ${new Date().getFullYear()} Tour Operadora Tlaxcala · Hecho con amor tlaxcalteca`,
  tagRight: "Turismo responsable · Tlaxcala, México",
  cols: {
    experiencias: "Experiencias",
    visitanos: "Visítanos",
    ubicacion: "Ubicación",
  },
  location: "Tlaxcala, Tlaxcala",
  mapEmbedUrl: "", // Agrega tu URL de Google Maps embed aquí
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: "whatsapp" | "instagram" | "facebook" | "tiktok";
};

export const socialLinks: SocialLink[] = [
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/522460000000", icon: "whatsapp" },
  { id: "instagram", label: "Instagram", href: "https://instagram.com/touroperadoratlaxcala", icon: "instagram" },
  { id: "facebook", label: "Facebook", href: "https://facebook.com/touroperadoratlaxcala", icon: "facebook" },
  { id: "tiktok", label: "TikTok", href: "https://tiktok.com/@touroperadoratlaxcala", icon: "tiktok" },
];
