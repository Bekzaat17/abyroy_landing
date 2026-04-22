// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Меняем Inter на Montserrat
import "./globals.css";

// Настраиваем шрифт
const montserrat = Montserrat({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"], // Нужны разные веса
  variable: '--font-montserrat', // Используем как CSS переменную
});

export const metadata: Metadata = {
  title: "Abyroy Rehab Шымкент | Лечение наркомании, алкоголизма и игромании",
  description: "Анонимный реабилитационный центр Abyroy в Шымкенте. Эффективное лечение наркомании, алкоголизма и игромании. 15+ лет опыта, 92% успешных результатов. Звоните: +7 (775) 533-16-72.",
  keywords: "лечение наркомании Шымкент, реабилитационный центр Шымкент, лечение алкоголизма, лечение игромании, наркологическая клиника, Abyroy Rehab",
  alternates: {
    canonical: 'https://abyroyrehab.kz',
  },
  icons: {
    icon: '/favicon.png?v=2', 
    shortcut: '/favicon.png?v=2',
    apple: '/favicon.png?v=2',
  },
  openGraph: {
    title: "Abyroy Rehab Шымкент",
    description: "Анонимное лечение зависимостей в Шымкенте.",
    url: 'https://abyroyrehab.kz',
    siteName: 'Abyroy Rehab',
    locale: 'ru_KZ',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Abyroy Rehab",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Шымкент",
      "streetAddress": "ул. Байтурсынова, 78"
    },
    "telephone": "+77775331672",
    "url": "https://abyroyrehab.kz",
    "priceRange": "$$"
  };

  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${montserrat.variable} font-sans bg-[#F5F5F7] text-[#1D1D1F] antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}