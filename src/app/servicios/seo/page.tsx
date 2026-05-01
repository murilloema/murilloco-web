import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowLeft, CheckCircle, Search, BarChart2, Target, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Posicionamiento SEO en Google Costa Rica | Murillo Co",
  description:
    "Te posicionamos en Google para que clientes en Costa Rica te encuentren antes que a la competencia. SEO local para negocios. Solicita tu demo gratuita.",
};

const includes = [
  "Auditoría de posicionamiento actual",
  "Investigación de palabras clave locales",
  "Optimización de contenido y metadatos",
  "SEO técnico del sitio web",
  "Optimización para búsquedas locales en Costa Rica",
  "Reporte mensual de posicionamiento",
];

const features = [
  {
    icon: Search,
    title: "Aparecé cuando te buscan",
    body: "Tus clientes ya están buscando lo que vos ofrecés. SEO es asegurarte de que te encuentren a vos y no a la competencia.",
  },
  {
    icon: Target,
    title: "Enfocado en Costa Rica",
    body: "No nos importa rankear en todo el mundo — nos importa que aparezcás en Alajuela, San José, Heredia o donde esté tu cliente ideal.",
  },
  {
    icon: BarChart2,
    title: "Resultados medibles",
    body: "Cada mes te mostramos cómo está evolucionando tu posición en Google con datos reales.",
  },
  {
    icon: Clock,
    title: "Resultados a largo plazo",
    body: "A diferencia de la pauta pagada, el SEO sigue trabajando por vos sin pagar por cada clic.",
  },
];

export default function SeoPage() {
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
                Posicionamiento en Google{" "}
                <span className="text-primary">para negocios en Costa Rica</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                Aparecer en Google no es suerte — es estrategia. Te
                posicionamos para que los clientes de tu zona te encuentren
                antes que a la competencia.
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
                  SEO local enfocado en resultados reales
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
                Por qué el SEO cambia el juego
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
              ¿Listo para salir primero en Google?
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Agendá una demo gratuita y te mostramos dónde estás y a dónde podés llegar.
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
