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
    <section id="lojas" className="py-24 bg-paper border-t border-gray-100">
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
              {/* Map Placeholder */}
              <div className="h-48 bg-gray-100 relative w-full overflow-hidden">
                {/* Real implementation would use an iframe or map component here. Using a sophisticated stylized map placeholder */}
                 <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                       <MapPin className="w-5 h-5" />
                    </div>
                 </div>
              </div>
              
              <div className="p-[20px] flex-grow flex flex-col">
                <h3 className="font-bold text-[14px] uppercase text-brand mb-4 flex items-center gap-[8px] tracking-[0.5px]">
                  <MapPin className="w-4 h-4" />
                  {store.name}
                </h3>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex flex-col text-ink-muted">
                    <span className="text-[13px] font-bold text-ink mb-1">{store.address.split(' - ')[0]}</span>
                    <span className="text-[12px] leading-[1.4]">Bairro {store.address.split(' - ')[1]}</span>
                    <span className="text-[12px] leading-[1.4] mt-2">{store.hours}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full gap-2" asChild>
                  <a href={store.mapUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4" />
                    Traçar Rota
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