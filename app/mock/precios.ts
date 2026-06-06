export const preciosContent = {
  label: "Precios",
  heading: "Elige tu experiencia",
  sub: "Tarifas por persona. Incluyen guía experto y seguro básico de actividad.",
  whatsappLabel: "Reservar por WhatsApp",
  whatsappNote: "Respuesta inmediata · Grupos con descuento especial",
};

export type PrecioIcon = "Moon" | "TreePine" | "Building2" | "Heart" | "Mountain";

export type Precio = {
  id: string;
  label: string;
  icon: PrecioIcon;
  accentColor: string;
  price: number;
  currency: string;
  description: string;
};

export const precios: Precio[] = [
  {
    id: "luciernagas",
    label: "Luciérnagas",
    icon: "Moon",
    accentColor: "#111827",
    price: 350,
    currency: "MXN",
    description: "Por persona. Temporada mayo–agosto. Mínimo 4 personas.",
  },
  {
    id: "bosque",
    label: "Bosque",
    icon: "TreePine",
    accentColor: "#2563eb",
    price: 480,
    currency: "MXN",
    description: "Por persona. Refrigerio incluido. Disponible todo el año.",
  },
  {
    id: "pueblos-magicos",
    label: "Pueblos Mágicos",
    icon: "Building2",
    accentColor: "#ef4444",
    price: 420,
    currency: "MXN",
    description: "Por persona. Comida regional incluida. Fines de semana.",
  },
  {
    id: "santuario",
    label: "Santuario",
    icon: "Heart",
    accentColor: "#6366f1",
    price: 280,
    currency: "MXN",
    description: "Por persona. Niñas menores de 5 años: entrada libre.",
  },
  {
    id: "montana",
    label: "Montaña",
    icon: "Mountain",
    accentColor: "#374151",
    price: 550,
    currency: "MXN",
    description: "Por persona. Equipo de montaña incluido. Mayores de 18 años.",
  },
];
