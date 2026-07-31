"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Send, Phone, Mail, MessageCircle } from "lucide-react";

type ContactMethod = "llamada" | "correo" | "whatsapp" | "";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xnjlprpo");
  const [contactMethod, setContactMethod] = useState<ContactMethod>("");

  if (state.succeeded) {
    return (
      <section id="contacto" className="py-24 md:py-32 bg-[#080D1A]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading-var)" }}>
            ¡Solicitud enviada!
          </h2>
          <p className="text-white/60 text-lg">
            Te contactamos en menos de 24 horas para agendar tu demo gratuita.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-[#080D1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-4">Demo gratuita</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-[1.1]" style={{ fontFamily: "var(--font-heading-var)" }}>
            ¿Listo para conseguir{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="absolute -inset-x-1 bottom-1 h-[0.4em] bg-blue-600/50 -rotate-1 rounded-sm" />
              <span className="relative">más clientes?</span>
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Dejanos tus datos y te contactamos en menos de 24 horas. Sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          <div>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Solo una conversación para ver qué tan rápido podés empezar a conseguir más clientes.
            </p>
            <ul className="space-y-4">
              {[
                "Revisamos tu presencia digital actual",
                "Te mostramos oportunidades concretas",
                "Sin tecnicismos ni letra chica",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-[0.45rem] shrink-0" />
                  <span className="text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/30 text-xs leading-relaxed">
                Más de 3 negocios en Costa Rica ya trabajan con nosotros. Respuesta garantizada en menos de 24 horas.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl shadow-black/40">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="nombre" className="text-sm font-medium">Nombre completo</Label>
                  <Input id="nombre" name="nombre" type="text" placeholder="Juan Pérez" required className="h-10 rounded-lg" />
                  <ValidationError field="nombre" errors={state.errors} className="text-xs text-red-500" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="correo" className="text-sm font-medium">Correo electrónico</Label>
                  <Input id="correo" name="correo" type="email" placeholder="juan@negocio.com" required className="h-10 rounded-lg" />
                  <ValidationError field="correo" errors={state.errors} className="text-xs text-red-500" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="telefono" className="text-sm font-medium">Número de teléfono</Label>
                  <Input id="telefono" name="telefono" type="tel" placeholder="+506 8888-8888" required className="h-10 rounded-lg" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="whatsapp" className="text-sm font-medium">
                    WhatsApp <span className="text-muted-foreground font-normal">(si es diferente)</span>
                  </Label>
                  <Input id="whatsapp" name="whatsapp" type="tel" placeholder="+506 7777-7777" className="h-10 rounded-lg" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">¿Por dónde prefiere que lo contactemos?</Label>
                <input type="hidden" name="metodo" value={contactMethod} />
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: "llamada", label: "Llamada", icon: Phone },
                    { value: "correo", label: "Correo", icon: Mail },
                    { value: "whatsapp", label: "WhatsApp", icon: MessageCircle },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setContactMethod(opt.value as ContactMethod)}
                      className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border text-sm font-medium transition-[transform,background-color,border-color,color,box-shadow,opacity] ease-out ${
                        contactMethod === opt.value
                          ? "border-primary bg-primary/8 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      <opt.icon className="w-4 h-4" />
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <ValidationError errors={state.errors} className="text-xs text-red-500" />
              <Button
                type="submit"
                disabled={state.submitting}
                className="w-full gap-2 h-12 text-base rounded-xl bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20"
              >
                {state.submitting ? "Enviando..." : "Enviar solicitud"}
                <Send className="h-4 w-4" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Tu información es privada. No enviamos spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
