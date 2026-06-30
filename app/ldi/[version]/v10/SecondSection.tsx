"use client";

import Image from "next/image";

export default function SecondSection() {
  return (
    <section
      aria-label="O que realmente trava seus resultados depois dos 30"
      className={`
        w-full
        min-h-[551px]
        h-[551px]
        md:h-[726px]
        md:min-h-[726px]
        bg-[url('/images/v8/bg_mobile_segunda_dobra.webp')]
        md:bg-[url('/images/v8/bg_desktop_segunda_dobra.webp')]
        bg-no-repeat
        bg-center
        bg-cover
        flex
        justify-center
        items-start
        md:items-center
      `}
    >
      <div className="w-full max-w-[349px] md:max-w-[991px] mx-auto text-center py-[33px] md:pt-0 md:pb-10 md:-translate-y-[20px] font-mulish text-[16px] md:text-[18px] leading-[125%] text-[#F4F0E1] font-bold">
        {/* DESKTOP */}
        <p className="hidden md:block mb-4 md:mb-8">
          Você continua acreditando que o problema é falta de esforço?
          <br />
          Junte-se a nós e seja mais um improvável que deu certo.
        </p>

        {/* BLOCO DE DESTAQUE NO DESKTOP */}
        <div className="hidden md:flex w-[991px] h-[194px] rounded-[12.52px] border border-[#2A4F4F] bg-[#1A2F2FCC] mx-auto items-center justify-center px-10 mb-16">
          <h2 className="text-[40px] font-spectral font-bold text-[#C0964B] leading-[120%] uppercase text-center">
            O QUE REALMENTE TRAVA SUA VIDA
            <br />
            DEPOIS DOS 30 SÃO AS RELAÇÕES QUE
            <br />
            VOCÊ AINDA NÃO SABE COMO CORRIGIR.
          </h2>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <p className="text-[14px] leading-[145%] font-normal text-[#F4F0E1] mb-[32px]">
            Você continua acreditando que o problema é
            <br />
            falta de esforço? Junte-se a nós e seja mais
            <br />
            um improvável que deu certo.
          </p>

          {/* BLOCO DE DESTAQUE NO MOBILE */}
          <div className="w-[348px] h-[173px] rounded-[12.52px] border border-[#2A4F4F] bg-[#1A2F2FCC] px-[18px] py-[18px] flex items-center justify-center mb-[38px]">
            <h2 className="font-spectral font-bold text-[20px] leading-[125%] tracking-[0%] text-center uppercase text-[#C0964B]">
              O QUE REALMENTE TRAVA
              <br />
              SUA VIDA DEPOIS DOS 30
              <br />
              SÃO AS RELAÇÕES QUE
              <br />
              VOCÊ AINDA NÃO SABE
              <br />
              COMO CORRIGIR.
            </h2>
          </div>
        </div>

        {/* DIVISOR DESKTOP */}
        <Image
          src="/images/v8/divisor_desktop.png"
          alt=""
          aria-hidden="true"
          width={798}
          height={32}
          className="hidden md:block w-[798px] h-auto mx-auto my-10"
        />

        {/* DIVISOR MOBILE */}
        <Image
          src="/images/v8/divisor_mobile.png"
          alt=""
          aria-hidden="true"
          width={349}
          height={32}
          className="md:hidden w-full h-auto mx-auto my-[36px]"
        />

        <p className="hidden md:block text-[#D3CAC0] font-spectral text-[32px] leading-[125%] font-bold w-full my-10">
          Existem pessoas com{" "}
          <span className="text-[#C0964B] uppercase">
            menos condição que você
          </span>
          <br />
          que conseguiram destravar a vida financeira e construir
          <br />
          liberdade real. Elas não eram as mais preparadas.
        </p>

        <p className="md:hidden text-[#D3CAC0] font-spectral text-[16px] leading-[120%] font-bold w-full mb-[40px]">
          Existem pessoas com
          <br />
          <span className="text-[#C0964B] uppercase">
            menos condição que você
          </span>
          <br />
          que conseguiram destravar a vida financeira e
          <br />
          construir liberdade real. Elas não eram as mais
          <br />
          preparadas.
        </p>

        <p className="text-[#D3CAC0] font-spectral text-[16px] md:text-[32px] leading-[120%] md:leading-[125%] font-bold w-full">
          Na verdade, se transformaram em improváveis
          <br />
          que deram certo…
        </p>
      </div>
    </section>
  );
}
