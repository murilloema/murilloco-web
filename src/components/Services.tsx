import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Service = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  detail: string;
  href: string;
  imagePosition?: string;
};

const services: Service[] = [
  {
    image: "/images/service-web-forge-v2.jpg",
    imageAlt: "Página web de restaurante diseñada por Murillo Co",
    title: "Páginas Web Profesionales",
    description:
      "Tu página trabaja por ti las 24 horas. Viene equipada con todo lo que importa para conseguir más clientes — diseño profesional, rápida y lista desde el primer día.",
    detail: "Incluye diseño, desarrollo y puesta en marcha completa.",
    href: "/servicios/paginas-web",
  },
  {
    image: "/images/service-google-business.jpg",
    imageAlt: "Perfil de Google Business optimizado con reseñas y visibilidad",
    title: "Optimización de Google Business",
    description:
      "Cuando alguien busca un negocio como el tuyo en Google, tu perfil aparece primero. Más visibilidad, más llamadas directas.",
    detail: "Fotos, reseñas, horarios y categorías optimizadas.",
    href: "/servicios/google-business",
  },
  {
    image: "/images/service-seo-google.jpg",
    imageAlt: "Resultado de búsqueda en Google mostrando tu negocio de primero",
    title: "Posicionamiento en Google",
    description:
      "Aparecer en Google no es suerte. Te posicionamos para que los clientes de tu zona te encuentren antes que a la competencia.",
    detail: "SEO local enfocado en Costa Rica.",
    href: "/servicios/seo",
  },
  {
    image: "/images/service-fidelizacion-pass.jpg",
    imageAlt: "Tarjeta de fidelización digital en Apple Wallet con sellos acumulados",
    imagePosition: "object-top",
    title: "Fidelización Digital",
    description:
      "Tus clientes acumulan sellos con cada visita y reciben su recompensa automáticamente — directo en su iPhone o Android, sin apps ni tarjetas de papel.",
    detail: "Compatible con Apple Wallet y Google Wallet.",
    href: "/servicios/fidelizacion",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-[#080D1A] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <Link
              key={service.href}
              href={service.href}
              className="group relative rounded-2xl overflow-hidden block h-[340px] lg:h-[420px]"
            >
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className={`object-cover transition-transform duration-500 group-hover:scale-105 ${service.imagePosition ?? ""}`}
                sizes="(max-width: 640px) 100vw, 50vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-[#080D1A]/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading-var)" }}>
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-4 max-w-md text-[0.95rem]">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:gap-3 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-200">
                  {service.detail}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
