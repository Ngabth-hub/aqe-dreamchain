"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HERO_STATS } from "@/constants/landing";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroStats() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.ul
      className="grid w-full grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5"
      variants={prefersReducedMotion ? undefined : containerVariants}
      initial={prefersReducedMotion ? false : "hidden"}
      animate={prefersReducedMotion ? undefined : "visible"}
      aria-label="Thống kê nổi bật"
    >
      {HERO_STATS.map((stat) => (
        <motion.li
          key={stat.id}
          variants={prefersReducedMotion ? undefined : cardVariants}
          whileHover={
            prefersReducedMotion
              ? undefined
              : { y: -4, transition: { duration: 0.3 } }
          }
        >
          <article
            className={cn(
              "glass-card group relative h-full overflow-hidden rounded-sm px-4 py-5 sm:px-5 sm:py-6",
              "transition-[border-color,box-shadow] duration-500",
              "hover:border-aqe-gold/25 hover:shadow-[0_8px_32px_rgba(212,175,55,0.06)]",
            )}
          >
            <div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqe-gold/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />

            <p className="font-sans text-[11px] font-medium tracking-[0.2em] text-aqe-gold sm:text-xs">
              {stat.id}
            </p>

            <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-aqe-white sm:text-xl lg:text-2xl">
              {stat.title}
            </h3>

            <p className="mt-1.5 font-sans text-xs leading-relaxed text-aqe-gray sm:text-sm">
              {stat.subtitle}
            </p>
          </article>
        </motion.li>
      ))}
    </motion.ul>
  );
}
