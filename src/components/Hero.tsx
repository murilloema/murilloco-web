"use client";

import { motion, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight, Globe, Search, TrendingUp } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay,
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-background">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.75 0.01 254) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 80% 50%, black 0%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
            >
              <Badge
                variant="secondary"
                className="mb-6 gap-1.5 text-xs font-medium"
              >
                <MapPin className="h-3 w-3" />
                Agencia Digital · Costa Rica
              </Badge>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-foreground mb-6"
              style={{ fontFamily: "var(--font-heading-var)" }}
            >
              Páginas web que{" "}
              <span className="text-primary">generan clientes</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
            >
              Hacemos páginas web que venden, optimizamos tu Google Business y
              te ponemos donde tus clientes te están buscando. Trabajamos con
              negocios en todo Costa Rica.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg text-base hover:opacity-90 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200"
              >
                Solicitar demo gratuita
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-white text-foreground font-semibold rounded-lg text-base hover:bg-muted hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Ver servicios
              </a>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.4}
              variants={fadeUp}
              className="mt-12 flex gap-8"
            >
              {[
                { value: "3", label: "Servicios clave" },
                { value: "100%", label: "Enfocados en tu negocio" },
                { value: "24h", label: "Tiempo de respuesta" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold text-primary"
                    style={{ fontFamily: "var(--font-heading-var)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Website preview mockup */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Browser frame */}
            <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 ml-2 bg-white rounded-md px-3 py-1 text-xs text-muted-foreground border border-border">
                  tunegocio.com
                </div>
              </div>

              {/* Simulated website */}
              <div className="p-6 space-y-4 bg-background">
                {/* Hero bar */}
                <div className="bg-primary rounded-xl p-5">
                  <div className="h-3 w-3/4 bg-white/30 rounded mb-2" />
                  <div className="h-2 w-1/2 bg-white/20 rounded mb-4" />
                  <div className="h-8 w-28 bg-white rounded-lg" />
                </div>

                {/* Service cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[Globe, Search, TrendingUp].map((Icon, i) => (
                    <div
                      key={i}
                      className="bg-card border border-border rounded-lg p-3 flex flex-col items-center gap-2"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="h-2 w-full bg-muted rounded" />
                      <div className="h-2 w-2/3 bg-muted rounded" />
                    </div>
                  ))}
                </div>

                {/* Result stat */}
                <div className="bg-card border border-border rounded-lg p-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="h-2 w-24 bg-muted rounded" />
                    <div className="h-5 w-16 bg-foreground/10 rounded" />
                  </div>
                  <div className="text-primary font-bold text-xl">+340%</div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-6 bg-white rounded-xl shadow-lg border border-border px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <span className="text-green-600 text-sm font-bold">✓</span>
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">
                  Demo confirmada
                </div>
                <div className="text-xs text-muted-foreground">
                  Respuesta en menos de 24h
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

