import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skygardentr.com';

  const products = [
    'kis-bahcesi',
    'bioclimatic',
    'pergola',
    'cam-tavan',
    'tente',
    'zip-perde',
    'surme-cam',
    'giyotin-cam',
    'hbsb',
    'ruzgar-kirici',
    'car-port',
    'havuz-kapama',
  ];

  const productUrls = products.map((id) => ({
    url: `${baseUrl}/urunlerimiz/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/urunlerimiz`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/referanslar`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    ...productUrls,
  ];
}
