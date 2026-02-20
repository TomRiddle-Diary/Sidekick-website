import type { Metadata } from "next";
import { Noto_Sans_JP, Lato, Alfa_Slab_One } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Head from 'next/head';
import { GA_TRACKING_ID } from '../lib/gtag';

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  title: "Sidekick｜長崎の起業家・スタートアップのためのWeb制作",
  description: "長崎県で挑戦する起業家を応援。創業前・創業直後の事業を、投資家や顧客に伝わる本格的なWebサイトで支援。経営とIT、両方の視点から共創するパートナーです。",
  keywords: ["長崎", "Web制作", "ホームページ制作", "起業家", "スタートアップ", "創業支援", "新規事業", "Webサイト制作"],
  authors: [{ name: "打田 圭志 (Keiji Uchida)" }],
  creator: "Sidekick",
  publisher: "Sidekick",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sidekick｜長崎の起業家・スタートアップのためのWeb制作",
    description: "長崎県で挑戦する起業家を応援。創業前・創業直後の事業を、投資家や顧客に伝わる本格的なWebサイトで支援。",
    url: "https://sidekick-web.com",
    siteName: "Sidekick",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidekick｜長崎の起業家・スタートアップのためのWeb制作",
    description: "長崎県で挑戦する起業家を応援。創業前・創業直後の事業を、投資家や顧客に伝わる本格的なWebサイトで支援。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Google Search Console verification code (後で追加)
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sidekick",
    "description": "長崎県の起業家・スタートアップ向けWeb制作サービス。創業前・創業直後の事業を支援。",
    "url": "https://sidekick-web.com",
    "logo": "https://sidekick-web.com/logo.png",
    "image": "https://sidekick-web.com/og-image.png",
    "founder": {
      "@type": "Person",
      "name": "打田圭志",
      "jobTitle": "Web Developer & Business Consultant",
      "alumniOf": "長崎県立大学"
    },
    "areaServed": {
      "@type": "State",
      "name": "長崎県"
    },
    "serviceType": [
      "Webサイト制作",
      "ウェブサイト制作",
      "ホームページ制作",
      "UXデザイン",
      "Web開発",
      "起業支援"
    ],
    "priceRange": "¥55,000 - ¥110,000",
    "audience": {
      "@type": "Audience",
      "audienceType": "起業家、スタートアップ、新規事業立ち上げ"
    }
  };

  return (
    <>
      <html lang="ja">
        <head>
          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </head>
        <body
          className={`${notoSansJP.variable} ${lato.variable} ${alfaSlabOne.variable} antialiased`}
        >
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          {children}
        </body>
      </html>
    </>
  );
}
