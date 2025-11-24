import flight1 from "../assets/VCP-LIS.avif";   // Lisboa
import flight2 from "../assets/REC-FEN.avif";   // Fernando de Noronha
import flight3 from "../assets/GRU-MAD.avif";   // Madrid
import flight4 from "../assets/CGH-POA.avif";   // Gramado
import flight5 from "../assets/NVT-SSA.avif";   // Salvador
import flight6 from "../assets/GRU-MCO.avif";   // Orlando
import flight7 from "../assets/GRU-MIA.avif";   // Miami
import { Plane } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay@8.6.0";
import { useRef, useEffect, useState } from "react";

export function FlightProofs() {
  const [api, setApi] = useState<CarouselApi>();
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 7000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      autoplayPlugin.current.reset();
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

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

        {/* Desktop Carousel - 3 cards visible */}
        <div className="hidden lg:block">
          <Carousel 
            className="w-full max-w-7xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              autoplayPlugin.current,
            ]}
            setApi={setApi}
          >
            <CarouselContent className="-ml-6">
              {flights.map((flight, index) => (
                <CarouselItem key={index} className="pl-6 lg:basis-1/3">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>

        {/* Mobile/Tablet Carousel - 1 card visible */}
        <div className="lg:hidden">
          <Carousel 
            className="w-full max-w-md mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              autoplayPlugin.current,
            ]}
            setApi={setApi}
          >
            <CarouselContent>
              {flights.map((flight, index) => (
                <CarouselItem key={index}>
                  <div className="bg-[#EDE7DF] rounded-2xl p-3 sm:p-4 hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="bg-white rounded-xl overflow-hidden mb-4 sm:mb-6 shadow-sm" style={{ minHeight: '320px', maxHeight: '450px' }}>
                      <img
                        src={flight.image}
                        alt={flight.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="px-2 text-center">
                      <p className="font-headline text-[#224236] mb-1" style={{ fontWeight: 800, fontSize: 'clamp(1.25rem, 4vw, 1.75rem)', lineHeight: '1.2', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                        {flight.destination}
                      </p>
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#224236]/10">
                        <p className="font-mono text-[#CF5100] mb-1" style={{ fontWeight: 600, fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', lineHeight: '1' }}>
                          {flight.points}
                        </p>
                        <p className="font-body text-[#224236]/60" style={{ fontSize: 'clamp(0.6875rem, 2vw, 0.75rem)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {flight.unit}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

      </div>
    </section>
  );
}
