import type { ReactNode } from "react";

interface IHeadline {
  id: number | string;
  isPicture: boolean;
  isLogo: boolean;
  title: ReactNode;
  text: ReactNode;
}

const DefaultSubheadline = () => (
  <span className="block w-full md:w-[528px] text-[#0A3740]">
    <strong className="block font-inter font-bold text-[16px] leading-[135%]">
      Você nasceu para ser grande, mas foi cultivado para ficar pequeno.
    </strong>

    <span className="mt-4 block font-inter font-normal text-[16px] leading-[135%]">
      Por isso, continua travado e com a vida financeira atrofiada. Mas durante
      este Evento Online de 3 dias, vamos corrigir o problema para você crescer
      e dar certo na vida.
    </span>
  </span>
);

const ItalicSubheadline = () => (
  <span className="block w-full md:w-[528px] text-[#0A3740]">
    <strong className="block font-inter font-bold italic text-[16px] leading-[135%]">
      Você nasceu para ser grande, mas foi cultivado para ficar pequeno.
    </strong>

    <span className="mt-4 block font-inter font-normal text-[16px] leading-[135%]">
      Por isso, continua travado e com a vida financeira atrofiada. Mas durante
      este Evento Online de 3 dias, vamos corrigir o problema para você crescer
      e dar certo na vida.
    </span>
  </span>
);

