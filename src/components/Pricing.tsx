import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { X, Check, Video, CreditCard, Users, Target, Sparkles, Package } from "lucide-react";

export function Pricing() {
  const marketStack = [
    {
      icon: Video,
      title: "Curso com 200 aulas",
      description: "que nem metade das pessoas assiste e menos colocam em prática",
      price: "R$ 1.497"
    },
    {
      icon: Sparkles,
      title: "5 lives gravadas",
      description: "que foram as \"iscas\" pra você comprar o curso",
      price: "R$ 47,90"
    },
    {
      icon: CreditCard,
      title: "Análise de cartão",
      description: "isso é o básico, não um extra.",
      price: "R$ 297"
    },
    {
      icon: Sparkles,
      title: "3 bônus com burrice artificial",
      description: "mais coisinhas que vão inventar pra fingir que tem mais conteúdo",
      price: "R$ 1.147"
    }
  ];

  const realDeliverables = [
    {
      icon: Target,
      title: "Mentoria personalizada",
      description: "em 2 encontros você já sabe o que precisa pra viajar"
    },
    {
      icon: Sparkles,
      title: "Compras do dia a dia rendendo 10-20x mais milhas",
      description: "quando usadas do jeito certo."
    },
    {
      icon: CreditCard,
      title: "Plano de cartões alinhado aos seus gastos",
      description: "benefícios reais, sem anuidades absurdas sob controle."
    },
    {
      icon: Check,
      title: "Passo a passo de emissão",
      description: "(nacional e internacional) com ferramentas que poupam tempo."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-headline text-[#224236] mb-4" style={{ fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
            Preço honesto, sem malabarismo.
          </h2>
          <p className="font-body text-[#224236]/80 max-w-3xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
            Aqui não tem "200 aulas", "bônus surpresa" nem combo mágico.<br />
            Tem um acompanhamento completo pra você viajar de verdade e não ficar só assistindo cursinho à toa.
          </p>
        </div>

        {/* Two Columns Comparison */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12">
          {/* Column A - Market Stack */}
          <div className="relative">
            {/* Big X overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25 z-20">
              <X className="w-full h-full text-red-600" strokeWidth={5} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                </div>
                <h3 className="font-headline text-[#224236]" style={{ fontWeight: 700, fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>
                  Como o mercado engana
                </h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {marketStack.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} className="p-4 sm:p-5 bg-[#EDE7DF] rounded-xl border-0 shadow-sm">
                      <div className="flex gap-3 sm:gap-4 items-start justify-between">
                        <div className="flex gap-3 sm:gap-4 flex-1">
                          <div className="flex-shrink-0">
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#224236]/40 mt-1" strokeWidth={1.5} />
                          </div>
                          <div className="flex-1">
                            <p className="font-headline text-[#224236] mb-1" style={{ fontWeight: 600, fontSize: 'clamp(0.9375rem, 2.8vw, 1rem)' }}>
                              {item.title}
                            </p>
                            <p className="font-body text-[#224236]/70" style={{ fontSize: 'clamp(0.8125rem, 2.5vw, 0.9375rem)' }}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <p className="font-mono text-[#224236]/60" style={{ fontWeight: 600, fontSize: 'clamp(0.875rem, 2.6vw, 0.9375rem)' }}>
                            {item.price}
                          </p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column B - Real Deliverables */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#224236] flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <h3 className="font-headline text-[#224236]" style={{ fontWeight: 700, fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>
                O que você realmente leva
              </h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {realDeliverables.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-4 sm:p-5 bg-[#224236] rounded-xl border-0 shadow-md">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#CF5100] mt-1" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="font-headline text-white mb-1" style={{ fontWeight: 600, fontSize: 'clamp(0.9375rem, 2.8vw, 1rem)' }}>
                          {item.title}
                        </p>
                        <p className="font-body text-white/80" style={{ fontSize: 'clamp(0.8125rem, 2.5vw, 0.9375rem)' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Value Statement */}
        <Card className="p-6 sm:p-8 md:p-12 bg-[#EDE7DF] rounded-2xl border-0 shadow-lg max-w-4xl mx-auto mb-8">
          <p className="font-body text-[#224236] text-center mb-6" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', lineHeight: '1.7' }}>
            Os "gurus" empilham isso tudo e chegam a{" "}
            <span className="font-headline text-[#CF5100]" style={{ fontWeight: 700 }}>
              ~R$ 3.000
            </span>
            {" "}te entregando um conteúdo genérico que gravaram há 2 anos atrás.
          </p>
          <p className="font-body text-[#224236] text-center mb-8" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', lineHeight: '1.7', fontWeight: 600 }}>
            Aqui, tudo que você precisa aprender está na mentoria, direto ao ponto, personalizado, por{" "}
            <span className="font-headline text-[#224236]" style={{ fontWeight: 800 }}>
              metade desse valor
            </span>
            .
          </p>
          
          <div className="text-center bg-white rounded-xl p-5 sm:p-6">
            <p className="font-headline text-[#224236] mb-4" style={{ fontWeight: 700, fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)' }}>
              Fale comigo no WhatsApp para fechar sua mentoria
            </p>
            <p className="font-body text-[#224236]/70 mb-5" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
              Vou te passar todos os detalhes, tirar suas dúvidas e agendar seus encontros
            </p>
            <Button
              onClick={() => window.open('https://wa.me/5544988264128?text=Oi!%20Gostei%20do%20seu%20conte%C3%BAdo%20e%20quero%20fechar%20a%20mentoria%20contigo.', '_blank')}
              className="bg-[#CF5100] hover:bg-[#a94100] text-white rounded-xl px-6 sm:px-10 md:px-12 py-5 sm:py-6 w-full sm:w-auto"
              style={{ fontWeight: 600, fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}
            >
              💬 Falar no WhatsApp e fechar
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
