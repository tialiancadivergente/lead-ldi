"use client";

import React from "react";
import { CalendarDays, Smartphone } from "lucide-react";
import Image from "next/image";
import {
  LeadCaptureForm,
  LeadCaptureSubmitData,
} from "./lead-capture-form-levante";

interface ContainerProps {
  titleRedLine: React.ReactNode | null;
  redLine: React.ReactNode | null;
  formName: string;
  onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
  submitError?: string | null;
}

export default function HeroSection({
  titleRedLine,
  redLine,
  formName,
  onSubmit,
  submitError,
}: ContainerProps) {
  return (
    <section
      id="hero"
      role="main"
      aria-label="Evento O Levante dos Improváveis"
      className="relative h-[1186px] md:min-h-[924px] md:h-[924px] flex flex-col justify-start overflow-hidden bg-[#071117] bg-[url('/images/v8/bg_mobile_primeira_dobra.webp')] md:bg-[url('/images/v8/bg_desktop_primeira_dobra.webp')] bg-cover bg-center px-4 pt-5 pb-6 md:p-0"
    >
      <div className="w-full max-w-[349px] md:max-w-[650px] flex flex-col items-center md:items-start text-left md:text-left mt-0 md:mt-[30px] md:ml-[100px] mx-auto md:mx-0">
        <div className="w-full justify-start hidden md:flex">
          <Image
            src="/images/v8/logo_o_levante_dos_improvaveis_desktop.png"
            alt="Evento O Levante dos Improváveis - desenvolvimento pessoal e liberdade emocional"
            width={310}
            height={90}
            priority
          />
        </div>

        <div className="w-full flex justify-center md:hidden mb-6">
          <Image
            src="/images/v8/logo_o_levante_dos_improvaveis_mobile.png"
            alt="Logo do evento O Levante dos Improváveis"
            width={300}
            height={89}
            priority
          />
        </div>

        <div className="hidden md:flex items-center justify-start gap-[24px] my-6 text-[#07242C] font-mulish text-[16px] w-[490px] h-[58px] rounded-[10px] border border-[#31737D] py-[13.91px] px-[24.35px]">
          <div className="flex items-center gap-2 min-w-0">
            <CalendarDays size={18} color="#07242C" className="shrink-0" />
            <span className="leading-[120%] whitespace-nowrap">
              20, 21 e 22/07 | Às 20h
            </span>
          </div>

          <div className="w-[1px] h-[16px] bg-[#07242C]" />

          <div className="flex items-center gap-2 min-w-0">
            <Smartphone size={18} color="#07242C" className="shrink-0" />
            <span className="leading-[120%] whitespace-nowrap">
              Ao vivo e sem replay
            </span>
          </div>
        </div>

        <h1 className="font-spectral font-bold uppercase text-[#31737D] text-[20px] leading-[125%] tracking-[0%] w-[348px] h-[200px] opacity-100 text-center my-3 md:w-[635px] md:h-[230px] md:text-[29.77px] md:text-left">
          {titleRedLine}
        </h1>

        <p className="font-inter font-medium text-[#0A3740] text-[16px] leading-[145%] tracking-[0%] w-full md:max-w-[650px] text-center md:text-left opacity-100 mt-4">
          {redLine}
        </p>

        <div className="w-full max-w-[349px] md:max-w-[527px] mt-5 md:mt-4">
          <LeadCaptureForm
            formName={formName}
            onSubmit={onSubmit}
            submitError={submitError}
            submitLabel="Participar gratuitamente"
            emailInputClassName="w-full h-[52px] md:h-[64px] px-[16px] rounded-[8px] border border-[#BDBCBC] bg-[#FFFFFF1A] backdrop-blur-[20px] placeholder:text-[#0A3740] text-[#0A3740] font-inter font-normal text-[16px] leading-[145%] tracking-[0%] outline-none"
            ddiSelectClassName="h-[52px] md:h-[64px] py-4 pl-[48px] pr-[28px] bg-[#FFFFFF1A] backdrop-blur-[20px] rounded-l-[8px] border border-[#BDBCBC] border-r-[0px] text-[#0A3740] font-inter font-normal text-[16px] leading-[145%] tracking-[0%] focus:outline-none appearance-none"
            phoneInputClassName="w-full !h-[52px] md:!h-[64px] px-[16px] py-4 rounded-r-[8px] bg-[#FFFFFF1A] backdrop-blur-[20px] placeholder:text-[#0A3740] text-[#0A3740] font-inter font-normal text-[16px] leading-[145%] tracking-[0%] focus:outline-none border border-[#BDBCBC] border-l-[0px]"
            buttonClassName="mt-[12px] mb-[12px] w-full h-[52px] md:h-[64px] rounded-[8px] font-mulish font-extrabold text-[14px] md:text-[16px] leading-[145%] uppercase text-[#F6F1D9] transition-all hover:brightness-110 border-2 border-[#31737D] bg-[#0A3740]"
          />
        </div>

        <div className="md:hidden flex flex-wrap items-center justify-start gap-x-[10px] gap-y-[8px] my-2 text-[#07242C] font-mulish text-[12px] w-full max-w-[349px]">
          <div className="flex items-center gap-1.5 min-w-0">
            <CalendarDays size={16} color="#07242C" className="shrink-0" />
            <span className="leading-[120%]">
            20, 21 e 22/07 | Às 20h
            </span>
          </div>

          <div className="w-[1px] h-[16px] bg-[#07242C]" />

          <div className="flex items-center gap-1.5 min-w-0">
            <Smartphone size={16} color="#07242C" className="shrink-0" />
            <span className="leading-[120%]">Ao vivo e sem replay</span>
          </div>
        </div>
      </div>
    </section>
  );
}
