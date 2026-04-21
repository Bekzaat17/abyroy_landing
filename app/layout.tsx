// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Меняем Inter на Montserrat
import "./globals.css";
import { SEO_DATA } from "@/constants";

// Настраиваем шрифт
const montserrat = Montserrat({ 
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"], // Нужны разные веса
  variable: '--font-montserrat', // Используем как CSS переменную
});

export const metadata: Metadata = {
  title: SEO_DATA.title,
  description: SEO_DATA.description,
  keywords: SEO_DATA.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      {/* Добавляем переменную шрифта в body */}
      <body className={`${montserrat.variable} font-sans bg-[#F5F5F7] text-[#1D1D1F] antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}