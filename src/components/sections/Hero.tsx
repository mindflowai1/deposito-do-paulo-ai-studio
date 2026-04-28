import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { Target, Truck, Users, Store, House, ShieldCheck, Box } from "lucide-react";

export function Hero() {
  const imageUrl = "https://ptotpfdlgsohxmsrfczs.supabase.co/storage/v1/object/public/bucket/ChatGPT%20Image%2024%20de%20abr.%20de%202026,%2010_08_40.png";

  return (
    <section id="inicio" className="relative h-screen bg-black overflow-hidden flex flex-col justify-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageUrl}
          alt="Depósito de materiais de construção" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Simple dark overlay, no gradients */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Content Container */}
      <div className="max-w-[1024px] mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col justify-between py-16 md:py-24 lg:py-32">
        
        {/* Top Element: DESDE 2007 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start mt-8 md:mt-0"
        >
          <span className="text-white text-xs md:text-sm lg:text-base font-light tracking-[0.4em] uppercase mb-[-2px] md:mb-[-5px] ml-1">Desde</span>
          <div className="flex items-center leading-none">
            <span className="text-white text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter">20</span>
            <span className="text-brand text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter">07</span>
          </div>
        </motion.div>

        {/* Main Title: CONSTRUINDO SOLUÇÕES PARA SUA OBRA */}
        <div className="flex-grow flex flex-col justify-center items-start space-y-3 lg:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-white text-4xl md:text-7xl lg:text-[120px] font-black leading-[1] md:leading-[0.9] tracking-tighter uppercase flex flex-col gap-2 md:gap-0">
              <span className="block italic">Construindo</span>
              <span className="block">Soluções</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative"
          >
            <div className="bg-brand py-1.5 md:py-2 px-4 md:px-8 transform -skew-x-12 inline-block shadow-xl shadow-brand/20">
              <span className="text-white text-lg md:text-3xl lg:text-4xl font-black uppercase tracking-wider block transform skew-x-12 italic">
                Para sua obra
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Features Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-6 md:pt-12">
          <FeatureItem 
            icon={<Target className="text-brand" size={28} />}
            title="PREÇO JUSTO"
            desc="Cobrimos qualquer orçamento"
            index={0}
          />
          <FeatureItem 
            icon={<Truck className="text-brand" size={28} />}
            title="ENTREGA RÁPIDA"
            desc="Agilidade quando você mais precisa"
            index={1}
          />
          <FeatureItem 
            icon={<Users className="text-brand" size={28} />}
            title="ATENDIMENTO"
            desc="Especializado para sua obra"
            index={2}
          />
          <FeatureItem 
            icon={<Store className="text-brand" size={28} />}
            title="2 LOJAS"
            desc="Mais perto de você, sempre!"
            index={3}
          />
        </div>
      </div>

      {/* Right Side Vertical Badges (LG Only) */}
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col space-y-16 items-center z-20">
        <VerticalBadge 
          icon={<Box size={32} />}
          text="Do alicerce ao acabamento"
          delay={1.2}
        />
        <VerticalBadge 
          icon={<House size={32} />}
          text="Tudo em um só lugar"
          delay={1.4}
        />
        <VerticalBadge 
          icon={<ShieldCheck size={32} />}
          text="Tradição e Confiança"
          delay={1.6}
        />
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc, index }: { icon: ReactNode, title: string, desc: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
      className="flex items-center space-x-4 group cursor-default"
    >
      <div className="shrink-0 p-2.5 bg-brand/20 backdrop-blur-md rounded-xl group-hover:bg-brand/40 transition-all duration-300 group-hover:scale-110 border border-white/10 shadow-lg">
        {icon}
      </div>
      <div className="flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 flex-grow h-full justify-center shadow-xl group-hover:bg-white/10 transition-colors">
        <span className="text-white font-black text-xs lg:text-sm tracking-[0.05em] uppercase group-hover:text-brand transition-colors text-nowrap">{title}</span>
        <span className="text-white/60 text-[10px] lg:text-[11px] font-semibold leading-tight mt-0.5">{desc}</span>
      </div>
    </motion.div>
  )
}

function VerticalBadge({ icon, text, delay }: { icon: ReactNode, text: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center space-y-3 group"
    >
      <span className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em] [writing-mode:vertical-lr] rotate-180 mb-2 group-hover:text-brand/70 transition-colors">
        {text}
      </span>
      <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center text-white/50 group-hover:border-brand/50 group-hover:text-brand transition-all duration-300 shadow-lg group-hover:shadow-brand/10">
        {icon}
      </div>
    </motion.div>
  )
}
