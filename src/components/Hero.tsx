import { ArrowRight } from "lucide-react";
import HeroVideo from "./HeroVideo";

const LINE_1 = ["Una", "agencia", "que"];
const LINE_2 = ["te", "genera", "clientes"];

/** Palabras del titular con entrada escalonada (sin JS: delay inline). */
function Words({ words, from, className }: { words: string[]; from: number; className?: string }) {
  return (
    <span className={`block ${className ?? ""}`}>
      {words.map((word, i) => (
        <span
          key={word}
          className="hero-word"
          style={{ animationDelay: `${(from + i) * 70 + 120}ms` }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-[#0B1526]">
      <HeroVideo />

      {/* Tres velos apilados en vez de uno solo: el plano tiene una puerta
          iluminada justo en el centro y el titular blanco se le pierde encima. */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "rgba(7,14,28,0.26)" }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(64% 48% at 50% 42%, rgba(6,12,24,0.55) 0%, rgba(6,12,24,0.22) 55%, rgba(6,12,24,0) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,14,28,0.66) 0%, rgba(7,14,28,0.06) 24%, rgba(7,14,28,0.24) 68%, #0B1526 100%)",
        }}
      />

      {/* Composición: etiqueta → título → apoyo → CTA */}
      <div className="relative z-[2] flex min-h-svh flex-col items-center justify-center px-6 pointer-events-none">
        <p className="hero-title text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.32em] text-[#8FB4FF] mb-6">
          Alajuela · Costa Rica
        </p>

        <h1
          className="relative text-center font-bold tracking-[-0.03em] leading-[1.06] text-[40px] sm:text-6xl lg:text-[76px]"
          style={{
            fontFamily: "var(--font-display)",
            textShadow: "0 2px 30px rgba(6,12,24,0.95), 0 0 90px rgba(6,12,24,0.8)",
          }}
        >
          <Words words={LINE_1} from={0} className="text-[#F8F4EC]" />
          <Words words={LINE_2} from={LINE_1.length} className="text-[#8FB4FF]" />
        </h1>

        <p
          className="hero-title max-w-[460px] text-center text-[19px] sm:text-[21px] leading-[1.6] text-[#D3DEF3]/85 mt-7"
          style={{
            fontFamily: "var(--font-serif)",
            animationDelay: "620ms",
            textShadow: "0 1px 18px rgba(6,12,24,0.9)",
          }}
        >
          Web, Google y posicionamiento para negocios que quieren más llamadas,
          más mensajes y más ventas.
        </p>

        <div
          className="hero-title relative flex flex-col items-center gap-3.5 mt-10 pointer-events-auto"
          style={{ animationDelay: "760ms" }}
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-3 px-12 py-5 rounded-xl bg-[#1D3461] text-white font-bold text-lg sm:text-xl tracking-wide transition-[background-color,transform,box-shadow] duration-200 hover:bg-[#264478] hover:-translate-y-[3px] active:translate-y-0 active:scale-[0.985]"
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
    </section>
  );
}
