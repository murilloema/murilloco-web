import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight, ArrowLeft, Play, CheckCircle,
  Search, Target, BarChart2, Clock, FileText, TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Posicionamiento SEO en Google Costa Rica | Murillo Co",
  description:
    "Te posicionamos en Google para que clientes en Costa Rica te encuentren antes que a la competencia. SEO local para negocios. Solicita tu demo gratuita.",
};

const features = [
  {
    icon: Search,
    title: "Aparecer cuando te buscan",
    body: "Tus clientes ya están buscando lo que vos ofrecés. SEO es asegurarte de que te encuentren a vos, no a la competencia.",
  },
  {
    icon: Target,
    title: "Enfocado en Costa Rica",
    body: "No nos importa rankear en todo el mundo — nos importa que aparezcás en Alajuela, San José, Heredia o donde esté tu cliente ideal.",
  },
  {
    icon: BarChart2,
    title: "Resultados medibles",
    body: "Cada mes te mostramos cómo está evolucionando tu posición en Google con datos reales y transparentes.",
  },
  {
    icon: Clock,
    title: "Tráfico que no se apaga",
    body: "A diferencia de la pauta pagada, el SEO sigue trabajando por vos todos los días sin pagar por cada clic.",
  },
  {
    icon: FileText,
    title: "Contenido optimizado",
    body: "Textos, títulos y metadatos escritos para que Google entienda de qué trata tu negocio y a quién servís.",
  },
  {
    icon: TrendingUp,
    title: "SEO técnico incluido",
    body: "Velocidad, estructura, indexación — todo lo técnico resuelto para que Google pueda rastrearte sin problemas.",
  },
];

const includes = [
  "Auditoría de posicionamiento actual",
  "Investigación de palabras clave locales",
  "Optimización de contenido y metadatos",
  "SEO técnico del sitio web",
  "Optimización para búsquedas locales en Costa Rica",
  "Reporte mensual de posicionamiento",
];

export default function SeoPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#080D1A]">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-600/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-900/10 rounded-full blur-[100px]" />
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(245,158,11,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.05) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <Link href="/#servicios" className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors mb-10">
              <ArrowLeft className="h-3.5 w-3.5" />
              Volver a servicios
            </Link>

            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-8">
              <span className="text-base">🔍</span>
              <span className="text-sm font-semibold text-amber-400">SEO local para negocios en Costa Rica</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.0] tracking-tight text-white mb-6"
              style={{ fontFamily: "var(--font-heading-var)" }}
            >
              Salir primero en Google{" "}
              <span className="italic bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                no es suerte
              </span>
            </h1>

            <p className="text-xl text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto">
              Es estrategia. Te posicionamos para que los clientes de tu zona
              te encuentren a vos — antes que a cualquier competidor.
            </p>

            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold rounded-2xl text-lg shadow-xl shadow-amber-500/25 hover:scale-[1.02] active:scale-95 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-200"
            >
              Solicitar demo gratuita
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* ── VIDEO PLACEHOLDER ── */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full aspect-video bg-gray-900 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl shadow-amber-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/50 to-gray-900" />
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
              <p className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-4">La realidad</p>
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-8"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                El{" "}
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                  31% de los clics
                </span>{" "}
                van al primer resultado de Google. El resto se reparte entre todos los demás.
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                Mientras vos no aparezcás en la primera página, tu competencia está{" "}
                <strong className="text-white/80">robándote clientes todos los días.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { number: "31%", label: "de los clics van al primer resultado de Google — y cae drásticamente después" },
                { number: "78%", label: "de las búsquedas locales resultan en una visita o contacto al negocio" },
                { number: "0%", label: "costo por clic cuando lográs posicionarte orgánicamente en Google" },
              ].map((stat) => (
                <div key={stat.number} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                  <p className="text-5xl font-extrabold text-amber-400 mb-3" style={{ fontFamily: "var(--font-heading-var)" }}>
                    {stat.number}
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14">
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-4">Lo que hacemos</p>
                <h3
                  className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-heading-var)" }}
                >
                  Posicionamiento SEO Local con Murillo Co
                </h3>
                <p className="text-white/50 text-lg leading-relaxed mb-4">
                  Analizamos en qué posición estás hoy, qué palabras usan tus clientes para buscarte
                  y construimos una estrategia real para subir posiciones en Google.
                </p>
                <p className="text-white/50 text-lg leading-relaxed">
                  Sin promesas vacías.{" "}
                  <strong className="text-white/80">Con resultados medibles cada mes.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-24 md:py-32 border-t border-white/8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-block bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-sm font-semibold text-amber-400">Estrategia completa de posicionamiento</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                SEO que cambia el juego
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white/5 border border-white/10 hover:border-amber-500/30 rounded-2xl p-7 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-300 hover:bg-white/8"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center mb-5">
                    <f.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-base" style={{ fontFamily: "var(--font-heading-var)" }}>
                    {f.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <p className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-4">¿Qué incluye?</p>
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-heading-var)" }}>
                    SEO local enfocado en resultados
                  </h3>
                  <ul className="space-y-3">
                    {includes.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                          <CheckCircle className="h-3 w-3 text-amber-400" />
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
                    Depende del estado actual de tu sitio y la competencia de tu industria. Te decimos exactamente qué necesitás.
                  </p>
                  <a
                    href="/#contacto"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-gray-900 font-semibold rounded-xl text-base hover:scale-[1.02] active:scale-95 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-200"
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
            <div className="relative bg-amber-500 rounded-3xl px-8 py-16 md:py-20 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-300/40 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative">
                <h2
                  className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 leading-tight"
                  style={{ fontFamily: "var(--font-heading-var)" }}
                >
                  ¿Listo para salir primero en Google?
                </h2>
                <p className="text-gray-800/70 text-lg mb-10 max-w-xl mx-auto">
                  Agendá una demo gratuita y te mostramos dónde estás hoy y a dónde podés llegar.
                </p>
                <a
                  href="/#contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-2xl text-lg hover:scale-[1.02] active:scale-95 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-200 shadow-xl"
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
