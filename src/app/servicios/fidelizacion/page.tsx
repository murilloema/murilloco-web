"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ArrowLeft,
  Play,
  QrCode,
  Smartphone,
  Star,
  Users,
  BarChart3,
  Headphones,
  Wallet,
  RefreshCw,
  ShieldCheck,
  Megaphone,
  MapPin,
  Bell,
  Zap,
  Navigation,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Sin apps que descargar",
    body: "La tarjeta vive en Apple Wallet o Google Wallet. Tu cliente la tiene siempre encima, lista en dos segundos.",
  },
  {
    icon: QrCode,
    title: "Registro con QR instantáneo",
    body: "Tu cliente escanea, se registra con nombre y teléfono, y recibe su tarjeta al instante. Sin formularios largos.",
  },
  {
    icon: BarChart3,
    title: "Panel en tiempo real",
    body: "Ves cada visita, cada sello y cada cliente desde tu panel de administración. Todo actualizado al instante.",
  },
  {
    icon: RefreshCw,
    title: "Sellos automáticos",
    body: "Vos configurás la recompensa. El sistema lleva el conteo solo — sin fichas, sin papel, sin errores humanos.",
  },
  {
    icon: Wallet,
    title: "Apple Wallet y Google Wallet",
    body: "Compatible con los dos sistemas. iPhone o Android — todos tus clientes pueden usarlo desde el primer día.",
  },
  {
    icon: Headphones,
    title: "Soporte personalizado",
    body: "No sos un ticket. Te acompañamos en el setup y estamos disponibles cuando necesitás algo.",
  },
];

