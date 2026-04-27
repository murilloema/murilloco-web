"use client";

import { MessageCircle } from "lucide-react";

const WA_NUMBER = "50663382194";
const WA_MESSAGE = encodeURIComponent(
  "Hola, vi su sitio web y me interesa saber más sobre sus servicios."
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white font-semibold text-sm px-4 py-3 rounded-full shadow-lg hover:bg-[#1ebe5d] hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 group"
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      <span className="hidden sm:inline">¿Hablamos?</span>
    </a>
  );
}
