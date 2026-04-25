export interface Destination {
  id: string;
  img: string;
  es: { name: string; tag: string };
  en: { name: string; tag: string };
}

export const destinations: Destination[] = [
  {
    id: "valquirico",
    img: "/images/valquirico.jpg",
    es: { name: "Val'Quirico", tag: "Pueblo" },
    en: { name: "Val'Quirico", tag: "Village" },
  },
  {
    id: "huamantla",
    img: "/images/huamantla-festival.jpg",
    es: { name: "Tapetes de Huamantla", tag: "Festival" },
    en: { name: "Huamantla Carpets", tag: "Festival" },
  },
  {
    id: "firefly",
    img: "/images/firefly-sanctuary.jpg",
    es: { name: "Santuario de Luciérnagas", tag: "Naturaleza" },
    en: { name: "Firefly Sanctuary", tag: "Nature" },
  },
];
