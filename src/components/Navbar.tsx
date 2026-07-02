"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "¿Cómo funciona?", href: "#como-funciona" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0">
            <div className={`transition-all duration-300 ${!scrolled ? "bg-white/15 backdrop-blur-sm rounded-xl px-3 py-1.5" : ""}`}>
              <Image
                src="/images/logo.png"
                alt="Murillo Co"
                width={180}
                height={48}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-foreground/70 hover:text-primary"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contacto"
              className={`inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 ${
                scrolled
                  ? "bg-primary text-white hover:opacity-90"
                  : "bg-[#E9A94D] text-[#1A1206] hover:bg-[#F4BC5F] shadow-lg shadow-[#E9A94D]/30"
              }`}
            >
              Solicitar demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu — simple overlay, no Portal */}
      {open && (
        <div className="fixed inset-0 z-40 bg-background md:hidden">
          <div className="flex flex-col h-full pt-24 px-6">
            <nav className="flex flex-col gap-6 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xl font-semibold text-foreground/80 hover:text-primary transition-colors border-b border-border pb-6"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pb-10">
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center px-4 py-3.5 bg-primary text-white font-semibold rounded-xl hover:opacity-90 active:scale-95 transition-all duration-200"
              >
                Solicitar demo gratuita
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
