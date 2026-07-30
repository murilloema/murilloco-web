import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  DM_Sans,
  Space_Grotesk,
  Newsreader,
} from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Serif editorial: solo para el párrafo del hero, como contrapeso al
// grotesque geométrico del titular.
const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://murilloco.cr"),
  title: "Agencia Web en Costa Rica | Murillo Co",
  description:
    "Agencia digital en Alajuela, Costa Rica. Creamos páginas web profesionales, optimizamos tu Google Business y posicionamos tu negocio en Google para que consigas más clientes.",
  openGraph: {
    title: "Agencia Web en Costa Rica | Murillo Co",
    description:
      "Consigue más llamadas, mensajes y clientes con una presencia digital profesional. Especialistas en negocios locales de Alajuela, Costa Rica.",
    url: "https://murilloco.cr/",
    type: "website",
    locale: "es_CR",
  },
  verification: {
    google: "Ln2_riabANdMIH4iPlcM17PLoIDddxqD6jjrkdFc0HI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Las variables van en <html>: globals.css aplica `font-sans` sobre html y
    // si las declara <body> la variable aún no existe y el navegador cae a Times.
    <html
      lang="es"
      className={`${jakartaSans.variable} ${dmSans.variable} ${spaceGrotesk.variable} ${newsreader.variable}`}
    >
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

