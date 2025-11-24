import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611023305439-2d0a3ebaaf69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBnb2xkZW4lMjBob3VyJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc2MTYyNTc4NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#224236]/95 via-[#224236]/80 to-[#224236]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="font-headline text-white mb-6" style={{ fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.2' }}>
            Mentoria Você Viaja — seu projeto de viagem, em prática: escolhas certas, memórias pra vida.
          </h1>
          
          <p className="font-body text-white/90 mb-8" style={{ fontSize: 'clamp(1rem, 3vw, 1.125rem)', lineHeight: '1.7' }}>
            Conteúdo individual e personalizado, pra viajar mais gastando muito menos
          </p>

          <div className="flex flex-col gap-4 mb-8">
            <Button
              onClick={() => window.open('https://wa.me/5544988264128?text=Oi!%20Gostei%20do%20seu%20conte%C3%BAdo%20e%20quero%20fechar%20a%20mentoria%20contigo.', '_blank')}
              className="bg-[#CF5100] hover:bg-[#a94100] text-white rounded-xl px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
              style={{ fontWeight: 600, fontSize: 'clamp(1rem, 3vw, 1.125rem)' }}
            >
              Falar no WhatsApp e fechar mentoria
            </Button>
            <p className="font-body text-white/90 text-center sm:text-left" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
              💬 Fale comigo direto no WhatsApp para mais detalhes e fechamento
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 px-3 sm:px-4 py-2 rounded-xl font-mono" style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)' }}>
              Método simples
            </Badge>
            <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 px-3 sm:px-4 py-2 rounded-xl font-mono" style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)' }}>
              Para sua realidade
            </Badge>
            <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 px-3 sm:px-4 py-2 rounded-xl font-mono" style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)' }}>
              + 800 alunos realizando sonhos de viagens
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
