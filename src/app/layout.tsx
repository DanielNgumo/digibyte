import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Company Name - IT Solutions & Digital Services",
  description: "We craft stunning graphic designs, build powerful digital experiences, and provide expert IT solutions that elevate your brand and drive growth.",
  keywords: "IT solutions, web development, graphic design, digital services",
  authors: [{ name: "Your Company" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}