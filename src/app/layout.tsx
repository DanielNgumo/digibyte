import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Daniel Ngumo — Graphic Designer & Visual Artist",
  description:
    "Portfolio of Daniel Ngumo — a Nairobi-based graphic designer crafting brand identities, print design, UI/UX, and visual storytelling for bold brands.",
  keywords: [
    "graphic designer Nairobi",
    "brand identity Kenya",
    "logo design",
    "UI/UX designer",
    "visual designer",
    "creative portfolio",
  ].join(", "),
  authors: [{ name: "Daniel Ngumo" }],
  creator: "Daniel Ngumo",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://technasi.co.ke",
    siteName: "Daniel Ngumo Portfolio",
    title: "Daniel Ngumo — Graphic Designer",
    description:
      "Brand identities, print design, and digital experiences crafted with precision and creativity.",
    images: [
      {
        url: "https://technasi.co.ke/images/daniel.png",
        width: 1200,
        height: 630,
        alt: "Daniel Ngumo — Graphic Designer",
      },
    ],
  },
  alternates: {
    canonical: "https://technasi.co.ke",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Ngumo",
    url: "https://technasi.co.ke",
    image: "https://technasi.co.ke/images/daniel.jpg",
    jobTitle: "Graphic Designer",
    description:
      "Nairobi-based graphic designer specializing in brand identity, print design, and UI/UX.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    email: "dev@technasi.co.ke",
    telephone: "+254742580239",
    sameAs: [
      "https://www.linkedin.com/in/daniel-ngumo-20960127b/",
      "https://github.com/DanielNgumo",
      "https://dribbble.com",
      "https://www.behance.net",
    ],
  };

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
