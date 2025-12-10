"use client";

import { JSX, useState } from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | JSX.Element;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  const toggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <span className="relative w-4 h-4">
        <input
          type="checkbox"
          className="peer absolute w-full h-full opacity-0 cursor-pointer z-10"
          checked={checked}
          onChange={toggle}
          {...props}
        />
        <span
          className="
            absolute inset-0 bg-[#c9e7f2] 
            flex items-center justify-center
            transition-all duration-150 w-4 h-4
          "
        >
          <span className={`w-2.5 h-2.5 bg-[#002e59] ${checked ? "" : "hidden"}`} />
        </span>
      </span>

      {label && (
        <span className="text-[var(--fg-dark)] font-silka-400 text-base">
          {label}
        </span>
      )}
    </label>
  );
}
