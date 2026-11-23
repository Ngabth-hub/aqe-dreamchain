"use client";
import Image from "next/image";
import Link from "next/link";

const menu = [
  { title: "Trang chủ", href: "#" },
  { title: "Tầm nhìn", href: "#vision" },
  { title: "AQ Estate", href: "#why-aqe" },
  { title: "Dự án", href: "#project" },
  { title: "Đội ngũ", href: "#leadership" },
  { title: "FAQ", href: "#faq" },
  { title: "Liên hệ", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#05070A]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-[92%] max-w-7xl items-center justify-between">

      <Link
  href="/"
  className="flex items-center"
>
  <Image
    src="/images/brand/aqe-logo.png"
    alt="AQ Estate"
    width={180}
    height={48}
    priority
    className="h-11 w-auto transition duration-300 hover:scale-105"
  />
</Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {menu.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-sm uppercase tracking-wider text-white/80 transition hover:text-[#D4AF37]"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-bold text-black transition hover:scale-105"
        >
          Liên hệ
        </a>

      </div>
    </header>
  );
}