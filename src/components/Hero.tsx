import { MapPin, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden bg-[#080D1A]">
      {/* Video de fondo full-bleed */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        src="/hero-video.mp4"
      />

      {/* Overlay con gradiente para legibilidad */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to top, rgba(8,13,26,0.90) 0%, rgba(8,13,26,0.40) 45%, rgba(8,13,26,0.65) 100%)",
        }}
      />

      {/* Ambient glows — hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block z-[2]">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-blue-700/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-blue-900/25 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid — hidden on mobile */}
      <div
        className="absolute inset-0 pointer-events-none hidden sm:block z-[2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-[3]">
        <div className="max-w-[760px]">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold mb-8 tracking-wide">
            <MapPin className="h-3 w-3" />
            Agencia Digital · Costa Rica
          </div>

          <h1
            className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold leading-[1.05] tracking-tight text-white mb-6"
            style={{ fontFamily: "var(--font-heading-var)" }}
          >
            Páginas web que{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              generan clientes
            </span>
          </h1>

          <p className="text-lg text-white/85 leading-relaxed mb-10 max-w-lg">
            Hacemos páginas web que venden, optimizamos tu Google Business y
            te ponemos donde tus clientes te están buscando. Trabajamos con
            negocios en todo Costa Rica.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Solicitar demo gratuita
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl text-base hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Ver servicios
            </a>
          </div>

          {/* Stats — flex-wrap to avoid overflow on small screens */}
          <div className="mt-12 pt-10 border-t border-white/10 flex flex-wrap gap-8">
            {[
              { value: "4", label: "Servicios clave" },
              { value: "100%", label: "Clientes satisfechos" },
              { value: "24h", label: "Tiempo de respuesta" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-extrabold text-white"
                  style={{ fontFamily: "var(--font-heading-var)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-white/40 mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
