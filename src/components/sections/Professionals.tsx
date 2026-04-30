import { Button } from "../ui/Button";
import { HardHat } from "lucide-react";
import { motion } from "motion/react";

export function Professionals() {
  return (
    <section id="profissionais" className="pt-12 pb-24 md:py-24 bg-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.03]">
        <svg width="800" height="800" viewBox="0 0 100 100" className="w-[800px] h-[800px] fill-current text-ink">
          <circle cx="50" cy="50" r="50" />
        </svg>
      </div>

      <div className="max-w-[1024px] mx-auto px-5 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full overflow-hidden"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-ink text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6">
              <HardHat className="w-3.5 h-3.5 text-brand" />
              Parceiro do Profissional
            </div>
            
            <h2 className="text-[26px] sm:text-[32px] md:text-5xl font-black text-ink mb-6 leading-[1.1] uppercase italic tracking-tighter text-balance">
              A força que sua <span className="text-brand">empreitada</span> precisa.
            </h2>
            
            <p className="text-base sm:text-lg text-ink-muted mb-8 max-w-full md:max-w-lg text-balance leading-relaxed">
              Pedreiros, eletricistas, encanadores e arquitetos: o Depósito do Paulo é parceiro de quem vive da obra. Oferecemos atendimento rápido e especializado.
            </p>
            
            <ul className="space-y-4 mb-10 text-ink-muted font-medium text-sm sm:text-base">
              {['Atendimento prioritário via WhatsApp', 'Condições comerciais dedicadas', 'Rapidez na entrega'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="whatsapp" size="lg" className="w-full sm:w-auto px-6 h-14 md:h-16 text-sm md:text-lg font-black uppercase italic tracking-tighter rounded-xl whitespace-normal text-center py-2" asChild>
              <a href="https://wa.me/553132836543?text=Olá!%20Vim%20pelo%20site%20do%20Depósito%20do%20Paulo%20e%20gostaria%20de%20fazer%20um%20orçamento.%20Pode%20me%20ajudar?" target="_blank" rel="noopener noreferrer">
                Falar com consultor exclusivo
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="/assets/professionals-new.jpg" 
                alt="Profissional da construção trabalhando" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decal */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white rounded-full p-2 shadow-xl hidden xl:block animate-spin-slow" style={{ animationDuration: '20s' }}>
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent"/>
                  <text className="font-bold uppercase tracking-widest text-xs fill-ink">
                    <textPath href="#curve" startOffset="0">
                      • Qualidade • Compromisso • Parceria 
                    </textPath>
                  </text>
                </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}