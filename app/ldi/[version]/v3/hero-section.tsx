"use client";

import React from "react";
import { CalendarDays, Smartphone } from "lucide-react";
import Image from "next/image";
import { LeadCaptureSubmitData } from "@/app/components/form/lead-capture-form";
import DialogCustom from "./dialog-custom";

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
      className="relative h-[1041px] md:min-h-[924px] md:h-[924px] flex flex-col justify-start overflow-hidden bg-[#071117] bg-[url('/images/v1/bg-mobile.png')] md:bg-[url('/images/v1/bg.webp')] bg-cover bg-center px-4 pt-5 pb-6 md:p-0"
    >
      <div className="w-full max-w-[349px] md:max-w-[527px] flex flex-col items-center md:items-start text-left md:text-left mt-0 md:mt-[60px] md:ml-[100px] mx-auto md:mx-0">
        <div className="w-full justify-start hidden md:flex">
          <Image
            src="/images/logo-o-levante-dos-improvaveis.png"
            alt="Logo O Levante dos Improváveis"
            width={379}
            height={111}
          />
        </div>

        <div className="w-full flex justify-center md:hidden mb-6">
          <Image
            src="/images/v1/LOGO-OLDI.png"
            alt="Logo O Levante dos Improváveis"
            width={270}
            height={77}
          />
        </div>

        <div className="hidden md:flex flex-wrap items-center justify-start md:justify-start gap-x-[10px] gap-y-[8px] md:gap-[20px] my-8 text-[#F4F0E1] font-mulish text-[12px] md:text-[16px] w-full max-w-[349px] md:w-auto md:max-w-none">
          <div className="flex items-center gap-1.5 min-w-0">
            <CalendarDays
              size={16}
              color="#02252C"
              className="shrink-0 md:w-[18px] md:h-[18px]"
            />
            <span className="leading-[120%]">6, 7 e 8/4 às 20h</span>
          </div>

          <div className="w-[1px] h-[16px] bg-[#02252C]" />

          <div className="flex items-center gap-1.5 min-w-0">
            <Smartphone
              size={16}
              color="#02252C"
              className="shrink-0 md:w-[18px] md:h-[18px]"
            />
            <span className="leading-[120%]">Ao vivo e sem replay</span>
          </div>
        </div>

        <h1 className="font-spectral my-3 font-bold uppercase text-[#F4F0E1] text-[20px] leading-[120%] tracking-[-0.02em] w-full max-w-[349px] text-center md:w-[560px] md:max-w-none md:text-2xl md:text-left">
          {titleRedLine}
        </h1>

        <p
          className="
            text-[#F4F0E1]
            font-mulish
            text-[14px]
            leading-[125%]
            w-full
            max-w-[349px]
            md:w-[400px]
            md:max-w-none
            md:text-[16px]
            text-center
            md:text-left
          "
        >
          Este é um evento de 3 dias para você que já tentou de tudo e continua
          no mesmo lugar – mas agora está pronto para se levantar contra os
          padrões que travam seu dinheiro, decisões e liberdade.
        </p>

        <div className="w-full max-w-[349px] md:max-w-[527px] mt-10 md:mt-5">
          <DialogCustom
            btLabel="Participar gratuitamente"
            btClassName="w-full h-[52px] md:h-[64px] rounded-[8px] font-mulish font-extrabold text-[14px] md:text-[16px] leading-[145%] uppercase text-black transition-all hover:brightness-110 border border-[#FCF3D4] [background:linear-gradient(90deg,_#DFD2A7_0%,_#FCF3D4_100%)] shadow-[0px_6px_18.9px_0px_#F7EDCC85]"
            formName={formName}
            onSubmit={onSubmit}
            submitError={submitError}
            submitLabel="Participar gratuitamente"
            emailInputClassName="w-full h-[52px] md:h-[56px] px-[16px] rounded-[8px] border border-[#D9D9D9] bg-white placeholder:text-[#666666] text-[#111111] font-mulish font-medium text-[16px] leading-[145%] outline-none"
            ddiSelectClassName="h-[52px] md:h-[56px] py-4 pl-[40px] pr-[28px] bg-white rounded-l-[8px] border border-[#D9D9D9] border-r-[0px] text-[#111111] font-mulish font-medium text-[16px] leading-[145%] focus:outline-none appearance-none"
            phoneInputClassName="w-full !h-[52px] md:!h-[56px] px-[16px] py-4 rounded-r-[8px] bg-white placeholder:text-[#666666] text-[#111111] font-mulish font-medium text-[16px] leading-[145%] focus:outline-none border border-[#D9D9D9] border-l-[0px]"
            buttonClassName="mt-[12px] w-full h-[52px] md:h-[56px] rounded-[8px] font-mulish font-extrabold text-[14px] md:text-[16px] leading-[145%] uppercase text-black transition-all hover:brightness-110 border border-[#FCF3D4] [background:linear-gradient(90deg,_#DFD2A7_0%,_#FCF3D4_100%)] shadow-[0px_6px_18.9px_0px_#F7EDCC85]"
          />
        </div>

        <div className="md:hidden flex flex-wrap items-center justify-start md:justify-start gap-x-[10px] gap-y-[8px] md:gap-[20px] my-8 text-[#F4F0E1] font-mulish text-[12px] md:text-[16px] w-full max-w-[349px] md:w-auto md:max-w-none">
          <div className="flex items-center gap-1.5 min-w-0">
            <CalendarDays
              size={16}
              color="#C0964B"
              className="shrink-0 md:w-[18px] md:h-[18px]"
            />
            <span className="leading-[120%]">6, 7 e 8/4 às 20h</span>
          </div>

          <div className="w-[1px] h-[16px] bg-[#F4F0E1]" />

          <div className="flex items-center gap-1.5 min-w-0">
            <Smartphone
              size={16}
              color="#C0964B"
              className="shrink-0 md:w-[18px] md:h-[18px]"
            />
            <span className="leading-[120%]">Ao vivo e sem replay</span>
          </div>
        </div>
      </div>
    </section>
  );
}