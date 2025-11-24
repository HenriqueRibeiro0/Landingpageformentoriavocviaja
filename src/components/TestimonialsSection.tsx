import whatsapp1 from "../assets/testemunho-rafa.avif";
import whatsapp2 from "../assets/testemunho-ricardo.avif";
import whatsapp3 from "../assets/testemunho-helio.avif";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    { 
      image: whatsapp1, 
      alt: "Depoimento WhatsApp - Rafael", 
      name: "Rafael", 
      details: "Viajou para Paris com esposa e filho",
      highlight: "Economizou R$ 2.500"
    },
    { 
      image: whatsapp2, 
      alt: "Depoimento WhatsApp - Ricardo", 
      name: "Ricardo", 
      details: "Já viajava muito",
      highlight: "Economizou +R$ 5.000 em 6 meses"
    },
    { 
      image: whatsapp3, 
      alt: "Depoimento WhatsApp - Hélio", 
      name: "Hélio Araújo", 
      details: "Um dos primeiros alunos",
      highlight: "Na 2ª mentoria já estava em Paris"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#EDE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 sm:w-6 sm:h-6 fill-[#CF5100] text-[#CF5100]" />
            ))}
          </div>
          <h2 className="font-headline text-[#224236] mb-3" style={{ fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Veja o que meus alunos falam
          </h2>
          <p className="font-body text-[#224236]/70 max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 3vw, 1.125rem)' }}>
            Depoimento real de quem está viajando com a mentoria
          </p>
        </div>

        {/* Video Testimonial - Denilson */}
        <div className="max-w-5xl mx-auto mb-12 lg:mb-16">
          <div className="relative group">
            {/* Decorative background gradient */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#224236] via-[#CF5100] to-[#224236] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            
            {/* Video Container with Border */}
            <div className="relative bg-gradient-to-br from-[#224236] to-[#224236]/80 rounded-2xl p-4 shadow-2xl">
              <div className="bg-black rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/sz37CKV16Yg"
                  title="Depoimento de Aluno - Mentoria Você Viaja"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Video Info Below */}
            <div className="relative mt-6 text-center bg-white rounded-2xl p-6 shadow-lg">
              <Quote className="w-8 h-8 text-[#CF5100] mx-auto mb-3 opacity-50" />
              <p className="font-headline text-[#224236]" style={{ fontWeight: 700, fontSize: 'clamp(1.125rem, 3vw, 1.375rem)' }}>
                Denilson Teichmann
              </p>
              <p className="font-body text-[#CF5100] mt-2" style={{ fontWeight: 600, fontSize: 'clamp(0.9375rem, 2.5vw, 1rem)' }}>
                Realizou o sonho de viajar com sua esposa e sua filha
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Screenshots - Rafael, Ricardo e Hélio */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Decorative gradient background - more subtle */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#224236] via-[#CF5100]/40 to-[#224236] rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
              
              <div className="relative bg-white rounded-2xl p-1 shadow-xl hover:shadow-2xl transition-all duration-300 h-full transform group-hover:-translate-y-2">
                {/* Inner border gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#224236] via-[#CF5100]/30 to-[#224236] opacity-100" />
                
                <div className="relative bg-white rounded-[14px] p-5 sm:p-6 h-full flex flex-col">
                  {/* Top badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-[#CF5100] text-[#CF5100]" />
                      ))}
                    </div>
                    <div className="bg-[#25D366]/10 text-[#25D366] px-3 py-1 rounded-full" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                      WhatsApp
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="flex-1 flex items-center justify-center mb-4 bg-gradient-to-br from-[#EDE7DF]/30 to-[#EDE7DF]/10 rounded-xl p-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-full h-auto object-contain rounded-lg shadow-sm"
                      style={{ maxHeight: '300px' }}
                    />
                  </div>
                  
                  {/* Info section */}
                  <div className="text-center pt-4 border-t-2 border-[#224236]/10">
                    <Quote className="w-5 h-5 text-[#CF5100] mx-auto mb-2 opacity-40" />
                    <p className="font-headline text-[#224236] mb-1.5" style={{ fontWeight: 700, fontSize: 'clamp(1.0625rem, 3vw, 1.375rem)' }}>
                      {testimonial.name}
                    </p>
                    <p className="font-body text-[#224236]/70 mb-3" style={{ fontWeight: 500, fontSize: 'clamp(0.8125rem, 2.5vw, 0.9375rem)', lineHeight: '1.5' }}>
                      {testimonial.details}
                    </p>
                    <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#CF5100]/10 via-[#CF5100]/20 to-[#CF5100]/10 rounded-full px-5 py-2.5 border-2 border-[#CF5100]/20">
                      <p className="font-headline text-[#CF5100]" style={{ fontWeight: 800, fontSize: 'clamp(0.9375rem, 2.8vw, 1.125rem)' }}>
                        {testimonial.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
