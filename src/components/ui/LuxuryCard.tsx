import { ReactNode } from "react";

type LuxuryCardProps = {
  children: ReactNode;
};

export default function LuxuryCard({
  children,
}: LuxuryCardProps) {
  return (
    <div
      className="
      group
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-md
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[#D4AF37]/40
      hover:bg-white/10
      "
    >
      {children}
    </div>
  );
}