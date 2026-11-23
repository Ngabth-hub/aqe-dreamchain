"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LANDING_SECTIONS } from "@/constants/landing";

export function HeroScrollIndicator() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={`#${LANDING_SECTIONS.vision}`}
      aria-label="Cuộn xuống phần tiếp theo"
      className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-aqe-gray transition-colors hover:text-aqe-gold md:bottom-10"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="font-sans text-[10px] uppercase tracking-[0.35em]">
        Khám phá
      </span>

      <motion.span
        className="flex h-10 w-6 items-start justify-center rounded-full border border-aqe-white/20 pt-2"
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, 6, 0], opacity: [0.5, 1, 0.5] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 9L1.5 4.5L2.56 3.44L6 6.88L9.44 3.44L10.5 4.5L6 9Z"
            fill="currentColor"
          />
        </svg>
      </motion.span>
    </motion.a>
  );
}
