import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanslarımız ve Projelerimiz | SkyGarden",
  description: "SkyGarden'ın İstanbul ve çevresinde tamamladığı lüks kış bahçesi, pergola ve cam balkon projelerini inceleyin. Müşteri memnuniyeti odaklı referanslarımız.",
  keywords: ["skygarden referanslar", "kış bahçesi örnekleri", "pergola projeleri", "yapılmış kış bahçeleri", "istanbul cam balkon referans"],
  alternates: {
    canonical: "/referanslar",
  },
};

export default function ReferanslarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
