"use client";

import Image from "next/image";
import React from "react";

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

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-[1041px] md:min-h-[1517px] md:h-full flex flex-col justify-start overflow-hidden text-white font-spectral bg-[#104447] bg-[url('/images/v1/bg-mobile.png')] md:bg-[url('/images/v2/bg.webp')] bg-cover bg-center px-4 pb-6"
    >
      <div className="flex items-center justify-center text-white text-2xl font-bold text-center h-12 bg-[#C0964B]">
        Você vai receber gratuitamente um Diagnóstico de Bloqueio de Permissão!
      </div>
      <div className="w-full max-w-[1060px] mx-auto flex flex-col items-center justify-start">
        <Image
          src="/images/v2/Logo-LDI.png"
          alt="Logo O Levante dos Improváveis"
          width={339}
          height={96}
          className="mt-16"
        />
        <div className="flex flex-col items-center justify-start w-full max-w-[700px]">
          <p className="text-base font-bold mt-4">
            06 A 08 DE ABRIL – ÀS 20H. ONLINE - AO VIVO - GRATUITO.
          </p>
          <p className="mt-8 text-center text-4xl font-bold">
            Evento para <span className="text-[#E8C88E]">destravar seu dinheiro,</span> decisões e liberdade corrigindo relações que geram padrões de bloqueio na sua vida.
          </p>
          <p className="mt-4 text-center text-2xl font-bold">
            Junte-se a nos e seja mais um improvável que deu certo!
          </p>
          <button className="w-full max-w-[300px] h-[50px] bg-[#C0964B] text-white text-sm font-bold mt-8 transition-all duration-200 hover:bg-[#e9cb84] hover:text-black">
            PARTICIPAR GRATUITAMENTE
          </button>
          <p className="text-[30px] leading-[40px] tracking-[0%] mt-16 text-[#F4F0E1]">
            Existem pessoas com <span className="font-bold">menos condição que você</span> que conseguiram destravar a vida financeira e construir liberdade real. Elas não eram as mais preparadas.
          </p>
          <p className="text-[18px] leading-[40px] tracking-[0%] mt-12 text-[#F4F0E1] text-left w-full">
            Na verdade, se transformaram em improváveis que deram certo…
          </p>
        </div>
        <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="w-[336px] min-w-[336px] max-w-[336px] h-[273px] bg-[url('/images/v2/bg-depoimento.png')] bg-cover bg-center p-6 flex flex-col gap-4"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
