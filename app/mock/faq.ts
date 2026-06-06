export const faqContent = {
  label: "Preguntas Frecuentes",
  heading: "Antes de tu viaje",
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "transporte",
    question: "¿Los tours incluyen transporte desde Tlaxcala capital?",
    answer:
      "Sí, todos nuestros tours incluyen transporte de ida y vuelta desde el centro de Tlaxcala capital. El punto de encuentro se confirma al momento de la reserva.",
  },
  {
    id: "horarios",
    question: "¿Cuáles son los horarios de los recorridos?",
    answer:
      "Los horarios varían según el tour. Los recorridos diurnos salen entre 8:00 y 9:00 am. El recorrido de luciérnagas inicia al anochecer, entre 7:00 y 8:00 pm, dependiendo de la temporada.",
  },
  {
    id: "que-llevar",
    question: "¿Qué debo llevar para los tours?",
    answer:
      "Recomendamos ropa cómoda y calzado cerrado, agua, bloqueador solar y una chamarra ligera. Para los tours nocturnos o de montaña, se indica equipo específico al confirmar la reserva.",
  },
  {
    id: "ninos-mayores",
    question: "¿Los tours son aptos para niños y adultos mayores?",
    answer:
      "La mayoría de nuestros tours son aptos para todas las edades. El tour de montaña requiere condición física moderada y es exclusivo para mayores de 18 años. El Santuario de los Burros es ideal para familias con niños.",
  },
  {
    id: "anticipacion",
    question: "¿Con cuánta anticipación debo reservar?",
    answer:
      "Recomendamos reservar con al menos 48 horas de anticipación. Para temporada alta (mayo–agosto) y el tour de luciérnagas, sugerimos reservar con una semana o más de anticipación.",
  },
];
