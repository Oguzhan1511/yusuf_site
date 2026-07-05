"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: 'Seçiniz',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      alert("Lütfen adınızı ve telefon numaranızı giriniz.");
      return;
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18295089478/FX0OCP-qxMocEMbS45NE',
        'value': 1.0,
        'currency': 'TRY'
      });
    }

    const text = `*Yeni İletişim Formu Mesajı*
Ad Soyad: ${formData.name}
Telefon: ${formData.phone}
İlgilenilen Ürün: ${formData.product !== 'Seçiniz' ? formData.product : '-'}
Mesaj: ${formData.message || '-'}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=905392416245&text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.pageTitle}
          >
            Bizimle <span>İletişime Geçin</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.pageSubtitle}
          >
            Hayalinizdeki lüks yaşam alanı için ücretsiz keşif ve fiyat teklifi isteyin.
          </motion.p>
        </div>
      </div>

      <div className={`container section ${styles.contactSection}`}>
        <div className={styles.contactGrid}>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={styles.infoBox}
          >
            <h2>İletişim <span>Bilgileri</span></h2>
            <p className={styles.infoDesc}>Uzman ekibimiz sorularınızı yanıtlamak ve size en uygun çözümleri sunmak için hazır.</p>
            
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <Phone size={24} />
              </div>
              <div>
                <h4>Telefon</h4>
                <p>+90 539 241 62 45</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <Mail size={24} />
              </div>
              <div>
                <h4>E-Posta</h4>
                <p>yusufsel@skygarden.com</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} />
              </div>
              <div>
                <h4>Adres</h4>
                <p>İstanbul, Türkiye</p>
              </div>
            </div>
            
            <div className={styles.socialBox}>
              <h4>Bizi Takip Edin</h4>
              <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/skygarden.tr" aria-label="Instagram"><FaInstagram size={24} /></a>
        
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`glass ${styles.formBox}`}
          >
            <h2>Mesaj <span>Gönderin</span></h2>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label>Adınız Soyadınız</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Adınız Soyadınız" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label>Telefon Numaranız</label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="0555 555 55 55" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label>İlgilendiğiniz Ürün (Opsiyonel)</label>
                <select 
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                >
                  <option>Seçiniz</option>
                  <option>Kış Bahçesi</option>
                  <option>Bioclimatic</option>
                  <option>Pergola</option>
                  <option>Cam Sistemleri</option>
                  <option>Diğer</option>
                </select>
              </div>
              
              <div className={styles.inputGroup}>
                <label>Mesajınız</label>
                <textarea 
                  name="message"
                  rows={4} 
                  placeholder="Size nasıl yardımcı olabiliriz?"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button type="submit" className={`glow-btn ${styles.submitBtn}`}>Gönder</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
