export const porQueContent = {
  label: "Por qué elegirnos",
  heading: "Una diferencia que se siente",
  sub: "No somos una agencia de masas. Somos vecinos de la tierra que recorres.",
};

export type Feature = {
  id: string;
  icon: "shield" | "group" | "leaf" | "star";
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    id: "guias",
    icon: "shield",
    title: "Guías locales certificados",
    description:
      "Todos nuestros guías son nativos de Tlaxcala, certificados y con conocimiento profundo del territorio, la fauna y la cultura local.",
  },
  {
    id: "grupos",
    icon: "group",
    title: "Grupos pequeños",
    description:
      "Máximo 12 personas por tour. Garantizamos una experiencia íntima, personalizada y respetuosa con el entorno natural.",
  },
  {
    id: "responsable",
    icon: "leaf",
    title: "Turismo responsable",
    description:
      "Apoyamos directamente a comunidades locales. Parte de cada tour se reinvierte en conservación y desarrollo comunitario en Tlaxcala.",
  },
  {
    id: "exclusivas",
    icon: "star",
    title: "Rutas exclusivas",
    description:
      "Acceso a lugares y experiencias que no encontrarás en ninguna agencia de masas. Tlaxcala vista desde adentro, con quienes la viven.",
  },
];
