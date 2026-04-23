import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoVariant = "default" | "dark";

type FooterLdiProps = {
  className?: string;
  darkTheme?: boolean;
  logoVariant?: LogoVariant;
};

const LOGO_BY_VARIANT: Record<LogoVariant, string> = {
  default: "/images/logo.png",
  dark: "/images/v5/LOGO OLDI.png",
};

export default function FooterLdi({
  className,
  darkTheme = false,
  logoVariant = "default",
}: FooterLdiProps) {
  const textColorClass = darkTheme ? "text-[#0A3740]" : "text-white";
  const logoSrc = LOGO_BY_VARIANT[logoVariant];

  return (
    <footer
      className={cn(
        "flex md:flex-row flex-col items-center justify-between gap-6 w-full md:gap-2",
        className
      )}
    >
      <div
        className={cn(
          "text-[14px] text-center md:text-left leading-[135%] font-mulish hidden md:block",
          textColorClass
        )}
      >
        Copyright © O Levante dos Improváveis. <br /> Todos os direitos reservados.
      </div>
      <Image
        src={logoSrc}
        alt="Risk"
        width={250}
        height={32}
      />
      <div
        className={cn(
          "text-[14px] text-center md:text-left leading-[135%] font-mulish block md:hidden",
          textColorClass
        )}
      >
        Copyright © O Levante dos Improváveis. <br /> Todos os direitos reservados.
      </div>
      <div className="flex flex-col items-center space-x-2">
        <div className="flex items-center space-x-2">
          <Link
            href="https://crm.imperio55.com.br/_assets/editora/politica/alianca_divergente_politicas_de_privacidade.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-[14px] text-center md:text-left leading-[135%] font-mulish transition-colors duration-200 hover:text-[#C0964B]",
              textColorClass
            )}
          >
            Política de privacidade
          </Link>
          <span
            className={cn(
              "text-[14px] text-center md:text-left leading-[135%] font-mulish",
              textColorClass
            )}
          >
            |
          </span>
          <Link
            href="https://pt.scribd.com/document/812002283/alianca-divergente-termos-de-uso"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-[14px] text-center md:text-left leading-[135%] font-mulish transition-colors duration-200 hover:text-[#C0964B]",
              textColorClass
            )}
          >
            Termos de uso
          </Link>
        </div>
        <p
          className={cn(
            "text-[12px] text-center md:text-left leading-[135%] font-mulish",
            textColorClass
          )}
        >
          CNPJ nº 48.424.807/0001-88
        </p>
      </div>
    </footer>
  );
}
