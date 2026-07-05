import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";
export const metadata: Metadata = {
  metadataBase: new URL('https://skygardentr.com'),
  title: {
    default: "SkyGarden | İstanbul Kış Bahçesi, Pergola ve Cam Sistemleri",
    template: "%s | SkyGarden"
  },
  description: "SkyGarden; İstanbul ve çevresinde özel kış bahçesi, otomatik pergola, bioclimatic ve giyotin cam sistemleri imalatı yapmaktadır. İmalattan evinize lüksü getiriyoruz.",
  keywords: ["kış bahçesi", "pergola", "bioclimatic", "cam sistemleri", "giyotin cam", "zip perde", "istanbul kış bahçesi", "otomatik tente"],
  authors: [{ name: "SkyGarden" }],
  creator: "SkyGarden",
  publisher: "SkyGarden",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://skygardentr.com",
    title: "SkyGarden | Lüks Yaşam Alanları ve Kış Bahçesi",
    description: "Bioclimatic, pergola, kış bahçesi ve cam sistemlerinde imalattan doğrudan evinize lüksü getiriyoruz.",
    siteName: "SkyGarden",
    images: [
      {
        url: "/images/products/kisbahcesi.jpg",
        width: 1200,
        height: 630,
        alt: "SkyGarden Kış Bahçesi Sistemleri",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SkyGarden",
    "image": "https://skygardentr.com/images/products/kisbahcesi.jpg",
    "description": "Bioclimatic, pergola, kış bahçesi ve giyotin cam sistemlerinde imalattan doğrudan evinize lüksü getiriyoruz.",
    "url": "https://skygardentr.com",
    "telephone": "+905392416245",
    "email": "yusufsel@skygardentr.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressCountry": "TR"
    }
  };

  return (
    <html lang="tr">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-18295089478`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // İzin verilene kadar bekle (Consent Mode v2)
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });

              gtag('js', new Date());
              gtag('config', 'AW-18295089478', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
