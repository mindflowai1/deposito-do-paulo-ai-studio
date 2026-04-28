import { motion } from "motion/react";
import { PaintRoller, Package, Grid3X3, Layers, Mountain, PlusCircle, Maximize, Square } from "lucide-react";

export function Categories() {
  const products = [
    { name: "Areia", icon: Mountain, color: "text-amber-600" },
    { name: "Brita", icon: Layers, color: "text-slate-500" },
    { name: "Cimento", icon: Package, color: "text-gray-600" },
    { name: "Tijolos", icon: Grid3X3, color: "text-orange-700" },
    { name: "Pisos", icon: Square, color: "text-zinc-500" },
    { name: "Tintas", icon: PaintRoller, color: "text-brand" },
    { name: "Janelas", icon: Maximize, color: "text-sky-600" },
    { name: "e muito mais", icon: PlusCircle, color: "text-ink-muted" },
  ];

  return (
    <section id="categorias" className="py-24 bg-white">
      <div className="max-w-[1024px] mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-ink mb-4 tracking-tighter uppercase italic">Nossos Produtos</h2>
          <p className="text-lg text-ink-muted">
            Tudo o que você precisa para sua construção, com a qualidade das melhores marcas do mercado.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                key={idx}
                className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand/20 transition-all flex flex-col items-center gap-4 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`shrink-0 p-4 rounded-xl bg-gray-50 group-hover:bg-brand/10 transition-colors z-10`}>
                  <Icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <span className="font-bold text-ink text-sm md:text-base uppercase tracking-tight z-10">{item.name}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  );
}