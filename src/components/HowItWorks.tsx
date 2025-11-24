import { Card } from "./ui/card";
import { Plane, CreditCard, CheckCircle, Video, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function HowItWorks() {
  const whatsappUrl = "https://wa.me/5544988264128?text=Oi!%20Gostei%20do%20seu%20conte%C3%BAdo%20e%20quero%20fechar%20a%20mentoria%20contigo.";

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-[#EDE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-[#224236] mb-12 text-center" style={{ fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
          Como funciona
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 - Consultoria de cartões - BLOCO GRANDE */}
          <Card className="p-5 sm:p-6 md:p-8 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] border-0 hover:shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition-shadow md:col-span-2 relative">
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#CF5100] flex items-center justify-center shadow-lg">
              <span className="font-mono text-white" style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>1</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#CF5100]/10 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-[#CF5100]" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline text-[#224236]" style={{ fontWeight: 700, fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>
                Consultoria de cartões
              </h3>
            </div>
            <p className="font-body text-[#121212] mb-4" style={{ lineHeight: '1.7', fontSize: 'clamp(0.9375rem, 2.8vw, 1.0625rem)' }}>
              Vou analisar seu perfil e sugerir os melhores cartões para seu estilo de vida e faixa de gastos, com os melhores benefícios para você, sem que ter que ficar gastando com anuidades absurdas
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-[#224236] text-white rounded-lg font-body" style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)', fontWeight: 600 }}>
                Mais pontos
              </span>
              <span className="px-3 py-1.5 bg-[#224236] text-white rounded-lg font-body" style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)', fontWeight: 600 }}>
                Salas VIP
              </span>
              <span className="px-3 py-1.5 bg-[#224236] text-white rounded-lg font-body" style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)', fontWeight: 600 }}>
                Seguro Viagem
              </span>
              <span className="px-3 py-1.5 bg-[#CF5100] text-white rounded-lg font-body" style={{ fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)', fontWeight: 600 }}>
                Zero anuidade
              </span>
            </div>
          </Card>

          {/* Card 2 - Encontros individuais - BLOCO GRANDE */}
          <Card className="p-5 sm:p-6 md:p-8 bg-[#CF5100] rounded-2xl shadow-[0_8px_24px_rgba(207,81,0,0.24)] border-0 hover:shadow-[0_12px_32px_rgba(207,81,0,0.32)] transition-shadow md:col-span-2 relative">
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
              <span className="font-mono text-[#CF5100]" style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>2</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <Video className="w-6 h-6 sm:w-8 sm:h-8 text-[#CF5100]" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline text-white" style={{ fontWeight: 700, fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>
                Encontros individuais
              </h3>
            </div>
            <p className="font-body text-white" style={{ lineHeight: '1.7', fontSize: 'clamp(0.9375rem, 2.8vw, 1.0625rem)' }}>
              Mentorias <span style={{ fontWeight: 700 }}>individuais ao vivo diretamente comigo</span>, onde você tem toda minha atenção para suas dúvidas e situação específica.
            </p>
          </Card>

          {/* Card 3 - Encontro 1 */}
          <Card className="p-5 sm:p-6 md:p-8 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] border-0 hover:shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition-shadow">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#224236]/10 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-[#224236]" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline text-[#224236]" style={{ fontWeight: 700, fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>
                Encontro 1 — Acúmulo que acelera viagem
              </h3>
            </div>
            <p className="font-body text-[#121212]" style={{ lineHeight: '1.7', fontSize: 'clamp(0.9375rem, 2.8vw, 1.0625rem)' }}>
              Você vai começar a acumular <span style={{ fontWeight: 700, color: '#CF5100' }}>10-20x mais milhas</span> com compras do dia a dia, como: mercado, farmácia, roupas, eletrônicos, reservas de hotel/Airbnb, aluguel de carro, iFood, Uber. Aprender a <span style={{ fontWeight: 700 }}>dobrar os pontos de forma gratuita</span> e quando vale a pena assinar clubes de fidelidade.
            </p>
          </Card>

          {/* Card 4 - Encontro 2 */}
          <Card className="p-5 sm:p-6 md:p-8 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] border-0 hover:shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition-shadow">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#224236]/10 flex items-center justify-center flex-shrink-0">
                <Plane className="w-6 h-6 sm:w-8 sm:h-8 text-[#224236]" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline text-[#224236]" style={{ fontWeight: 700, fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>
                Encontro 2 — Emissão eficiente, sem enrolação
              </h3>
            </div>
            <p className="font-body text-[#121212]" style={{ lineHeight: '1.7', fontSize: 'clamp(0.9375rem, 2.8vw, 1.0625rem)' }}>
              Você vai entender como achar a <span style={{ fontWeight: 700, color: '#CF5100' }}>passagem ideal</span> para você, tanto <span style={{ fontWeight: 700 }}>nacional como internacional</span>. Passo a passo claro com ferramentas que vão poupar muito do seu tempo e te ajudar a economizar muito nas suas viagens.
            </p>
          </Card>

          {/* Card 5 - Acompanhamento - BLOCO GRANDE */}
          <Card className="p-5 sm:p-6 md:p-8 bg-[#224236] rounded-2xl shadow-[0_8px_24px_rgba(34,66,54,0.24)] border-0 md:col-span-2 hover:shadow-[0_12px_32px_rgba(34,66,54,0.32)] transition-shadow relative">
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#CF5100] flex items-center justify-center shadow-lg">
              <span className="font-mono text-white" style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}>3</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#224236]" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline text-white" style={{ fontWeight: 700, fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>
                Acompanhamento completo
              </h3>
            </div>
            <p className="font-body text-white" style={{ lineHeight: '1.7', fontSize: 'clamp(0.9375rem, 2.8vw, 1.0625rem)' }}>
              Acompanhamento completo para tirar dúvidas por <span style={{ fontWeight: 700, color: '#CF5100' }}>6 meses</span> comigo. Você <span style={{ fontWeight: 700 }}>não fica sozinho</span> após as mentorias.
            </p>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="font-body text-[#224236] bg-white inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-sm" style={{ fontSize: 'clamp(0.8125rem, 2.5vw, 0.9375rem)', fontWeight: 500 }}>
            💡 As mentorias são gravadas para você reassistir quando precisar.
          </p>
        </div>

        {/* Destaque final */}
        <div className="text-center mt-12 mb-8">
          <div className="bg-gradient-to-r from-[#2d5246] to-[#224236] inline-block px-5 sm:px-8 py-4 sm:py-5 rounded-2xl shadow-[0_8px_24px_rgba(34,66,54,0.32)]">
            <p className="font-headline text-white" style={{ fontWeight: 700, fontSize: 'clamp(1.125rem, 3.5vw, 1.75rem)', lineHeight: '1.4' }}>
              Um processo <span style={{ color: '#EDE7DF' }}>rápido, prático e personalizado</span> pra você viajar sempre que quiser
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-lg">
            <p className="font-headline text-[#224236] mb-4" style={{ fontWeight: 700, fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)', lineHeight: '1.3' }}>
              Pronto para começar a viajar mais gastando menos?
            </p>
            <p className="font-body text-[#224236]/80 mb-6" style={{ fontSize: 'clamp(0.9375rem, 2.8vw, 1.0625rem)', lineHeight: '1.6' }}>
              Fale comigo no WhatsApp para receber todos os detalhes e fechar sua mentoria personalizada
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-[#CF5100] hover:bg-[#B54700] text-white px-8 sm:px-10 py-5 sm:py-6 rounded-2xl shadow-[0_8px_24px_rgba(207,81,0,0.32)] hover:shadow-[0_12px_32px_rgba(207,81,0,0.4)] transition-all w-full sm:w-auto"
                style={{ fontSize: 'clamp(1rem, 3vw, 1.125rem)', fontWeight: 700 }}
              >
                💬 Falar no WhatsApp agora
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
