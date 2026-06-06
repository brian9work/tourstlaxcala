export const testimoniosContent = {
  label: "Testimonios",
  heading: "Lo que dicen nuestros viajeros",
};

export type Testimonio = {
  id: string;
  initials: string;
  name: string;
  city: string;
  rating: number;
  text: string;
};

export const testimonios: Testimonio[] = [
  {
    id: "valentina",
    initials: "VT",
    name: "Valentina Torres",
    city: "Ciudad de México",
    rating: 5,
    text: "Nunca imaginé que Tlaxcala tuviera tanto. El recorrido de luciérnagas fue lo más mágico que he vivido. Las guías son increíbles, con conocimiento y calidez únicos.",
  },
  {
    id: "ana",
    initials: "AR",
    name: "Ana Reyes",
    city: "Puebla",
    rating: 5,
    text: "El Santuario de los Burros fue el favorito de mis hijos. Un lugar especial y muy amable. Regresamos el siguiente mes para el tour del bosque.",
  },
  {
    id: "roberto",
    initials: "RS",
    name: "Roberto Sánchez",
    city: "Guadalajara",
    rating: 5,
    text: "La ascensión a La Malinche fue una experiencia transformadora. Guías expertos y seguros, con un nivel de detalle impresionante en cada paso.",
  },
];
