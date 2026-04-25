export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      attractions: "Atracciones",
      gastronomy: "Gastronomía",
      culture: "Cultura",
      about: "Nosotros",
      bookNow: "Reservar",
    },
    hero: {
      heading1: "Tlaxcala: El Corazón",
      heading2: "de",
      heading3: "México",
      heading4: "Te Espera",
      sub: "Descubre 2,000 años de historia, sabor y belleza a través de los ojos de quienes mejor la conocen.",
      cta: "Iniciar Viaje →",
    },
    capturing: {
      label: "Planea tu Escapada",
      title: "Capturando el Espíritu",
      bookNow: "Reservar",
    },
    destinations: {
      label: "Explora Nuestra Región",
      title: "Destinos Destacados",
      sub: "Experiencias únicas que muestran la arquitectura y belleza de nuestra región.",
      bookNow: "Reservar Ahora ✦",
    },
    culinary: {
      label: "Prueba Nuestra Herencia",
      title: "Un Legado Culinario",
      sub: "Platillos emblemáticos — la base del alma tlaxcalteca.",
      cta: "Reservar Tour Gastronómico →",
      items: [
        { name: "Sopa Tlaxcalteca", desc: "Rica sopa de tortilla con tiras de tortilla crujiente." },
        { name: "Pulque Ancestral", desc: '"Bebida de los Dioses", un elixir fermentado de agave.' },
      ],
    },
    crafts: {
      label: "Vive Nuestra Cultura",
      title: "Hecho a Mano por la Historia",
      sub: "Explora los vibrantes hilos de la identidad tlaxcalteca a través de sus textiles y festivales.",
      cta: "Reservar Experiencia Cultural ✦",
      items: [
        { title: "Tradiciones Textiles", desc: "El arte del sarape Saltillo y el bordado local." },
        { title: "Festival de Huamantla", desc: "Los famosos tapetes florales durante La Noche que Nadie Duerme." },
        { title: "Danza de los Huehues", desc: "Música y sátira en el Carnaval." },
        { title: "Arte Talavera", desc: "El ancestral arte de la Talavera." },
      ],
    },
    testimonials: {
      label: "Lo Que Dicen Nuestros Viajeros",
      title: "Experiencias Reales",
    },
    cta: {
      heading1: "Tu Viaje",
      heading2: "Comienza Hoy",
      sub: "Únete a nuestros guías expertos para una inmersión auténtica en los secretos de Tlaxcala. Vive el alma de México con quienes mejor la conocen.",
      button: "Reserva tu Aventura",
    },
    why: {
      label: "Vive la Mejor Experiencia",
      title: "¿Por Qué Viajar con Nosotros?",
      cta: "Reservar Mi Tour ✦",
      items: [
        { title: "Guías Locales Expertos", desc: "Nuestros guías son tlaxcaltecas nativos con profundo conocimiento de rincones auténticos." },
        { title: "Paquetes Todo Incluido", desc: "Vive Tlaxcala con hotel, comida local y cultura en un solo paquete." },
        { title: "Grupos Pequeños", desc: "Grupos reducidos para una experiencia más personal e inmersiva." },
      ],
    },
    footer: {
      rights: "© 2024 Tours Tlaxcala. Todos los derechos reservados.",
      privacy: "Privacidad",
      terms: "Términos",
      contact: "Contacto",
    },
  },

  en: {
    nav: {
      attractions: "Attractions",
      gastronomy: "Gastronomy",
      culture: "Culture",
      about: "About",
      bookNow: "Book Now",
    },
    hero: {
      heading1: "Tlaxcala: The Heart",
      heading2: "of",
      heading3: "Mexico",
      heading4: "Awaits You",
      sub: "Discover 2,000 years of history, flavor, and beauty through the eyes of those who know it best.",
      cta: "Start Journey →",
    },
    capturing: {
      label: "Planning a Getaway",
      title: "Capturing the Spirit",
      bookNow: "Book Now",
    },
    destinations: {
      label: "Explore Our Region",
      title: "Featured Destinations",
      sub: "Curated experiences that showcase the architecture and beauty of our region.",
      bookNow: "Book Now ✦",
    },
    culinary: {
      label: "Taste Our Heritage",
      title: "A Culinary Legacy",
      sub: "Landmark dishes — the foundation of our Tlaxcalan soul.",
      cta: "Book Gastronomy Tour →",
      items: [
        { name: "Sopa Tlaxcalteca", desc: "Rich tortilla soup with crispy tortilla strips." },
        { name: "Pulque Ancestral", desc: '"Drink of the Gods", a traditional fermented agave elixir.' },
      ],
    },
    crafts: {
      label: "Experience Our Culture",
      title: "Hands Crafted by History",
      sub: "Explore the vibrant threads of Tlaxcalan identity through our world-renowned textiles and festivals.",
      cta: "Book Cultural Experience ✦",
      items: [
        { title: "Textile Traditions", desc: "The intricate art of the Saltillo serape and local embroidery." },
        { title: "Huamantla Festival", desc: "World-famous floral carpets during La Noche que Nadie Duerme." },
        { title: "Huehues Dance", desc: "Music and satire in Carnival." },
        { title: "Talavera Art", desc: "The ancient art of Talavera." },
      ],
    },
    testimonials: {
      label: "What Our Travelers Say",
      title: "Real Experiences",
    },
    cta: {
      heading1: "Your Journey",
      heading2: "Begins Today",
      sub: "Join our expert guides for an authentic immersion into the secrets of Tlaxcala. Experience the soul of Mexico with those who know it best.",
      button: "Book Your Adventure",
    },
    why: {
      label: "Experience With the Best",
      title: "Why Tour with Us?",
      cta: "Reserve My Tour ✦",
      items: [
        { title: "Local Expert Guides", desc: "Our guides are native Tlaxcalans with deep knowledge of hidden gems and authentic culture." },
        { title: "All-Inclusive Packages", desc: "Experience Tlaxcala's hotels, local food, and culture in one seamless package." },
        { title: "Small Groups", desc: "Intimate group sizes allow for a more personal and immersive local experience." },
      ],
    },
    footer: {
      rights: "© 2024 Tours Tlaxcala. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
    },
  },
} as const;

export type Translations = typeof translations.es | typeof translations.en;
