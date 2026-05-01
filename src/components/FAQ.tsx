import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué incluye la demo gratuita?",
    answer:
      "En la demo te mostramos una vista previa de cómo podría quedar tu página web, revisamos tu presencia digital actual y te explicamos qué oportunidades concretas tiene tu negocio para conseguir más clientes en Google. Todo en 30 minutos o menos, sin compromiso. Te llevás algo de valor uses nuestros servicios o no.",
  },
  {
    question: "¿Cuánto tarda en estar lista mi página?",
    answer:
      "7 días hábiles para páginas estándar. El tiempo exacto depende de qué tan rápido nos proporcionás el contenido (fotos, textos, información del negocio). Muchos clientes se sorprenden de lo rápido que queda lista.",
  },
  {
    question: "¿Necesito saber de tecnología para manejar mi página?",
    answer:
      "Para nada. Nos encargamos de todo el proceso técnico: dominio, hosting, actualizaciones. Si en algún momento necesitás hacer un cambio, te explicamos cómo o lo hacemos nosotros por vos.",
  },
  {
    question: "¿Funciona para negocios pequeños?",
    answer:
      "Especialmente para ellos. Los negocios locales en Costa Rica tienen una gran ventaja: con la estrategia correcta, pueden superar en Google a competidores mucho más grandes. El SEO local premia la relevancia geográfica, no el tamaño del negocio.",
  },
  {
    question: "¿Qué pasa si no quedo satisfecho con el resultado?",
    answer:
      "Trabajamos con vos hasta que quedés satisfecho. Antes de entregar cualquier trabajo, te mostramos avances y pedimos tu aprobación. No entregamos algo terminado de sorpresa — el proceso es colaborativo desde el inicio.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
              FAQ
            </p>
            <h2
              className="text-3xl sm:text-5xl font-bold text-foreground mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-heading-var)" }}
            >
              Preguntas frecuentes
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Si tenés alguna duda que no está acá, escribinos y te respondemos
              en menos de un día hábil.
            </p>
          </div>

          {/* Right — Accordion */}
          <div>
            <Accordion className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-5 mb-2 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/3 transition-colors duration-200"
                >
                  <AccordionTrigger
                    className="text-left font-semibold text-foreground hover:no-underline py-5 text-sm"
                    style={{ fontFamily: "var(--font-heading-var)" }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
