"use client";

import * as React from "react";
import Image from "next/image";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Aurea Maria",
    image: "/images/v1/aurea.png",
    text: "De advogada com mais de 200mil reias de dívida, ganhando 3 mil por mês para quitar suas dívidas em apenas 2 meses e uma vida financeira plena"
  },
  {
    name: "Renata Fagundes",
    image: "/images/v1/renata.png",
    text: "De endividada, com depressão profunda e ganhando R$ 5 mil por mês para uma mulher que retomou a vontade de viver, passou a ganhar R$ 30mil por mês e hoje vive uma vida de sonhos."
  },
  {
    name: "Jonathas Da Silva",
    image: "/images/v1/jonathas.png",
    text: "De carregar uma dívida de R$70 mil reais do irmão, relações conturbadas com os pais e o faturamento travado em R$ 3 mil para um empresário que fatura R$ 38mil reais por mês que prioriza mulher e filho."
  },
  {
    name: "Érika Pirett",
    image: "/images/v1/erika.png",
    text: "De faxineira em situação de necessidade para empresária que fatura mais de R$ 15 mil reais por mês, realizando o desejo de viajar pela Europa."
  },
  {
    name: "Josiane Carvalho",
    image: "/images/v1/josiane.png",
    text: "De 4 pós-graduações e um escritório próprio de advocácia, vivendo sem dinheiro. Para um faturamento de R$ 30mil reais, assumindo causas de mais de R$ 400 mil reais, triplicando sua renda anual."
  },
]

export default function CarouselSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!api) return;

    const syncCarouselState = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setScrollSnaps(api.scrollSnapList());
    };

    syncCarouselState();
    api.on("select", syncCarouselState);
    api.on("reInit", syncCarouselState);

    return () => {
      api.off("select", syncCarouselState);
      api.off("reInit", syncCarouselState);
    };
  }, [api]);

  return (
    <section
      className={`
        w-full
        min-h-[523px]
        h-[523px]
        md:h-[614px]
        md:min-h-[614px]
        bg-[url('/images/v1/bg-carousel.webp')]
        md:bg-[url('/images/v1/bg-carousel.webp')]
        bg-no-repeat
        bg-center
        bg-cover
        flex
        justify-center
        items-center
      `}
    >
      <div className="w-full px-0 md:px-8 lg:px-12">
        <Carousel
          opts={{ align: "center", loop: true }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="pl-4 basis-[352px] min-w-[352px] max-w-[352px]"
              >
                <div className="w-[336px] min-w-[336px] max-w-[336px] h-[273px] bg-[url('/images/v1/bg-depoimento.png')] bg-cover bg-center p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={47}
                      height={47}
                    />
                    <div
                      className="inline-block text-[20px] font-bold font-spectral leading-[120%] tracking-[-0.02em]"
                      style={{
                        background:
                          "linear-gradient(180deg, #FFF1D8 0%, #C0964B 88.09%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {testimonial.name}
                    </div>
                  </div>
                  <div className="text-[16px] font-mulish leading-[135%] font-medium text-[#F4F0E1]">
                    {testimonial.text}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-5 flex items-center justify-center gap-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={`carousel-dot-${index}`}
              type="button"
              aria-label={`Ir para depoimento ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                selectedIndex === index ? "bg-[#C9AE74]" : "bg-[#1A5A66]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
