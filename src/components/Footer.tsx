import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerCol}>
          <Link href="/" className={styles.logo}>
            Sky<span>Garden</span>
          </Link>
          <p className={styles.aboutText}>
            Mevsimlerin Ötesinde Lüks Yaşam Alanları. Bioclimatic, pergola, kış bahçesi ve cam sistemlerinde imalattan doğrudan evinize lüksü getiriyoruz.
          </p>
        </div>
        
        <div className={styles.footerCol}>
          <h3 className={styles.colTitle}>Hızlı Bağlantılar</h3>
          <ul className={styles.linksList}>
            <li><Link href="/">Anasayfa</Link></li>
            <li><Link href="/urunlerimiz">Ürünlerimiz</Link></li>
            <li><Link href="/referanslar">Referanslar</Link></li>
            <li><Link href="/iletisim">İletişim</Link></li>
          </ul>
        </div>
        
        <div className={styles.footerCol}>
          <h3 className={styles.colTitle}>İletişim</h3>
          <ul className={styles.contactList}>
            <li>
              <Phone size={18} className={styles.contactIcon} />
              <span>+90 539 241 62 45</span>
            </li>
            <li>
              <Mail size={18} className={styles.contactIcon} />
              <span>info@skygarden.com</span>
            </li>
            <li>
              <MapPin size={18} className={styles.contactIcon} />
              <span>[Adres Bilgisi Buraya Gelecek]</span>
            </li>
          </ul>
          
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Instagram"><FaInstagram size={24} /></a>
            <a href="#" aria-label="Facebook"><FaFacebook size={24} /></a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SkyGarden. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
