import type { Metadata } from "next";
import { Noto_Sans_JP, Lato, Alfa_Slab_One } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const alfaSlabOne = Alfa_Slab_One({
  variable: "--font-alfa-slab-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio Site",
  description: "Professional portfolio and web design services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${lato.variable} ${alfaSlabOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
