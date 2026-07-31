import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight, ArrowLeft, Play, CheckCircle,
  Globe, Zap, Smartphone, ShieldCheck, Search, BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Diseño de Páginas Web en Costa Rica | Murillo Co",
  description:
    "Creamos páginas web profesionales para negocios en Costa Rica. Diseño moderno, rápidas, en Google desde el primer día. Solicita tu demo gratuita.",
};

const features = [
  {
    icon: Globe,
    title: "Diseño a tu medida",
    body: "No usamos plantillas genéricas. Cada página que hacemos refleja la identidad real de tu negocio.",
  },
  {
    icon: Zap,
    title: "Carga ultra rápida",
    body: "Velocidad optimizada desde el primer día. Un segundo de diferencia puede costar un cliente.",
  },
  {
    icon: Smartphone,
    title: "Perfecta en cualquier pantalla",
    body: "Más del 70% de búsquedas en Costa Rica se hacen desde el celular. Tu página se ve bien en todos.",
  },
  {
    icon: Search,
    title: "Lista para Google",
    body: "La estructura correcta desde el inicio para que Google pueda encontrarte e indexarte sin problemas.",
  },
  {
    icon: ShieldCheck,
    title: "Segura y siempre activa",
    body: "HTTPS, dominio propio y hosting confiable. Tu presencia digital disponible las 24 horas.",
  },
  {
    icon: BarChart3,
    title: "Formulario y WhatsApp integrados",
    body: "Tus clientes te contactan directo desde la página — sin pasos extra, sin fricción.",
  },
];

const includes = [
  "Diseño personalizado para tu negocio",
  "Optimizada para aparecer en Google",
  "Adaptada a celular y computadora",
  "Formulario de contacto y WhatsApp integrados",
  "Carga rápida y certificado SSL",
  "Entrega en 1 a 7 días hábiles",
];

export default function PaginasWebPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#080D1A]">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-700/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <Link href="/#servicios" className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors mb-10">
              <ArrowLeft className="h-3.5 w-3.5" />
              Volver a servicios
            </Link>

            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="text-base">🌐</span>
              <span className="text-sm font-semibold text-blue-400">Tu negocio en internet, bien hecho</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.0] tracking-tight text-white mb-6"
              style={{ fontFamily: "var(--font-heading-var)" }}
            >
              Tu página web{" "}
              <span className="italic bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                trabaja por vos
              </span>{" "}
              las 24 horas
            </h1>

            <p className="text-xl text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto">
              Diseñamos páginas web que se ven profesionales, cargan rápido y convierten
              visitas en clientes reales — desde el primer día.
            </p>

            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl text-lg shadow-xl shadow-blue-600/25 hover:scale-[1.02] active:scale-95 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-200"
            >
              Solicitar demo gratuita
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* ── VIDEO PLACEHOLDER ── */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full aspect-video bg-gray-900 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl shadow-blue-900/30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-gray-900" />
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
        <section className="py-24 md:py-32 border-t border-white/8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">La realidad</p>
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-8"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                El{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  75% de las personas
                </span>{" "}
                juzga la credibilidad de un negocio por su página web
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                Si no tenés página — o tenés una que se ve mal — estás perdiendo clientes{" "}
                <strong className="text-white/80">antes de que te den una oportunidad.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { number: "75%", label: "de los consumidores juzga la credibilidad de una empresa por su sitio web" },
                { number: "3 seg", label: "es el tiempo promedio antes de que alguien abandone una página lenta" },
                { number: "70%", label: "de las personas busca en internet antes de visitar o contactar un negocio" },
              ].map((stat) => (
                <div key={stat.number} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                  <p className="text-5xl font-extrabold text-blue-400 mb-3" style={{ fontFamily: "var(--font-heading-var)" }}>
                    {stat.number}
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14">
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">Lo que hacemos</p>
                <h3
                  className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-heading-var)" }}
                >
                  Páginas Web Profesionales de Murillo Co
                </h3>
                <p className="text-white/50 text-lg leading-relaxed mb-4">
                  No hacemos páginas bonitas por hacerlas. Diseñamos con un objetivo claro:
                  que cada visitante se convierta en un cliente potencial.
                </p>
                <p className="text-white/50 text-lg leading-relaxed">
                  Vos te enfocás en tu negocio.{" "}
                  <strong className="text-white/80">Nosotros nos encargamos de que internet trabaje para vos.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-24 md:py-32 border-t border-white/8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-sm font-semibold text-blue-400">Todo incluido desde el primer día</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                Una página que trabaja por vos
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white/5 border border-white/10 hover:border-blue-500/30 rounded-2xl p-7 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-300 hover:bg-white/8"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center mb-5">
                    <f.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-base" style={{ fontFamily: "var(--font-heading-var)" }}>
                    {f.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>

            {/* Qué incluye */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">¿Qué incluye?</p>
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-heading-var)" }}>
                    Todo lo que necesitás para empezar
                  </h3>
                  <ul className="space-y-3">
                    {includes.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                          <CheckCircle className="h-3 w-3 text-blue-400" />
                        </div>
                        <span className="text-white/65 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:border-l md:border-white/10 md:pl-10">
                  <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3">¿Cuánto cuesta?</p>
                  <p className="text-white text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading-var)" }}>
                    Presupuesto personalizado
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed mb-6">
                    Cada proyecto es diferente. Agendá una demo gratuita y te damos un presupuesto claro, sin rodeos.
                  </p>
                  <a
                    href="/#contacto"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-base hover:scale-[1.02] active:scale-95 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-200"
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
            <div className="relative bg-blue-700 rounded-3xl px-8 py-16 md:py-20 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/30 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative">
                <h2
                  className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight"
                  style={{ fontFamily: "var(--font-heading-var)" }}
                >
                  ¿Listo para tener una página que vende?
                </h2>
                <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
                  Agendá una demo gratuita y te mostramos cómo quedaría tu sitio antes de empezar.
                </p>
                <a
                  href="/#contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-blue-50 text-blue-700 font-bold rounded-2xl text-lg hover:scale-[1.02] active:scale-95 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-200 shadow-xl"
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
