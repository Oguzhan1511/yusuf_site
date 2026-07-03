"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import styles from './page.module.css';

const galleryImages = [
  '/images/references/r1.jpg',
  '/images/references/r2.jpg',
  '/images/references/r3.jpg',
  '/images/references/r5.jpg',
  '/images/references/r6.jpg',
  '/images/references/r7.jpg',
  '/images/references/r8.jpg',
  '/images/references/r9.jpg',
  '/images/references/r10.jpg',
  '/images/references/r11.jpg',
  '/images/references/r12.jpg',
  '/images/references/r13.jpg',
  '/images/references/r14.jpg',
  '/images/references/r15.jpg',
  '/images/references/r16.jpg',
  '/images/references/r17.jpg',
  '/images/references/r18.jpg',
  '/images/references/r19.jpg',
  '/images/references/r20.jpg',
  '/images/references/r21.jpg',
  '/images/references/r22.jpg',
  '/images/references/r23.jpg',
  '/images/references/r24.jpg',
  '/images/references/r25.jpg',
  '/images/references/r26.jpg',
  '/images/references/r27.jpg',
  '/images/references/r30.jpg',
  '/images/references/r31.jpg',
  '/images/references/r33.jpg',
  '/images/references/r34.jpg',
];

export default function ReferencesPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.pageTitle}
          >
            Tamamlanan <span>Projelerimiz</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.pageSubtitle}
          >
            Müşterilerimiz için hayata geçirdiğimiz lüks ve konforlu yaşam alanlarından kesitler.
          </motion.p>
        </div>
      </div>

      <div className="container section">
        <div className={styles.galleryGrid}>
          {galleryImages.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={styles.galleryItem}
              onClick={() => setSelectedImg(img)}
            >
              <img src={img} alt={`Referans Proje ${index + 1}`} className={styles.galleryImg} />
              <div className={styles.overlay}>
                <ZoomIn size={40} className={styles.zoomIcon} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.lightbox}
            onClick={() => setSelectedImg(null)}
          >
            <button className={styles.closeBtn} onClick={() => setSelectedImg(null)}>
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImg} 
              alt="Büyütülmüş Proje" 
              className={styles.lightboxImg}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
