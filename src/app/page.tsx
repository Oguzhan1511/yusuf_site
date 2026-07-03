"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, Factory, MapPin } from 'lucide-react';
import styles from './page.module.css';

const quickProducts = [
  {
    title: 'Kış Bahçesi',
    image: '/images/products/kisbahcesi.jpg',
    link: '/urunlerimiz/kis-bahcesi',
  },
  {
    title: 'Bioclimatic',
    image: '/images/products/bioclimatik.jpg',
    link: '/urunlerimiz/bioclimatic',
  },
  {
    title: 'Pergola',
    image: '/images/products/pergola.jpg',
    link: '/urunlerimiz/pergola',
  },
  {
    title: 'Cam Tavan',
    image: '/images/products/camtavan.jpg',
    link: '/urunlerimiz/cam-tavan',
  },
  {
    title: 'Giyotin Cam',
    image: '/images/products/giyotin.jpg',
    link: '/urunlerimiz/giyotin-cam',
  },
  {
    title: 'HBŞB',
    image: '/images/products/hbsb.jpg',
    link: '/urunlerimiz/hbsb',
  },
];

const features = [
  {
    title: 'Doğrudan İmalatçı',
    description: 'Aracı olmadan, üretimden doğrudan evinize en uygun maliyetle lüksü sunuyoruz.',
    icon: <Factory size={40} />,
  },
  {
    title: 'Uzman Montaj Ekibi',
    description: 'Yılların tecrübesiyle, projenizi sıfır hata prensibiyle uyguluyoruz.',
    icon: <Wrench size={40} />,
  },
  {
    title: 'Geniş Garanti',
    description: 'Kullandığımız tüm motor ve mekanik sistemler uzun yıllar garantimiz altındadır.',
    icon: <ShieldCheck size={40} />,
  },
  {
    title: 'Ücretsiz Keşif',
    description: 'Evinize kadar gelip, ölçü alıyor ve size en uygun projeyi ücretsiz çiziyoruz.',
    icon: <MapPin size={40} />,
  },
];

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.videoOverlay}></div>
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Villa Background" 
          className={styles.heroVideo}
        />
        <div className={`container ${styles.heroContent}`}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroTitle}
          >
            Mevsimlerin Ötesinde <br/> <span>Lüks Yaşam Alanları</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroSubtitle}
          >
            Bioclimatic, pergola, kış bahçesi ve giyotin cam sistemlerinde imalattan doğrudan montaj.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/urunlerimiz" className="glow-btn" style={{ fontSize: '18px', padding: '16px 32px', display: 'inline-block' }}>
              Projeleri İncele
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Products Section */}
      <section className={`section ${styles.quickProducts}`}>
        <div className="container">
          <h2 className="section-title">Öne Çıkan <span>Ürünlerimiz</span></h2>
          <div className={styles.productsGrid}>
            {quickProducts.map((product, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.productCard}
              >
                <img src={product.image} alt={product.title} className={styles.productImg} />
                <div className={styles.productOverlay}>
                  <h3>{product.title}</h3>
                  <Link href={product.link} className={styles.productBtn}>
                    Ürünü İncele
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/urunlerimiz" className="glow-btn" style={{ fontSize: '18px', padding: '16px 32px', display: 'inline-block' }}>
              Daha Fazlasını İncele
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`section ${styles.featuresSection}`}>
        <div className="container">
          <h2 className="section-title">Neden <span>SkyGarden?</span></h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.featureCard}
              >
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
