import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tüm Ürünlerimiz | Kış Bahçesi, Pergola, Cam Sistemleri",
  description: "SkyGarden'ın sunduğu bioclimatic, otomatik pergola, lüks kış bahçesi, giyotin ve sürme cam sistemleri. İhtiyacınıza uygun, modern ve dayanıklı çözümleri inceleyin.",
  keywords: ["kış bahçesi fiyatları", "pergola sistemleri", "bioclimatic pergola", "cam tavan", "zip perde", "giyotin cam", "otomatik tente", "istanbul pergola"],
  alternates: {
    canonical: "/urunlerimiz",
  },
};

export default function UrunlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
