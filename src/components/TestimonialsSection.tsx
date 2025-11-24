import whatsapp1 from "figma:asset/d9f0a6d687abaf5249d70f7a125e12f18f160efd.png";
import whatsapp2 from "figma:asset/97ba1bbc5d3a9b77fe665a538531fcee0d74724a.png";
import whatsapp3 from "figma:asset/34cdbea8a66b496b6874a673688fb7d90a35b5e6.png";

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
    <section id="depoimentos" className="py-16 lg:py-24 bg-[#EDE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="font-headline text-[#224236] mb-3" style={{ fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Veja o que meus alunos falam
          </h2>
          <p className="font-body text-[#224236]/70 max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 3vw, 1.125rem)' }}>
            Depoimento real de quem está viajando com a mentoria
          </p>
        </div>

        {/* Video Testimonial - Denilson */}
        <div className="max-w-5xl mx-auto mb-12 lg:mb-16">
          <div className="relative">
            {/* Video Container with Border */}
            <div className="bg-[#224236] rounded-2xl p-3 shadow-lg">
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
            <div className="mt-6 text-center">
              <p className="font-headline text-[#224236]" style={{ fontWeight: 700, fontSize: 'clamp(1rem, 3vw, 1.125rem)' }}>
                Denilson Teichmann
              </p>
              <p className="font-body text-[#CF5100] mt-1" style={{ fontWeight: 600, fontSize: 'clamp(0.9375rem, 2.5vw, 1rem)' }}>
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
              className="bg-[#224236] rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow h-full"
            >
              <div className="bg-white rounded-xl p-3 sm:p-4 h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center mb-3 sm:mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-full h-auto object-contain rounded-xl"
                    style={{ maxHeight: '280px' }}
                  />
                </div>
                <div className="text-center pt-3 border-t border-[#224236]/10">
                  <p className="font-headline text-[#224236] mb-1" style={{ fontWeight: 700, fontSize: 'clamp(0.9375rem, 3vw, 1.125rem)' }}>
                    {testimonial.name}
                  </p>
                  <p className="font-body text-[#224236]/70 mb-2" style={{ fontWeight: 500, fontSize: 'clamp(0.75rem, 2.5vw, 0.8125rem)' }}>
                    {testimonial.details}
                  </p>
                  <p className="font-body text-[#CF5100]" style={{ fontWeight: 700, fontSize: 'clamp(0.8125rem, 2.8vw, 0.9375rem)' }}>
                    {testimonial.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
