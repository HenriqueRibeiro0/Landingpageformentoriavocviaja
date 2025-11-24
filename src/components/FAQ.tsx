import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

export function FAQ() {
  const faqs = [
    {
      question: "Como funciona a mentoria?",
      answer: "São 2 encontros 1:1 online, totalmente personalizados pro seu perfil. No primeiro encontro, falamos sobre acúmulo de milhas (cartões, bônus, clubes). No segundo, sobre como emitir passagens com milhas. Tudo é gravado pra você reassistir sempre que precisar."
    },
    {
      question: "Preciso já ter milhas acumuladas?",
      answer: "Não! A mentoria serve tanto pra quem está começando do zero quanto pra quem já tem milhas mas não sabe usar direito. Vou te mostrar as melhores formas de acumular no seu dia a dia."
    },
    {
      question: "Consigo realmente viajar gastando menos?",
      answer: "Sim! Com as estratégias certas, você pode viajar pagando apenas as taxas aeroportuárias (que geralmente são menos de 10% do valor original da passagem)."
    },
    {
      question: "Quanto tempo leva pra acumular milhas?",
      answer: "Depende do seu perfil de gastos, mas com as estratégias que ensino, muitos alunos conseguem acumular milhas suficientes pra primeira viagem em 3-6 meses usando apenas gastos do dia a dia."
    },
    {
      question: "Vou ter que gastar muito pra acumular milhas?",
      answer: "Não! O segredo é usar milhas nas compras que você já faz normalmente: mercado, farmácia, contas, uber, iFood, etc. Não é sobre gastar mais, é sobre gastar melhor."
    },
    {
      question: "E se eu tiver dúvidas depois da mentoria?",
      answer: "As mentorias ficam gravadas pra você reassistir sempre que precisar. Além disso, você terá suporte diretamente comigo pelo WhatsApp com dúvidas pontuais durante 6 meses."
    },
    {
      question: "Como faço pra fechar a mentoria?",
      answer: "É só clicar no botão 'Falar no WhatsApp' e me chamar. Lá eu passo todos os detalhes, valores, formas de pagamento e a gente agenda os encontros de acordo com sua disponibilidade. Todo o fechamento é feito diretamente comigo pelo WhatsApp."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-[#224236] mb-12 text-center" style={{ fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
          Perguntas frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[#EDE7DF] rounded-2xl px-4 sm:px-6 border-0 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              <AccordionTrigger className="font-headline text-[#224236] hover:no-underline py-5 sm:py-6" style={{ fontWeight: 700, fontSize: 'clamp(1rem, 3vw, 1.125rem)', textAlign: 'left' }}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-[#121212] pb-5 sm:pb-6" style={{ fontSize: 'clamp(0.9375rem, 2.8vw, 1.0625rem)', lineHeight: '1.7' }}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA após FAQ */}
        <div className="mt-12 text-center">
          <div className="bg-[#224236] rounded-2xl p-6 sm:p-8">
            <p className="font-headline text-white mb-4" style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)', lineHeight: '1.3' }}>
              Ainda tem dúvidas? Fale comigo!
            </p>
            <p className="font-body text-white/90 mb-6" style={{ fontSize: 'clamp(0.9375rem, 2.8vw, 1.0625rem)', lineHeight: '1.6' }}>
              Vou te explicar tudo que você precisa saber e te ajudar a dar o primeiro passo
            </p>
            <Button
              onClick={() => window.open('https://wa.me/5544988264128?text=Oi!%20Gostei%20do%20seu%20conte%C3%BAdo%20e%20quero%20fechar%20a%20mentoria%20contigo.', '_blank')}
              className="bg-[#CF5100] hover:bg-[#a94100] text-white rounded-xl px-6 sm:px-10 py-5 sm:py-6 w-full sm:w-auto"
              style={{ fontWeight: 600, fontSize: 'clamp(1rem, 3vw, 1.125rem)' }}
            >
              💬 Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}