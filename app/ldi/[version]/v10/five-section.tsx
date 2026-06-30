"use client";

import React from "react";
import Image from "next/image";
import { handleScroll } from "@/lib/utils";
import FooterLdi from "@/app/components/footer-ldi/footer";

export default function FiveSection() {
  return (
    <section
      aria-labelledby="cta-section-title"
      className="
      w-full
      min-h-[1125px]
      md:min-h-[890px]

      bg-[#F6F1D9]
      md:bg-[#071117]

      bg-[url('/images/v10/bg_terceira_dobra_mobile.webp')]
      md:bg-[url('/images/v10/bg_terceira_dobra_desktop.webp')]

      bg-[length:100%_auto]
      md:bg-[length:100%_100%]

      bg-top
      md:bg-center

      bg-no-repeat
      flex
      flex-col
      justify-start
      px-6
      pt-0
      pb-6
      md:px-4
      md:pt-16
      md:pb-8
      "
    >
      <div className="w-full md:max-w-[1024px] max-w-[350px] mx-auto flex flex-col items-center justify-center">
        <div className="w-full max-w-[326px] md:max-w-[520px] mx-auto flex flex-col items-center -mt-20 md:-mt-32">
          <Image
            src="/images/v10/logo_mobile_2.svg"
            alt="Logo do evento O Levante dos Improváveis"
            width={348}
            height={103}
            className="w-full max-w-[318px] md:hidden mx-auto mt-4"
            priority
          />

          <Image
            src="/images/v10/logo_desktop_2.svg"
            alt="Logo do evento O Levante dos Improváveis"
            width={368}
            height={109}
            className="hidden md:block w-full max-w-[320px] mx-auto"
            priority
          />

          <h2
            id="cta-section-title"
            className="
              text-[#0A3740]
              font-spectral
              font-extrabold
              uppercase
              text-[18px]
              md:text-[21px]
              leading-[140%]
              text-center
              w-full
              max-w-[326px]
              md:max-w-[520px]
              mt-10
              md:mt-12
            "
          >
            <span className="md:hidden">
              Um processo prático para destravar sua vida financeira depois dos
              30.
            </span>

            <span className="hidden md:block">
              Um processo prático para
              <br />
              destravar sua vida financeira
              <br />
              depois dos 30.
            </span>
          </h2>

          <p
            className="
              text-[#0A3740]
              font-spectral
              font-normal
              uppercase
              text-[18px]
              md:text-[21px]
              leading-[140%]
              tracking-[-0.02em]
              text-center
              w-full
              max-w-[326px]
              md:max-w-[520px]
              mt-4
              md:mt-4
            "
          >
            <span className="md:hidden">
              Corrigindo os padrões de convívio que podam o seu crescimento e
              freiam os seus resultados sem você perceber.
            </span>

            <span className="hidden md:block">
              Corrigindo os padrões de convívio
              <br />
              que podam o seu crescimento e freiam
              <br />
              os seus resultados sem você perceber.
            </span>
          </p>

          <p
            className="
              text-[#0A3740]
              font-mulish
              font-semibold
              text-[15px]
              md:text-[16px]
              leading-[140%]
              text-center
              w-full
              max-w-[326px]
              md:max-w-[520px]
              mt-8
              md:mt-8
            "
          >
            <span className="md:hidden">
              Chegou a hora de se levantar contra tudo isso e ser o próximo
              improvável que deu certo na vida.{" "}
              <strong className="font-extrabold">
                Inscreva-se agora gratuitamente.
              </strong>
            </span>

            <span className="hidden md:block">
              Chegou a hora de se levantar contra
              <br />
              tudo isso e ser o próximo improvável
              <br />
              que deu certo na vida.{" "}
              <strong className="font-extrabold">
                Inscreva-se agora
                <br />
                gratuitamente.
              </strong>
            </span>
          </p>

          <div
            className="
              bg-transparent
              border
              border-[#C0964B]
              text-[#0A3740]
              rounded-[12px]
              w-full
              max-w-[326px]
              md:max-w-[460px]
              h-[58px]
              md:h-[58px]
              flex
              items-center
              justify-center
              gap-4
              md:gap-5
              px-6
              md:px-8
              py-[16px]
              mt-8
              md:mt-10
            "
          >
            <Image
              src="/images/v8/video_mobile.png"
              alt=""
              aria-hidden="true"
              width={22}
              height={22}
              className="md:hidden"
            />

            <Image
              src="/images/v8/video_desktop.png"
              alt=""
              aria-hidden="true"
              width={22}
              height={22}
              className="hidden md:block"
            />

            <span className="font-mulish font-bold text-[13px] md:text-[15px] leading-[145%]">
              É online, ao vivo e gratuito.
            </span>
          </div>

          <button
            type="button"
            aria-label="Acessar o evento O Levante dos Improváveis gratuitamente"
            onClick={handleScroll}
            className="
              mt-6
              md:mt-7
              mb-[12px]
              w-full
              max-w-[326px]
              md:max-w-[460px]
              h-[58px]
              md:h-[60px]
              rounded-[8px]
              font-mulish
              font-extrabold
              text-[11px]
              md:text-[15px]
              leading-[145%]
              uppercase
              text-[#F6F1D9]
              transition-all
              hover:brightness-110
              bg-[#91450F]
            "
          >
            ACESSAR O LEVANTE DOS IMPROVÁVEIS
          </button>
        </div>

        <FooterLdi className="md:mt-28 mt-12" />
      </div>
    </section>
  );
}
