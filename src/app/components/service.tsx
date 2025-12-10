"use client"

import { useState } from "react"

export type Service = {
  heading: string;
  textShort: string;
  textFull: string;
}

export default function Service({ heading, textShort, textFull }: Service) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="group relative w-full text-[var(--fg-dark)] h-[19.1875rem] md:h-[18.9375rem]
        bg-[var(--bg-bright)] overflow-hidden transition-all duration-300"
      onClick={() => setOpen(!open)}
    >
      <div className="flex flex-col gap-1.5 p-5">
        <div className="text-[2rem]">{heading}</div>
        <div className="text-[0.9375rem] font-silka-400">{textShort}</div>
      </div>

      <div
        className={`
          absolute bottom-0 left-0 w-full bg-[var(--bg-bright2)]
          flex items-center justify-center text-center transition-all duration-500 ease-in-out
          ${open ? "h-full" : "h-1/4"}
          md:h-1/4 md:group-hover:h-full
        `}
      >
        <div
          className={`
            ${open ? "opacity-0" : "opacity-100"}
            md:opacity-100 md:group-hover:opacity-0
            transition-opacity duration-300
          `}
        >
          ČÍTAŤ ĎALEJ
        </div>
        <div
          className={`
            absolute inset-0 p-5 text-left overflow-y-auto leading-relaxed whitespace-pre-line
            ${open ? "opacity-100" : "opacity-0"}
            md:opacity-0 md:group-hover:opacity-100
            transition-opacity duration-300 font-silka-400
          `}
        >
          {textFull}
        </div>
      </div>
    </div>
  )
}
