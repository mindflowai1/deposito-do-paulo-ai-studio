import { motion } from "motion/react";
import { PaintRoller, Droplet, Layers, Lightbulb, Wrench, Zap } from "lucide-react";

export function Categories() {
  const categories = [
    { name: "Tintas e Acessórios", icon: PaintRoller, color: "bg-blue-50 text-blue-600" },
    { name: "Caixas d'água e Telhas", icon: Droplet, color: "bg-cyan-50 text-cyan-600" },
    { name: "Pisos e Revestimentos", icon: Layers, color: "bg-orange-50 text-orange-600" },
    { name: "Hidráulica", icon: Wrench, color: "bg-emerald-50 text-emerald-600" },
    { name: "Ferramentas", icon: Wrench, color: "bg-slate-50 text-slate-600" },
    { name: "Elétrica e Iluminação", icon: Lightbulb, color: "bg-yellow-50 text-yellow-600" },
  ];

  return (
    <section id="categorias" className="py-24 bg-paper">
      <div className="max-w-[1024px] mx-auto px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4 tracking-tight">Do básico ao acabamento, tudo em um só lugar.</h2>
          <p className="text-lg text-ink-muted">
            Trabalhamos com as melhores marcas do mercado para garantir a qualidade que a sua obra exige.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                key={idx}
                className="bg-[#F9FAFB] p-[16px] rounded-[6px] border border-[#E5E7EB] text-center hover:bg-white hover:border-brand/30 transition-all flex flex-col items-center gap-[8px]"
              >
                <Icon className={`w-6 h-6 ${cat.color.split(' ')[1]}`} />
                <span className="font-semibold text-ink text-[12px]">{cat.name}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  );
}
