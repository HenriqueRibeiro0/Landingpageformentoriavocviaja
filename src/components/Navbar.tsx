import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#EDE7DF] border-b border-[#224236]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="font-headline" style={{ fontSize: '1.25rem' }}>
              <span className="text-[#CF5100]" style={{ fontWeight: 800 }}>Mentoria</span> <span className="text-[#224236]" style={{ fontWeight: 800 }}>Você Viaja</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="font-body text-[#224236] hover:text-[#CF5100] transition-colors"
              style={{ fontWeight: 500 }}
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="font-body text-[#224236] hover:text-[#CF5100] transition-colors"
              style={{ fontWeight: 500 }}
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection('o-que-leva')}
              className="font-body text-[#224236] hover:text-[#CF5100] transition-colors"
              style={{ fontWeight: 500 }}
            >
              O que você leva
            </button>
            <button
              onClick={() => scrollToSection('preco')}
              className="font-body text-[#224236] hover:text-[#CF5100] transition-colors"
              style={{ fontWeight: 500 }}
            >
              Preço
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="font-body text-[#224236] hover:text-[#CF5100] transition-colors"
              style={{ fontWeight: 500 }}
            >
              FAQ
            </button>
            <Button
              onClick={() => window.open('https://wa.me/5544988264128', '_blank')}
              className="bg-[#CF5100] hover:bg-[#a94100] text-white rounded-xl px-6"
              style={{ fontWeight: 600 }}
            >
              Quero viajar de verdade!
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#224236]/10"
          >
            <Menu className="h-6 w-6 text-[#224236]" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-[#224236]/10">
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="block w-full text-left font-body text-[#224236] hover:text-[#CF5100] transition-colors py-2"
              style={{ fontWeight: 500 }}
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="block w-full text-left font-body text-[#224236] hover:text-[#CF5100] transition-colors py-2"
              style={{ fontWeight: 500 }}
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection('o-que-leva')}
              className="block w-full text-left font-body text-[#224236] hover:text-[#CF5100] transition-colors py-2"
              style={{ fontWeight: 500 }}
            >
              O que você leva
            </button>
            <button
              onClick={() => scrollToSection('preco')}
              className="block w-full text-left font-body text-[#224236] hover:text-[#CF5100] transition-colors py-2"
              style={{ fontWeight: 500 }}
            >
              Preço
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left font-body text-[#224236] hover:text-[#CF5100] transition-colors py-2"
              style={{ fontWeight: 500 }}
            >
              FAQ
            </button>
            <Button
              onClick={() => window.open('https://wa.me/5544988264128', '_blank')}
              className="w-full bg-[#CF5100] hover:bg-[#a94100] text-white rounded-xl"
              style={{ fontWeight: 600 }}
            >
              Quero viajar de verdade!
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
