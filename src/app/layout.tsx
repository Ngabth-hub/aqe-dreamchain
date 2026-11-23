import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AQE Digital Experience",
  description:
    "AQ Estate - Hệ sinh thái bất động sản số kết nối tài sản thực với công nghệ hiện đại.",
  keywords: [
    "AQE",
    "AQ Estate",
    "Ameritec",
    "Dubai",
    "Real Estate",
    "Tokenization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}