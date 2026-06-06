export const heroContent = {
  label: "Experiencias Auténticas · Tlaxcala",
  heading: {
    line1: "Descubre",
    line2Prefix: "el ",
    line2Accent: "corazón",
    line3: "de Tlaxcala",
  },
  sub: "Tours guiados por nativos tlaxcaltecas. El estado más pequeño de México guarda algunos de sus secretos más grandes.",
  ctaPrimary: "Ver todos los tours",
  ctaSecondary: "Reservar ahora",
  scroll: "Desliza",
};

export type HeroTag = {
  id: string;
  label: string;
  icon: "moon" | "tree" | "building" | "heart" | "mountain";
};

export const heroTags: HeroTag[] = [
  { id: "luciernagas", label: "Luciérnagas", icon: "moon" },
  { id: "bosque", label: "Bosque", icon: "tree" },
  { id: "pueblos-magicos", label: "Pueblos Mágicos", icon: "building" },
  { id: "santuario", label: "Santuario", icon: "heart" },
  { id: "montana", label: "Montaña", icon: "mountain" },
];
