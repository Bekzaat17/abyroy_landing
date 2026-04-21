"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Лево: Текст */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Центр <span className="text-rehab-gold">ABYROY</span> <br/>
              Забота о главном.
            </h1>
            <p className="text-lg text-gray-400 max-w-md">
              Профессиональная реабилитация и поддержка в Шымкенте. Мы помогаем найти путь к гармонии.
            </p>
          </div>

          {/* Право: Фото и декоративный квадрат */}
          <div className="relative">
            {/* Темный декоративный квадрат сзади */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-black/40 rounded-[3rem] -z-0 rotate-12"></div>
            
            {/* Основное фото */}
            <div className="relative z-10 aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="/doc-1.jpg" 
                alt="Главный врач" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>

        {/* Широкая горизонтальная форма */}
        <div className="bg-white p-4 md:p-6 rounded-[2.5rem] shadow-xl border border-gray-100 max-w-5xl mx-auto">
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              placeholder="Ваше имя" 
              className="flex-1 px-8 py-4 bg-gray-50 rounded-2xl focus:outline-none" 
            />
            <input 
              type="tel" 
              placeholder="Номер телефона" 
              className="flex-1 px-8 py-4 bg-gray-50 rounded-2xl focus:outline-none" 
            />
            <button className="bg-rehab-gold hover:bg-rehab-gold-dark text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-rehab-gold/20">
              Записаться
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}