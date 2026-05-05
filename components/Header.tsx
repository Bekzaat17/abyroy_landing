import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { SITE_DATA } from "@/constants";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Логотип: w-auto позволяет сохранять пропорции при разной высоте */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 md:h-10 w-[112px] md:w-[140px]">
            <Image 
              src="/logo.png"       
              alt="Abyroy Logo" 
              fill
              priority              
              className="object-contain"
            />
          </div>
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex gap-8 font-medium text-sm text-gray-600">
          <Link href="#about" className="hover:text-rehab-gold transition-colors">Біз туралы</Link>
          <Link href="#services" className="hover:text-rehab-gold transition-colors">Қызметтер</Link>
          <Link href="#roadmap" className="hover:text-rehab-gold transition-colors">Бағдарлама</Link>
          <Link href="#team" className="hover:text-rehab-gold transition-colors">Команда</Link>
          <Link href="#reviews" className="hover:text-rehab-gold transition-colors">Пікірлер</Link>
        </nav>

        {/* Кнопка звонка */}
        <a 
          href={`tel:${SITE_DATA.phone}`}
          className="bg-rehab-gold text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold hover:bg-rehab-goldDark transition-all flex items-center gap-2 shadow-lg shadow-rehab-gold/20 whitespace-nowrap"
        >
          <Phone size={16} className="w-4 h-4 md:w-4 md:h-4" />
          {SITE_DATA.phone}
        </a>
      </div>
    </header>
  );
}