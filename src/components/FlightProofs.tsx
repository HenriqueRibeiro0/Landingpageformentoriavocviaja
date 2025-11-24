import flight1 from "../assets/c708a1b4c250a8c7e091c006a2166a75c639c087.png";
import flight2 from "../assets/74c6904520aa18e9eab95d505570cdaa48b36dfd.png";
import flight3 from "../assets/36feb5c12866dc05000fc3c7955e9ad614e0c9ef.png";
import flight4 from "../assets/781eec77322a53e57a7e378e1868923b26ab9efd.png";
import flight5 from "../assets/5262252d8ad60df9f20cd93dfee5ecb628cbbf84.png";
import flight6 from "../assets/GRU-MCO.avif";
import flight7 from "../assets/e9ca89132b72f3b30fd96bdd268c3b0cfffaaa63.png";
import { Plane, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function FlightProofs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const flights = [
    {
      image: flight1,
      alt: "Voo Campinas para Lisboa - 69.160 pontos",
      destination: "LISBOA",
      points: "69.160",
      unit: "milhas azul"
    },
    {
      image: flight2,
      alt: "Voos Fernando de Noronha - 32.900 pontos",
      destination: "FERNANDO DE NORONHA",
      points: "32.900",
      unit: "milhas azul"
    },
    {
      image: flight3,
      alt: "Voo São Paulo para Madrid - 18.000 Avios",
      destination: "MADRID",
      points: "18.000",
      unit: "avios iberia"
    },
    {
      image: flight4,
      alt: "Voo Gramado",
      destination: "GRAMADO",
      points: "3.360",
      unit: "milhas latam"
    },
    {
      image: flight5,
      alt: "Voo Salvador",
      destination: "SALVADOR",
      points: "28.000",
      unit: "milhas azul"
    },
    {
      image: flight6,
      alt: "Voo Orlando",
      destination: "ORLANDO",
      points: "74.644",
      unit: "milhas latam"
    },
    {
      image: flight7,
      alt: "Voo Miami",
      destination: "MIAMI",
      points: "59.200",
      unit: "milhas smiles"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % flights.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, flights.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % flights.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + flights.length) % flights.length);
    setIsAutoPlaying(false);
  };

  const getVisibleFlights = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(flights[(currentIndex + i) % flights.length]);
    }
    return visible;
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#CF5100]/10 mb-6">
            <Plane className="text-[#CF5100]" size={32} />
          </div>
          <h2 className="font-headline text-[#224236] mb-4" style={{ fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Passagens reais que vão te economizar de <span style={{ color: '#CF5100' }}>20% a 80%</span> do preço normal
          </h2>
          <p className="font-body text-[#224236]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Exemplos de passagens que eu encontro e você vai aprender a encontrar também
          </p>
        </div>

        {/* Message Card */}
        <div className="mb-12 flex justify-center">
          <div className="bg-[#224236] rounded-2xl px-4 sm:px-6 py-3 sm:py-4 max-w-2xl">
            <p className="font-headline text-white text-center" style={{ fontWeight: 700, fontSize: 'clamp(0.9375rem, 3vw, 1.25rem)', lineHeight: '1.4' }}>
              Aplicando o que eu vou te ensinar você viaja pra esse e muitos outros destinos nos próximos 6 meses
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-[#EDE7DF] transition-colors hidden lg:flex items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft className="text-[#224236]" size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-[#EDE7DF] transition-colors hidden lg:flex items-center justify-center"
            aria-label="Próximo"
          >
            <ChevronRight className="text-[#224236]" size={24} />
          </button>

          {/* Desktop - 3 cards */}
          <div 
            className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {getVisibleFlights().map((flight, index) => (
              <div key={`${currentIndex}-${index}`} className="animate-fade-in">
                <div className="bg-[#EDE7DF] rounded-2xl p-4 hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="bg-white rounded-xl overflow-hidden mb-6 shadow-sm" style={{ height: '500px' }}>
                    <img
                      src={flight.image}
                      alt={flight.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="px-2 text-center">
                    <p className="font-headline text-[#224236] mb-1" style={{ fontWeight: 800, fontSize: '1.75rem', lineHeight: '1.2', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                      {flight.destination}
                    </p>
                    {flight.subtitle && (
                      <p className="font-headline text-[#224236]/70 mb-3" style={{ fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {flight.subtitle}
                      </p>
                    )}
                    <div className="mt-4 pt-4 border-t border-[#224236]/10">
                      <p className="font-mono text-[#CF5100] mb-1" style={{ fontWeight: 600, fontSize: '1.5rem', lineHeight: '1' }}>
                        {flight.points}
                      </p>
                      <p className="font-body text-[#224236]/60" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {flight.unit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet - 1 card */}
          <div className="lg:hidden">
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <div className="bg-[#EDE7DF] rounded-2xl p-3 sm:p-4 hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="bg-white rounded-xl overflow-hidden mb-4 sm:mb-6 shadow-sm" style={{ minHeight: '320px', maxHeight: '450px' }}>
                    <img
                      src={flights[currentIndex].image}
                      alt={flights[currentIndex].alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="px-2 text-center">
                    <p className="font-headline text-[#224236] mb-1" style={{ fontWeight: 800, fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', lineHeight: '1.2', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                      {flights[currentIndex].destination}
                    </p>
                    {flights[currentIndex].subtitle && (
                      <p className="font-headline text-[#224236]/70 mb-3" style={{ fontWeight: 600, fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {flights[currentIndex].subtitle}
                      </p>
                    )}
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#224236]/10">
                      <p className="font-mono text-[#CF5100] mb-1" style={{ fontWeight: 600, fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', lineHeight: '1' }}>
                        {flights[currentIndex].points}
                      </p>
                      <p className="font-body text-[#224236]/60" style={{ fontSize: 'clamp(0.6875rem, 2vw, 0.75rem)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {flights[currentIndex].unit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={goToPrev}
                className="bg-white rounded-full p-2 shadow-lg hover:bg-[#EDE7DF] transition-colors flex items-center justify-center"
                aria-label="Anterior"
              >
                <ChevronLeft className="text-[#224236]" size={24} />
              </button>
              <button
                onClick={goToNext}
                className="bg-white rounded-full p-2 shadow-lg hover:bg-[#EDE7DF] transition-colors flex items-center justify-center"
                aria-label="Próximo"
              >
                <ChevronRight className="text-[#224236]" size={24} />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {flights.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-[#CF5100]' 
                    : 'w-2 bg-[#224236]/20'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
