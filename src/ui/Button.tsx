import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40",
        {
          "bg-[#D4AF37] text-black hover:bg-[#E5C158] hover:-translate-y-0.5 hover:shadow-lg":
            variant === "primary",

          "border border-white/20 bg-transparent text-white hover:border-[#D4AF37] hover:text-[#D4AF37]":
            variant === "secondary",

          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}