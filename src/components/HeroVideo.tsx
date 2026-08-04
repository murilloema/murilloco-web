"use client";

import { useEffect, useRef } from "react";

/**
 * Video de fondo del hero. Va en loop: el archivo ya trae el cierre fundido
 * contra su propio arranque, así que el corte del bucle no se ve.
 *
 * No usar un <video autoPlay> suelto: Safari en iOS ignora el atributo en
 * varios casos y deja el póster congelado. Hay que llamar a play() a mano y
 * volver a intentarlo cuando la sección entra en pantalla. Y esperar a que
 * haya buffer suficiente antes del primer play, porque arrancar con el video a
 * medio cargar se ve como un tirón en el primer segundo.
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
      // HAVE_FUTURE_DATA: hay con qué seguir reproduciendo, no solo un cuadro
      if (video.readyState < 3) return;
      const attempt = video.play();
      if (attempt) attempt.catch(() => {});
    };

    video.addEventListener("canplay", play);
    play();

    // Pausar fuera de pantalla evita decodificar video mientras el usuario lee
    // el resto de la página, que en celulares de gama baja se nota.
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? play() : video.pause()),
      { threshold: 0.05 }
    );
    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener("canplay", play);
    };
  }, []);

  // De sm en adelante el contenedor es más alto que 16:9 y object-cover recorta
  // a los lados: el encuadre se corre a la derecha para que el rótulo de la
  // agencia entre entero (a la izquierda solo se pierde pared).
  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover sm:object-[82%_center] pointer-events-none"
      src="/video/hero.mp4"
      poster="/images/hero-poster.jpg"
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
