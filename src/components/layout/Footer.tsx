import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ink text-white/80 py-16 lg:py-24">
      <div className="max-w-[1024px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="font-extrabold text-[24px] tracking-tighter text-white flex items-center gap-2">
                 DEPÓSITO<span className="text-brand">DO PAULO</span>
               </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Sua obra não pode parar. Preço justo, variedade de materiais e entrega rápida para você construir ou reformar com tranquilidade.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-white/20 hover:border-brand hover:bg-brand transition-colors text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-black tracking-[0.2em] uppercase text-white mb-6">Navegação</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#inicio" className="hover:text-brand transition-colors">Início</a></li>
              <li><a href="#categorias" className="hover:text-brand transition-colors">Produtos</a></li>
              <li><a href="#diferenciais" className="hover:text-brand transition-colors">Diferenciais</a></li>
              <li><a href="#lojas" className="hover:text-brand transition-colors">Nossas Lojas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-black tracking-[0.2em] uppercase text-white mb-6">Atendimento</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand shrink-0" />
                <span>(11) 9999-99999<br/><span className="text-xs text-white/50 font-normal tracking-tight">WhatsApp / Ligações</span></span>
              </li>
              <li className="flex items-start gap-3 overflow-hidden">
                <Mail className="w-5 h-5 text-brand shrink-0" />
                <span className="break-all md:break-words">contato@depositodopaulo.com.br</span>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xs font-black tracking-[0.2em] uppercase text-white mb-6">Unidades</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand shrink-0" />
                <span><strong className="text-white">Loja 1 (Serra)</strong><br/><span className="text-white/50 font-normal">Rua Serenata, 46</span></span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand shrink-0" />
                <span><strong className="text-white">Loja 2 (São Lucas)</strong><br/><span className="text-white/50 font-normal">Rua Oliem Bonfim Guimarães, 320</span></span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Depósito do Paulo. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}