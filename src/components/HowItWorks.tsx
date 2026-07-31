import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Solicitás tu demo gratuita",
    description: "Llenás el formulario y agendamos una reunión sin compromiso. Queremos entender tu negocio, no venderte algo que no necesitás.",
  },
  {
    number: "02",
    title: "Analizamos tu presencia digital",
    description: "Revisamos qué tan visible estás en Google hoy y qué oportunidades concretas tiene tu negocio para conseguir más clientes en tu zona.",
  },
  {
    number: "03",
    title: "Construimos y entregamos",
    description: "Creamos tu página web y tu estrategia digital. Vos te concentrás en tu negocio. Nosotros en que los clientes te encuentren.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Proceso</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6 leading-[1.1]" style={{ fontFamily: "var(--font-heading-var)" }}>
              Así funciona
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Tres pasos claros. Sin tecnicismos, sin sorpresas. De la primera reunión a tu página activa en internet.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl text-base hover:opacity-90 hover:scale-[1.02] hover:shadow-lg active:scale-95 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-200"
            >
              Empezar ahora
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-14 h-14 rounded-2xl border-2 border-primary/20 bg-primary/5 group-hover:bg-primary group-hover:border-primary flex items-center justify-center shrink-0 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-300">
                    <span className="text-sm font-bold text-primary group-hover:text-white transition-colors duration-300" style={{ fontFamily: "var(--font-heading-var)" }}>
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && <div className="w-px flex-1 bg-border my-3" />}
                </div>
                <div className={`${index === steps.length - 1 ? "pb-0" : "pb-10"}`}>
                  <h3 className="text-lg font-bold text-foreground mb-2 mt-3.5" style={{ fontFamily: "var(--font-heading-var)" }}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
