"use client";

import Image from "next/image";
import React from "react";
import { LeadCaptureSubmitData } from "@/app/components/form/lead-capture-form";
import DialogCustom from "@/app/components/dialog-custom/dialog-custom";

const testimonials = [
  {
    name: "Aurea Maria",
    image: "/images/v1/aurea.png",
    text: "De advogada com mais de 200mil reias de dívida, ganhando 3 mil por mês para quitar suas dívidas em apenas 2 meses e uma vida financeira plena",
  },
  {
    name: "Renata Fagundes",
    image: "/images/v1/renata.png",
    text: "De endividada, com depressão profunda e ganhando R$ 5 mil por mês para uma mulher que retomou a vontade de viver, passou a ganhar R$ 30mil por mês e hoje vive uma vida de sonhos.",
  },
  {
    name: "Jonathas Da Silva",
    image: "/images/v1/jonathas.png",
    text: "De carregar uma dívida de R$70 mil reais do irmão, relações conturbadas com os pais e o faturamento travado em R$ 3 mil para um empresário que fatura R$ 38mil reais por mês que prioriza mulher e filho.",
  },
  {
    name: "Érika Pirett",
    image: "/images/v1/erika.png",
    text: "De faxineira em situação de necessidade para empresária que fatura mais de R$ 15 mil reais por mês, realizando o desejo de viajar pela Europa.",
  },
  {
    name: "Josiane Carvalho",
    image: "/images/v1/josiane.png",
    text: "De 4 pós-graduações e um escritório próprio de advocacia, vivendo sem dinheiro. Para um faturamento de R$ 30mil reais, assumindo causas de mais de R$ 400 mil reais, triplicando sua renda anual.",
  },
];

interface HeroSectionProps {
  formName: string;
  onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
  submitError?: string | null;
}

export default function HeroSection({ formName, onSubmit, submitError }: HeroSectionProps) {

  return (
    <section
      id="hero"
      className="relative min-h-[2104px] h-auto md:min-h-[1517px] md:h-full flex flex-col justify-start overflow-hidden text-white font-spectral bg-[#104447] bg-[url('/images/v2/bg_mobile.webp')] md:bg-[url('/images/v2/bg.webp')] bg-cover bg-center px-[42px] pb-6 md:px-4"
    >
      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen h-[64px] md:h-[48px] bg-[#C0964B] flex items-center justify-center">
        <p className="w-full max-w-[348px] md:max-w-[1088px] text-center font-spectral font-bold text-[18px] md:text-[24px] leading-[120%] md:leading-[36px] text-white px-4 py-2 md:py-0">
          Você vai receber gratuitamente um Diagnóstico de Bloqueio de Permissão!
        </p>
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
          <p className="text-base font-bold mt-4 text-center">
            <span className="block md:inline">06 A 08 DE ABRIL – ÀS 20H.</span>{" "}
            <span className="block md:inline">ONLINE - AO VIVO - GRATUITO.</span>
          </p>

          <div className="mt-8 text-left md:text-center font-spectral font-bold text-[24px] md:text-4xl leading-[30px] md:leading-normal tracking-[-0.01em]">
            <p>
              Evento para{" "}
              <span className="text-[#E8C88E]">destravar seu dinheiro,</span>{" "}
              decisões e liberdade corrigindo relações que geram padrões de
              bloqueio na sua vida.
            </p>

            <p className="mt-4">
              Junte-se a nos e seja mais um improvável que deu certo!
            </p>
          </div>

          <DialogCustom
            formName={formName}
            onSubmit={onSubmit}
            submitError={submitError}
            submitLabel="Participar gratuitamente"
            emailInputClassName="w-full h-[52px] md:h-[64px] px-[16px] rounded-[8px] border border-[#BDBCBC] bg-[#FFFFFF1A] backdrop-blur-[20px] placeholder:text-white text-white font-mulish font-medium text-[16px] leading-[145%] outline-none"
            ddiSelectClassName="h-[52px] md:h-[64px] py-4 pl-[40px] pr-[28px] bg-[#D9CFC31A] rounded-l-[8px] border border-[#BDBCBC] border-r-[0px] text-white font-mulish font-medium text-[16px] leading-[145%] focus:outline-none appearance-none"
            phoneInputClassName="w-full !h-[52px] md:!h-[64px] px-[16px] py-4 rounded-r-[8px] bg-[#FFFFFF1A] backdrop-blur-[20px] placeholder:text-white text-white font-mulish font-medium text-[16px] leading-[145%] focus:outline-none border border-[#BDBCBC] border-l-[0px]"
            buttonClassName="mt-[12px] mb-[12px] w-full h-[52px] md:h-[64px] rounded-[8px] font-mulish font-extrabold text-[14px] md:text-[16px] leading-[145%] uppercase text-black transition-all hover:brightness-110 border border-[#FCF3D4] [background:linear-gradient(90deg,_#DFD2A7_0%,_#FCF3D4_100%)] shadow-[0px_6px_18.9px_0px_#F7EDCC85]"
          />

          <p className="mt-16 text-left md:text-center font-spectral text-[20px] md:text-[30px] leading-[140%] md:leading-[40px] tracking-[0%] text-[#F4F0E1]">
            Existem pessoas com{" "}
            <span className="font-bold">menos condição que você</span> que
            conseguiram destravar a vida financeira e construir liberdade real.
            Elas não eram as mais preparadas.
          </p>

          <p className="mt-12 text-left w-full font-spectral font-bold text-[16px] md:text-[18px] leading-[24px] md:leading-[40px] tracking-[0%] text-[#F4F0E1]">
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
