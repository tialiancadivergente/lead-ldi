"use client";

import React from "react";
import Image from "next/image";
import { handleScroll } from "@/lib/utils";
import DialogCustom from "../../../components/dialog-custom/dialog-custom";
import { LeadCaptureSubmitData } from "@/app/components/form/lead-capture-form";

interface FiveSectionProps {
  formName: string;
  onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
  submitError?: string | null;
}

export default function FiveSection({
  formName,
  onSubmit,
  submitError,
}: FiveSectionProps) {
  return (
    <section
      className="
        w-full
        min-h-[778px]
        md:min-h-[440px]
        bg-[#006D71]
        flex
        flex-col
        justify-center
      "
    >
      <div className="w-full max-w-[1060px] mx-auto">
        {/* MOBILE */}
        <div className="flex flex-col items-center justify-start px-[24px] pt-[90px] pb-[70px] md:hidden">
          
          <Image
            src="/images/v2/Logo-LDI.png"
            alt="Logo O Levante dos Improváveis"
            width={320}
            height={90}
            className="w-[260px] h-auto mx-auto"
          />

          <div className="mt-[18px] bg-[#104448] px-[18px] py-[8px] uppercase text-[#CA9A63] font-spectral font-bold text-[12px] text-center">
            É online, ao vivo e gratuito.
          </div>

          <p className="mt-[22px] font-spectral font-bold text-[22px] leading-[110%] text-center text-[#F4F0E1]">
            06 a 08 de abril, às 20h
          </p>

          <div className="mt-[40px] w-full max-w-[320px]">
            <p className="font-spectral font-normal text-[18px] leading-[150%] text-center text-[#F4F0E1]">
              Não é sobre as pessoas mais talentosas.
              <br />
              Não é sobre as mais preparadas.
            </p>

            <p className="mt-[30px] font-spectral font-bold text-[18px] leading-[150%] text-center text-[#F4F0E1]">
              É um processo prático para destravar sua vida financeira depois dos 30 e corrigir relacionamentos que impedem sua permissão de ir mais longe.
            </p>
          </div>

          {/* BOTÃO MOBILE */}
          <DialogCustom
            btLabel="ACESSAR O LEVANTE DOS IMPROVÁVEIS"
            btClassName="mt-[36px] w-full max-w-[260px] h-[56px] bg-[#C0964B] text-white text-[14px] uppercase font-bold transition-all duration-200 hover:bg-[#e9cb84] hover:text-black px-[20px]"
            formName={formName}
            onSubmit={onSubmit}
            submitError={submitError}
            submitLabel="PARTICIPAR GRATUITAMENTE"
            emailInputClassName="w-full h-[56px] md:h-[74px] px-[18px] md:px-[24px] rounded-[12px] border border-[#CFCFCF] bg-white placeholder:text-[#2B2B2B] text-[#111111] font-mulish font-normal text-[16px] md:text-[20px] leading-[140%] outline-none"
            ddiSelectClassName="h-[56px] md:h-[74px] pl-[44px] pr-[30px] rounded-l-[12px] border border-[#CFCFCF] border-r-0 bg-white text-[#111111] font-mulish font-semibold text-[16px] md:text-[20px] leading-[140%] focus:outline-none appearance-none"
            phoneInputClassName="w-full !h-[56px] md:!h-[74px] px-[18px] md:px-[24px] rounded-r-[12px] border border-[#CFCFCF] border-l-0 bg-white placeholder:text-[#2B2B2B] text-[#111111] font-mulish font-normal text-[16px] md:text-[20px] leading-[140%] focus:outline-none"
            buttonClassName="mt-[16px] md:mt-[20px] mb-0 w-full h-[58px] md:h-[74px] rounded-[12px] bg-[#22C32E] font-mulish font-extrabold text-[15px] md:text-[20px] leading-[100%] uppercase text-white transition-all hover:brightness-105 border-0 shadow-none"
          />

          <Image
            src="/images/v2/Logo-Alianca.png"
            alt="Logo Aliança Divergente"
            width={300}
            height={40}
            className="w-[260px] h-auto mx-auto mt-[50px]"
          />

          <p className="mt-[20px] font-spectral font-normal text-[10px] leading-[120%] text-center uppercase text-[#F4F0E1]">
            <span className="font-bold">Copyright 2026</span> © todos os direitos reservados.
          </p>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex w-full max-w-[1060px] mx-auto items-center justify-center gap-16">
          <div className="flex flex-col items-center justify-center gap-7 w-full max-w-[340px]">
            <Image
              src="/images/v2/Logo-LDI.png"
              alt="Logo O Levante dos Improváveis"
              width={339}
              height={96}
              className="w-full mx-auto"
            />
            <div className="bg-[#104448] py-2 px-5 uppercase text-[#CA9A63] font-spectral font-bold text-[14px]">
              É online, ao vivo e gratuito.
            </div>
            <p className="font-spectral font-bold text-[22.47px] leading-[33.7px] text-center text-[#F4F0E1]">
              06 a 08 de abril, às 20h
            </p>
            <Image
              src="/images/v2/Logo-Alianca.png"
              alt="Logo Aliança Divergente"
              width={340}
              height={44}
              className="w-full mx-auto mt-10"
            />
          </div>

          <div className="flex flex-col items-start justify-start gap-4">
            <p className="font-spectral text-[16px] leading-[24px] text-[#F4F0E1]">
              Não é sobre as pessoas mais talentosas. <br /> Não é sobre as mais preparadas.
            </p>
            <p className="font-spectral font-bold text-[16px] leading-[24px] text-[#F4F0E1]">
              É um processo prático para destravar sua vida financeira depois dos 30 e corrigir relacionamentos que impedem sua permissão de ir mais longe.
            </p>

            {/* BOTÃO DESKTOP */}
            <DialogCustom
              btLabel="ACESSAR O LEVANTE DOS IMPROVÁVEIS"
              btClassName="w-full max-w-[380px] h-[50px] bg-[#C0964B] text-white text-base uppercase font-bold mt-8 transition-all duration-200 hover:bg-[#e9cb84] hover:text-black"
              formName={formName}
              onSubmit={onSubmit}
              submitError={submitError}
              submitLabel="PARTICIPAR GRATUITAMENTE"
              emailInputClassName="w-full h-[56px] md:h-[74px] px-[18px] md:px-[24px] rounded-[12px] border border-[#CFCFCF] bg-white placeholder:text-[#2B2B2B] text-[#111111] font-mulish font-normal text-[16px] md:text-[20px] leading-[140%] outline-none"
              ddiSelectClassName="h-[56px] md:h-[74px] pl-[44px] pr-[30px] rounded-l-[12px] border border-[#CFCFCF] border-r-0 bg-white text-[#111111] font-mulish font-semibold text-[16px] md:text-[20px] leading-[140%] focus:outline-none appearance-none"
              phoneInputClassName="w-full !h-[56px] md:!h-[74px] px-[18px] md:px-[24px] rounded-r-[12px] border border-[#CFCFCF] border-l-0 bg-white placeholder:text-[#2B2B2B] text-[#111111] font-mulish font-normal text-[16px] md:text-[20px] leading-[140%] focus:outline-none"
              buttonClassName="mt-[16px] md:mt-[20px] mb-0 w-full h-[58px] md:h-[74px] rounded-[12px] bg-[#22C32E] font-mulish font-extrabold text-[15px] md:text-[20px] leading-[100%] uppercase text-white transition-all hover:brightness-105 border-0 shadow-none"
            />

            <p className="mt-[65px] font-spectral text-[12px] leading-[120%] uppercase text-[#F4F0E1]">
              <span className="font-bold">Copyright 2026</span> © Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}