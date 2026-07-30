"use client";

import { useEffect, useRef } from "react";

/**
 * Video de fondo del hero. No usar un <video autoPlay> suelto: Safari en iOS
 * ignora el atributo en varios casos y deja el póster congelado. Hay que llamar
 * a play() a mano y volver a intentarlo cuando la sección entra en pantalla.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.removeAttribute("autoplay");
      return; // se queda el póster fijo
    }

    const play = () => {
      const attempt = video.play();
      if (attempt) attempt.catch(() => {});
    };

    play();

    // Pausar fuera de pantalla evita decodificar video mientras el usuario lee
    // el resto de la página, que en celulares de gama baja se nota.
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? play() : video.pause()),
      { threshold: 0.05 }
    );
    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      src="/video/hero.mp4"
      poster="/images/hero-poster.jpg"
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
