import { Card } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay@8.6.0";

// ✅ imports corrigidos
import testimonialMae from "../assets/testemunho-minhamae.avif";
import testimonialMiguel from "../assets/testemunho-drmiguel.avif";
import testimonialLarissa from "../assets/testemunho-larissa.avif";
import testimonialCicilia from "../assets/testemunho-cicilia.avif";
import testimonialLeo from "../assets/testemunho-leo.avif";
import testimonialVivian from "../assets/testemunho-vivian.avif";

export function CredentialsProof() {
  const testimonials = [
    { image: testimonialMae, name: "Minha Mãe", alt: "Depoimento WhatsApp - Mãe" },
    { image: testimonialMiguel, name: "Dr. Miguel T.", alt: "Depoimento WhatsApp - Miguel" },
    { image: testimonialLarissa, name: "Larissa", alt: "Depoimento WhatsApp - Larissa" },
    { image: testimonialCicilia, name: "Cicília Fernandes", alt: "Depoimento WhatsApp - Cicília" },
    { image: testimonialLeo, name: "Léo Ozawa", alt: "Depoimento WhatsApp - Léo" },
    { image: testimonialVivian, name: "Vivian Victor", alt: "Depoimento WhatsApp - Vivian" },
  ];

  const achados = [
    { route: "CWB–MIA", dates: "28/03–06/04", points: "27k + taxas", program: "Smiles" },
    { route: "GRU–LIS", dates: "15/05–30/05", points: "35k + taxas", program: "LATAM Pass" },
    { route: "RIO–BUE", dates: "10/06–17/06", points: "12k + taxas", program: "Smiles" },
    { route: "BSB–NYC", dates: "01/09–15/09", points: "45k + taxas", program: "Azul" },
    { route: "POA–SCL", dates: "20/07–30/07", points: "18k + taxas", program: "LATAM Pass" },
    { route: "FOR–MAD", dates: "05/08–20/08", points: "38k + taxas", program: "Smiles" },
  ];

  return (
    <section id="prova" className="py-16 md:py-24 bg-[#EDE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-[#224236] mb-6" style={{ fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
            Já ajudei minha mãe e mais de 800 alunos a realizarem sonhos de viagem.
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <h3 className="font-headline text-[#224236] mb-6 text-center" style={{ fontWeight: 700, fontSize: '1.75rem' }}>
            O que os alunos dizem
          </h3>

          {/* Video Testimonial - Renata */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <div className="bg-[#224236] rounded-2xl p-2 sm:p-3 shadow-lg">
              <div className="bg-black rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/T4JbDAyX21c"
                  title="Depoimento Renata - Mentoria Você Viaja"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="mt-3 sm:mt-4 text-center">
              <p className="font-headline text-[#224236]" style={{ fontWeight: 700, fontSize: 'clamp(1rem, 3vw, 1.125rem)' }}>
                Renata
              </p>
              <p className="font-body text-[#CF5100] mt-1" style={{ fontWeight: 600, fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
                Vai continuar viajando sem se preocupar com os preços de passagens
              </p>
            </div>
          </div>

          <Carousel 
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="p-3 sm:p-4 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] border-0 h-full flex flex-col">
                    <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl mb-2 sm:mb-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="w-full h-auto object-contain"
                        style={{ maxHeight: '300px' }}
                      />
                    </div>
                    <p className="font-body text-[#224236] text-center" style={{ fontWeight: 600, fontSize: 'clamp(0.8125rem, 2.5vw, 0.9375rem)' }}>
                      {testimonial.name}
                    </p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
