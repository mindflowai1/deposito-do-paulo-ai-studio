import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Categorias', href: '#categorias' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Profissionais', href: '#profissionais' },
    { name: 'Lojas', href: '#lojas' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm h-[80px]' : 'bg-white border-b border-gray-100 h-[80px]'
      }`}
    >
      <div className="w-full h-full max-w-[1024px] mx-auto px-12">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0 relative z-10">
            <a href="#inicio" className="flex items-center gap-2">
               <div className="font-extrabold text-[24px] tracking-tighter text-ink flex items-center gap-2">
                 DEPÓSITO<span className="text-brand">DO PAULO</span>
               </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[14px] font-medium text-ink-muted hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Button variant="whatsapp" size="sm" asChild>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Orçamento pelo WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden relative z-10">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-ink"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Abrir menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Area */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-0 bg-white pt-24 px-6 pb-6 shadow-xl">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 tracking-tight text-ink hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Button variant="whatsapp" className="w-full" asChild>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Fazer Orçamento
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
