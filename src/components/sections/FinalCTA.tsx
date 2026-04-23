import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-brand">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-[1024px] mx-auto px-12 text-center text-white z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[32px] md:text-[44px] font-extrabold mb-8 leading-tight text-white drop-shadow-sm">
            Pronto para iniciar<br/>ou terminar a sua obra?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 max-w-3xl mx-auto">
            Fale agora com nossa equipe e receba seu orçamento sem compromisso direto no WhatsApp. Rapidez, variedade e o melhor preço.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="whatsapp" size="lg" className="h-16 px-10 text-lg rounded-full w-full sm:w-auto shadow-2xl hover:shadow-whatsapp/50" asChild>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-3" />
                Quero meu orçamento
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