export const Headline: IHeadline[] = [
  {
    id: "h1",
    isPicture: false,
    isLogo: true,
    title: (
      <>
        <span className="hidden md:block w-[528px] font-spectral font-bold uppercase text-[28px] leading-[110%]">
          <span className="text-[#AB791F]">
            LIVRE-SE DOS PADRÕES QUE
            <br />
            ATROFIAM SUA VIDA FINANCEIRA,
          </span>
          <br />
          <span className="text-[#0A3740]">
            MESMO COM TODO SEU ESFORÇO,
            <br />
            CAPACIDADE E DEDICAÇÃO.
            <br />
            <br />
            OU IGNORE ESTE MOVIMENTO E
            <br />
            REPITA O MESMO ERRO POR MAIS
            <br />
          </span>
          <span className="text-[#AB791F]">10 ANOS...</span>
        </span>

        <span className="block md:hidden w-full font-spectral font-bold uppercase text-[22px] leading-[110%]">
          <span className="text-[#AB791F]">
            LIVRE-SE DOS PADRÕES QUE
            <br />
            ATROFIAM SUA VIDA FINANCEIRA,
          </span>
          <br />
          <span className="text-[#0A3740]">
            MESMO COM TODO SEU
            <br />
            ESFORÇO, CAPACIDADE E
            <br />
            DEDICAÇÃO.
            <br />
            <br />
            OU IGNORE ESTE MOVIMENTO E
            <br />
            REPITA O MESMO ERRO POR
            <br />
            MAIS{" "}
          </span>
          <span className="text-[#AB791F]">10 ANOS...</span>
        </span>
      </>
    ),
    text: <DefaultSubheadline />,
  },
  {
    id: "h2",
    isPicture: false,
    isLogo: true,
    title: (
      <>
        <span className="hidden md:block w-[528px] font-spectral font-bold uppercase text-[32px] leading-[110%]">
          <span className="text-[#AB791F]">
            UM PROCESSO PRÁTICO PARA
            <br />
            DESTRAVAR SUA VIDA
          </span>
          <br />
          <span className="text-[#0A3740]">
            FINANCEIRA DEPOIS DOS 30.
            <br />
            CORRIGINDO OS PADRÕES DE
            <br />
            CONVÍVIO QUE PODAM O SEU
            <br />
            CRESCIMENTO E FREIAM OS
            <br />
            RESULTADOS SEM VOCÊ
            <br />
            PERCEBER.
          </span>
        </span>

        <span className="block md:hidden w-full font-spectral font-bold uppercase text-[22px] leading-[110%]">
          <span className="text-[#AB791F]">
            UM PROCESSO PRÁTICO PARA
            <br />
            DESTRAVAR SUA VIDA
          </span>
          <br />
          <span className="text-[#0A3740]">
            FINANCEIRA DEPOIS DOS 30.
            <br />
            CORRIGINDO OS PADRÕES DE
            <br />
            CONVÍVIO QUE PODAM O SEU
            <br />
            CRESCIMENTO E FREIAM OS
            <br />
            RESULTADOS SEM VOCÊ
            <br />
            PERCEBER.
          </span>
        </span>
      </>
    ),
    text: <ItalicSubheadline />,
  },
  {
    id: "h3",
    isPicture: false,
    isLogo: true,
    title: (
      <>
        <span className="hidden md:block w-[528px] font-spectral font-bold uppercase text-[28px] leading-[110%]">
          <span className="text-[#AB791F]">
            VOCÊ NASCEU PARA SER GRANDE,
            <br />
            MAS FOI CULTIVADO PARA FICAR
            <br />
            PEQUENO.
          </span>
          <br />
          <br />
          <span className="text-[#0A3740]">
            É HORA DE SE LEVANTAR CONTRA
            <br />
            O QUE TE PRENDE, CORRIGIR AS
            <br />
            RELAÇÕES, ELIMINAR PADRÕES
            <br />
            QUE ATROFIAM SUA VIDA
            <br />
            FINANCEIRA E VOLTAR A CRESCER
            <br />
            PARA DAR CERTO NA VIDA.
          </span>
        </span>

        <span className="block md:hidden w-full font-spectral font-bold uppercase text-[22px] leading-[110%]">
          <span className="text-[#AB791F]">
            VOCÊ NASCEU PARA SER
            <br />
            GRANDE, MAS FOI CULTIVADO
            <br />
            PARA FICAR PEQUENO.
          </span>
          <br />
          <br />
          <span className="text-[#0A3740]">
            É HORA DE SE LEVANTAR
            <br />
            CONTRA O QUE TE PRENDE,
            <br />
            CORRIGIR AS RELAÇÕES,
            <br />
            ELIMINAR PADRÕES QUE
            <br />
            ATROFIAM SUA VIDA FINANCEIRA
            <br />
            E VOLTAR A CRESCER PARA
            <br />
            DAR CERTO NA VIDA.
          </span>
        </span>
      </>
    ),
    text: (
      <span className="block w-full md:w-[528px] font-inter font-normal text-[16px] leading-[135%] text-[#0A3740]">
        Evento Online e Gratuito de 3 Dias para destravar sua vida depois dos
        30. Inscreva-se Agora!
      </span>
    ),
  },
  {
    id: "h4",
    isPicture: false,
    isLogo: true,
    title: (
      <>
        <span className="hidden md:block w-[528px] font-spectral font-bold uppercase text-[36px] leading-[110%]">
          <span className="text-[#AB791F]">
            ROMPA O FREIO INVISÍVEL
            <br />
            QUE TE IMPEDE DE
            <br />
            GANHAR MAIS.
          </span>
          <br />
          <br />
          <span className="text-[#0A3740]">
            CORRIJA OS RELACIONAMENTOS
            <br />
            QUE PODAM O SEU CRESCIMENTO.
          </span>
        </span>

        <span className="block md:hidden w-full font-spectral font-bold uppercase text-[29px] leading-[110%]">
          <span className="text-[#AB791F]">
            ROMPA O FREIO INVISÍVEL
            <br />
            QUE TE IMPEDE DE
            <br />
            GANHAR MAIS.
          </span>
          <br />
          <br />
          <span className="text-[#0A3740]">
            CORRIJA OS
            <br />
            RELACIONAMENTOS QUE
            <br />
            PODAM O SEU CRESCIMENTO.
          </span>
        </span>
      </>
    ),
    text: (
      <span className="block w-full md:w-[528px] font-inter font-normal text-[16px] md:text-[18px] leading-[135%] text-[#0A3740]">
        Em apenas 3 dias, você vai realizar um Diagnóstico de Desbloqueio de
        Vida e acessar o Plano Prático para se tornar o próximo improvável que
        deu certo na vida — seja qual for o seu ponto de partida.
      </span>
    ),
  },
  {
    id: "h5",
    isPicture: false,
    isLogo: true,
    title: (
      <>
        <span className="hidden md:block w-[528px] font-spectral font-bold uppercase text-[28px] leading-[110%]">
          <span className="text-[#0A3740]">
            CONHEÇA O MÉTODO QUE
            <br />
          </span>
          <span className="text-[#AB791F]">
            “IMPROVÁVEIS” ESTÃO USANDO
            <br />
            PARA IDENTIFICAR E CORRIGIR OS
            <br />
            PADRÕES DE COMPORTAMENTO
            <br />
            QUE TRAVAM DECISÕES,
            <br />
            RELACIONAMENTOS E ESCOLHAS
            <br />
          </span>
          <span className="text-[#0A3740]">DEPOIS DOS 30.</span>
        </span>

        <span className="block md:hidden w-full font-spectral font-bold uppercase text-[19px] leading-[110%]">
          <span className="text-[#0A3740]">
            CONHEÇA O MÉTODO QUE
            <br />
          </span>
          <span className="text-[#AB791F]">
            “IMPROVÁVEIS” ESTÃO USANDO
            <br />
            PARA IDENTIFICAR E CORRIGIR
            <br />
            OS PADRÕES DE COMPORTAMENTO
            <br />
            QUE TRAVAM DECISÕES,
            <br />
            RELACIONAMENTOS E ESCOLHAS
            <br />
          </span>
          <span className="text-[#0A3740]">DEPOIS DOS 30.</span>
        </span>
      </>
    ),
    text: (
      <span className="block w-full md:w-[528px] text-[#0A3740]">
        <strong className="block font-inter font-bold text-[18px] leading-[135%]">
          Você nasceu para ser grande, mas foi cultivado para ficar pequeno.
        </strong>

        <span className="mt-4 block font-inter font-normal text-[18px] leading-[135%]">
          Por isso, continua travado e com a vida financeira atrofiada. Mas
          durante este Evento Online de 3 dias, vamos corrigir isso para você
          crescer e dar certo na vida.
        </span>
      </span>
    ),
  },
];
