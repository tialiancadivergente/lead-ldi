"use client";

import { handleScroll } from "@/lib/utils";
import Image from "next/image";
import DialogCustom from "../../../components/dialog-custom/dialog-custom";
import { LeadCaptureSubmitData } from "@/app/components/form/lead-capture-form";

const itemsToResolve = [
  {
    number: 1,
    text: "Porque pessoas com menos talento do que você, avançam – e o que elas enxergam que você ainda não viu.",
  },
  {
    number: 2,
    text: "O padrão relacional de bloqueio que trava dinheiro, carreira e crescimento depois dos 30.",
  },
  {
    number: 3,
    text: "Como reorganizar suas relações sem depender de anos de terapia ou análises intermináveis.",
  },
  {
    number: 4,
    text: "Como se tornar mais um improvável que deu certo, com permissão para construir liberdade real e destravar sua vida.",
  },
];

interface SecondSectionProps {
  formName: string;
  onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
  submitError?: string | null;
}

export default function SecondSection({
  formName,
  onSubmit,
  submitError,
}: SecondSectionProps) {
  return (
    <section
      className={`
        w-full
        min-h-[1400px]
        h-auto
        md:h-[1150px]
        md:min-h-[1150px]
        bg-[url('/images/v2/bg_second_fold_mobile.webp')]
        md:bg-[url('/images/v2/bg-second-fold.webp')]
        bg-no-repeat
        bg-top
        md:bg-center
        bg-cover
        flex
        flex-col
        justify-start
        items-start
        md:justify-center
        md:items-center
      `}
    >
      <div className="w-full max-w-[1060px] mx-auto pb-12 md:pb-0">
        <div className="text-[#F4F0E1] font-spectral w-full px-[42px] pt-[44px] md:max-w-[667px] md:px-0 md:pt-0">
          <p className="w-[350px] max-w-full font-spectral font-extrabold text-[32px] leading-[120%] tracking-[0%] text-left md:w-auto md:text-[40px] md:leading-[56px]">
            <span className="md:hidden">
              O que elas fizeram
              <br />
              de diferente?
            </span>
            <span className="hidden md:inline">
              O que elas fizeram de diferente?
            </span>
          </p>

          <p className="w-full font-spectral text-[16px] leading-[28px] tracking-[0%] text-left align-middle mt-6 md:my-8 md:text-[18px] md:leading-[24px]">
            <span className="font-bold">Identificaram e corrigiram</span>{" "}
            <span className="font-normal">
              um tipo de relação que a maioria das pessoas nem sabe que existe –
              mas controla silenciosamente a forma como você lida com dinheiro,
              oportunidades e crescimento.
            </span>
          </p>

          <div className="mt-[700px] md:mt-0">
            <p className="w-[355px] max-w-full font-spectral font-normal not-italic text-[32px] leading-[100%] tracking-[0%] text-left md:w-auto md:text-[40px] md:leading-[56px]">
              <span className="md:hidden">
                O que você vai resolver
                <br />
                durante{" "}
                <span className="font-extrabold">
                  O Levante dos Improváveis:
                </span>
              </span>

              <span className="hidden md:inline">
                O que você vai resolver durante
                <br />
                <span className="font-extrabold">
                  O Levante dos Improváveis:
                </span>
              </span>
            </p>

            <div className="mt-8 flex flex-col items-center gap-6 md:items-start md:gap-4">
              {itemsToResolve.map((item) => (
                <div
                  key={item.number}
                  className="
                    w-[370px]
                    min-h-[117px]
                    px-5
                    py-6
                    flex
                    items-center
                    gap-4
                    bg-[url('/images/v2/bg_list_mobile.png')]
                    bg-no-repeat
                    bg-center
                    bg-cover

                    md:w-[661px]
                    md:min-h-[108px]
                    md:h-[108px]
                    md:px-[40px]
                    md:py-0
                    md:gap-8
                    md:bg-[url('/images/v2/bg-list.webp')]
                    md:bg-no-repeat
                    md:bg-center
                    md:bg-[length:661px_108px]
                  "
                >
                  <p className="font-spectral font-semibold text-[40px] md:text-[58px] text-center text-[#006D71]">
                    {item.number}
                  </p>

                  <p className="font-spectral font-normal text-[14px] leading-[20px] md:text-[18px] md:leading-[24px] text-[#104448]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-5 md:mt-24">
          <DialogCustom
            btLabel="PARTICIPAR GRATUITAMENTE"
            btClassName="w-full max-w-[300px] h-[50px] bg-[#C0964B] text-white text-sm font-bold mt-8 transition-all duration-200 hover:bg-[#e9cb84] hover:text-black"
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