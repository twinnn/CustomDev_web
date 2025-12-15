import { forwardRef, useState } from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState(props.value ?? "");

    return (
      <div className="relative w-full">
        {/* Input */}
        <input
          ref={ref}
          {...props}
          value={value}
          onChange={(e) => {
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
      </div>
    );
  }
);

TextField.displayName = 'TextField';
