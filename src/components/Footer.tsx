import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-[#224236] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Bio */}
          <div>
            <h3 className="font-headline mb-4" style={{ fontWeight: 700, fontSize: '1.5rem' }}>
              Mentoria Você Viaja
            </h3>
            <p className="font-body text-white/90 mb-4" style={{ lineHeight: '1.7' }}>
              Ajudo pessoas comuns a viajarem mais e melhor usando milhas. Já foram mais de 800 alunos que transformaram suas compras do dia a dia em viagens inesquecíveis.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col justify-center">
            <h4 className="font-headline mb-2" style={{ fontWeight: 700, fontSize: 'clamp(1.125rem, 3vw, 1.25rem)' }}>
              Pronto para viajar mais?
            </h4>
            <p className="font-body text-white/80 mb-4" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
              Fale comigo no WhatsApp para fechar sua mentoria
            </p>
            <a
              href="https://wa.me/5544988264128?text=Oi!%20Gostei%20do%20seu%20conte%C3%BAdo%20e%20quero%20fechar%20a%20mentoria%20contigo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl transition-colors w-fit"
              style={{ fontWeight: 600, fontSize: 'clamp(0.9375rem, 2.5vw, 1rem)' }}
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-8 border-t border-white/10">
          <p className="font-body text-white/70 text-center" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
            * Disponibilidade de passagens e valores em milhas podem variar conforme programa de fidelidade, datas e rotas. 
            Os exemplos apresentados são baseados em casos reais de emissões realizadas, mas não garantem valores futuros.
          </p>
          <p className="font-body text-white/70 text-center mt-4" style={{ fontSize: '0.875rem' }}>
            © 2025 Mentoria Você Viaja. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
