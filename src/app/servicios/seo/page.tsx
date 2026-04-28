import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Search, BarChart2, Target, Clock } from "lucide-react";

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
                Posicionamiento en Google{" "}
                <span className="text-primary">para negocios en Costa Rica</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Aparecer en Google no es suerte — es estrategia. Te
                posicionamos para que los clientes de tu zona te encuentren
                antes que a la competencia.
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
                  SEO local enfocado en resultados reales
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
                <p className="text-white/60 text-sm uppercase tracking-widest font-semibold mb-4">
                  ¿Cuánto cuesta?
                </p>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  El precio depende del proyecto. Agendá una demo gratuita y te damos un presupuesto personalizado sin compromiso.
                </p>
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
                Por qué el SEO cambia el juego
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
              ¿Listo para salir primero en Google?
            </h2>
            <p className="text-white/75 text-lg mb-8">
              Agendá una demo gratuita y te mostramos dónde estás y a dónde podés llegar.
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
