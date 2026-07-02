"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const REPLAY_DELAY_MS = 3000;

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnded = () => {
    setTimeout(() => {
      const video = videoRef.current;
      if (!video) return;
      video.currentTime = 0;
      video.play();
    }, REPLAY_DELAY_MS);
  };

  return (
    <section className="relative min-h-screen h-screen flex flex-col overflow-hidden bg-[#0c0a08]">
      {/* Video de fondo full-bleed */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 saturate-[1.05]"
        autoPlay
        muted
        playsInline
        poster="/hero-poster.jpg"
        src="/hero-video.mp4"
        onEnded={handleEnded}
      />

      {/* Overlays para legibilidad */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,8,6,0.62) 0%, rgba(10,8,6,0.30) 34%, rgba(10,8,6,0.48) 66%, rgba(10,8,6,0.86) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(120% 90% at 20% 100%, rgba(8,6,4,0.72) 0%, rgba(8,6,4,0) 55%)",
        }}
      />

      <div className="relative z-[2] flex-1 flex flex-col p-7 sm:p-10 lg:p-16 pt-24 pb-24 sm:pb-10 lg:pb-16">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full bg-[#E9A94D]/[0.13] border border-[#E9A94D]/[0.34]">
          <span className="w-[7px] h-[7px] rounded-full bg-[#E9A94D] shadow-[0_0_10px_1px_rgba(233,169,77,0.75)]" />
          <span className="text-[12.5px] font-semibold tracking-wide text-[#F1C889]">
            Diseño web para negocios o empresas que quieren crecer
          </span>
        </div>

        <div className="flex-1" />

        {/* Fila inferior: tagline izquierda + CTAs derecha */}
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-7 pt-6">
          <div className="max-w-[340px]">
            <p
              className="text-[19px] sm:text-2xl lg:text-[26px] font-extrabold leading-[1.12] tracking-tight text-[#F8F4EC]"
              style={{ fontFamily: "var(--font-heading-var)" }}
            >
              Páginas web que{" "}
              <span className="text-[#E9A94D]">generan clientes</span>
            </p>
            <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#F1C889]/70">
              Murillo Co
            </p>
          </div>

          <div className="flex flex-wrap justify-end gap-3.5">
            <a
              href="#servicios"
              className="inline-flex items-center px-6 py-4 rounded-xl bg-white/[0.06] border border-[#F8F4EC]/30 backdrop-blur-md text-[#F8F4EC] font-semibold text-base hover:bg-white/10 hover:border-[#F8F4EC]/50 transition-colors duration-200"
            >
              Ver servicios
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#E9A94D] text-[#1A1206] font-bold text-base shadow-[0_10px_30px_-8px_rgba(233,169,77,0.5)] hover:bg-[#F4BC5F] hover:-translate-y-[3px] hover:shadow-[0_18px_42px_-10px_rgba(233,169,77,0.7)] active:translate-y-[-1px] transition-all duration-200"
            >
              Solicita tu página web gratuita
              <ArrowRight className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
