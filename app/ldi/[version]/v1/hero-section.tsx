"use client";

import React from "react";
import { CalendarDays, Smartphone } from "lucide-react";
import Image from "next/image";
import {
  LeadCaptureForm,
  LeadCaptureSubmitData,
} from "@/app/components/form/lead-capture-form";

interface ContainerProps {
  titleRedLine: React.ReactNode | null;
  redLine: React.ReactNode | null;
  formName: string;
  onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
  submitError?: string | null;
}

export default function HeroSection({
  titleRedLine,
  formName,
  onSubmit,
  submitError,
}: ContainerProps) {
  return (
    <section
      id="hero"
      role="main"
      aria-label="Evento O Levante dos Improváveis"
      className="relative h-[1147px] md:min-h-[905px] md:h-[905px] flex flex-col justify-start overflow-hidden bg-[#071117] bg-[url('/images/v1/bg-mobile3_novo.webp')] md:bg-[url('/images/v1/bg.webp_novo.webp')] bg-cover bg-center px-4 pt-5 pb-6 md:p-0"
    >
      <div className="w-full max-w-[349px] md:max-w-[560px] lg:max-w-[620px] xl:max-w-[660px] flex flex-col items-center md:items-start text-left md:text-left mt-0 md:mt-[60px] md:ml-[100px] mx-auto md:mx-0">

        <div className="w-full justify-start hidden md:flex">
          <Image
            src="/images/logo-o-levante-dos-improvaveis.png"
            alt="Evento O Levante dos Improváveis - desenvolvimento pessoal e liberdade emocional"
            width={379}
            height={111}
            priority
          />
        </div>

        <div className="w-full flex justify-center md:hidden mb-6">
          <Image
            src="/images/v1/LOGO-OLDI.png"
            alt="Logo do evento O Levante dos Improváveis"
            width={270}
            height={77}
            priority
          />
        </div>

        <div className="hidden md:flex flex-wrap items-center justify-start gap-x-[10px] gap-y-[8px] md:gap-[20px] my-2 md:my-8 text-[#F4F0E1] font-mulish text-[12px] md:text-[16px] w-full max-w-[349px] md:w-auto md:max-w-none">
          <div className="flex items-center gap-1.5 min-w-0">
            <CalendarDays size={16} color="#02252C" className="shrink-0 md:w-[18px] md:h-[18px]" />
            <span className="leading-[120%]">03, 04 e 05/08 às 20h</span>
          </div>

          <div className="w-[1px] h-[16px] bg-[#02252C]" />

          <div className="flex items-center gap-1.5 min-w-0">
            <Smartphone size={16} color="#02252C" className="shrink-0 md:w-[18px] md:h-[18px]" />
            <span className="leading-[120%]">Ao vivo e sem replay</span>
          </div>
        </div>

        <h1 className="font-spectral my-3 font-bold uppercase text-[#F4F0E1] text-[20px] leading-[120%] tracking-[-0.02em] w-full max-w-[349px] text-center md:w-full md:max-w-[560px] lg:max-w-[620px] xl:max-w-[660px] md:text-[28px] md:text-left">
          {titleRedLine}
        </h1>

        <p
          className="
            text-[#F4F0E1]
            font-mulish
            text-[15px]
            leading-[150%]
            w-full
            md:max-w-[560px]
            lg:max-w-[620px]
            xl:max-w-[660px]
            md:text-[16px]
            text-center md:text-left
          "
        >
          Evento online de 3 dias para quem reconhece padrões que repetem e quer entender o que está por trás das escolhas que travam decisões, relacionamentos e projetos de vida.
        </p>

        <div className="w-full max-w-[349px] md:max-w-[527px] mt-10 md:mt-5">
          <LeadCaptureForm
            formName={formName}
            onSubmit={onSubmit}
            submitError={submitError}
            submitLabel="Participar gratuitamente"
            emailInputClassName="w-full h-[52px] md:h-[64px] px-[16px] rounded-[8px] border border-[#BDBCBC] bg-[#FFFFFF1A] backdrop-blur-[20px] placeholder:text-white text-white font-mulish font-medium text-[16px] leading-[145%] outline-none"
            ddiSelectClassName="h-[52px] md:h-[64px] py-4 pl-[40px] pr-[28px] bg-[#D9CFC31A] rounded-l-[8px] border border-[#BDBCBC] border-r-[0px] text-white font-mulish font-medium text-[16px] leading-[145%] focus:outline-none appearance-none"
            phoneInputClassName="w-full !h-[52px] md:!h-[64px] px-[16px] py-4 rounded-r-[8px] bg-[#FFFFFF1A] backdrop-blur-[20px] placeholder:text-white text-white font-mulish font-medium text-[16px] leading-[145%] focus:outline-none border border-[#BDBCBC] border-l-[0px]"
            buttonClassName="mt-[12px] mb-[12px] w-full h-[52px] md:h-[64px] rounded-[8px] font-mulish font-extrabold text-[14px] md:text-[16px] leading-[145%] uppercase text-black transition-all hover:brightness-110 border border-[#FCF3D4] [background:linear-gradient(90deg,_#DFD2A7_0%,_#FCF3D4_100%)] shadow-[0px_6px_18.9px_0px_#F7EDCC85]"
          />
        </div>

        <div className="md:hidden flex flex-wrap items-center justify-start gap-x-[10px] gap-y-[8px] mt-2 mb-6 text-[#F4F0E1] font-mulish text-[12px] w-full max-w-[349px]">
          <div className="flex items-center gap-1.5 min-w-0">
            <CalendarDays size={16} color="#C0964B" className="shrink-0" />
            <span className="leading-[120%]">03, 04 e 05/08 às 20h</span>
          </div>

          <div className="w-[1px] h-[16px] bg-[#F4F0E1]" />

          <div className="flex items-center gap-1.5 min-w-0">
            <Smartphone size={16} color="#C0964B" className="shrink-0" />
            <span className="leading-[120%]">Ao vivo e sem replay</span>
          </div>
        </div>

      </div>
    </section>
  );
}
