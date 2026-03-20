import type { ReactNode } from "react";

interface IHeadline {
  id: number | string;
  isPicture: boolean;
  isLogo: boolean;
  title: ReactNode;
  text: ReactNode;
}

export const Headline: IHeadline[] = [
  {
    id: "h1",
    isPicture: false,
    isLogo: true,

    title: (
      <>
        CONHEÇA O PLANO QUE "IMPROVÁVEIS" ESTÃO USANDO PARA DESTRAVAR A VIDA FINANCEIRA DEPOIS DOS 30 – <span className="text-[#C0964B] md:text-[#0A3740]">CORRIGINDO OS PADRÕES QUE IMPEDEM DE AVANÇAR.</span>
      </>
    ),

    text: (
      <>
        Segunda-feira, 23/03, às 20h &nbsp; • &nbsp; Ao vivo e sem replay
      </>
    ),
  },
  {
    id: "h2",
    isPicture: false,
    isLogo: true,

    title: (
      <>
        Um processo prático para destravar sua vida financeira depois dos 30. <span className="text-[#C0964B] md:text-[#0A3740]">Corrigindo relacionamentos que travam suas decisões sem você perceber.</span>
      </>
    ),

    text: (
      <>
        Segunda-feira, 23/03, às 20h &nbsp; • &nbsp; Ao vivo e sem replay
      </>
    ),
  },
  {
    id: "h3",
    isPicture: false,
    isLogo: true,

    title: (
      <>
        <span className="text-[#C0964B] md:text-[#0A3740]">Livre-se dos padrões que travam sua vida financeira,</span> mesmo com todo seu esforço, capacidade e dedicação.
        Ou ignore este movimento e repita o mesmo erro por mais 10 anos…
      </>
    ),

    text: (
      <>
        Segunda-feira, 23/03, às 20h &nbsp; • &nbsp; Ao vivo e sem replay
      </>
    ),
  },
];
