"use client";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex flex-col justify-center overflow-hidden bg-[#FFFFFF]">
      {/* Фон: 60% светлый, 40% темный */}
      <div className="absolute inset-0 flex z-0">
        <div className="w-[60%] bg-[#F8F9FA]"></div>
        <div className="w-[40%] bg-[#333333]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full h-full grid grid-cols-12 items-center">
        {/* Текст */}
        <div className="col-span-7">
          <h1 className="text-5xl md:text-7xl font-bold text-[#333333] leading-tight mb-6">
            Центр <span className="text-[#D4AF37]">ABYROY</span> <br/>
            Забота о главном.
          </h1>
          <p className="text-lg text-gray-500 max-w-md">
            Профессиональная реабилитация и поддержка в Шымкенте. Мы помогаем найти путь к гармонии.
          </p>
        </div>

        {/* Фото: абсолютное позиционирование для полного контроля размера */}
        <div className="absolute right-0 top-0 h-full w-[55%] z-10 pointer-events-none">
          <div className="relative w-full h-full">
        
            
            {/* Картинка: задаем фиксированный размер, который точно будет больше */}
            <div className="absolute bottom-0 left-0 w-[800px] h-[1250px]">
              <img 
                src="/main_page.png" 
                alt="Доктор" 
                className="w-full h-full object-contain object-bottom" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Форма записи */}
      <div className="absolute bottom-10 left-0 right-0 z-20 px-4">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100 flex gap-4 items-center">
          <input 
            type="text" 
            placeholder="Ваше имя" 
            className="flex-1 px-6 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" 
          />
          <input 
            type="tel" 
            placeholder="Номер телефона" 
            className="flex-1 px-6 py-4 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" 
          />
          <button className="bg-[#D4AF37] text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#b8962d] transition shadow-lg">
            Записаться
          </button>
        </div>
      </div>
    </section>
  );
}