import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingWhatsApp() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
    >
      <div className="bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 text-xs font-semibold text-ink whitespace-nowrap transform hidden md:block">
        Fale conosco agora! 👋
      </div>
      <a
        href="https://wa.me/553132836543"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[64px] h-[64px] bg-whatsapp text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] border-[4px] border-white hover:bg-whatsapp-dark focus:outline-none focus:ring-4 focus:ring-whatsapp/20 transition-all hover:scale-105 active:scale-95"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </motion.div>
  );
}