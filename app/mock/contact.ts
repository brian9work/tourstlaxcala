export const contact = {
  phone: "+52 246 000 0000",
  whatsapp: "+52 246 000 0000",
  email: "hola@touroperadoratlaxcala.mx",
  instagram: "@touroperadoratlaxcala",
  instagramUrl: "https://instagram.com/touroperadoratlaxcala",
  facebook: "Tour Operadora Tlaxcala",
  facebookUrl: "https://facebook.com/touroperadoratlaxcala",
};

export const contactoContent = {
  label: "Contáctanos",
  heading: "Planeemos tu aventura",
  sub: "Estamos listos para ayudarte a elegir el tour perfecto. Escríbenos por WhatsApp para una respuesta inmediata.",
  socialHeading: "Síguenos en redes",
  horariosHeading: "Horarios de atención",
  horarios: [
    { days: "Lunes – Viernes", hours: "8:00 am – 8:00 pm" },
    { days: "Sábado – Domingo", hours: "7:00 am – 9:00 pm" },
  ],
};

export type ContactMethod = {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: "whatsapp" | "phone" | "mail" | "instagram" | "facebook";
  iconBg: string;
  iconColor: string;
};

export const contactMethods: ContactMethod[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: `${contact.whatsapp} — Respuesta inmediata`,
    href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`,
    icon: "whatsapp",
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
  },
  {
    id: "telefono",
    label: "Teléfono",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
    icon: "phone",
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
  },
  {
    id: "correo",
    label: "Correo",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: "mail",
    iconBg: "#fee2e2",
    iconColor: "#dc2626",
  },
];

export const socialMethods: ContactMethod[] = [
  {
    id: "instagram",
    label: "Instagram",
    value: contact.instagram,
    href: contact.instagramUrl,
    icon: "instagram",
    iconBg: "#fce7f3",
    iconColor: "#db2777",
  },
  {
    id: "facebook",
    label: "Facebook",
    value: contact.facebook,
    href: contact.facebookUrl,
    icon: "facebook",
    iconBg: "#dbeafe",
    iconColor: "#2563eb",
  },
];
