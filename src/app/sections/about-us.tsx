import ConsultationButton from "../components/constultation-button";
import LightRays from "../components/light-rays";

export default function AboutUsSection() {
  return (
    <section id="about-us">
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat pt-93"
      >
        <div className="absolute bg-[var(--bg-dark)] inset-0 -z-10">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <div className="flex flex-col py-16 px-5 gap-16 md:py-30 md:px-12 md:gap-24 md:max-w-3/4">
          <div className="gap-10 flex flex-col">
            <div className="text-[2.75rem] md:text-[6.25rem]">
              Digitálne riešenia pre reálny svet.
            </div>
            <div className="text-[0.9375rem] font-silka-400 md:text-base md:max-w-1/2">
              Od návrhu softvéru, cez správu infraštruktúry až po zákaznícku podporu – vždy stojíme pri vás ako partner, ktorý rozumie technológiám aj ľuďom.
            </div>
          </div>
          <ConsultationButton />
        </div>
      </div>
    </section>
  );
}
