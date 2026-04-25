import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tours Tlaxcala — El Corazón de México Te Espera",
  description: "Descubre Tlaxcala con guías locales expertos. Atracciones, gastronomía, cultura y festividades únicas. Reserva tu tour ahora.",
  keywords: ["tours tlaxcala", "turismo tlaxcala", "luciérnagas nanacamilpa", "cacaxtla", "huamantla", "valquirico", "viajes mexico"],
  authors: [{ name: "Tours Tlaxcala" }],
  openGraph: {
    title: "Tours Tlaxcala — El Corazón de México Te Espera",
    description: "Experiencias auténticas en Tlaxcala con guías nativos. Basílica de Ocotlán, Feria de Huamantla, Santuario de Luciérnagas y más.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
