import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowLeft, CheckCircle, MapPin, Star, Phone, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Optimización de Google Business en Costa Rica | Murillo Co",
  description:
    "Aparecé primero cuando alguien busca tu negocio en Google Maps. Optimizamos tu perfil de Google Business para más llamadas y más clientes en Costa Rica.",
};

const includes = [
  "Configuración y verificación del perfil",
  "Optimización de categorías y descripción",
  "Carga y organización de fotos profesionales",
  "Gestión inicial de reseñas",
  "Horarios, servicios y atributos completos",
  "Reporte de visibilidad al finalizar",
];

const features = [
  {
    icon: MapPin,
    title: "Aparecé en Google Maps",
    body: "Cuando alguien busca un negocio como el tuyo cerca, tu perfil aparece en los primeros resultados del mapa.",
  },
  {
    icon: Star,
    title: "Reseñas que generan confianza",
    body: "Un perfil bien gestionado con reseñas positivas convierte búsquedas en llamadas. Te enseñamos cómo pedirlas.",
  },
  {
    icon: Phone,
    title: "Más llamadas directas",
    body: "Los clientes te llaman directo desde Google sin necesidad de visitar tu página. Así de simple.",
  },
  {
    icon: TrendingUp,
    title: "Más visibilidad local",
    body: "El perfil de Google Business es una de las herramientas más poderosas para negocios locales en Costa Rica.",
  },
];

export default function GoogleBusinessPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-background overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, oklch(0.75 0.01 254) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse 60% 80% at 100% 50%, black 0%, transparent 100%)",
            }}
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <Link
              href="/#servicios"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Volver a servicios
            </Link>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Servicio
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight text-foreground mb-6"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                Optimización de Google Business{" "}
                <span className="text-primary">para negocios en Costa Rica</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                Cuando alguien busca lo que vos ofrecés en Google, tu negocio
                tiene que aparecer primero. Optimizamos tu perfil para que eso
                pase.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl text-base hover:opacity-90 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200"
                >
                  Solicitar demo gratuita
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/#servicios"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border bg-white text-foreground font-semibold rounded-xl text-base hover:bg-muted hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Ver todos los servicios
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="py-24 md:py-32 bg-primary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-4">
                  ¿Qué incluye?
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight"
                  style={{ fontFamily: "var(--font-heading-var)" }}
                >
                  Tu perfil de Google Business optimizado de la A a la Z
                </h2>
                <ul className="space-y-4">
                  {includes.map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <div className="w-7 h-7 rounded-full bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white/85 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:pt-16">
                <div className="bg-white/10 border border-white/15 rounded-2xl p-8 backdrop-blur-sm">
                  <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-3">
                    ¿Cuánto cuesta?
                  </p>
                  <p className="text-white text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading-var)" }}>
                    Presupuesto personalizado
                  </p>
                  <p className="text-white/70 text-base leading-relaxed mb-8">
                    El precio depende del proyecto. Agendá una demo gratuita y te damos un presupuesto sin compromiso.
                  </p>
                  <a
                    href="/#contacto"
                    className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary font-semibold rounded-xl text-base hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    Solicitar demo gratuita
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Características */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Por qué importa
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-foreground leading-tight"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                Por qué importa Google Business
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-base" style={{ fontFamily: "var(--font-heading-var)" }}>
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle at 70% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-heading-var)" }}
            >
              ¿Querés aparecer primero en Google?
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Agendá una demo gratuita y te mostramos el potencial de tu perfil.
            </p>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl text-base hover:opacity-90 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              Solicitar demo gratuita
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
