import { motion } from "motion/react";
import { Hammer, CircleDollarSign, Zap, Users } from "lucide-react";

export function Differentials() {
  const cards = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Tradição & Confiança",
      description: "Desde 2007 ajudando a construir sonhos. Somos uma loja consolidada que entende de obra e valoriza o cliente de bairro."
    },
    {
      icon: <CircleDollarSign className="w-8 h-8" />,
      title: "Cobrimos Ofertas",
      description: "Traga seu orçamento comprovado e buscaremos o melhor negócio para você. Aqui, você fecha negócio com confiança."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Entrega Rápida",
      description: "Agilidade na entrega com logística eficiente e suporte total para as urgências do seu canteiro de obras."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Atendimento Especializado",
      description: "Equipe com experiência pronta para orientar desde o cliente final até os profissionais de obra."
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-paper">
      <div className="max-w-[1024px] mx-auto px-12">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4 tracking-tight">Construa com quem tem base.</h2>
          <p className="text-lg text-ink-muted">
            Mais do que vender materiais, nós entregamos soluções e segurança para a sua construção ou reforma.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="bg-white p-[20px] rounded-[12px] border border-[#F3F4F6] shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              <h3 className="font-bold text-[14px] uppercase text-brand tracking-[0.5px] mb-[12px] flex items-center gap-[8px]">
                {card.icon}
                {card.title}
              </h3>
              <p className="text-[13px] text-ink-muted leading-[1.6]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
