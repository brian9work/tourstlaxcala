export interface Testimonial {
  id: string;
  photo: string;
  name: string;
  location: string;
  rating: number;
  es: { text: string };
  en: { text: string };
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    photo: "/images/testimonials/ana-garcia.jpg",
    name: "Ana García",
    location: "Ciudad de México",
    rating: 5,
    es: { text: "Una experiencia increíble. El guía conocía cada rincón de Tlaxcala y nos llevó a lugares que jamás hubiéramos encontrado solos. ¡Volvería mil veces!" },
    en: { text: "An incredible experience. The guide knew every corner of Tlaxcala and took us to places we never would have found on our own. I'd go back a thousand times!" },
  },
  {
    id: "t2",
    photo: "/images/testimonials/carlos-mendez.jpg",
    name: "Carlos Méndez",
    location: "Guadalajara",
    rating: 5,
    es: { text: "El tour gastronómico superó todas mis expectativas. La sopa tlaxcalteca y el pulque ancestral son sabores que no olvidaré jamás. Muy recomendado." },
    en: { text: "The gastronomy tour exceeded all my expectations. The tlaxcalteca soup and ancestral pulque are flavors I'll never forget. Highly recommended." },
  },
  {
    id: "t3",
    photo: "/images/testimonials/sofia-ramirez.jpg",
    name: "Sofía Ramírez",
    location: "Monterrey",
    rating: 5,
    es: { text: "Ver las luciérnagas en Nanacamilpa fue mágico. El grupo pequeño hizo todo más íntimo y especial. Gracias por una noche que jamás olvidaremos." },
    en: { text: "Watching the fireflies in Nanacamilpa was magical. The small group made everything more intimate and special. Thank you for a night we'll never forget." },
  },
  {
    id: "t4",
    photo: "/images/testimonials/james-wilson.jpg",
    name: "James Wilson",
    location: "New York, USA",
    rating: 5,
    es: { text: "Vine sin saber nada de Tlaxcala y me fui enamorado. Cacaxtla y la Basílica de Ocotlán son joyas que todo el mundo debería conocer." },
    en: { text: "I came knowing nothing about Tlaxcala and left completely in love with it. Cacaxtla and the Basílica of Ocotlán are gems that everyone should see." },
  },
  {
    id: "t5",
    photo: "/images/testimonials/maria-lopez.jpg",
    name: "María López",
    location: "Puebla",
    rating: 5,
    es: { text: "El Festival de Huamantla en vivo es algo que las fotos no pueden capturar. Gracias a Tours Tlaxcala vivimos La Noche que Nadie Duerme de forma única." },
    en: { text: "The Huamantla Festival live is something photos can't capture. Thanks to Tours Tlaxcala we experienced La Noche que Nadie Duerme in a truly unique way." },
  },
  {
    id: "t6",
    photo: "/images/testimonials/roberto-torres.jpg",
    name: "Roberto Torres",
    location: "Veracruz",
    rating: 5,
    es: { text: "Profesionalismo, calidez y pasión por Tlaxcala en cada momento. El paquete todo incluido valió cada peso. Sin duda el mejor tour que he tomado." },
    en: { text: "Professionalism, warmth, and passion for Tlaxcala at every moment. The all-inclusive package was worth every penny. Without a doubt the best tour I've taken." },
  },
];
