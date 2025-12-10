import Service from "../components/service";
import ContactNavButton from "../components/contact-nav-button";

export default function ServicesSection() {
  return (
    <section id="services">
      <div
        className="w-full py-24 px-5 gap-18 md:py-30 md:px-12 md:gap-24 grid grid-cols-1 md:grid-cols-2 md:auto-rows-auto"
        style={{ background: "linear-gradient(to bottom, var(--bg-dark), var(--bg-light))" }}
      >
        <div className="md:col-start-1 md:row-start-1 text-5xl">
          Naše služby
        </div>
        <div className="md:col-span-2 md:row-start-3 md:w-1/2 font-silka-400">
          Technológie vnímame ako nástroj, ktorý vám má uľahčiť prácu, nie ju komplikovať. Preto staviame moderné aplikácie, cloudové riešenia a digitálne systémy tak, aby boli rýchle, bezpečné a intuitívne. Našou úlohou je priniesť vám IT, ktoré pracuje pre vás.
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:col-span-2 md:row-start-2">
          <Service heading={"Softvér na mieru (Cloud, Mobile & Web)"} textShort={"Vaša vízia, náš kód. Tvoríme softvér, ktorý rastie s vami."}
            textFull={"Pretvárame vaše unikátne požiadavky na výkonné a intuitívne riešenia.\n\nČi už potrebujete modernú webovú aplikáciu, mobilnú aplikáciu pre iOS a Android, alebo robustný systém bežiaci v cloude, dodáme vám softvér presne na mieru.\n\nNaše riešenia sú bezpečné, škálovateľné a navrhnuté tak, aby vám poskytli konkurenčnú výhodu a zjednodušili prácu."}
          />
          <Service heading={"Automatizácia & digitalizácia procesov"} textShort={"Prestaňte strácať čas rutinou. Automatizujeme vaše procesy."}
            textFull={"Identifikujeme a odstránime úzke hrdlá vo vašich každodenných firemných procesoch.\n\nZbavíme vás opakujúcich sa manuálnych úloh, zdigitalizujeme papierovú agendu a zavedieme automatizované pracovné postupy (workflows).\n\nVýsledkom je vyššia efektivita, menej chýb a viac času pre vašich zamestnancov na prácu, ktorá má skutočnú hodnotu."}
          />
          <Service heading={"Integrácia IT systémov"} textShort={"Spojíme vaše systémy do jedného funkčného celku."}
            textFull={'Vaša firma využíva viacero systémov, ktoré spolu nekomunikujú? Zabezpečíme, aby si vaše CRM, ERP, účtovný softvér a ďalšie aplikácie navzájom "rozumeli".\n\nVytvoríme prepojenia (API), ktoré umožnia automatickú výmenu dát, zjednotia vaše procesy a poskytnú vám ucelený pohľad na vaše podnikanie z jedného miesta.'}
          />
          <Service heading={"AI driven solutions"} textShort={"Využite silu umelej inteligencie pre rast vášho biznisu."}
            textFull={"Implementujeme inteligentné riešenia, ktoré posunú vaše podnikanie na novú úroveň.\n\nOd chatbotov, ktorí zlepšia vašu zákaznícku podporu, cez prediktívnu analytiku na lepšie rozhodovanie, až po personalizované odporúčania pre vašich klientov.\n\nPomôžeme vám využiť potenciál AI na zvýšenie ziskovosti, inováciu a získanie náskoku pred konkurenciou."}
          />
        </div>
        <div className="flex items-center justify-center md:col-start-2 md:row-start-1 md:items-end md:justify-end">
          <ContactNavButton text="Požiadať o cenovú ponuku" />
        </div>
      </div>
    </section>
  );
}
