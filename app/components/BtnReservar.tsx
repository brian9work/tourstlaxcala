import { contact } from "../mock/contact";

type Props = {
  tourName?: string;
  className?: string;
};

export default function BtnReservar({ tourName, className = "" }: Props) {
  const phone = contact.whatsapp.replace(/\D/g, "");
  const msg = tourName
    ? `Hola, me interesa reservar el tour: ${tourName}`
    : "Hola, me interesa reservar un tour";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-brand-orange hover:opacity-90 text-white font-semibold text-sm px-5 py-2 rounded-full transition-opacity cursor-pointer ${className}`}
    >
      Reservar
    </a>
  );
}
