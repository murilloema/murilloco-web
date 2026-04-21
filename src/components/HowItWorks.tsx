"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Solicitás tu demo gratuita",
    description:
      "Llenás el formulario y agendamos una reunión sin compromiso. Queremos entender tu negocio, no venderte algo que no necesitás.",
  },
  {
    number: "02",
    title: "Analizamos tu presencia digital",
    description:
      "Revisamos qué tan visible estás en Google hoy y qué oportunidades concretas tiene tu negocio para conseguir más clientes en tu zona.",
  },
  {
    number: "03",
    title: "Construimos y entregamos",
    description:
      "Creamos tu página web y tu estrategia digital. Vos te concentrás en tu negocio. Nosotros en que los clientes te encuentren.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — header + CTA */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Proceso
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading-var)" }}
            >
              Así funciona
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Tres pasos claros. Sin tecnicismos, sin sorpresas. De la primera
              reunión a tu página activa en internet.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg text-base hover:opacity-90 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              Empezar ahora
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right — steps */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.12, ease: "easeOut" }}
                className="flex gap-6 group"
              >
                {/* Number + line */}
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.15, backgroundColor: "var(--primary)" }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 rounded-full border-2 border-primary bg-white flex items-center justify-center shrink-0 cursor-default"
                  >
                    <span
                      className="text-sm font-bold text-primary group-hover:text-primary"
                      style={{ fontFamily: "var(--font-heading-var)" }}
                    >
                      {step.number}
                    </span>
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className="w-px flex-1 bg-border my-2" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-10 ${index === steps.length - 1 ? "pb-0" : ""}`}>
                  <h3
                    className="text-lg font-bold text-foreground mb-2 mt-3"
                    style={{ fontFamily: "var(--font-heading-var)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

