import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="
        w-full
        flex
        justify-center
        bg-cover bg-top
        bg-[url('/images/footer/footer_mobile.webp')]
        md:bg-[url('/images/ora/v1/rodape_desktop.webp')]
      "
    >
      <div
        className="
          w-full
          max-w-[1920px]
          flex
          flex-col
          items-center
          justify-center
          gap-[16px]

          pt-[40px]
          pb-[40px]
          px-[20px]

          md:pt-[48px]
          md:pb-[48px]
        "
      >

        {/* LOGO */}
        <Image
          src="/images/ora/v1/logo_o_proximo_nivel.png"
          alt="Logo"
          width={160}
          height={74}
          className="object-contain"
        />

        {/* TEXTO */}
        <p
          className="
            font-raleway
            font-normal
            text-[14px]
            md:text-[16px]
            leading-[100%]
            text-center
            text-white
          "
        >
          2026 Aliança Divergente © Todos os Direitos Reservados.
        </p>

      </div>
    </footer>
  );
}