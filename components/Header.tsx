import Link from "next/link";
import Image from "next/image"; // Импортируем компонент Image
import { Phone } from "lucide-react";
import { SITE_DATA } from "@/constants";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Логотип */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png"       // Путь к файлу в папке public
            alt="Abyroy Logo" 
            width={140}           // Укажите нужную ширину
            height={100}           // Укажите нужную высоту
            className="h-10 w-auto" // h-10 соответствует h-40px, w-auto сохранит пропорции
            priority              // Добавляем, чтобы логотип загружался первым
          />
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
          className="bg-rehab-gold text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-rehab-goldDark transition-all flex items-center gap-2 shadow-lg shadow-rehab-gold/20"
        >
          <Phone size={16} />
          {SITE_DATA.phone}
        </a>
      </div>
    </header>
  );
}