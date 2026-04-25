"use client";

import Image from "next/image";

export default function SecondSection() {
  return (
    <section
      aria-label="O que realmente trava seus resultados depois dos 30"
      className={`
        w-full
        min-h-[539px]
        h-auto
        md:h-[990px]
        md:min-h-[990px]
        bg-[url('/images/v1/bg-two-mobile.webp')]
        md:bg-[url('/images/v1/bg-two.webp')]
        bg-no-repeat
        bg-center
        bg-cover
        flex
        justify-center
        items-start
        md:items-center
      `}
    >
      <div className="w-full max-w-[349px] md:max-w-[990px] mx-auto text-center py-[33px] md:py-10 font-mulish text-[16px] md:text-[18px] leading-[125%] text-[#F4F0E1] font-bold">
        {/* DESKTOP */}
        <p className="md:block hidden mb-4 md:mb-8">
          Você continua acreditando que o problema é falta de esforço? <br />
          Junte-se a nós e seja mais um improvável que deu certo.
        </p>

        <h2 className="md:block hidden md:text-[40px] text-[20px] font-spectral font-bold text-[#C0964B] leading-[120%] uppercase">
          O QUE REALMENTE TRAVA SEUS RESULTADOS DEPOIS DOS 30 SÃO AS DINÂMICAS
          DE CONVÍVIO QUE VOCÊ AINDA NÃO ENXERGA.
        </h2>

        {/* MOBILE */}
        <div className="md:hidden">
          <p className="text-[14px] leading-[145%] font-normal text-[#F4F0E1] mb-[18px]">
            Você continua acreditando que o problema é falta de esforço?
            Junte-se a nós e seja mais um improvável que deu certo.
          </p>

          <div
            className="
              w-full
              rounded-[8px]
              border border-[rgba(255,255,255,0.12)]
              bg-[rgba(33,58,63,0.55)]
              backdrop-blur-[6px]
              px-[20px]
              py-[14px]
              mb-[26px]
            "
          >
            <h2 className="font-spectral font-bold text-[16px] leading-[118%] uppercase text-[#C0964B] text-center">
              O QUE REALMENTE TRAVA SUA VIDA DEPOIS DOS 30 SÃO AS RELAÇÕES QUE
              VOCÊ AINDA NÃO SABE COMO CORRIGIR.
            </h2>
          </div>
        </div>

        <Image
          src="/images/v1/risk.png"
          alt=""
          width={609}
          height={2}
          aria-hidden="true"
          className="w-full max-w-[609px] mx-auto"
        />

        <p className="text-[#D3CAC0] font-spectral text-[16px] md:text-[32px] leading-[125%] font-bold w-full my-10 hidden md:block">
          Existem pessoas com{" "}
          <span className="text-[#C0964B] uppercase">
            menos condição que você
          </span>{" "}
          <br />
          que conseguiram destravar a vida financeira e construir liberdade real.
          Elas não eram as mais preparadas.
        </p>

        <p className="text-[#D3CAC0] font-spectral text-[16px] leading-[120%] font-bold w-full mt-[22px] mb-[24px] md:hidden">
          Existem pessoas com{" "}
          <span className="text-[#C0964B] uppercase">
            menos condição que você
          </span>{" "}
          que conseguiram destravar a vida financeira e construir liberdade real.
          Elas não eram as mais preparadas.
        </p>

        <p className="text-[#D3CAC0] font-spectral text-[16px] md:text-[32px] leading-[120%] md:leading-[125%] font-bold w-full">
          Na verdade, se transformaram em
          <br className="md:hidden" /> improváveis que deram certo…
        </p>
      </div>
    </section>
  );
}