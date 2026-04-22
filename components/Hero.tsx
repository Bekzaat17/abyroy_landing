"use client";
import { SITE_DATA } from "@/constants";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex flex-col justify-center overflow-hidden bg-[#FFFFFF]">
      {/* Фон */}
      <div className="absolute inset-0 flex z-0">
        <div className="w-full md:w-[60%] bg-[#F8F9FA]"></div>
        <div className="hidden md:block w-[40%] bg-[#333333]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full h-full grid grid-cols-12 items-center">
        {/* Текст */}
        <div className="col-span-12 md:col-span-7 mt-16 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#333333] leading-tight mb-4 md:mb-6">
            <span className="text-[#D4AF37]">ABYROY</span> <br/>
            Жаңа өмірге қадам
          </h1>
          <p className="text-base md:text-lg text-gray-500 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
            Тәуелділікті еңсеріп, ішкі үйлесімділікке қайта оралыңыз.
          </p>

          {/* Статистика */}
          <div className="grid grid-cols-3 gap-2 md:gap-8 max-w-lg mx-auto md:mx-0 mb-8 md:mb-10">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#333333]">15+</div>
              <div className="text-xs md:text-sm text-gray-500">Жылдық тәжірибе</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#333333]">2500+</div>
              <div className="text-xs md:text-sm text-gray-500">Сенім білдірген отбасы</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#333333]">92%</div>
              <div className="text-xs md:text-sm text-gray-500">Сәтті нәтиже</div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <a
              href={SITE_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D4AF37] text-white px-8 py-3 md:px-12 md:py-5 rounded-2xl font-bold hover:bg-[#b8962d] transition shadow-xl text-lg md:text-xl"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"/>
              </svg>
              Кеңес алу
            </a>
          </div>
        </div>

        {/* Фото: Бұл блок 100% десктоптағы бастапқы нұсқа, тек мобильдіде жасырылған (hidden md:block) */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-[55%] z-10 pointer-events-none">
          <div className="relative w-full h-full">
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
    </section>
  );
}