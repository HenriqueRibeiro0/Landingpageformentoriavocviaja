import { Card } from "./ui/card";
import { BookX, Zap } from "lucide-react";
import robotIcon from "figma:asset/1069903a6c9e34385a2c2ff231e86cbf756c2b11.png";

export function WhatItIsNot() {
  const points = [
    {
      icon: BookX,
      isLucide: true,
      content: (
        <>
          Não é curso chato que você nunca vai aplicar: é conteúdo <strong className="text-[#CF5100]">completamente personalizado</strong> pra você <strong>colocar em prática e viajar muito mais</strong>.
        </>
      )
    },
    {
      icon: Zap,
      isLucide: true,
      content: (
        <>
          Sem papo furado: <strong className="text-[#CF5100]">método claro, direto ao ponto</strong>, feito no <strong>seu contexto</strong>.
        </>
      )
    },
    {
      icon: robotIcon,
      isLucide: false,
      content: (
        <>
          Não te vendo uma <strong className="text-[#CF5100]">'burrice artificial'</strong> disfarçada de solução milagrosa.
        </>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-[#224236] mb-12 text-center" style={{ fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
          O que não é
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {points.map((point, index) => {
            return (
              <Card key={index} className="p-5 sm:p-6 md:p-8 bg-[#EDE7DF] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] border-0 hover:shadow-[0_12px_32px_rgba(0,0,0,0.16)] transition-shadow">
                <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    {point.isLucide ? (
                      (() => {
                        const Icon = point.icon as any;
                        return <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#224236]" strokeWidth={1.5} />;
                      })()
                    ) : (
                      <img 
                        src={point.icon as string} 
                        alt="Icon" 
                        className="w-6 h-6 sm:w-7 sm:h-7"
                      />
                    )}
                  </div>
                  <p className="font-body text-[#121212]" style={{ lineHeight: '1.7', fontSize: 'clamp(0.9375rem, 2.8vw, 1.0625rem)', fontWeight: 500 }}>
                    {point.content}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
