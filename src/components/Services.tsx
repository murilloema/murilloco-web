"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-3">
            Servicios
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-heading-var)" }}
          >
            Tres servicios. Un objetivo:{" "}
            <span className="text-white/70">más clientes.</span>
          </h2>
          <p className="text-white/65 text-lg leading-relaxed">
            Todo lo que tu negocio necesita para aparecer, destacar y vender en
            internet.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="h-full block">
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="h-full"
            >
              <Card className="border border-white/15 bg-white/10 backdrop-blur-sm h-full hover:bg-white/15 transition-colors duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Overlay for readability */}
                  <div className="absolute inset-0 bg-primary/20" />
                </div>

                {/* Text */}
                <CardContent className="p-6 flex flex-col">
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-heading-var)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed text-sm mb-4 flex-1">
                    {service.description}
                  </p>
                  <p className="text-xs text-white/40 font-medium border-t border-white/10 pt-4">
                    {service.detail}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

