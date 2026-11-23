export const LANDING_COLORS = {
  background: "#05070A",
  gold: "#D4AF37",
  white: "#F8F8F8",
  gray: "#9AA4B2",
} as const;

export const LANDING_SECTIONS = {
  hero: "hero",
  vision: "vision",
  whyAqe: "why-aqe",
  project: "project",
  leadership: "leadership",
  faq: "faq",
  contact: "contact",
} as const;

export const NAV_LINKS = [
  { label: "Tầm nhìn", href: `#${LANDING_SECTIONS.vision}` },
  { label: "Vì sao AQE", href: `#${LANDING_SECTIONS.whyAqe}` },
  { label: "Dự án", href: `#${LANDING_SECTIONS.project}` },
  { label: "Lãnh đạo", href: `#${LANDING_SECTIONS.leadership}` },
  { label: "FAQ", href: `#${LANDING_SECTIONS.faq}` },
] as const;

export const HERO_STATS = [
  {
    id: "01",
    title: "AQ Estate",
    subtitle: "Hệ sinh thái",
  },
  {
    id: "02",
    title: "Dubai",
    subtitle: "Al Marjan Island",
  },
  {
    id: "03",
    title: "Real Estate",
    subtitle: "Tokenization",
  },
  {
    id: "04",
    title: "Ameritec IPS",
    subtitle: "Global Ecosystem",
  },
] as const;
