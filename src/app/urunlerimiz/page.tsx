"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './page.module.css';

export const products = [
  { id: 'kis-bahcesi', name: 'Kış Bahçesi', image: '/images/products/kisbahcesi.jpg' },
  { id: 'bioclimatic', name: 'Bioclimatic', image: '/images/products/bioclimatik.jpg' },
  { id: 'pergola', name: 'Pergola', image: '/images/products/pergola.jpg' },
  { id: 'cam-tavan', name: 'Cam Tavan', image: '/images/products/camtavan.jpg' },
  { id: 'tente', name: 'Tente', image: '/images/products/tente1.jpg' },
  { id: 'zip-perde', name: 'Zip Perde', image: '/images/products/zipperde.jpg' },
  { id: 'surme-cam', name: 'Sürme Cam', image: '/images/products/surmeca1.jpg' },
  { id: 'giyotin-cam', name: 'Giyotin Cam', image: '/images/products/giyotin.jpg' },
  { id: 'hbsb', name: 'HBŞB (Kaldır Sür)', image: '/images/products/hbsb.jpg' },
  { id: 'ruzgar-kirici', name: 'Rüzgar Kırıcı', image: '/images/products/ruzgarkirici.jpg' },
  { id: 'car-port', name: 'Car Port', image: '/images/products/carport.jpg' },
  { id: 'havuz-kapama', name: 'Havuz Kapama', image: '/images/products/havuzkapama.jpg' },
];

export default function ProductsPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.pageTitle}
          >
            Tüm <span>Ürünlerimiz</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.pageSubtitle}
          >
            Yaşam alanlarınıza değer katan, son teknoloji mimari çözümler.
          </motion.p>
        </div>
      </div>

      <div className="container section">
        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={styles.productCard}
            >
              <img src={product.image} alt={product.name} className={styles.productImg} />
              <div className={styles.productOverlay}>
                <h2>{product.name}</h2>
                <Link href={`/urunlerimiz/${product.id}`} className={styles.detailBtn}>
                  İncele
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
