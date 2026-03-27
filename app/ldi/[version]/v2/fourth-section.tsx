"use client";

import React from "react";
import DialogCustom from "../../../components/dialog-custom/dialog-custom";
import { LeadCaptureSubmitData } from "@/app/components/form/lead-capture-form";

interface FourthSectionProps {
  formName: string;
  onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
  submitError?: string | null;
}

export default function FourthSection({
  formName,
  onSubmit,
  submitError,
}: FourthSectionProps) {
  return (
    <section
      className="
        w-full
        min-h-[1565px]
        md:min-h-[956px]
        bg-[#071117]
        bg-[url('/images/v2/bg_ramon_mobile.webp')]
        md:bg-[url('/images/v2/bg-ramon.webp')]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        flex-col
        justify-start
        md:justify-center
      "
    >
      <div className="w-full max-w-[1060px] mx-auto flex justify-end px-[42px] pt-[60px] md:px-0 md:pt-0">
        <div className="font-spectral max-w-[520px] w-full flex flex-col">
          <p className="font-spectral font-extrabold text-[32px] leading-[100%] tracking-[0] text-[#F4F0E1] md:text-[40px] md:leading-[56px]">
            Quem vai ser o seu
            <br />
            mentor nessa jornada?
          </p>

          <p className="font-[Teramo] font-bold text-[#C0964B] text-[20px] leading-[145%] tracking-[0] mt-3 mb-[360px] md:text-[24px] md:my-6">
            Ramon Galimberti
          </p>

          <div className="font-spectral font-normal not-italic text-[16px] leading-[24px] tracking-[0] align-middle text-white flex flex-col gap-6 mt-[300px] md:mt-0 md:text-[18px] md:leading-[24px] md:gap-7">
            <p>
              Mentor da Aliança Divergente, comunidade com mais de 200 mil
              aliados no Brasil e no mundo. Formado em Engenharia, Ramon
              descobriu depois dos 30 que assumir controle financeiro e
              multiplicar ganhos não é questão de capacidade, mas de corrigir as
              relações que geram padrões nocivos.
            </p>

            <p>
              Com mais de 500K seguidores no Instagram e 46.9K no YouTube,
              Ramon desenvolveu um método sistemático para identificar e
              corrigir os padrões bloqueadores de permissão para você ter
              controle total sobre os acontecimentos da sua vida e ganhar mais
              dinheiro.
            </p>

            <p>
              A missão de Ramon é clara: apoiar pessoas a corrigirem sua base
              interna para terem Permissão de multiplicar seus ganhos e
              oportunidades de sucesso. Se você quer destravar sua vida, O
              Levante dos Improváveis é o primeiro passo.
            </p>

            <DialogCustom
              btLabel="PARTICIPAR GRATUITAMENTE"
              btClassName="w-full max-w-[380px] h-[50px] bg-[#C0964B] text-white text-[14px] md:text-base font-bold mt-4 md:mt-8 transition-all duration-200 hover:bg-[#e9cb84] hover:text-black"
              formName={formName}
              onSubmit={onSubmit}
              submitError={submitError}
              submitLabel="PARTICIPAR GRATUITAMENTE"
              emailInputClassName="w-full h-[56px] md:h-[74px] px-[18px] md:px-[24px] rounded-[12px] border border-[#CFCFCF] bg-white placeholder:text-[#2B2B2B] text-[#111111] font-mulish font-normal text-[16px] md:text-[20px] leading-[140%] outline-none"
              ddiSelectClassName="h-[56px] md:h-[74px] pl-[44px] pr-[30px] rounded-l-[12px] border border-[#CFCFCF] border-r-0 bg-white text-[#111111] font-mulish font-semibold text-[16px] md:text-[20px] leading-[140%] focus:outline-none appearance-none"
              phoneInputClassName="w-full !h-[56px] md:!h-[74px] px-[18px] md:px-[24px] rounded-r-[12px] border border-[#CFCFCF] border-l-0 bg-white placeholder:text-[#2B2B2B] text-[#111111] font-mulish font-normal text-[16px] md:text-[20px] leading-[140%] focus:outline-none"
              buttonClassName="mt-[16px] md:mt-[20px] mb-0 w-full h-[58px] md:h-[74px] rounded-[12px] bg-[#22C32E] font-mulish font-extrabold text-[15px] md:text-[20px] leading-[100%] uppercase text-white transition-all hover:brightness-105 border-0 shadow-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}