export default function FidelizacionPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FAF7FF]">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-200/40 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <Link
              href="/#servicios"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-10"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Volver a servicios
            </Link>

            <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 rounded-full px-4 py-1.5 mb-8">
              <span className="text-base">💜</span>
              <span className="text-sm font-semibold text-purple-700">Fidelización que genera ventas reales</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.0] tracking-tight text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-heading-var)" }}
            >
              Haz que tus clientes{" "}
              <span className="italic bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                elijan volver
              </span>{" "}
              siempre
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              El sistema de tarjetas digitales que hace crecer tu negocio desde adentro —
              clientes que regresan, gastan más y traen a otros.
            </p>

            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-2xl text-lg shadow-xl shadow-purple-700/25 hover:scale-[1.02] active:scale-95 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-200"
            >
              Quiero mi demo gratuita
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* ── VIDEO PLACEHOLDER ── */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full aspect-video bg-gray-900 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl shadow-purple-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 to-gray-900" />
              <div className="relative flex flex-col items-center gap-5">
                <button className="w-20 h-20 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-200 hover:scale-110">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </button>
                <p className="text-white/50 text-sm font-medium">Video próximamente</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUÉ ES FIDELIZACIÓN ── */}
        <section className="py-24 md:py-32 border-t border-purple-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-4">El problema real</p>
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-8"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                La mayoría de negocios pierde al{" "}
                <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  70% de sus clientes
                </span>{" "}
                después de la primera visita
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Y la razón no es que no les gustó. Es que se{" "}
                <strong className="text-gray-700">olvidaron de vos.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  number: "5×",
                  label: "más caro conseguir un cliente nuevo que mantener uno existente",
                },
                {
                  number: "68%",
                  label: "de los clientes vuelven si tienen una razón concreta para hacerlo",
                },
                {
                  number: "3×",
                  label: "más gasta un cliente fidelizado comparado con uno nuevo",
                },
              ].map((stat) => (
                <div
                  key={stat.number}
                  className="bg-white border border-purple-100 rounded-2xl p-8 text-center shadow-sm"
                >
                  <p
                    className="text-5xl font-extrabold text-purple-600 mb-3"
                    style={{ fontFamily: "var(--font-heading-var)" }}
                  >
                    {stat.number}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white border border-purple-100 rounded-3xl p-10 md:p-14 shadow-sm">
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-4">La solución</p>
                <h3
                  className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-heading-var)" }}
                >
                  Fidelización Digital de Murillo Co
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">
                  Es el sistema que hace que tu negocio viva en el teléfono de cada cliente.
                  Cada sello acumulado es un recordatorio. Cada recompensa, una razón para volver.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Vos te enfocás en dar el mejor servicio.{" "}
                  <strong className="text-gray-800">Nosotros nos encargamos de que regresen.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CAMPAÑAS ── */}
        <section className="py-24 md:py-32 border-t border-purple-100 overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gray-950 rounded-3xl overflow-hidden">
              {/* Glow de fondo */}
              <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-800/20 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative grid md:grid-cols-2 gap-0 items-center">
                {/* Texto */}
                <div className="p-10 md:p-14 lg:p-16">
                  <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-7">
                    <Megaphone className="w-3.5 h-3.5 text-purple-400" />
                    <span className="text-sm font-semibold text-purple-400">Campañas de push</span>
                  </div>
                  <h2
                    className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5"
                    style={{ fontFamily: "var(--font-heading-var)" }}
                  >
                    Hablale a todos tus clientes{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                      en un clic
                    </span>
                  </h2>
                  <p className="text-gray-400 text-base leading-relaxed mb-8">
                    Creás el mensaje desde tu panel y llega directo a la pantalla de bloqueo de cada cliente — sin apps, sin WhatsApp, sin costo por envío.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: Bell, text: "Notificación instantánea en Apple y Google Wallet" },
                      { icon: Zap, text: "Llegá a todos tus clientes al mismo tiempo" },
                      { icon: Megaphone, text: "Promos, avisos, descuentos — lo que necesités" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/20 flex items-center justify-center shrink-0">
                          <item.icon className="w-4 h-4 text-purple-400" />
                        </div>
                        <p className="text-gray-300 text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mockup notificación */}
                <div className="flex items-center justify-center p-10 md:p-12">
                  <div className="relative w-64">
                    {/* Teléfono */}
                    <div className="bg-gray-900 border border-gray-700 rounded-[2.5rem] p-4 shadow-2xl shadow-purple-900/40">
                      {/* Barra de estado */}
                      <div className="flex justify-between items-center px-2 mb-6">
                        <span className="text-white text-xs font-semibold">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-1.5 bg-white/60 rounded-sm" />
                          <div className="w-3 h-1.5 bg-white/60 rounded-sm" />
                          <div className="w-4 h-1.5 bg-white/60 rounded-sm" />
                        </div>
                      </div>
                      {/* Hora */}
                      <div className="text-center mb-6">
                        <p className="text-white/40 text-xs mb-1">Viernes 8 de mayo</p>
                        <p className="text-white text-5xl font-thin">9:41</p>
                      </div>
                      {/* Notificación */}
                      <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-3.5 mb-4">
                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center shrink-0">
                            <span className="text-white text-xs font-bold">🏪</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                              <p className="text-white text-xs font-semibold">Tu Negocio</p>
                              <p className="text-white/40 text-[10px]">ahora</p>
                            </div>
                            <p className="text-white/80 text-xs leading-snug">
                              🎉 Hoy 2×1 en todos los servicios. ¡Solo hasta las 6pm!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center gap-1.5 mt-4">
                        {[1,2,3].map(i => <div key={i} className={`h-1 rounded-full ${i===1 ? 'w-5 bg-white/60' : 'w-1.5 bg-white/20'}`} />)}
                      </div>
                    </div>
                    {/* Glow bajo el teléfono */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-purple-600/40 blur-xl rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GEOFENCING ── */}
        <section className="py-24 md:py-32 border-t border-purple-100 overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-gradient-to-br from-purple-700 via-purple-800 to-purple-950 rounded-3xl overflow-hidden">
              {/* Decoración */}
              <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-400/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative grid md:grid-cols-2 gap-0 items-center">
                {/* Mockup mapa + notificación */}
                <div className="flex items-center justify-center p-10 md:p-14 order-2 md:order-1">
                  <div className="relative">
                    {/* Círculos de onda */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-48 h-48 rounded-full border border-white/10 animate-ping" style={{ animationDuration: "3s" }} />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-32 h-32 rounded-full border border-white/15" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20" />
                    </div>

                    {/* Centro: pin */}
                    <div className="relative w-48 h-48 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-2xl flex items-center justify-center z-10">
                        <MapPin className="w-7 h-7 text-purple-700 fill-purple-100" />
                      </div>
                    </div>

                    {/* Notificación flotante */}
                    <div className="absolute -top-4 -right-4 w-52 bg-white rounded-2xl shadow-2xl shadow-purple-900/40 p-3 z-20">
                      <div className="flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                          <Navigation className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-gray-900 text-xs font-semibold mb-0.5">Hamburgers</p>
                          <p className="text-gray-500 text-[11px] leading-snug">
                            ¡Estás cerca! Pasá hoy y ganás un sello extra.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Texto */}
                <div className="p-10 md:p-14 lg:p-16 order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-7">
                    <MapPin className="w-3.5 h-3.5 text-purple-200" />
                    <span className="text-sm font-semibold text-purple-100">Geofencing inteligente</span>
                  </div>
                  <h2
                    className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5"
                    style={{ fontFamily: "var(--font-heading-var)" }}
                  >
                    Tu negocio los llama{" "}
                    <span className="text-purple-200">
                      cuando pasan cerca
                    </span>
                  </h2>
                  <p className="text-purple-100/70 text-base leading-relaxed mb-8">
                    Configurás la ubicación de tu negocio y el mensaje que querés mostrar. Cuando un cliente pasa cerca, su tarjeta aparece sola en la pantalla de bloqueo — como un recordatorio perfecto.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: MapPin, text: "Zona configurable desde tu panel" },
                      { icon: Zap, text: "Funciona automáticamente — sin hacer nada" },
                      { icon: Bell, text: "Aparece en pantalla de bloqueo en el momento justo" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                          <item.icon className="w-4 h-4 text-purple-200" />
                        </div>
                        <p className="text-purple-100/80 text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TARJETAS (imágenes) ── */}
        <section className="py-24 md:py-32 overflow-hidden border-t border-purple-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-4">Así se ve</p>
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                Tu marca, en el bolsillo de tu cliente
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
                Cada negocio tiene su propia tarjeta con su logo, sus colores y su nombre.
              </p>
            </div>

            <div className="flex items-center justify-center gap-0 md:gap-4">
              <div className="hidden md:block rotate-[-10deg] translate-y-6 shrink-0">
                <div className="w-56 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/card-barberia.png"
                    alt="Tarjeta de fidelización Barbería Lopez"
                    width={224}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="rotate-[2deg] z-10 shrink-0">
                <div className="w-64 h-[22rem] md:w-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/service-fidelizacion.png"
                    alt="Tarjeta de fidelización Hamburgers"
                    width={288}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="hidden md:block rotate-[10deg] translate-y-6 shrink-0">
                <div className="w-56 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/card-salon.png"
                    alt="Tarjeta de fidelización Andrika Salon"
                    width={224}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── NEGOCIOS IDEALES ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-4">¿Es para mí?</p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading-var)" }}
            >
              Perfecto para negocios donde el cliente repite
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-xl mx-auto">
              Si tus clientes pueden volver cada semana, cada mes o cada temporada — la fidelización digital es para vos.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { emoji: "💈", label: "Barberías" },
                { emoji: "💅", label: "Salones de belleza" },
                { emoji: "🍔", label: "Restaurantes" },
                { emoji: "☕", label: "Cafeterías" },
                { emoji: "🍕", label: "Pizzerías" },
                { emoji: "💆", label: "Spas y masajes" },
                { emoji: "🐾", label: "Veterinarias" },
                { emoji: "👗", label: "Tiendas de ropa" },
                { emoji: "🍣", label: "Sushi y comida rápida" },
                { emoji: "🏋️", label: "Gimnasios" },
                { emoji: "🧁", label: "Pastelerías" },
                { emoji: "🚗", label: "Lavado de autos" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white border border-purple-100 hover:border-purple-300 rounded-2xl px-4 py-5 flex flex-col items-center gap-2 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-200 hover:shadow-md"
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-24 md:py-32 border-t border-purple-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-block bg-purple-100 border border-purple-200 rounded-full px-4 py-1.5 mb-6">
                <span className="text-sm font-semibold text-purple-700">Todo incluido desde el primer día</span>
              </div>
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight"
                style={{ fontFamily: "var(--font-heading-var)" }}
              >
                Sin costos ocultos, sin sorpresas
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white border border-purple-100 hover:border-purple-300 rounded-2xl p-7 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-5">
                    <f.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3
                    className="font-bold text-gray-900 mb-2 text-base"
                    style={{ fontFamily: "var(--font-heading-var)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEGOCIOS QUE TRABAJAN CON NOSOTROS ── */}
        <section className="py-24 md:py-32 border-t border-purple-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-4">Nuestros negocios</p>
            <h2
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading-var)" }}
            >
              Negocios que confían en nosotros
            </h2>
            <p className="text-gray-500 text-lg mb-14 max-w-xl mx-auto">
              Estamos en proceso de incorporar nuestros primeros negocios en Costa Rica. ¿Querés ser el primero?
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white border border-dashed border-purple-200 rounded-2xl p-10 flex flex-col items-center justify-center gap-3"
                >
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-300" />
                  </div>
                  <p className="text-gray-300 text-sm font-medium">Tu negocio aquí</p>
                </div>
              ))}
            </div>

            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-purple-200 bg-white hover:bg-purple-50 text-purple-700 font-semibold rounded-xl text-base transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-200 hover:scale-[1.02]"
            >
              Quiero ser de los primeros
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* ── RESEÑAS ── */}
        <section className="py-24 md:py-32 border-t border-purple-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-4">Reseñas</p>
            <h2
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading-var)" }}
            >
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-gray-500 text-lg mb-14 max-w-xl mx-auto">
              Pronto aquí van a aparecer las historias reales de los negocios que crecieron con nosotros.
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white border border-dashed border-purple-200 rounded-2xl p-8 flex flex-col gap-4"
                >
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 text-purple-200 fill-purple-200" />
                    ))}
                  </div>
                  <div className="h-3 bg-purple-100 rounded-full w-3/4" />
                  <div className="h-3 bg-purple-100 rounded-full w-full" />
                  <div className="h-3 bg-purple-100 rounded-full w-2/3" />
                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-10 h-10 rounded-full bg-purple-100" />
                    <div className="h-3 bg-purple-100 rounded-full w-24" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-purple-700 rounded-3xl px-8 py-16 md:py-20 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/30 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                  <ShieldCheck className="w-4 h-4 text-purple-200" />
                  <span className="text-sm font-semibold text-purple-100">Demo gratuita, sin compromiso</span>
                </div>
                <h2
                  className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight"
                  style={{ fontFamily: "var(--font-heading-var)" }}
                >
                  ¿Listo para que tus clientes vuelvan solos?
                </h2>
                <p className="text-purple-200 text-lg mb-10 max-w-xl mx-auto">
                  Agendá una demo gratuita y te mostramos el sistema en vivo.
                  Sin tecnicismos, sin rodeos.
                </p>
                <a
                  href="/#contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-purple-50 text-purple-700 font-bold rounded-2xl text-lg hover:scale-[1.02] active:scale-95 transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out duration-200 shadow-xl"
                >
                  Quiero mi demo gratuita
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
