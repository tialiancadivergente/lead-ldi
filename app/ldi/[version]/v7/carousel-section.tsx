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
    text: "De uma rotina sufocada por dívidas e estagnação na advocacia para uma profissional que conseguiu organizar suas finanças, quitar suas pendências e construir estabilidade na carreira."
  },
  {
    name: "Renata Fagundes",
    image: "/images/v1/renata.png",
    text: "De estagnada na carreira para uma mulher que recuperou a clareza sobre suas escolhas, escalou os resultados do seu negócio e hoje vive a realidade que antes parecia distante."
  },
  {
    name: "Jonathas Da Silva",
    image: "/images/v1/jonathas.png",
    text: "De lidar com dívidas de terceiros e relações familiares conturbadas para um empresário que conseguiu destravar o crescimento da sua empresa, priorizando tempo de qualidade com a esposa e o filho."
  },
  {
    name: "Érika Pirett",
    image: "/images/v1/erika.png",
    text: "De feirante lidando com necessidades diárias para uma empresária próspera e dona do próprio negócio, colhendo os frutos do seu trabalho e realizando o desejo de viajar pelo mundo."
  },
  {
    name: "Josiane Carvalho",
    image: "/images/v1/josiane.png",
    text: "De advogada altamente qualificada, mas sem retorno financeiro proporcional ao seu esforço, para uma profissional valorizada, assumindo grandes casos e multiplicando os resultados do seu escritório."
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
