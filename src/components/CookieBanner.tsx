"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  const [preferences, setPreferences] = useState({
    analytics: true,
    marketing: true
  });

  useEffect(() => {
    // Check if consent is already given
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    } else {
      // If already consented, parse and push to dataLayer
      try {
        const parsedConsent = JSON.parse(consent);
        updateGtagConsent(parsedConsent.analytics, parsedConsent.marketing);
      } catch (e) {
        setIsVisible(true);
      }
    }
  }, []);

  const updateGtagConsent = (analytics: boolean, marketing: boolean) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': analytics ? 'granted' : 'denied',
        'ad_storage': marketing ? 'granted' : 'denied',
        'ad_user_data': marketing ? 'granted' : 'denied',
        'ad_personalization': marketing ? 'granted' : 'denied',
      });
    }
  };

  const handleAcceptAll = () => {
    const prefs = { analytics: true, marketing: true };
    localStorage.setItem('cookie_consent', JSON.stringify(prefs));
    updateGtagConsent(true, true);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie_consent', JSON.stringify(preferences));
    updateGtagConsent(preferences.analytics, preferences.marketing);
    setIsVisible(false);
  };

  const togglePreference = (key: 'analytics' | 'marketing') => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.bannerContainer}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className={styles.bannerHeader}>
          <ShieldAlert size={24} color="#f0f0f0" />
          <h3>Çerez Politikası ve Gizlilik</h3>
        </div>
        
        <p className={styles.bannerText}>
          Size daha iyi bir deneyim sunabilmek, sitemizi analiz edebilmek ve size özel içerikler (reklamlar vb.) gösterebilmek için çerezler kullanıyoruz.
        </p>

        {!showPreferences && (
          <div className={styles.buttonGroup}>
            <button className={styles.manageBtn} onClick={() => setShowPreferences(true)}>
              Çerezleri Düzenle
            </button>
            <button className={styles.acceptBtn} onClick={handleAcceptAll}>
              Tümünü Kabul Et
            </button>
          </div>
        )}

        {showPreferences && (
          <motion.div 
            className={styles.preferencesPanel}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
          >
            <div className={styles.prefItem}>
              <div className={styles.prefInfo}>
                <h4>Gerekli Çerezler</h4>
                <p>Sitenin temel işlevleri için zorunludur.</p>
              </div>
              <label className={styles.switch}>
                <input type="checkbox" checked disabled />
                <span className={styles.slider}></span>
              </label>
            </div>

            <div className={styles.prefItem}>
              <div className={styles.prefInfo}>
                <h4>Analitik Çerezler</h4>
                <p>Ziyaretçi istatistiklerini anlamamıza yardımcı olur.</p>
              </div>
              <label className={styles.switch}>
                <input 
                  type="checkbox" 
                  checked={preferences.analytics} 
                  onChange={() => togglePreference('analytics')}
                />
                <span className={styles.slider}></span>
              </label>
            </div>

            <div className={styles.prefItem}>
              <div className={styles.prefInfo}>
                <h4>Pazarlama Çerezleri</h4>
                <p>Size uygun reklamlar göstermemizi sağlar.</p>
              </div>
              <label className={styles.switch}>
                <input 
                  type="checkbox" 
                  checked={preferences.marketing} 
                  onChange={() => togglePreference('marketing')}
                />
                <span className={styles.slider}></span>
              </label>
            </div>

            <button className={styles.saveBtn} onClick={handleSavePreferences}>
              Tercihlerimi Kaydet
            </button>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
