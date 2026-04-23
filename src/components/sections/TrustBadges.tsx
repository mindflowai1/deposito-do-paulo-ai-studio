import { ShieldCheck, Truck, Clock, Calculator } from "lucide-react";
import { motion } from "motion/react";

export function TrustBadges() {
  const badges = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand" />,
      title: "Tradição",
      desc: "Desde 2007 no mercado"
    },
    {
      icon: <Truck className="w-6 h-6 text-brand" />,
      title: "Entrega Ágil",
      desc: "Logística eficiente"
    },
    {
      icon: <Calculator className="w-6 h-6 text-brand" />,
      title: "Melhor Preço",
      desc: "Cobrimos orçamentos"
    },
    {
      icon: <Clock className="w-6 h-6 text-brand" />,
      title: "Rápido",
      desc: "Atendimento imediato"
    }
  ];

  return (
    <div className="bg-paper pb-[40px]">
      <div className="max-w-[1024px] mx-auto px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {badges.map((badge, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="flex items-center gap-[12px]"
            >
              <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shrink-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] text-brand">
                {badge.icon}
              </div>
              <div className="text-[13px] font-semibold text-ink-muted">
                {badge.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
