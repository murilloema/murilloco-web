"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Desde que Murillo Co armó mi página, recibo entre 8 y 12 consultas por semana. Antes no llegaba nadie por internet.",
    name: "Carlos Mora",
    role: "Ferretería Mora",
    location: "Alajuela Centro",
  },
  {
    quote: "Aparezco primero en Google cuando alguien busca electricista en Alajuela. Mis llamadas se duplicaron en dos meses.",
    name: "Andrés Vargas",
    role: "Servicios Eléctricos Vargas",
    location: "San José, Alajuela",
  },
  {
    quote: "Pensé que tener una página era complicado y caro. Con ellos fue lo contrario: rápido, claro y con resultados reales.",
    name: "Mariela Quesada",
    role: "Salón de Belleza Mariela Q.",
    location: "La Guácima, Alajuela",
  },
];

export default function Testimonials() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  const t = testimonials[index];

  return (
    <section id="testimonios" className="py-24 md:py-32 bg-[#080D1A] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Testimonios</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-heading-var)" }}>
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <p className="text-white/40 text-sm">5.0 promedio en reseñas de Google</p>
        </div>

        <div className="relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <span className="block text-blue-500/25 text-7xl sm:text-8xl font-serif leading-none select-none mb-2" aria-hidden>&ldquo;</span>

          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={index}
              custom={direction}
              initial={reduced ? {} : { opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? {} : { opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
            >
              <blockquote
                className="text-xl sm:text-2xl lg:text-[1.75rem] text-white/90 leading-snug font-medium max-w-2xl"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                {t.quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <span className="w-8 h-px bg-blue-500 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role} · {t.location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-6 mt-14">
          <button
            onClick={() => go(-1)}
            aria-label="Testimonio anterior"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-blue-500/50 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2" role="tablist" aria-label="Seleccionar testimonio">
            {testimonials.map((testimonial, i) => (
              <button
                key={testimonial.name}
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonio de ${testimonial.name}`}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                className={`h-1.5 rounded-full transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-300 ${i === index ? "w-6 bg-blue-500" : "w-1.5 bg-white/20"}`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Siguiente testimonio"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:border-blue-500/50 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
