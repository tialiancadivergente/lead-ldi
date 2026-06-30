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
      className="relative h-[1590px] md:min-h-[902px] md:h-[902px] flex flex-col justify-start overflow-hidden bg-[#071117] bg-[url('/images/v10/bg_primeira_dobra_mobile.png')] md:bg-[url('/images/v10/bg_primeira_dobra_desktop.webp')] bg-cover bg-center px-4 pt-5 pb-6 md:p-0"
    >
      <div className="w-full max-w-[348px] md:max-w-[650px] flex flex-col items-center md:items-start text-left mt-0 md:mt-[30px] md:ml-[100px] mx-auto md:mx-0">
        <div className="w-full justify-start hidden md:flex">
          <Image
            src="/images/v10/logo_desktop.svg"
            alt="Evento O Levante dos Improváveis"
            width={424}
            height={36}
            priority
          />
        </div>

        <div className="w-full flex justify-center md:hidden mb-6">
          <Image
            src="/images/v10/logo_mobile.svg"
            alt="Logo do evento O Levante dos Improváveis"
            width={348}
            height={103}
            priority
          />
        </div>

        <div className="hidden md:flex items-center justify-start gap-[18px] my-6 text-[#07242C] font-mulish text-[13px] font-bold uppercase w-[490px] h-[32px] rounded-[2px] border border-[#C0964B] px-[14px]">
          <div className="flex items-center gap-[6px] min-w-0">
            <CalendarDays size={14} color="#07242C" className="shrink-0" />
            <span className="leading-[120%] whitespace-nowrap">
            20, 21 e 22/07 • 20h,
            </span>
          </div>

          <div className="w-[76px] h-[1px] bg-[#C0964B]" />

          <div className="flex items-center gap-[6px] min-w-0">
            <Smartphone size={14} color="#07242C" className="shrink-0" />
            <span className="leading-[120%] whitespace-nowrap">
              Online e gratuito
            </span>
          </div>
        </div>

        <h1 className="w-full md:w-[528px] text-center md:text-left mt-3 mb-8 md:mb-7">
          {titleRedLine}
        </h1>

        <div className="w-full md:w-[528px] text-center md:text-left mb-8 md:mb-8">
          {redLine}
        </div>

        <div className="w-full max-w-[348px] md:max-w-[527px]">
          <LeadCaptureForm
            formName={formName}
            onSubmit={onSubmit}
            submitError={submitError}
            submitLabel="Participar gratuitamente"
            emailInputClassName="w-full h-[52px] md:h-[64px] px-[16px] rounded-[8px] border border-[#BDBCBC] bg-[#FFFFFF1A] backdrop-blur-[20px] placeholder:text-[#0A3740] text-[#0A3740] font-inter font-normal text-[16px] leading-[145%] tracking-[0%] outline-none"
            ddiSelectClassName="h-[52px] md:h-[64px] py-4 pl-[42px] pr-[18px] md:pl-[48px] md:pr-[24px] bg-[#FFFFFF1A] backdrop-blur-[20px] rounded-l-[8px] border border-[#BDBCBC] border-r-[0px] text-[#0A3740] font-inter font-normal text-[16px] leading-[145%] tracking-[0%] focus:outline-none appearance-none"
            phoneInputClassName="w-full !h-[52px] md:!h-[64px] px-[10px] md:px-[16px] py-4 rounded-r-[8px] bg-[#FFFFFF1A] backdrop-blur-[20px] placeholder:text-[#0A3740] text-[#0A3740] font-inter font-normal text-[16px] leading-[145%] tracking-[0%] focus:outline-none border border-[#BDBCBC] border-l-[0px]"
            buttonClassName="mt-[12px] mb-[12px] w-full h-[52px] md:h-[64px] rounded-[8px] font-mulish font-extrabold text-[14px] md:text-[16px] leading-[145%] uppercase text-[#F6F1D9] transition-all hover:brightness-110 border-2 border-[#31737D] bg-[#0A3740]"
          />
        </div>

        <div className="md:hidden flex items-center justify-center gap-[7px] mt-3 text-[#07242C] font-mulish text-[10px] font-bold uppercase w-full h-[26px] rounded-[2px] border border-[#C0964B] px-[8px]">
          <div className="flex items-center gap-[4px] min-w-0">
            <CalendarDays size={12} color="#07242C" className="shrink-0" />
            <span className="leading-[120%] whitespace-nowrap">
            20, 21 e 22/07 • 20h,
            </span>
          </div>

          <div className="w-[28px] h-[1px] bg-[#C0964B]" />

          <div className="flex items-center gap-[4px] min-w-0">
            <Smartphone size={12} color="#07242C" className="shrink-0" />
            <span className="leading-[120%] whitespace-nowrap">
              Online e gratuito
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
