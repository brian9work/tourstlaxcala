import { images } from "./images";

export type TourCategory =
  | "nocturno"
  | "naturaleza"
  | "cultural"
  | "familiar"
  | "aventura";

export type Tour = {
  id: string;
  category: TourCategory;
  categoryLabel: string;
  title: string;
  description: string;
  duration: string;
  groupType: string;
  price: number;
  image: string;
};

export const tours: Tour[] = [
  {
    id: "luciernagas",
    category: "nocturno",
    categoryLabel: "Nocturno",
    title: "Recorrido de Luciérnagas",
    description:
      "Vive la magia única de ver los bosques tlaxcaltecas iluminados por miles de luciérnagas. Una experiencia nocturna incomparable, temporada mayo–agosto.",
    duration: "3-4 horas",
    groupType: "Grupos",
    price: 350,
    image: images.tours.luciernagas,
  },
  {
    id: "bosque",
    category: "naturaleza",
    categoryLabel: "Naturaleza",
    title: "Experiencias en el Bosque",
    description:
      "Adéntrate en los bosques de oyamel y pino. Senderismo, observación de flora y fauna, y conexión plena con la naturaleza tlaxcalteca.",
    duration: "5-6 horas",
    groupType: "Grupos",
    price: 480,
    image: images.tours.bosque,
  },
  {
    id: "pueblos-magicos",
    category: "cultural",
    categoryLabel: "Cultural",
    title: "Experiencias en Pueblos Mágicos",
    description:
      "Descubre la riqueza histórica, gastronómica y artesanal de los Pueblos Mágicos de Tlaxcala. Tradición viva en cada rincón.",
    duration: "Día completo",
    groupType: "Grupos",
    price: 420,
    image: images.tours.pueblosMagicos,
  },
  {
    id: "burros",
    category: "familiar",
    categoryLabel: "Familiar",
    title: "Santuario de los Burros",
    description:
      "Un espacio único donde convivir con burros rescatados en plena naturaleza. Una experiencia tierna y educativa perfecta para toda la familia.",
    duration: "3 horas",
    groupType: "Familias",
    price: 280,
    image: images.tours.burros,
  },
  {
    id: "montana",
    category: "aventura",
    categoryLabel: "Aventura",
    title: "Tours en la Montaña",
    description:
      "Escala La Malinche y otros picos tlaxcaltecas con guías expertos en altitud. Vistas espectaculares y adrenalina con total seguridad.",
    duration: "8 horas",
    groupType: "Grupos",
    price: 550,
    image: images.tours.montana,
  },
];
