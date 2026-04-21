import { SITE_DATA } from "../constants";
import { ArrowRight } from "lucide-react";

const services = [
  { 
    title: "Лечение наркомании", 
    desc: "Комплексная реабилитация и психологическая поддержка для полного выздоровления.",
    img: "/serv-1.jpg" // Заменишь на свои фото в public
  },
  { 
    title: "Лечение алкоголизма", 
    desc: "Детоксикация и вывод из запоя под наблюдением опытных наркологов 24/7.",
    img: "/serv-2.jpg"
  },
  { 
    title: "Лечение игромании", 
    desc: "Коррекция поведенческих расстройств и работа с тягой к азартным играм.",
    img: "/serv-3.jpg"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-rehab-dark mb-4 uppercase">Услуги</h2>
            <div className="h-1 w-20 bg-rehab-gold"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-rehab-dark group overflow-hidden rounded-2xl shadow-xl transition-all hover:-translate-y-2">
              <div className="h-64 bg-gray-300 relative overflow-hidden">
                {/* Заглушка для фото */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500"></div>
                <div className="w-full h-full flex items-center justify-center text-rehab-dark/20 font-bold uppercase tracking-widest">
                   Photo {index + 1}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <button className="bg-rehab-gold/10 text-rehab-gold border border-rehab-gold/50 px-6 py-2 rounded-full text-sm font-bold hover:bg-rehab-gold hover:text-white transition-all flex items-center gap-2">
                  Подробнее <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}