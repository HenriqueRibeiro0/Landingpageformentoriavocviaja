import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra o botão após rolar 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.open(
      'https://wa.me/5544988264128?text=Oi!%20Gostei%20do%20seu%20conte%C3%BAdo%20e%20quero%20fechar%20a%20mentoria%20contigo.',
      '_blank'
    );
  };

  return (
    <>
      {/* Mobile floating button */}
      <div 
        className={`fixed bottom-4 right-4 z-50 transition-all duration-300 md:hidden ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
      >
        <button
          onClick={handleClick}
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] transition-all"
          style={{ fontWeight: 600, fontSize: '0.9375rem' }}
        >
          <MessageCircle className="w-5 h-5" />
          <span>Falar no WhatsApp</span>
        </button>
      </div>

      {/* Desktop sticky bar - aparece no topo quando rola */}
      <div 
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 bg-[#224236] shadow-lg transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <p className="font-headline text-white" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
              Mentoria Você Viaja — Viaje mais gastando menos
            </p>
            <button
              onClick={handleClick}
              className="flex items-center gap-2 bg-[#CF5100] hover:bg-[#a94100] text-white px-6 py-2.5 rounded-xl transition-all"
              style={{ fontWeight: 600, fontSize: '1rem' }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
