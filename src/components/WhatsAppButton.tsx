"use client";

import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const pathname = usePathname();
  const phoneNumber = "905392416245"; // from user
  
  let productName = "Ürünleriniz"; // default
  
  // Extract product name from URL if on a product page
  if (pathname.startsWith('/urunlerimiz/') && pathname !== '/urunlerimiz') {
    // e.g. /urunlerimiz/kis-bahcesi -> kis-bahcesi -> Kış Bahçesi (basic conversion)
    const slug = pathname.split('/').pop() || '';
    productName = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const message = `Merhaba SkyGarden, web sitenizden ulaştım. ${productName} hakkında ücretsiz fiyat teklifi ve keşif bilgisi almak istiyorum.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18295089478/FX0OCP-qxMocEMbS45NE',
        'value': 1.0,
        'currency': 'TRY'
      });
    }
  };

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp İletişim"
      onClick={handleClick}
    >
      <MessageCircle size={32} />
    </a>
  );
}
