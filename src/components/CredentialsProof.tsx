import { Card } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay@8.6.0";
import { Star, Quote } from "lucide-react";
import testimonialMae from "../assets/testemunho-minhamae.avif";
import testimonialMiguel from "../assets/testemunho-drmiguel.avif";
import testimonialLarissa from "../assets/testemunho-larissa.avif";
import testimonialCicilia from "../assets/testemunho-cicilia.avif";
import testimonialLeo from "../assets/testemunho-leo.avif";
import testimonialVivian from "../assets/testemunho-vivian.avif";

export function CredentialsProof() {
  const testimonials = [
    { image: testimonialMae, name: "Minha Mãe", alt: "Depoimento Instagram - Mãe", platform: "instagram" },
    { image: testimonialMiguel, name: "Dr. Miguel T.", alt: "Depoimento WhatsApp - Miguel", platform: "whatsapp" },
    { image: testimonialLarissa, name: "Larissa", alt: "Depoimento WhatsApp - Larissa", platform: "whatsapp" },
    { image: testimonialCicilia, name: "Cicília Fernandes", alt: "Depoimento WhatsApp - Cicília", platform: "whatsapp" },
    { image: testimonialLeo, name: "Léo Ozawa", alt: "Depoimento WhatsApp - Léo", platform: "whatsapp" },
    { image: testimonialVivian, name: "Vivian Victor", alt: "Depoimento WhatsApp - Vivian", platform: "whatsapp" },
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
          <h3 className="font-headline text-[#224236] mb-8 text-center" style={{ fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 1.75rem)' }}>
            O que os alunos dizem
          </h3>
          
          {/* Video Testimonial - Renata */}
          <div className="max-w-5xl mx-auto mb-12 lg:mb-16">
            <div className="relative group">
              {/* Decorative background gradient */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#224236] via-[#CF5100] to-[#224236] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              
              {/* Video Container with Border */}
              <div className="relative bg-gradient-to-br from-[#224236] to-[#224236]/80 rounded-2xl p-4 shadow-2xl">
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

              {/* Video Info Below */}
              <div className="relative mt-6 text-center bg-white rounded-2xl p-6 shadow-lg">
                <Quote className="w-8 h-8 text-[#CF5100] mx-auto mb-3 opacity-50" />
                <p className="font-headline text-[#224236]" style={{ fontWeight: 700, fontSize: 'clamp(1.125rem, 3vw, 1.375rem)' }}>
                  Renata
                </p>
                <p className="font-body text-[#CF5100] mt-2" style={{ fontWeight: 600, fontSize: 'clamp(0.9375rem, 2.5vw, 1rem)' }}>
                  Vai continuar viajando sem se preocupar com os preços de passagens
                </p>
              </div>
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
                  <div className="group relative h-full p-2">
                    {/* Decorative gradient background - more subtle */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-[#224236] via-[#CF5100]/40 to-[#224236] rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
                    
                    <div className="relative bg-white rounded-2xl p-1 shadow-xl hover:shadow-2xl transition-all duration-300 h-full transform group-hover:-translate-y-2">
                      {/* Inner border gradient */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#224236] via-[#CF5100]/30 to-[#224236] opacity-100" />
                      
                      <div className="relative bg-white rounded-[14px] p-4 sm:p-5 h-full flex flex-col">
                        {/* Top badge */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-3.5 h-3.5 fill-[#CF5100] text-[#CF5100]" />
                            ))}
                          </div>
                          {testimonial.platform === "instagram" ? (
                            <div className="bg-gradient-to-tr from-[#FD5949] via-[#D6249F] to-[#285AEB] text-white px-2.5 py-1 rounded-full" style={{ fontSize: '0.6875rem', fontWeight: 600 }}>
                              Instagram
                            </div>
                          ) : (
                            <div className="bg-[#25D366]/10 text-[#25D366] px-2.5 py-1 rounded-full" style={{ fontSize: '0.6875rem', fontWeight: 600 }}>
                              WhatsApp
                            </div>
                          )}
                        </div>

                        {/* Screenshot */}
                        <div className="flex-1 flex items-center justify-center mb-3 bg-gradient-to-br from-[#EDE7DF]/30 to-[#EDE7DF]/10 rounded-xl p-2 sm:p-3 overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.alt}
                            className="w-full h-auto object-contain rounded-lg shadow-sm"
                            style={{ maxHeight: '300px' }}
                          />
                        </div>
                        
                        {/* Info section */}
                        <div className="text-center pt-3 border-t-2 border-[#224236]/10">
                          <Quote className="w-4 h-4 text-[#CF5100] mx-auto mb-1.5 opacity-40" />
                          <p className="font-headline text-[#224236]" style={{ fontWeight: 700, fontSize: 'clamp(0.9375rem, 2.8vw, 1.125rem)' }}>
                            {testimonial.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
