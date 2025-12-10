"use client";

import { useState } from "react";
import CaseStudy, { CaseStudyProps } from "./case-study";
import ChevronRight from "@/../public/icon/chevron-right.svg";

export default function CaseStudies() {
  const [study, setStudy] = useState(0);

  const caseStudies : CaseStudyProps[] = [
    {
        note: "Cezhraničný projekt EÚ v rámci programu Interreg.",
        name: "Za vôňou dreva",
        imagesrc: "/logo/za-vonu-dreva.png",
        text: "Hlavným cieľom projektu je zvýšenie atraktivity kultúrneho a prírodného dedičstva poľsko-slovenského pohraničia prostredníctvom zviditeľnenia prírodných a kultúrnych atrakcií cezhraničnej oblasti a ekologického vzdelávania na území poľsko-slovenského pohraničia zdôraznených v rámci projektu.",
        features: ["Cross platform mobile app development", "Navigation", "GPS a QR kód kontrola"]
    },
    {
        note: "Integrácia internetového obchodu so skladovým hospodárstvom",
        name: "Go-noow.sk",
        imagesrc: "/logo/go-noow.png",
        text: "Automátizácia vybavovania nových objednávok so zaslaním informácií e-mailom spolu s generovanými Štítkami pre dopravu.",
        features: ["Integrácia s tretími stranami", "Dopravcovia", "Platobné brány"]
    },
    {
        note: "AI powered riešenie na každý deň",
        name: "Nu3Food",
        imagesrc: "/logo/nu3food.png",
        text: "Nastavenie profilu užívateľa na základe DNA testu (alergény).",
        features: ["Trénovanie AI modelu", "Kontraindikácie potravín a užívaných liekov"]
    }
  ]

  return (
    <div className="flex flex-col md:flex-row gap-10 mt-10 md:mt-14 md:h-[26.75rem]">
      <CaseStudy {...caseStudies[study]} />
      <div className="flex flex-col md:flex-1/3 border-1 border-[var(--bg-white)] justify-between p-8">
          <div className="text-[2rem]">
              {caseStudies[(study+1) % caseStudies.length].name}
          </div>
          <button className="flex flex-row justify-between hover:underline hover:cursor-pointer"
            onClick={() => setStudy((study+1) % caseStudies.length)}
          >
            <div>
              ĎALŠIA CASE STUDY
            </div>
            <ChevronRight className="h-6" />
          </button>
      </div>
    </div>
  );
}
