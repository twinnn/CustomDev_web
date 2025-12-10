import ConsultationButton from "@/app/components/constultation-button";
import PartnerProfile from "@/app/components/partner-profile";

export default function Partners() {
  return (
    <div className="w-full bg-[var(--bg-bright)] flex flex-col px-5 py-24 md:px-12 md:py-30 gap-16 text-[var(--fg-dark)]">
      <div className="flex flex-col gap-10 md:flex-row md:gap-0">
        <div className="flex flex-col gap-6 md:gap-3 md:flex-1/2">
          <div className="font-silka-400 w-fit text-[0.8125rem] border-b-1 border-[#35add9] py-2 px-4">
            Naši partneri
          </div>
          <div className="text-[2.5rem] md:text-[3rem]">
            Spolupracujeme s odborníkmi v segmente
          </div>
        </div>
        <div className="md:flex-1/2 md:content-end md:justify-items-end">
          <ConsultationButton />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <PartnerProfile photo="/rz.png" name={"Doc. Ing. Radoslav Židek, PhD."} position={"Genetik a súdny znalec"}
          describtion="Viac než 20 rokov pôsobí v oblasti populačnej a molekulárnej genetiky. Odborne sa venuje nutričnej genomike, vysledovateľnosti potravín a vedie centrum forenzných expertíz na slovensku."
          linkUrl="https://cefex.sk" linkText="CEFEX.SK" />
        <PartnerProfile photo={"/ph.png"} name={"Peter Hanzlik"} position={"Uznávaný odborník na IoT, dátovú analytiku a umelú inteligenciu"}
          describtion={"Viac ako 20 rokov skúseností v technologických inováciách, Distinguished Technologist v DXC Technology a držiteľ prestížneho ocenenia Microsoft MVP za AI, ktoré potvrdzuje jeho prínos odborným komunitám a zdieľanie znalostí na globálnej úrovni."}
          linkUrl="https://www.linkedin.com/in/peterhanzlik/" linkText="LINKEDIN" />
        <PartnerProfile photo={"/mm.png"} name={"Michael Mužík"} position={"Full stack dizajnér"}
          describtion={"Viac než 9 rokov skúseností so všetkými formami dizajnu. Certifikovaný na University of the Arts London vo vizuálnej identite a prvý oficiálne certifikovaný Wix Studio webdizajnér na Slovensku."}
          linkUrl="https://michaelmuzik.com" linkText="MICHAELMUZIK.COM" />
      </div>
      <div className="flex flex-col font-silka-400">
        A desiatky ďalších...
      </div>
    </div>
  );
}
