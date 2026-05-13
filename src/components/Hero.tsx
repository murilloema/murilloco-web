import { MapPin, ArrowRight, Globe, Search, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden bg-[#080D1A]">
      {/* Ambient glows — hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-blue-700/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-blue-900/25 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid — hidden on mobile */}
      <div
        className="absolute inset-0 pointer-events-none hidden sm:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div>
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

            <p className="text-lg text-white/55 leading-relaxed mb-10 max-w-lg">
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

          {/* Right — Browser mockup, desktop only */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-3xl scale-95" />
            <div className="relative bg-[#0F1729] rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
              <div className="bg-[#151D35] px-4 py-3 flex items-center gap-2 border-b border-white/8">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="flex-1 ml-2 bg-white/5 border border-white/10 rounded-md px-3 py-1 text-xs text-white/30">
                  tunegocio.com
                </div>
              </div>
              <div className="p-6 space-y-4 bg-[#0A1020]">
                <div className="bg-blue-700 rounded-xl p-5">
                  <div className="h-3 w-3/4 bg-white/25 rounded mb-2" />
                  <div className="h-2 w-1/2 bg-white/15 rounded mb-4" />
                  <div className="h-8 w-28 bg-white/20 rounded-lg border border-white/10" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[Globe, Search, TrendingUp].map((Icon, i) => (
                    <div key={i} className="bg-white/5 border border-white/8 rounded-lg p-3 flex flex-col items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded" />
                      <div className="h-2 w-2/3 bg-white/8 rounded" />
                    </div>
                  ))}
                </div>
                <div className="bg-white/5 border border-white/8 rounded-lg p-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="h-2 w-24 bg-white/10 rounded" />
                    <div className="h-5 w-16 bg-white/10 rounded" />
                  </div>
                  <div className="text-blue-400 font-bold text-xl">+340%</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-6 bg-[#0F1729] border border-white/10 rounded-xl shadow-2xl px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <span className="text-green-400 text-sm font-bold">✓</span>
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Demo confirmada</div>
                <div className="text-xs text-white/40">Respuesta en menos de 24h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
