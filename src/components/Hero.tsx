import { ArrowRight } from "lucide-react";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden sm:min-h-svh bg-[#0B1526]">
      {/* En celular el plano es horizontal y, a pantalla completa, el recorte
          deja fuera la fila de clientes y el rótulo —que son todo el mensaje—.
          Ahí el video va como banda superior de 16:9 exacto (56.25vw), así no
          se recorta nada, y se funde a navy; de sm en adelante ocupa la
          sección completa. */}
      <div className="absolute inset-x-0 top-20 h-[56.25vw] sm:top-0 sm:h-full">
        <HeroVideo />

        {/* Tres velos apilados en vez de uno solo: el plano termina con el local
            iluminado a la izquierda y los ventanales de la oficina a la derecha,
            así que hace falta bajar el brillo general, proteger la navbar y
            fundir la parte baja a navy para que el texto respire. */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ background: "rgba(7,14,28,0.28)" }}
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,14,28,0.78) 0%, rgba(7,14,28,0.12) 22%, rgba(7,14,28,0) 42%)",
          }}
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,14,28,0) 46%, rgba(9,18,36,0.55) 68%, rgba(10,20,38,0.9) 86%, #0B1526 100%)",
          }}
        />
        {/* Solo en desktop, donde el texto va encima del plano: la vidriera
            cálida de la izquierda es lo bastante clara como para comerse el
            titular. */}
        <div
          className="hidden sm:block absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,14,28,0.58) 0%, rgba(7,14,28,0.3) 30%, rgba(7,14,28,0) 56%)",
          }}
        />
      </div>

      {/* Composición de cartel: la escena queda arriba y el texto se apoya en la
          parte baja del plano, justo por debajo del haz azul. */}
      <div className="relative z-[2] flex flex-col justify-end sm:min-h-svh pt-[calc(5rem+56.25vw+2rem)] sm:pt-28 pb-14 sm:pb-20 lg:pb-24">
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
          <p
            className="hero-title text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.32em] text-[#8FB4FF] mb-5"
            style={{ animationDelay: "80ms" }}
          >
            Alajuela · Costa Rica
          </p>

          <h1
            className="max-w-[15ch] sm:max-w-[19ch] font-bold tracking-[-0.03em] leading-[1.08] text-[clamp(30px,6.2vw,52px)] text-balance"
            style={{
              fontFamily: "var(--font-display)",
              textShadow: "0 2px 30px rgba(6,12,24,0.9), 0 0 90px rgba(6,12,24,0.7)",
            }}
          >
            <span className="block">
              {/* whiteSpace normal: .hero-word trae `pre` para el stagger por
                  palabra del titular viejo, y aquí cada tramo debe poder cortar */}
              <span
                className="hero-word text-[#F8F4EC]"
                style={{ animationDelay: "180ms", whiteSpace: "normal" }}
              >
                Murillo Co trabaja detrás de escena
              </span>
            </span>
            <span className="block">
              <span
                className="hero-word text-[#8FB4FF]"
                style={{ animationDelay: "330ms", whiteSpace: "normal" }}
              >
                para llenar tu negocio de clientes.
              </span>
            </span>
          </h1>

          {/* Filete que continúa el haz azul del video hacia el texto */}
          <div
            className="hero-title mt-8 h-px w-24 origin-left"
            style={{
              animationDelay: "520ms",
              background:
                "linear-gradient(90deg, rgba(143,180,255,0.85), rgba(143,180,255,0))",
            }}
          />

          <p
            className="hero-title max-w-[46ch] text-[18px] sm:text-[21px] leading-[1.55] text-[#D3DEF3]/85 mt-6"
            style={{
              fontFamily: "var(--font-serif)",
              animationDelay: "600ms",
              textShadow: "0 1px 18px rgba(6,12,24,0.9)",
            }}
          >
            Nosotros movemos los clics. Vos atendés la fila.
          </p>

          <div
            className="hero-title flex flex-wrap items-center gap-x-6 gap-y-3 mt-9 pointer-events-auto"
            style={{ animationDelay: "720ms" }}
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 px-9 sm:px-11 py-4 sm:py-5 rounded-xl bg-[#1D3461] text-white font-bold text-lg sm:text-xl tracking-wide transition-[background-color,transform,box-shadow] duration-200 hover:bg-[#264478] hover:-translate-y-[3px] active:translate-y-0 active:scale-[0.985]"
              style={{
                boxShadow:
                  "0 0 36px rgba(29,52,97,0.6), 0 14px 40px -10px rgba(6,12,24,0.9)",
              }}
            >
              Solicita tu página web
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <p
              className="text-[13px] text-[#C4D2EE]/70 tracking-wide"
              style={{ textShadow: "0 1px 12px rgba(6,12,24,0.9)" }}
            >
              Demo gratuita · Sin compromiso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
