import { motion } from "motion/react";
import { PaintRoller, Package, Grid3X3, Layers, Mountain, PlusCircle, Maximize, Square, ArrowRight } from "lucide-react";

export function Categories() {
  const products = [
    { 
      name: "Areia", 
      icon: Mountain, 
      color: "text-amber-600",
      image: "/assets/products/areia.jpg",
      description: "Areia fina, média e grossa para todas as fases."
    },
    { 
      name: "Brita", 
      icon: Layers, 
      color: "text-slate-500",
      image: "/assets/products/brita.jpg",
      description: "Britas de diversos tamanhos para concreto e base."
    },
    { 
      name: "Cimento", 
      icon: Package, 
      color: "text-gray-600",
      image: "/assets/products/cimento.jpg",
      description: "Cimento CP-II e CP-III das melhores marcas."
    },
    { 
      name: "Tijolos", 
      icon: Grid3X3, 
      color: "text-orange-700",
      image: "/assets/products/tijolos.webp",
      description: "Tijolos baianos e cerâmicos de alta resistência."
    },
    { 
      name: "Pisos", 
      icon: Square, 
      color: "text-zinc-500",
      image: "/assets/products/pisos.jpg",
      description: "Porcelanatos e revestimentos para todos os ambientes."
    },
    { 
      name: "Tintas", 
      icon: PaintRoller, 
      color: "text-brand",
      image: "/assets/products/tintas.jpg",
      description: "Linha completa de cores e acabamentos premium."
    },
    { 
      name: "Janelas", 
      icon: Maximize, 
      color: "text-sky-600",
      image: "/assets/products/janelas.jpg",
      description: "Esquadrias de alumínio e madeira sob medida."
    },
    { 
      name: "e muito mais", 
      icon: PlusCircle, 
      color: "text-ink-muted",
      image: "/assets/products/obra.jpg",
      description: "Ferramentas, hidráulica, elétrica e acabamentos."
    },
  ];

  return (
    <section id="categorias" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-black text-ink mb-4 tracking-tighter uppercase italic leading-none">
              Nossos <span className="text-brand">Produtos</span>
            </h2>
            <p className="text-lg text-ink-muted">
              Tudo o que você precisa para sua construção, com a qualidade das melhores marcas do mercado e entrega rápida.
            </p>
          </div>
          <motion.a 
            href="https://wa.me/553132836543"
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center gap-2 text-brand font-bold uppercase tracking-wider text-sm hover:underline"
          >
            Ver catálogo completo <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                href="#lojas"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="group relative h-[320px] rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Background */}
                <div className="absolute inset-0">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-white/10 backdrop-blur-md group-hover:bg-brand transition-colors`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-black text-xl uppercase italic tracking-tighter">{item.name}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-300 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {item.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand">Ver lojas</span>
                    <ArrowRight className="w-4 h-4 text-brand" />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a 
            href="https://wa.me/553132836543"
            className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-full font-black uppercase italic tracking-tighter hover:bg-brand-dark transition-all shadow-lg shadow-brand/20"
          >
            Ver catálogo completo <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}