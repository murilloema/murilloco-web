import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, MapPin, Star, Phone, TrendingUp } from "lucide-react";

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
        <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                Servicio
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight text-foreground mb-6"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                Optimización de Google Business{" "}
                <span className="text-primary">para negocios en Costa Rica</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Cuando alguien busca lo que vos ofrecés en Google, tu negocio
                tiene que aparecer primero. Optimizamos tu perfil para que eso
                pase.
              </p>
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg text-base hover:opacity-90 transition-all"
              >
                Solicitar demo gratuita
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="py-20 bg-primary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-3">
                  ¿Qué incluye?
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight"
                  style={{ fontFamily: "var(--font-heading-var)" }}
                >
                  Tu perfil de Google Business optimizado de la A a la Z
                </h2>
                <ul className="space-y-4">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-white/70 shrink-0 mt-0.5" />
                      <span className="text-white/80 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-2xl p-8">
                <p className="text-white/60 text-sm uppercase tracking-widest font-semibold mb-2">
                  Precio
                </p>
                <p className="text-white text-5xl font-extrabold mb-2" style={{ fontFamily: "var(--font-heading-var)" }}>
                  Desde $150
                </p>
                <p className="text-white/60 text-sm mb-6">Pago único · configuración completa</p>
                <a
                  href="/#contacto"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white text-primary font-semibold rounded-lg text-sm hover:opacity-90 transition-all"
                >
                  Solicitar demo gratuita
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Características */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <h2
                className="text-3xl sm:text-4xl font-bold text-foreground leading-tight"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                Por qué importa Google Business
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-heading-var)" }}>
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 bg-primary">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading-var)" }}
            >
              ¿Querés aparecer primero en Google?
            </h2>
            <p className="text-white/75 text-lg mb-8">
              Agendá una demo gratuita y te mostramos el potencial de tu perfil.
            </p>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-semibold rounded-lg text-base hover:opacity-90 transition-all"
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
