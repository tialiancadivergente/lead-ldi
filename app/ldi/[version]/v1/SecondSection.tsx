"use client";

import { handleScroll } from "@/lib/utils";
import Image from "next/image";

export default function SecondSection() {
	return (
		<section
			className={`
				w-full
				min-h-[459px]
				h-[459px]
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
			<div className="w-full max-w-[349px] md:max-w-[990px] mx-auto text-center py-10 font-mulish text-[16px] md:text-[18px] leading-[125%] text-[#F4F0E1] font-bold">
				<p className="md:block hidden mb-4 md:mb-8">
					Você continua acreditando que o problema é falta de esforço? <br />
					Junte-se a nós e seja mais um improvável que deu certo.
				</p>
				{/* <p className="md:block hidden font-spectral font-bold uppercase my-4 md:my-8 leading-[120%] tracking-[-0.02em] text-[#C0964B] text-[20px] md:text-[40px]">
					NÃO É <span className="line-through">TALENTO</span>, NÃO É <span className="line-through">SORTE</span>, <br />
					NÃO É <span className="line-through">ESFORÇO</span>
				</p> */}
				<div className="md:block hidden md:text-[40px] text-[20px] font-spectral font-bold text-[#C0964B] leading-[120%]">
					O QUE REALMENTE TRAVA SUA VIDA DEPOIS DOS 30 SÃO AS RELAÇÕES QUE VOCÊ AINDA NÃO SABE COMO CORRIGIR.
				</div>
				<p className="text-[#F4F0E1] font-mulish text-[16px] md:text-[18px] leading-[125%] font-bold max-w-[667px] w-full mx-auto mb-10 md:my-10">
					Este é um evento de 3 dias para você que já tentou de tudo e continua no mesmo lugar – mas agora está pronto para se levantar contra os padrões que travam seu dinheiro, decisões e liberdade.
				</p>
				<Image
					src="/images/v1/risk.png"
					alt="Risk"
					width={609}
					height={2}
					className="w-full max-w-[609px] mx-auto"
				/>
				<p className="text-[#D3CAC0] font-spectral text-[16px] md:text-[32px] leading-[125%] font-bold w-full my-10 hidden md:block">
					Existem pessoas com <span className="text-[#C0964B] uppercase">menos condição que você</span> <br />
					que conseguiram destravar a vida financeira e construir liberdade real. Elas não eram as mais preparadas.
				</p>
				<p className="text-[#D3CAC0] font-spectral text-[16px] md:text-[32px] leading-[125%] font-bold w-full my-10 md:hidden">
					Existem pessoas com <span className="text-[#C0964B] uppercase">menos condição que você</span>
					que conseguiram destravar a vida financeira e construir liberdade real. Elas não eram as mais preparadas.
				</p>
				<p className="text-[#D3CAC0] font-spectral text-[16px] md:text-[32px] leading-[125%] font-bold w-full">
					Na verdade, se transformaram em improváveis <br />
					que deram certo…
				</p>
			</div>
		</section>
	);
}
