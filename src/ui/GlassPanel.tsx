import { ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassPanel({
  children,
  className = "",
}: GlassPanelProps) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}