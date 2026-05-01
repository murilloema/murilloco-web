"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Desde que Murillo Co armó mi página, recibo entre 8 y 12 consultas por semana. Antes no llegaba nadie por internet.",
    name: "Carlos Mora",
    role: "Ferretería Mora",
    location: "Alajuela Centro",
    initials: "CM",
  },
  {
    quote: "Aparezco primero en Google cuando alguien busca electricista en Alajuela. Mis llamadas se duplicaron en dos meses.",
    name: "Andrés Vargas",
    role: "Servicios Eléctricos Vargas",
    location: "San José, Alajuela",
    initials: "AV",
  },
  {
    quote: "Pensé que tener una página era complicado y caro. Con ellos fue lo contrario: rápido, claro y con resultados reales.",
    name: "Mariela Quesada",
    role: "Salón de Belleza Mariela Q.",
    location: "La Guácima, Alajuela",
    initials: "MQ",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 md:py-32 bg-[#080D1A] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-800/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Testimonios</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-heading-var)" }}>
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-white/50 text-lg">
            Negocios locales como el tuyo, que hoy consiguen más clientes en línea.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
            >
              <div className="h-full bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/8 rounded-2xl p-8 flex flex-col transition-all duration-300">
                <div className="text-blue-500/30 text-6xl font-serif leading-none mb-2 select-none">&ldquo;</div>
                <Stars />
                <blockquote className="text-white/70 leading-relaxed flex-1 mb-8 text-[0.95rem]">{t.quote}</blockquote>
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <span className="text-blue-300 text-sm font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/50">{t.role}</p>
                    <p className="text-xs text-white/30">{t.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
