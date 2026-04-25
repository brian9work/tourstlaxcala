export interface Attraction {
  id: string;
  img: string;
  es: { title: string; desc: string };
  en: { title: string; desc: string };
}

export const attractions: Attraction[] = [
  {
    id: "basilica",
    img: "/images/basilica-ocotlan.jpg",
    es: { title: "Basílica de Ocotlán", desc: "Una de las joyas del barroco mexicano, declarada monumento histórico y orgullo de Tlaxcala." },
    en: { title: "Basílica of Ocotlán", desc: "One of Mexico's finest Baroque masterpieces, declared a historic monument and pride of Tlaxcala." },
  },
  {
    id: "huamantla",
    img: "/images/huamantla-festival.jpg",
    es: { title: "Feria de Huamantla", desc: "Cada agosto, Huamantla se viste de flores y aserrín para La Noche que Nadie Duerme, el festival más colorido de México." },
    en: { title: "Huamantla Festival", desc: "Every August, Huamantla dresses in flowers and sawdust for La Noche que Nadie Duerme — Mexico's most colorful night festival." },
  },
  {
    id: "firefly",
    img: "/images/firefly-sanctuary.jpg",
    es: { title: "Santuario de la Luciérnaga", desc: "En los bosques de Nanacamilpa, miles de luciérnagas iluminan la noche en un espectáculo natural único en el mundo." },
    en: { title: "Firefly Sanctuary", desc: "In the forests of Nanacamilpa, thousands of fireflies light up the night in a natural spectacle unique in the world." },
  },
  {
    id: "valquirico",
    img: "/images/valquirico.jpg",
    es: { title: "Val'Quirico", desc: "Un pueblo de inspiración medieval en el corazón de Tlaxcala, con arquitectura europea, gastronomía y arte." },
    en: { title: "Val'Quirico", desc: "A medieval-inspired village in the heart of Tlaxcala, blending European architecture, gastronomy, and art." },
  },
  {
    id: "cacaxtla",
    img: "/images/cacaxtla.jpg",
    es: { title: "Cacaxtla", desc: "Zona arqueológica famosa por sus murales prehispánicos en perfecto estado, considerados entre los más importantes de Mesoamérica." },
    en: { title: "Cacaxtla", desc: "Archaeological site famous for its perfectly preserved pre-Hispanic murals, among the most important in all of Mesoamerica." },
  },
  {
    id: "highlands",
    img: "/images/highlands-tlaxcala.jpg",
    es: { title: "Tierras Altas de Tlaxcala", desc: "Bosques de pino y oyamel que envuelven el estado en un manto verde, ideales para senderismo y ecoturismo." },
    en: { title: "Highlands of Tlaxcala", desc: "Pine and oyamel forests that blanket the state in green, perfect for hiking and ecotourism." },
  },
  {
    id: "carnaval",
    img: "/images/huehues-dance.jpg",
    es: { title: "Carnaval de Tlaxcala", desc: "Los Huehues llenan las calles con música, sátira y trajes coloridos en uno de los carnavales más antiguos de México." },
    en: { title: "Tlaxcala Carnival", desc: "The Huehues fill the streets with music, satire, and colorful costumes in one of Mexico's oldest carnivals." },
  },
  {
    id: "talavera",
    img: "/images/talavera-art.jpg",
    es: { title: "Arte Talavera", desc: "La cerámica talavera de Tlaxcala, declarada Patrimonio Cultural Inmaterial, es símbolo de identidad y maestría artesanal." },
    en: { title: "Talavera Art", desc: "Tlaxcala's talavera ceramics, declared Intangible Cultural Heritage, are a symbol of identity and artisanal mastery." },
  },
];
