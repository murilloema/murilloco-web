"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Desde que Murillo Co armó mi página, recibo entre 8 y 12 consultas por semana. Antes no llegaba nadie por internet.",
    name: "Carlos Mora",
    role: "Ferretería Mora",
    location: "Alajuela Centro",
    initials: "CM",
  },
  {
    quote:
      "Aparezco primero en Google cuando alguien busca electricista en Alajuela. Mis llamadas se duplicaron en dos meses.",
    name: "Andrés Vargas",
    role: "Servicios Eléctricos Vargas",
    location: "San José, Alajuela",
    initials: "AV",
  },
  {
    quote:
      "Pensé que tener una página era complicado y caro. Con ellos fue lo contrario: rápido, claro y con resultados reales.",
    name: "Mariela Quesada",
    role: "Salón de Belleza Mariela Q.",
    location: "La Guácima, Alajuela",
    initials: "MQ",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Testimonios
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "var(--font-heading-var)" }}
          >
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground text-lg">
            Negocios locales como el tuyo, que hoy consiguen más clientes en
            línea.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Card className="border border-border bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <Stars />
                  <blockquote className="text-foreground/80 leading-relaxed flex-1 mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-6 border-t border-border">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-white text-sm font-semibold">
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                      <p className="text-xs text-muted-foreground/70">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          * Testimonios de ejemplo. Reemplaza con los de tus clientes reales.
        </p>
      </div>
    </section>
  );
}

