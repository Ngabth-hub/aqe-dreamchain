import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aqe-dreamchain.vercel.app"),
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

  openGraph: {
    title: "AQE Digital Experience | Ameritec",
    description:
      "Hệ sinh thái bất động sản số kết nối tài sản thực với công nghệ hiện đại, mở ra cơ hội tiếp cận bất động sản toàn cầu.",
    url: "https://aqe-dreamchain.vercel.app",
    siteName: "AQE Digital Experience",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/hero/aqe-hero.png",
        width: 1200,
        height: 630,
        alt: "AQE Digital Real Estate Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AQE Digital Experience | Ameritec",
    description:
      "Hệ sinh thái bất động sản số kết nối tài sản thực với công nghệ hiện đại.",
    images: ["/images/hero/aqe-hero.png"],
  },
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