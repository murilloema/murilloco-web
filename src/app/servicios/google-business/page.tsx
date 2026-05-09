import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight, ArrowLeft, Play, CheckCircle,
  MapPin, Star, Phone, TrendingUp, Camera, MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Optimización de Google Business en Costa Rica | Murillo Co",
  description:
    "Aparecé primero cuando alguien busca tu negocio en Google Maps. Optimizamos tu perfil de Google Business para más llamadas y más clientes en Costa Rica.",
};

const features = [
  {
    icon: MapPin,
    title: "Primero en Google Maps",
    body: "Cuando alguien busca un negocio como el tuyo cerca, tu perfil aparece en los primeros resultados — no en la página 2.",
  },
  {
    icon: Star,
    title: "Reseñas que convierten",
    body: "Un perfil con buenas reseñas convierte búsquedas en llamadas. Te enseñamos cómo pedirlas de forma natural.",
  },
  {
    icon: Phone,
    title: "Llamadas directas desde Google",
    body: "Los clientes te llaman con un toque, sin necesidad de visitar tu página ni buscar tu número.",
  },
  {
    icon: Camera,
    title: "Fotos que destacan",
    body: "Los perfiles con fotos de calidad reciben 42% más solicitudes de indicaciones. Las organizamos por vos.",
  },
  {
    icon: TrendingUp,
    title: "Más visibilidad local",
    body: "Google Business es la herramienta más poderosa para negocios locales en Costa Rica. Y la mayoría la tiene mal configurada.",
  },
  {
    icon: MessageSquare,
    title: "Perfil completo y activo",
    body: "Horarios, servicios, atributos, preguntas frecuentes — todo configurado para que Google te muestre más.",
  },
];

const includes = [
  "Configuración y verificación del perfil",
  "Optimización de categorías y descripción",
  "Carga y organización de fotos profesionales",
  "Gestión inicial de reseñas",
  "Horarios, servicios y atributos completos",
  "Reporte de visibilidad al finalizar",
];

export default function GoogleBusinessPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F0FDF4]">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-200/50 rounded-full blur-[120px]" />
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(34,197,94,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.06) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <Link href="/#servicios" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-10">
              <ArrowLeft className="h-3.5 w-3.5" />
              Volver a servicios
            </Link>

            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-1.5 mb-8">
              <span className="text-base">📍</span>
              <span className="text-sm font-semibold text-green-700">Visibilidad local en Google Maps</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.0] tracking-tight text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-heading-var)" }}
            >
              Que te encuentren{" "}
              <span className="italic bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                antes que a la competencia
              </span>
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              Cuando alguien busca tu tipo de negocio en Google Maps,
              tu perfil tiene que aparecer primero. Nosotros nos encargamos de que eso pase.
            </p>

            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-2xl text-lg shadow-xl shadow-green-600/25 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Solicitar demo gratuita
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* ── VIDEO PLACEHOLDER ── */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full aspect-video bg-gray-900 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl shadow-green-900/15">
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 to-gray-900" />
              <div className="relative flex flex-col items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
                <p className="text-white/50 text-sm font-medium">Video próximamente</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── EL PROBLEMA ── */}
        <section className="py-24 md:py-32 border-t border-green-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-4">La realidad</p>
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-8"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                El{" "}
                <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                  87% de las personas
                </span>{" "}
                usa Google Maps para encontrar negocios locales
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Y si tu perfil no está bien configurado, Google te muestra{" "}
                <strong className="text-gray-700">después de tu competencia.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { number: "87%", label: "de las personas usa Google Maps para buscar negocios locales" },
                { number: "75%", label: "de los clics van a los 3 primeros resultados del mapa" },
                { number: "42%", label: "más de solicitudes de indicaciones reciben perfiles con fotos de calidad" },
              ].map((stat) => (
                <div key={stat.number} className="bg-white border border-green-100 rounded-2xl p-8 text-center shadow-sm">
                  <p className="text-5xl font-extrabold text-green-600 mb-3" style={{ fontFamily: "var(--font-heading-var)" }}>
                    {stat.number}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white border border-green-100 rounded-3xl p-10 md:p-14 shadow-sm">
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-4">Lo que hacemos</p>
                <h3
                  className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-heading-var)" }}
                >
                  Optimización de Google Business con Murillo Co
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-4">
                  Configuramos y optimizamos tu perfil de Google Business de la A a la Z —
                  fotos, categorías, descripción, reseñas y todo lo que Google necesita para mostrarte primero.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Vos seguís atendiendo a tus clientes.{" "}
                  <strong className="text-gray-800">Nosotros hacemos que más clientes te encuentren.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-24 md:py-32 border-t border-green-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-block bg-green-100 border border-green-200 rounded-full px-4 py-1.5 mb-6">
                <span className="text-sm font-semibold text-green-700">Todo optimizado desde el primer día</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                Un perfil que trabaja por vos
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white border border-green-100 hover:border-green-300 rounded-2xl p-7 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-5">
                    <f.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base" style={{ fontFamily: "var(--font-heading-var)" }}>
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>

            <div className="bg-white border border-green-100 rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-4">¿Qué incluye?</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight" style={{ fontFamily: "var(--font-heading-var)" }}>
                    Tu perfil completo y optimizado
                  </h3>
                  <ul className="space-y-3">
                    {includes.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 border border-green-200 flex items-center justify-center shrink-0">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:border-l md:border-gray-100 md:pl-10">
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-3">¿Cuánto cuesta?</p>
                  <p className="text-gray-900 text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading-var)" }}>
                    Presupuesto personalizado
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Agendá una demo gratuita y te contamos exactamente qué necesita tu perfil y cuánto cuesta.
                  </p>
                  <a
                    href="/#contacto"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl text-base hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    Solicitar demo gratuita
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-green-700 rounded-3xl px-8 py-16 md:py-20 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/30 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative">
                <h2
                  className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight"
                  style={{ fontFamily: "var(--font-heading-var)" }}
                >
                  ¿Querés aparecer primero en Google Maps?
                </h2>
                <p className="text-green-200 text-lg mb-10 max-w-xl mx-auto">
                  Agendá una demo gratuita y te mostramos el potencial de tu perfil en vivo.
                </p>
                <a
                  href="/#contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-green-50 text-green-700 font-bold rounded-2xl text-lg hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl"
                >
                  Solicitar demo gratuita
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
