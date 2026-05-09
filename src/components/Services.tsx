"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    image: "/images/service-web.jpg",
    imageAlt: "Diseño de página web profesional en laptop",
    title: "Páginas Web Profesionales",
    description:
      "Tu página trabaja por ti las 24 horas. Viene equipada con todo lo que importa para conseguir más clientes — diseño profesional, rápida y lista desde el primer día.",
    detail: "Incluye diseño, desarrollo y puesta en marcha completa.",
    href: "/servicios/paginas-web",
  },
  {
    image: "/images/service-google.jpg",
    imageAlt: "Perfil de Google Business en teléfono móvil",
    title: "Optimización de Google Business",
    description:
      "Cuando alguien busca un negocio como el tuyo en Google, tu perfil aparece primero. Más visibilidad, más llamadas directas.",
    detail: "Fotos, reseñas, horarios y categorías optimizadas.",
    href: "/servicios/google-business",
  },
  {
    image: "/images/service-seo.jpg",
    imageAlt: "Dashboard de analíticas y posicionamiento SEO",
    title: "Posicionamiento en Google",
    description:
      "Aparecer en Google no es suerte. Te posicionamos para que los clientes de tu zona te encuentren antes que a la competencia.",
    detail: "SEO local enfocado en Costa Rica.",
    href: "/servicios/seo",
  },
  {
    image: "/images/service-fidelizacion.png",
    imageAlt: "Tarjeta de fidelización digital con sellos acumulados",
    title: "Fidelización Digital",
    description:
      "Tus clientes acumulan sellos con cada visita y reciben su recompensa automáticamente — directo en su iPhone o Android, sin apps ni tarjetas de papel.",
    detail: "Compatible con Apple Wallet y Google Wallet.",
    href: "/servicios/fidelizacion",
  },
];


export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-[#080D1A] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-800/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">Servicios</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-[1.1]" style={{ fontFamily: "var(--font-heading-var)" }}>
            Cuatro servicios.{" "}
            <span className="text-white/45">Un objetivo: más clientes.</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Todo lo que tu negocio necesita para aparecer, destacar y vender en internet.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="h-full block group">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <div className="h-full bg-white/5 border border-white/10 group-hover:border-blue-500/40 group-hover:bg-white/8 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col">
                  <div className="relative w-full h-48 overflow-hidden shrink-0">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A]/60 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading-var)" }}>
                      {service.title}
                    </h3>
                    <p className="text-white/55 leading-relaxed text-sm mb-5 flex-1">{service.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <p className="text-xs text-white/35 font-medium">{service.detail}</p>
                      <ArrowRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
