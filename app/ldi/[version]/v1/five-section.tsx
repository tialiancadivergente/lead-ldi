"use client";

import React from "react";
import Image from "next/image";
import { handleScroll } from "@/lib/utils";

export default function FiveSection() {
	return (
		<section
			className="
				w-full
				min-h-[1180px]
				md:min-h-[905px]
				bg-[#071117]
				bg-[url('/images/ora/v1/quarta_dobra_mobile_teste.webp')]
				md:bg-[url('/images/v1/bg-five.webp')]
				bg-cover
				bg-center
				bg-no-repeat
				flex
				flex-col
				justify-start
				px-2
				pt-36
				pb-6
				md:px-4
				md:pt-16
				md:pb-8
			"
		>
			<div className="w-full max-w-[1024px] mx-auto flex flex-col items-center justify-center">
				<Image
					src="/images/v1/LOGO-OLDI.png"
					alt="Risk"
					width={548}
					height={155}
				/>
				<p className="text-[#D3CAC0] font-spectral text-[25px] text-center leading-[125%] font-extrabold w-full max-w-[667px] mx-auto my-10">
					Não é sobre as pessoas mais talentosas. <br /> Não é sobre as mais preparadas.
				</p>
				<p className="text-[#F4F0E1] font-mulish text-[18px] text-center leading-[135%] font-semibold w-full max-w-[667px] mx-auto">
					É um processo prático para destravar sua vida financeira depois dos 30 e corrigir relacionamentos que impedem sua permissão de ir mais longe.
				</p>
				<div className="bg-transparent border-2 my-10 border-[#C0964B] text-[#F4F0E1] rounded-[16px] px-4 py-2 w-[353px] h-[71px] flex items-center justify-center gap-2">
					<Image
						src="/images/v1/video-on-fill.png"
						alt="Risk"
						width={42}
						height={42}
					/>
					É online, ao vivo e gratuito.
				</div>
				<button
					onClick={handleScroll}
					className="mt-[12px] mb-[12px] w-full max-w-[457px] h-[64px] md:h-[64px] rounded-[8px] font-mulish font-extrabold text-[14px] md:text-[16px] leading-[145%] uppercase text-black transition-all hover:brightness-110 border border-[#FCF3D4] [background:linear-gradient(90deg,_#DFD2A7_0%,_#FCF3D4_100%)] shadow-[0px_6px_18.9px_0px_#F7EDCC85]">
					ACESSAR O LEVANTE DOS IMPROVÁVEIS
				</button>
				<div className="flex items-center justify-between gap-2 w-full mt-28">
					<div className="text-white text-[14px] leading-[135%] font-mulish">Copyright © O Resgate Dos Otimistas. <br /> Todos os direitos reservados.</div>
					<Image
						src="/images/logo.png"
						alt="Risk"
						width={250}
						height={32}
					/>
				</div>
			</div>
		</section >
	);
}