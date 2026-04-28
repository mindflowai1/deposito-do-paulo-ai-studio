import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-ink">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-dark" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-dark)" />
        </svg>
      </div>

      <div className="relative max-w-[1024px] mx-auto px-6 md:px-12 text-center text-white z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[32px] p-8 md:p-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] text-white uppercase italic tracking-tighter">
            Pronto para iniciar<br/>ou terminar a sua obra?
          </h2>
          <p className="text-xl md:text-2xl text-white/60 font-medium mb-12 max-w-3xl mx-auto tracking-tight">
            Fale agora com nossa equipe e receba seu orçamento sem compromisso direto no WhatsApp. <span className="text-brand">Rapidez, variedade e o melhor preço.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="whatsapp" size="lg" className="h-16 px-10 text-xl font-black rounded-xl w-full sm:w-auto shadow-2xl hover:shadow-brand/20 uppercase tracking-tighter italic" asChild>
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