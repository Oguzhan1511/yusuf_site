import { Metadata } from 'next';

const productDetails: Record<string, any> = {
  'kis-bahcesi': { name: 'Kış Bahçesi', description: 'Dört mevsim doğayla iç içe yaşamanızı sağlayan, yüksek yalıtımlı kış bahçesi sistemleri.' },
  'bioclimatic': { name: 'Bioclimatic', description: 'Kendi ekseni etrafında dönebilen ve tamamen açılabilen alüminyum paneller ile her mevsim konfor sağlayan akıllı tavan sistemi.' },
  'pergola': { name: 'Pergola', description: 'Açılır kapanır tente pergola sistemleri ile dış mekanlarınızı her türlü hava koşulunda kullanılabilir hale getirin.' },
  'cam-tavan': { name: 'Cam Tavan', description: 'Mekanlarınıza maksimum doğal ışık sağlayan, ısı yalıtımlı lüks cam tavan sistemleri.' },
  'giyotin-cam': { name: 'Giyotin Cam', description: 'Dikey olarak hareket eden, rüzgar ve sese karşı mükemmel izolasyon sağlayan otomatik giyotin cam sistemleri.' },
  'hbsb': { name: 'HBŞB (Kaldır Sür)', description: 'Geniş açıklıkları kolayca geçmenizi sağlayan, ısı yalıtımı ve konforu bir arada sunan Kaldır-Sür (HBŞB) alüminyum sistemler.' },
  'tente': { name: 'Tente', description: 'Güneşten ve yağmurdan koruyan, her mekana uygun şık tente sistemleri.' },
  'zip-perde': { name: 'Zip Perde', description: 'Rüzgara ve güneşe karşı tam koruma sağlayan, estetik motorlu zip perde sistemleri.' },
  'surme-cam': { name: 'Sürme Cam', description: 'Kış bahçesi, balkon ve teraslar için ideal, geniş açıklıkları kapatan estetik sürme cam sistemleri.' },
  'ruzgar-kirici': { name: 'Rüzgar Kırıcı', description: 'Açık alanlarda rüzgarın etkisini azaltarak konforlu mekanlar yaratan otomatik cam bariyer.' },
  'car-port': { name: 'Car Port', description: 'Araçlarınızı olumsuz hava koşullarından koruyan modern, sağlam otopark sundurmaları.' },
  'havuz-kapama': { name: 'Havuz Kapama', description: 'Havuzunuzu dört mevsim kullanılabilir hale getiren, ısı yalıtımlı polikarbon veya cam kapama sistemleri.' },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const product = productDetails[slug];

  if (!product) {
    return {
      title: 'Ürün Bulunamadı | SkyGarden',
    };
  }

  const productName = product.name;
  
  return {
    title: `${productName} İmalatı ve Fiyatları | SkyGarden İstanbul`,
    description: `SkyGarden ${productName} sistemleri. ${product.description} En uygun fiyatlar ve ücretsiz keşif imkanı için hemen inceleyin.`,
    keywords: [`${productName.toLowerCase()} fiyatları`, `istanbul ${productName.toLowerCase()}`, `otomatik ${productName.toLowerCase()}`, `kaliteli ${productName.toLowerCase()}`],
    alternates: {
      canonical: `/urunlerimiz/${slug}`,
    },
    openGraph: {
      title: `${productName} | SkyGarden`,
      description: product.description,
      url: `https://skygardentr.com/urunlerimiz/${slug}`,
    }
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
