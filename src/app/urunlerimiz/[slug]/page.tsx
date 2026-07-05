"use client";

import { use, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import styles from './page.module.css';

const productDetails: Record<string, any> = {
  'kis-bahcesi': {
    name: 'Kış Bahçesi',
    image: '/images/products/kisbahcesi.jpg',
    description: 'Dört mevsim doğayla iç içe yaşamanızı sağlayan, yüksek yalıtımlı kış bahçesi sistemleri. Isı yalıtımlı alüminyum profiller ve konfor camlar kullanılarak tasarlanır.',
    features: ['Yüksek Isı ve Ses Yalıtımı', 'Özel Tasarım Seçenekleri', 'Uzun Ömürlü Alüminyum Profil', 'Güneş Kırıcı Özellikli Camlar'],
  },
  'bioclimatic': {
    name: 'Bioclimatic',
    image: '/images/products/bioclimatik.jpg',
    description: 'Kendi ekseni etrafında dönebilen ve tamamen açılabilen alüminyum paneller ile her mevsim konfor sağlayan akıllı tavan sistemi.',
    features: ['Kar Yüküne Dayanıklı', 'Tam Otomatik Kontrol', 'Gizli Yağmur Suyu Tahliyesi', 'LED Aydınlatma Entegrasyonu'],
  },
  'pergola': {
    name: 'Pergola',
    image: '/images/products/pergola.jpg',
    description: 'Açılır kapanır tente pergola sistemleri ile dış mekanlarınızı her türlü hava koşulunda kullanılabilir hale getirin.',
    features: ['Su Geçirmez Özel Kumaş', 'Uzaktan Kumandalı Sistem', 'Yüksek Dayanımlı Alüminyum', 'Dahili LED Aydınlatma'],
  },
  'cam-tavan': {
    name: 'Cam Tavan',
    image: '/images/products/camtavan.jpg',
    description: 'Mekanlarınıza maksimum doğal ışık sağlayan, ısı yalıtımlı lüks cam tavan sistemleri.',
    features: ['Güneş Kontrol Özellikli Camlar', 'Sızdırmazlık Garantisi', 'Estetik ve Zarif Görünüm', 'Yüksek Enerji Verimliliği'],
  },
  'giyotin-cam': {
    name: 'Giyotin Cam',
    image: '/images/products/giyotin.jpg',
    description: 'Dikey olarak hareket eden, rüzgar ve sese karşı mükemmel izolasyon sağlayan otomatik giyotin cam sistemleri.',
    features: ['Giyotin Cam Küpeşte Özelliği', 'Sessiz ve Güçlü Motor', 'Yüksek Rüzgar Dayanımı', 'Uzaktan Kumandalı Kontrol'],
  },
  'hbsb': {
    name: 'HBŞB (Kaldır Sür)',
    image: '/images/products/hbsb.jpg',
    description: 'Geniş açıklıkları kolayca geçmenizi sağlayan, ısı yalıtımı ve konforu bir arada sunan Kaldır-Sür (HBŞB) alüminyum sistemler.',
    features: ['Maksimum Isı ve Ses Yalıtımı', 'Kolay Sürgülü Sistem', 'Güvenli Kilit Mekanizması', 'Geniş Görüş Alanı'],
  },
  'tente': {
    name: 'Tente',
    image: '/images/products/tente1.jpg',
    description: 'Güneşten ve yağmurdan koruyan, her mekana uygun şık tente sistemleri.',
    features: ['Akrilik Solmaz Kumaş', 'Motorlu Uzaktan Kumanda', 'Rüzgar ve Güneş Sensörü Seçeneği', 'Özel Ölçü Üretim'],
  },
  'zip-perde': {
    name: 'Zip Perde',
    image: '/images/products/zipperde.jpg',
    description: 'Rüzgara ve güneşe karşı tam koruma sağlayan, estetik motorlu zip perde sistemleri.',
    features: ['Rüzgara Karşı Yüksek Direnç', 'Güneş Işığını Kesme', 'Motorlu ve Kumandalı', 'Sineklik Olarak Kullanım'],
  },
  'surme-cam': {
    name: 'Sürme Cam',
    image: '/images/products/surmeca1.jpg',
    description: 'Kış bahçesi, balkon ve teraslar için ideal, geniş açıklıkları kapatan estetik sürme cam sistemleri.',
    features: ['Kolay Açılıp Kapanma', 'Darbelere Karşı Temperli Cam', 'Yer Kaplamayan Tasarım', 'Toz ve Su Yalıtımı'],
  },
  'ruzgar-kirici': {
    name: 'Rüzgar Kırıcı',
    image: '/images/products/ruzgarkirici.jpg',
    description: 'Açık alanlarda rüzgarın etkisini azaltarak konforlu mekanlar yaratan otomatik cam bariyer.',
    features: ['Motorlu Yükseklik Ayarı', 'Şeffaf ve Panoramik Görüntü', 'Sessiz Çalışma', 'Kafe ve Restoranlara Uygun'],
  },
  'car-port': {
    name: 'Car Port',
    image: '/images/products/carport.jpg',
    description: 'Araçlarınızı olumsuz hava koşullarından koruyan modern, sağlam otopark sundurmaları.',
    features: ['Alüminyum ve Çelik Gövde', 'UV Filtreli Tavan Kaplaması', 'Kar Yüküne Dayanım', 'Modern ve Estetik Tasarım'],
  },
  'havuz-kapama': {
    name: 'Havuz Kapama',
    image: '/images/products/havuzkapama.jpg',
    description: 'Havuzunuzu dört mevsim kullanılabilir hale getiren, ısı yalıtımlı polikarbon veya cam kapama sistemleri.',
    features: ['Sürgülü ve Teleskopik Yapı', 'Havuz Suyunu Temiz Tutma', 'Sera Etkisiyle Su Isıtma', 'UV Işınlarına Karşı Koruma'],
  },
  // Default fallback for others
};

export default function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  // In Next.js 15, params is a Promise that needs to be unwrapped with React.use()
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  const product = productDetails[slug] || {
    name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    image: '/images/products/pergola.jpg',
    description: 'SkyGarden kalitesiyle üretilen, lüks ve fonksiyonel mimari çözüm.',
    features: ['Yüksek Kalite Malzeme', 'Uzman Montaj', 'Uzun Ömürlü Kullanım', 'Şık ve Modern Tasarım'],
  };

  const whatsappMessage = `Merhaba SkyGarden, web sitenizden ulaştım. ${product.name} hakkında ücretsiz fiyat teklifi ve keşif bilgisi almak istiyorum.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=905392416245&text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'view_item', {
        currency: 'TRY',
        value: 1,
        items: [
          {
            item_id: slug,
            item_name: product.name,
          }
        ]
      });
    }
  }, [slug, product.name]);

  return (
    <div className={styles.productWrapper}>
      {/* Product Hero */}
      <div className={styles.productHero}>
        <div className={styles.heroOverlay}></div>
        <img src={product.image} alt={product.name} className={styles.heroImage} />
        <div className={`container ${styles.heroContent}`}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            {product.name}
          </motion.h1>
        </div>
      </div>

      {/* Product Details */}
      <div className={`container section ${styles.detailSection}`}>
        <div className={styles.detailGrid}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.infoColumn}
          >
            <h2>Teknik <span>Özellikler</span></h2>
            <p className={styles.description}>{product.description}</p>
            
            <ul className={styles.featureList}>
              {product.features.map((feature: string, idx: number) => (
                <li key={idx}>
                  <CheckCircle className={styles.checkIcon} size={24} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={styles.actionColumn}
          >
            <div className={`glass ${styles.actionCard}`}>
              <h3>Bu Ürün İçin Hemen Fiyat Alın</h3>
              <p>Uzman ekibimiz ücretsiz keşif için sizi ziyaret etsin.</p>
              
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`glow-btn ${styles.quoteBtn}`}>
                Ücretsiz Teklif Al
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
