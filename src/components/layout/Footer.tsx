import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white text-ink py-10 border-t border-gray-100">
      <div className="max-w-[1024px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <img 
              src="/assets/logo.png" 
              alt="Depósito do Paulo Logo" 
              className="h-20 w-auto"
            />
            <p className="text-[13px] text-ink-muted leading-relaxed max-w-[240px]">
              Sua obra não pode parar. Preço justo e entrega rápida.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/depositodopaulo" target="_blank" rel="noopener noreferrer" className="h-8 w-8 flex items-center justify-center rounded-full border border-gray-100 hover:border-brand hover:bg-brand transition-colors text-ink hover:text-white">
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-ink/40 mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#inicio" className="hover:text-brand transition-colors">Início</a></li>
              <li><a href="#categorias" className="hover:text-brand transition-colors">Produtos</a></li>
              <li><a href="#lojas" className="hover:text-brand transition-colors">Nossas Lojas</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-ink/40 mb-4">Atendimento</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-brand shrink-0" />
                <a href="https://wa.me/553132836543" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">(31) 3283-6543</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-brand shrink-0" />
                <a href="https://instagram.com/depositodopaulo" target="_blank" rel="noopener noreferrer" className="text-xs text-ink-muted hover:text-brand transition-colors">@depositodopaulo</a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-ink/40 mb-4">Unidades</h3>
            <ul className="space-y-3 text-[12px] font-medium">
              <li className="flex items-start gap-2 text-ink-muted">
                <MapPin className="w-4 h-4 text-brand shrink-0" />
                <span><strong className="text-ink">Loja 1</strong>: Rua Serenata, 46</span>
              </li>
              <li className="flex items-start gap-2 text-ink-muted">
                <MapPin className="w-4 h-4 text-brand shrink-0" />
                <span><strong className="text-ink">Loja 2</strong>: Rua Oliem Bonfim, 320</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-ink/20 uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} Depósito do Paulo</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}