// app/metadata.ts - Additional SEO route configuration
import { MetadataRoute } from 'next'

// robots.txt configuration
export function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/private'],
    },
    sitemap: 'https://technasi.co.ke/sitemap.xml',
  }
}

// sitemap.xml configuration
export function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://technasi.co.ke',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://technasi.co.ke/#about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://technasi.co.ke/#services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://technasi.co.ke/#portfolio',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://technasi.co.ke/#contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}