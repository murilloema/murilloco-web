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
      <main className="bg-[#080D1A]">
        {/* Hero */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-[100px]" />
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <Link
              href="/#servicios"
              className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors mb-8"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Volver a servicios
            </Link>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">Servicio</p>
              <h1
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.05] tracking-tight text-white mb-6"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                Optimización de Google Business{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  para negocios en Costa Rica
                </span>
              </h1>
              <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-2xl">
                Cuando alguien busca lo que vos ofrecés en Google, tu negocio
                tiene que aparecer primero. Optimizamos tu perfil para que eso pase.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-base shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Solicitar demo gratuita
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/#servicios"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-base hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Ver todos los servicios
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="py-24 md:py-28 border-t border-white/8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">¿Qué incluye?</p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight"
                  style={{ fontFamily: "var(--font-heading-var)" }}
                >
                  Tu perfil de Google Business optimizado de la A a la Z
                </h2>
                <ul className="space-y-4">
                  {includes.map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <CheckCircle className="h-3.5 w-3.5 text-blue-400" />
                      </div>
                      <span className="text-white/75 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:pt-14">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3">¿Cuánto cuesta?</p>
                  <p className="text-white text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading-var)" }}>
                    Presupuesto personalizado
                  </p>
                  <p className="text-white/55 text-base leading-relaxed mb-8">
                    El precio depende del proyecto. Agendá una demo gratuita y te damos un presupuesto sin compromiso.
                  </p>
                  <a
                    href="/#contacto"
                    className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-base hover:scale-105 active:scale-95 transition-all duration-200"
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
        <section className="py-24 md:py-28 border-t border-white/8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">Por qué importa</p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                Por qué importa Google Business
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white/5 border border-white/10 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/15 flex items-center justify-center mb-5">
                    <f.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-base" style={{ fontFamily: "var(--font-heading-var)" }}>
                    {f.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-24 border-t border-white/8 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-800/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-heading-var)" }}
            >
              ¿Querés aparecer primero en Google?
            </h2>
            <p className="text-white/50 text-lg mb-10">
              Agendá una demo gratuita y te mostramos el potencial de tu perfil.
            </p>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-base shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all duration-200"
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
