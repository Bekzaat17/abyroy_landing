import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE_DATA } from "@/constants";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Логотип (пока текстом, потом заменим на Image) */}
        <div className="text-2xl font-bold text-rehab-dark">
          ABYROY<span className="text-rehab-gold">.</span>
        </div>

        {/* Навигация */}
        <nav className="hidden md:flex gap-8 font-medium text-sm text-gray-600">
          <Link href="#about" className="hover:text-rehab-gold transition-colors">О центре</Link>
          <Link href="#roadmap" className="hover:text-rehab-gold transition-colors">Программа</Link>
          <Link href="#reviews" className="hover:text-rehab-gold transition-colors">Отзывы</Link>
        </nav>

        {/* Кнопка звонка */}
        <a 
          href={`tel:${SITE_DATA.phone}`}
          className="bg-rehab-gold text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-rehab-goldDark transition-all flex items-center gap-2 shadow-lg shadow-rehab-gold/20"
        >
          <Phone size={16} />
          {SITE_DATA.phone}
        </a>
      </div>
    </header>
  );
}