import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'motion/react';

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
    { name: 'Produtos', href: '#categorias' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Profissionais', href: '#profissionais' },
    { name: 'Lojas', href: '#lojas' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm h-[80px]' : 'bg-transparent h-[100px]'
      }`}
    >
      <div className="w-full h-full max-w-[1024px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0 relative z-10">
            <a href="#inicio" className="flex items-center gap-2">
               <div className={`font-extrabold text-[24px] tracking-tighter flex items-center gap-2 transition-colors ${isScrolled ? 'text-ink' : 'text-white'}`}>
                 DEPÓSITO<span className={isScrolled ? 'text-brand' : 'text-white'}>DO PAULO</span>
               </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-[14px] font-medium transition-colors ${isScrolled ? 'text-ink-muted hover:text-brand' : 'text-white/80 hover:text-white'}`}
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
          <div className="flex items-center md:hidden relative z-50">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${mobileMenuOpen ? 'text-white' : (isScrolled ? 'text-ink' : 'text-white')}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Abrir menu</span>
              {mobileMenuOpen ? <X className="h-8 w-8" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Area */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-ink pt-32 px-6 pb-6 shadow-2xl flex flex-col items-center justify-center text-center"
          >
            <div className="flex flex-col gap-8 w-full max-w-sm">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="block text-2xl font-black tracking-tighter text-white hover:text-brand transition-colors uppercase italic"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <Button variant="whatsapp" className="w-full text-lg py-6" asChild>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    Fazer Orçamento
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}