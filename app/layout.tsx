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
  title: "Sidekick｜事業を伝えるWebサイト制作",
  description: "ビジネスの価値を正しく伝えるWebサイトを制作。経営者・個人事業主の挑戦を、デザインと技術で形にします。集客・採用・信頼構築まで一貫サポート。",
  keywords: ["Web制作", "ホームページ制作", "Webサイト制作", "Webデザイン", "事業サイト", "コーポレートサイト"],
  authors: [{ name: "打田 圭志 (Keiji Uchida)" }],
  creator: "Sidekick",
  publisher: "Sidekick",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sidekick｜事業を伝えるWebサイト制作",
    description: "ビジネスの価値を正しく伝えるWebサイトを制作。経営者・個人事業主の挑戦を、デザインと技術で形にします。",
    url: "https://sidekick-web.com",
    siteName: "Sidekick",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidekick｜事業を伝えるWebサイト制作",
    description: "ビジネスの価値を正しく伝えるWebサイトを制作。経営者・個人事業主の挑戦を、デザインと技術で形にします。",
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
    "description": "起業家・スタートアップ向けWeb制作サービス。創業前・創業直後の事業を支援。",
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
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "vppl6zwwj4");
              `,
            }}
          />
          {children}
        </body>
      </html>
    </>
  );
}
