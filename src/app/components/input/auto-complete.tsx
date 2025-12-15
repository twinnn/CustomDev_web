"use client";

import { forwardRef, useState } from "react";
import ChevronRight from "@/../public/icon/chevron-right.svg";

interface AutocompleteProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options: string[];
}

export const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  ({ label, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState(props.value ?? "");
    const [query, setQuery] = useState("");

    const filtered =
      query === ""
        ? props.options
        : props.options.filter((o) => o.toLowerCase().includes(query.toLowerCase()));

    return (
      <div className="relative w-full">
        {/* Input */}
        <input
          ref={ref}
          {...props}
          value={value}
          onChange={(e) => {
            setQuery(e.target.value);
            setValue(e.target.value);
            props.onChange?.(e);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="
            w-full border-b border-[var(--fg-dark)] text-[var(--fg-dark)]
            font-silka-400 text-base px-6 py-4
            focus:outline-none
          "
        />

        {/* Label */}
        <label
          className={`
            absolute left-0 text-[var(--fg-dark)] font-silka-400 text-base
            transition-all duration-200 ease-in-out
            pointer-events-none px-6
            ${focused || value
              ? "-top-4 text-sm"
              : "top-4"
            }
          `}
        >
          {label}
        </label>

        {/* Chevron Icon */}
        <ChevronRight className={`
              absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-200 h-6
              ${focused ? "rotate-270" : "rotate-90"}
          `}
          onClick={() => setFocused(!focused)}
        />

        {/* Dropdown options */}
        {filtered.length > 0 && focused && (
          <div className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[var(--bg-black)] shadow-md shadow-gray-800 z-10 \
            flex flex-col text-[var(--fg-white)] ">
            {filtered.map((option) => (
              <div
                key={option}
                onMouseDown={(e) => {
                  setValue(option);
                  setQuery(option);
                }}
                className="p-2 cursor-pointer hover:underline text-left"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';