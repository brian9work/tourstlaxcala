import { images } from "./images";

export type GaleriaCategory = "naturaleza" | "tours" | "cultura" | "fauna" | "montana";

export type GaleriaFilter = {
  id: "todo" | GaleriaCategory;
  label: string;
};

export type GaleriaItem = {
  id: string;
  src: string;
  alt: string;
  category: GaleriaCategory;
};

export const galeriaContent = {
  label: "Galería",
  heading: "Tlaxcala en imágenes",
};

export const galeriaFilters: GaleriaFilter[] = [
  { id: "todo", label: "Todo" },
  { id: "naturaleza", label: "Naturaleza" },
  { id: "tours", label: "Tours" },
  { id: "cultura", label: "Cultura" },
  { id: "fauna", label: "Fauna" },
  { id: "montana", label: "Montaña" },
];

export const galeriaItems: GaleriaItem[] = [
  {
    id: "bosque-oyamel",
    src: images.galeria.bosqueOyamel,
    alt: "Bosque de oyamel — Tlaxcala",
    category: "naturaleza",
  },
  {
    id: "burros-santuario",
    src: images.galeria.burrosSantuario,
    alt: "Burros en el santuario",
    category: "fauna",
  },
  {
    id: "viajeros-bosque",
    src: images.galeria.viajerosBosque,
    alt: "Grupo de viajeros en el bosque",
    category: "tours",
  },
  {
    id: "luciernagas",
    src: images.galeria.luciernagas,
    alt: "Recorrido nocturno de luciérnagas",
    category: "tours",
  },
  {
    id: "vista-malinche",
    src: images.galeria.vistaMalinche,
    alt: "Vista desde La Malinche",
    category: "montana",
  },
  {
    id: "artesanias",
    src: images.galeria.artesanias,
    alt: "Artesanías de Tlaxcala",
    category: "cultura",
  },
  {
    id: "huamantla",
    src: images.galeria.huamantla,
    alt: "Pueblo Mágico de Huamantla",
    category: "cultura",
  },
  {
    id: "flora",
    src: images.galeria.flora,
    alt: "Flora nativa tlaxcalteca",
    category: "naturaleza",
  },
];
