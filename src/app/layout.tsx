import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechNasi - IT Solutions, Web Development & Graphic Design in Nairobi",
  description: "Transform your business with TechNasi's expert IT solutions, modern web development, and stunning graphic design services in Nairobi, Kenya.",
  keywords: [
    "IT solutions Nairobi",
    "web development Kenya",
    "graphic design",
    "IT support",
    "digital marketing",
    "business technology",
    "web design Nairobi",
    "custom software development"
  ].join(", "),
  authors: [{ name: "TechNasi" }],
  creator: "TechNasi",
  publisher: "TechNasi",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://technasi.co.ke",
    siteName: "TechNasi",
    title: "TechNasi - IT Solutions, Web Development & Graphic Design",
    description: "Innovative IT solutions and digital services for modern businesses in Nairobi, Kenya.",
    images: [
      {
        url: "https://technasi.co.ke/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechNasi - IT Solutions & Digital Services",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechNasi - IT Solutions & Digital Services",
    description: "Transform your business with expert IT solutions and digital services.",
    images: ["https://technasi.co.ke/og-image.jpg"],
    creator: "@technasi",
  },
  alternates: {
    canonical: "https://technasi.co.ke",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechNasi",
    url: "https://technasi.co.ke",
    logo: "https://technasi.co.ke/logo.png",
    description: "Innovative IT solutions, web development, and graphic design services",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      addressCountry: "KE",
    },
    telephone: "+254742580239",
    email: "dev@technasi.co.ke",
    sameAs: [
      "https://facebook.com/technasi",
      "https://twitter.com/technasi",
      "https://linkedin.com/company/technasi",
      "https://instagram.com/technasi",
    ],
    service: [
      {
        "@type": "Service",
        name: "Web Development",
        description: "Modern, responsive websites and web applications",
      },
      {
        "@type": "Service",
        name: "Graphic Design",
        description: "Logos, branding, and UI/UX design",
      },
      {
        "@type": "Service",
        name: "IT Support",
        description: "Reliable technical support and IT solutions",
      }
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Additional meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#048ccc" />
        <meta name="msapplication-TileColor" content="#048ccc" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Search Engine Verification Tags */}
        <meta name="google-site-verification" content="HG9pK7EuifiUDLSGlXLugIZL_4hIMvAijVIOlZglSn4" />
        <meta name="msvalidate.01" content="47787DFD61232F84163209B0AC915DD7" />
        
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Preconnect to Google Fonts if using them */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}