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
    photo: "https://scontent.fmex31-1.fna.fbcdn.net/v/t39.30808-6/630670989_2675154482885013_3997550118052028159_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=pH6fUYgxwvQQ7kNvwEltxij&_nc_oc=AdpzinK4i0s80fkZyv5WzwU5t3hk06jFM82M6hbKLphP1TpJPtGiuAwhRMuknBOaabw&_nc_zt=23&_nc_ht=scontent.fmex31-1.fna&_nc_gid=tyh1WmzoKsWWvEziI10Hog&_nc_ss=7b2a8&oh=00_Af3q23Umgl5cLVaJ-XkMG3rXRb9TMf1s6aEjamsAY9ovGg&oe=69F24D5A",
    name: "Itzel Lara",
    location: "Ciudad de México",
    rating: 5,
    es: { text: "Una experiencia increíble. El guía conocía cada rincón de Tlaxcala y nos llevó a lugares que jamás hubiéramos encontrado solos. ¡Volvería mil veces!" },
    en: { text: "An incredible experience. The guide knew every corner of Tlaxcala and took us to places we never would have found on our own. I'd go back a thousand times!" },
  },
  {
    id: "t2",
    photo: "https://scontent.fmex36-1.fna.fbcdn.net/v/t1.6435-9/35282545_149961419199705_4562036505723273216_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=53a332&_nc_ohc=uMO289sGeSkQ7kNvwF7TlnK&_nc_oc=AdqzssppcBnQW1dJwapNc3ls-gD7y4TZZITMUR1jWK8DymMVb5Fr0DoJ0CtIUq_P8-0&_nc_zt=23&_nc_ht=scontent.fmex36-1.fna&_nc_gid=um7EURw5NIvpqtTp5cDCFA&_nc_ss=7b2a8&oh=00_Af0svfqQg-U0xZeqdjjS0GAU2uVhP5FS23_CG-llpM9BJg&oe=6A13E608",
    name: "Arturo Hernandez",
    location: "Estado de mexico",
    rating: 5,
    es: { text: "El tour gastronómico superó todas mis expectativas. La sopa tlaxcalteca y el pulque ancestral son sabores que no olvidaré jamás. Muy recomendado." },
    en: { text: "The gastronomy tour exceeded all my expectations. The tlaxcalteca soup and ancestral pulque are flavors I'll never forget. Highly recommended." },
  },
  {
    id: "t3",
    photo: "https://scontent.fmex36-1.fna.fbcdn.net/v/t39.30808-6/579678180_10225017605425865_4655324980862805197_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=nObqPN1ssdcQ7kNvwHhewXt&_nc_oc=Adp9VWbe1p4wwAl5jOI4ENZSOFK7fRR4nwzCxdBLII2H0PVpQWjW0P5sfWqTMMW8LWw&_nc_zt=23&_nc_ht=scontent.fmex36-1.fna&_nc_gid=Ka-H0wtg4RcknWSszRcUVg&_nc_ss=7b2a8&oh=00_Af0hMAbZ7xJw3hAcZAZf2LBSThcJnV6Pfu_uCk3cNB9j2g&oe=69F22CD3",
    name: "Patricia Palma",
    location: "Puebla",
    rating: 5,
    es: { text: "Ver las luciérnagas en Nanacamilpa fue mágico. El grupo pequeño hizo todo más íntimo y especial. Gracias por una noche que jamás olvidaremos." },
    en: { text: "Watching the fireflies in Nanacamilpa was magical. The small group made everything more intimate and special. Thank you for a night we'll never forget." },
  },
  {
    id: "t4",
    photo: "https://scontent.fmex36-1.fna.fbcdn.net/v/t39.30808-6/460293942_3373193516171154_2143036391515301338_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=_Dx08f1cM9UQ7kNvwHDrxmI&_nc_oc=AdpbfkLAm6XhUZRKnJ4bdU8pwLEyxyVthNLsgLGi1ZwqgT0M9_ZytyM1G2onLXSmAU8&_nc_zt=23&_nc_ht=scontent.fmex36-1.fna&_nc_gid=lP8TssUKuTNrHSkwDCBdaQ&_nc_ss=7b2a8&oh=00_Af2qH0lApg8kvBuBJElmO6KCL-wjDFGlq8aTVJXAPBlcPw&oe=69F237A2",
    name: "Javier Hernandez",
    location: "Puebla",
    rating: 5,
    es: { text: "Vine sin saber nada de Tlaxcala y me fui enamorado. Cacaxtla y la Basílica de Ocotlán son joyas que todo el mundo debería conocer." },
    en: { text: "I came knowing nothing about Tlaxcala and left completely in love with it. Cacaxtla and the Basílica of Ocotlán are gems that everyone should see." },
  },
  {
    id: "t5",
    photo: "https://scontent.fmex22-1.fna.fbcdn.net/v/t39.30808-6/485807537_1323883018914138_2278647592073961434_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=ld4RhJoNFg8Q7kNvwFzdKmS&_nc_oc=AdqqppbkbzY-Eb3DFxjzuGbioOFLeDwqFqAhjM6B816tn2jD5ykvzyUXlzORGoF5mbo&_nc_zt=23&_nc_ht=scontent.fmex22-1.fna&_nc_gid=tJ3FAbMS5UKZxOy4uAYdbQ&_nc_ss=7b2a8&oh=00_Af34qthQ_P1EO05FR_4ff5e-OOrtRyuElDvZjcqngP90KA&oe=69F250D6",
    name: "Maríana Carmona",
    location: "Puebla",
    rating: 5,
    es: { text: "El Festival de Huamantla en vivo es algo que las fotos no pueden capturar. Gracias a Tours Tlaxcala vivimos La Noche que Nadie Duerme de forma única." },
    en: { text: "The Huamantla Festival live is something photos can't capture. Thanks to Tours Tlaxcala we experienced La Noche que Nadie Duerme in a truly unique way." },
  }
];
