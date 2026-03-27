"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import DialogCustom from "../../../components/dialog-custom/dialog-custom";
import { LeadCaptureSubmitData } from "@/app/components/form/lead-capture-form";

const listaEncontro = [
  "Já investiu em cursos, mentorias ou terapias e ainda sente a vida travada",
  "Sabe que tem capacidade de sobra, mas o resultado financeiro não acompanha",
  "Quer entender o que realmente está te segurando e corrigir isso",
  "Decidiu parar de tentar as mesmas soluções e se levantar contra tudo que te bloqueia",
];

interface ThirdSectionProps {
  formName: string;
  onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
  submitError?: string | null;
}

export default function ThirdSection({
  formName,
  onSubmit,
  submitError,
}: ThirdSectionProps) {
  return (
    <section
      className={`
        w-full
        min-h-[775px]
        h-[775px]
        md:h-[758px]
        md:min-h-[758px]
        bg-[#104448]
        flex
        justify-center
        items-start
        md:items-center
      `}
    >
      <div
        className="
        w-full
        max-w-[640px]
        mx-auto

        px-[42px]     
        md:px-0
      "
      >
        <p
          className="
          text-[#F4F0E1]
          font-spectral
          font-extrabold
          text-[32px]
          leading-[100%]
          text-left

          mt-[30px]

          md:text-[40px]
          md:text-center
          md:mt-0
        "
        >
          Esse encontro <br />
          é para quem:
        </p>

        <div
          className="
          flex
          flex-col
          gap-6     
          mt-[48px]

          md:gap-4
          md:mt-[72px]
        "
        >
          {listaEncontro.map((frase, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <CheckCircle2
                size={32}
                className="text-[#C0964B] mt-[4px] flex-shrink-0"
              />

              <p
                className="
                text-[#F4F0E1]
                font-spectral
                font-bold
                text-[20px]
                leading-[32px]
                text-left

                md:text-[24px]
              "
              >
                {frase}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-[56px] md:mt-16">
          <DialogCustom
            btLabel="Quero fazer meu diagnóstico"
            btClassName="
              w-full
              max-w-[345px]
              h-[50px]
              bg-[#C0964B]
              text-white
              text-[14px]
              font-bold
              uppercase
              transition-all duration-200
              hover:bg-[#e9cb84]
              hover:text-black
            "
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
    </section>
  );
}