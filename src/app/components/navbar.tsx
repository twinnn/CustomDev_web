"use client";

import { useEffect, useState } from "react";
import CustomDevFull from "@/../public/logo/customdev-full.svg";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // mobile menu handled by MobileMenu component

  const sections = [
    { id: "about-us", label: "O NÁS" },
    { id: "services", label: "SLUŽBY" },
    { id: "references", label: "REFERENCIE" },
    { id: "how-we-work", label: "AKO PRACUJEME" },
    { id: "contact-us", label: "KONTAKT" },
  ];

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false)
  }

  return (
    <nav className={"w-full h-16 flex items-center justify-between p-6 md:px-12 md:py-8"}>
      <CustomDevFull className="h-5.75 md:h-7.75" />

      {
        isMobile
        ? (
          <MobileMenu>
            {({ close }) => (
              <div className="flex flex-col gap-3">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    className="text-base text-left w-full text-[2rem]"
                    onClick={() => { scrollToId(s.id); close(); }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </MobileMenu>
        )
        : <div className="flex items-center gap-10">
          {sections.map((s) => (
            <button
              key={s.id}
              className="text-base hover:underline hover:cursor-pointer"
              onClick={() => scrollToId(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      }
    </nav>
  );
}
