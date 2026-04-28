import { Button } from "../ui/Button";
import { HardHat } from "lucide-react";
import { motion } from "motion/react";

export function Professionals() {
  return (
    <section id="profissionais" className="py-24 bg-ink relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-10">
        <svg width="800" height="800" viewBox="0 0 100 100" className="w-[800px] h-[800px] fill-current text-white">
          <circle cx="50" cy="50" r="50" />
        </svg>
      </div>

      <div className="max-w-[1024px] mx-auto px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-8">
              <HardHat className="w-4 h-4 text-brand" />
              Parceiro do Profissional
            </div>
            
            <h2 className="text-[32px] font-extrabold text-white mb-6 leading-tight">
              A força que sua empreitada precisa.
            </h2>
            
            <p className="text-lg text-white/70 mb-8 max-w-lg">
              Pedreiros, eletricistas, encanadores e arquitetos: o Depósito do Paulo é parceiro de quem vive da obra. Oferecemos atendimento rápido, facilidade no dia a dia e relacionamento comercial duradouro.
            </p>
            
            <ul className="space-y-4 mb-10 text-white/90">
              {['Atendimento prioritário via WhatsApp', 'Condições comerciais dedicadas', 'Flexibilidade e rapidez na entrega'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand"></div>
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="whatsapp" className="w-full sm:w-auto" asChild>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
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
              <div className="absolute inset-0 bg-brand/20 mix-blend-multiply z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop" 
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