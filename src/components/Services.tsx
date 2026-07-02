import Image from "next/image";
import Link from "next/link";
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
  const [featured, ...rest] = services;

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

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-6 items-stretch">
          {/* Servicio destacado */}
          <Link href={featured.href} className="lg:col-span-3 group relative rounded-2xl overflow-hidden block h-[380px] lg:h-[560px]">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-[#080D1A]/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading-var)" }}>
                {featured.title}
              </h3>
              <p className="text-white/70 leading-relaxed mb-5 max-w-md text-[0.95rem]">{featured.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:gap-3 transition-all duration-200">
                {featured.detail}
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Resto de servicios — lista compacta */}
          <div className="lg:col-span-2 flex flex-col divide-y divide-white/10 border-y border-white/10">
            {rest.map((service) => (
              <Link key={service.href} href={service.href} className="group flex items-center gap-4 py-6">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  <Image src={service.image} alt={service.imageAlt} fill className="object-cover" sizes="64px" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-200" style={{ fontFamily: "var(--font-heading-var)" }}>
                    {service.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-snug">{service.detail}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
