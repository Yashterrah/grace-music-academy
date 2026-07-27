import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-emerald-800 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}