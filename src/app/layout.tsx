import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Murillo Co | Páginas web que generan clientes",
  description:
    "Agencia digital en Alajuela, Costa Rica. Creamos páginas web profesionales, optimizamos tu Google Business y posicionamos tu negocio en Google para que consigas más clientes.",
  openGraph: {
    title: "Murillo Co | Páginas web que generan clientes",
    description:
      "Consigue más llamadas, mensajes y clientes con una presencia digital profesional. Especialistas en negocios locales de Alajuela, Costa Rica.",
    type: "website",
    locale: "es_CR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${jakartaSans.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

