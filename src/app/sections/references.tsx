import { JSX } from "react";
import ContactNavButton from "../components/contact-nav-button";
import CaseStudies from "../components/case-studies";

type GlassBgLogoProps = {
  src: string;
  alt: string;
  className?: string;
};

function GlassBgLogo({ src, alt, className }: GlassBgLogoProps): JSX.Element {
  return (
    <div className={`h-min glass-blur ${className}`}>
      <img src={src} alt={alt} className={`h-20 p-3 ${className}`} />
    </div>
  );
}

function ReferencesLogos() {
  return (
    <div className="flex relative items-center justify-center">
      <div className="p-2 text-[6.875rem] md:text-[10rem] text-white/40 phone-rotate-90 select-none pointer-events-none">
        Referencie
      </div>
      <div className="w-full h-full absolute inset-0 flex flex-col content-between justify-between">
        <div className="w-full md:h-full flex-2/5 md:flex-1/2 flex flex-col md:items-center justify-around md:flex-row md:justify-around">
          <div className="md:w-fit w-full flex flex-row justify-end">
            <GlassBgLogo src="/logo/gunnebo.png" alt="gunnebo" className="inset-5" />
            <div className="w-1/2 md:hidden" />
          </div>
          <div className="md:w-fit w-full flex flex-row">
            <div className="w-1/2 md:hidden" />
            <GlassBgLogo src="/logo/accenture.png" alt="accenture" />
          </div>
        </div>
        <div className="w-full md:h-full flex-3/5 md:flex-1/2 flex flex-col items-center justify-around md:justify-between md:flex-row">
          <div className="md:w-fit w-full flex flex-row justify-end">
            <GlassBgLogo src="/logo/thermofisher.png" alt="thermofisher" />
            <div className="w-1/2 md:hidden" />
          </div>
          <div className="md:w-fit w-full flex flex-row">
            <div className="w-1/2 md:hidden" />
            <GlassBgLogo src="/logo/elkjop.png" alt="elkjop" />
          </div>
          <div className="md:w-fit w-full flex flex-row justify-end">
            <GlassBgLogo src="/logo/european-central-bank.png" alt="european-central-bank" />
            <div className="w-1/2 md:hidden" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ReferencesSection() {
  return (
    <section id="references">
      <div className="w-full flex items-center justify-center bg-[var(--bg-light)] px-5 pt-24 pb-[7.5rem] md:pb-24 md:px-12 ">
        <div className="flex flex-col gap-10">
          <div className="text-2xl text-center font-silka-400">
            Desiatky klientov, množstvo skúseností, maximálna spokojnosť.
          </div>
          <ReferencesLogos />
          <div className="flex flex-row gap-3 justify-center pt-20 md:pt-14 hover:cursor-pointer hover:underline">
            <ContactNavButton text="OPÝTAŤ SA NA REFERENCIU V MOJOM OBORE" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[var(--bg-light)] flex flex-col gap-10 px-5 pb-24 md:px-12 md:pb-30">
        <div className="text-[2.5rem] md:text-5xl">
          Vybrané Case Studies
        </div>
        <CaseStudies />
      </div>
    </section>
  );
}
