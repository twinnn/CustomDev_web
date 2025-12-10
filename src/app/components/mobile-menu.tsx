"use client";

import { useState } from "react";

type Props = {
  children: (api: { close: () => void }) => React.ReactNode;
};

export default function MobileMenu({ children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <img src="/icon/menu.svg" alt="Toggle menu" className="h-6" />
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setOpen(false)}
        >
          <div className="absolute right-0 top-0 bg-[var(--bg-black)] p-5 flex flex-col gap-50 text-[var(--fg-white)] w-9/10"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between">
              <img src="/logo/customdev-full.svg" alt="CustomDev" className="h-6" />
              <button onClick={() => setOpen(false)}>
                <img src="/icon/close.svg" alt="Close" className="h-4.5" />
              </button>
            </div>
            <div className="flex flex-col gap-6 ">
              {children({ close: () => setOpen(false) })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
