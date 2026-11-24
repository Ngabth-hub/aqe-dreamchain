import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AQE Digital Experience | Ameritec",
  description:
    "AQE Digital Experience - Hệ sinh thái bất động sản số kết nối tài sản thực với công nghệ hiện đại, mở ra cơ hội tiếp cận bất động sản toàn cầu.",
  keywords: [
    "AQE",
    "AQ Estate",
    "Ameritec",
    "Bất động sản số",
    "Bất động sản Dubai",
    "RWA",
    "Tokenization",
    "Sở hữu bất động sản phân mảnh",
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