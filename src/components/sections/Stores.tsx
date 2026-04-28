import { motion } from "motion/react";
import { MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "../ui/Button";

export function Stores() {
  const stores = [
    {
      name: "Loja 1 - Serra",
      address: "Rua Serenata, 46 - Serra",
      hours: "Seg a Sex: 08h às 18h | Sáb: 08h às 13h",
      mapUrl: "https://maps.google.com/?q=Rua+Serenata,+46+-+Serra"
    },
    {
      name: "Loja 2 - São Lucas",
      address: "Rua Oliem Bonfim Guimarães, 320 - São Lucas",
      hours: "Seg a Sex: 08h às 18h | Sáb: 08h às 13h",
      mapUrl: "https://maps.google.com/?q=Rua+Oliem+Bonfim+Guimaraes,+320+-+Sao+Lucas"
    }
  ];

  return (
    <section id="lojas" className="py-24 bg-gray-50">
      <div className="max-w-[1024px] mx-auto px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4 tracking-tight">Sempre perto da sua obra.</h2>
          <p className="text-lg text-ink-muted">
            Temos duas unidades completas prontas para te atender com agilidade e proximidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {stores.map((store, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="bg-white rounded-[12px] overflow-hidden border border-[#F3F4F6] shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col"
            >
              {/* Real Map Embed */}
              <div className="h-64 bg-gray-100 relative w-full overflow-hidden">
                <iframe
                  title={store.name}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(store.address + ", Belo Horizonte, MG")}&output=embed`}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-500"
                ></iframe>
              </div>
              
              <div className="p-8 flex-grow flex flex-col bg-white">
                <h3 className="font-black text-xl uppercase italic text-brand mb-4 flex items-center gap-2 tracking-tighter leading-none">
                  <MapPin className="w-5 h-5" />
                  {store.name}
                </h3>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex flex-col text-ink-muted">
                    <span className="text-lg font-black text-ink mb-1 tracking-tight">{store.address.split(' - ')[0]}</span>
                    <span className="text-sm font-medium leading-relaxed opacity-80 italic">Bairro {store.address.split(' - ')[1]}</span>
                    <div className="flex items-center gap-2 mt-4 text-xs font-bold uppercase tracking-widest text-ink/40">
                      <Clock className="w-4 h-4" />
                      {store.hours}
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full gap-2 py-6 border-2 hover:bg-brand hover:border-brand hover:text-white transition-all font-black uppercase italic tracking-tighter" asChild>
                  <a href={store.mapUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-5 h-5" />
                    Traçar Rota no GPS
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}