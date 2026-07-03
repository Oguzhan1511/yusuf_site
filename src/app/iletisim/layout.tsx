import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | SkyGarden Ücretsiz Keşif ve Fiyat",
  description: "SkyGarden kış bahçesi, pergola ve cam sistemleri fiyatlarını öğrenmek, ücretsiz keşif talep etmek için iletişim formumuzu doldurun veya bizi arayın.",
  keywords: ["skygarden iletişim", "kış bahçesi fiyat al", "pergola keşif", "ücretsiz keşif istanbul", "yusufsel@skygardentr.com"],
  alternates: {
    canonical: "/iletisim",
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
