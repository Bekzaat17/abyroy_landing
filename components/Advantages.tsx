import { 
  ShieldCheck, Users, Activity, HeartHandshake, 
  Sparkles, Stethoscope, Briefcase, FileText 
} from "lucide-react";

const items = [
  { icon: <ShieldCheck size={32}/>, title: "Толық құпиялылық", desc: "100% анонимділік." },
  { icon: <Users size={32}/>, title: "Білікті мамандар", desc: "Кәсіби команда." },
  { icon: <Activity size={32}/>, title: "Кешенді әдістер", desc: "Дәлелденген жолдар." },
  { icon: <HeartHandshake size={32}/>, title: "Туыстарға көмек", desc: "Психологиялық қолдау." },
  { icon: <Sparkles size={32}/>, title: "Комфортты жағдай", desc: "Ыңғайлы бөлмелер." },
  { icon: <Stethoscope size={32}/>, title: "Персональды көзқарас", desc: "Жеке емдеу жоспары." },
  { icon: <Briefcase size={32}/>, title: "Әлеуметтік көмек", desc: "Бейімделуге көмек." },
  { icon: <FileText size={32}/>, title: "Әдістердің ашықтығы", desc: "Толық ашықтық." },
];

export default function Advantages() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16 text-rehab-dark">Біздің артықшылықтарымыз</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="group flex flex-col items-center">
              {/* Контейнер иконки как в Roadmap */}
              <div className="w-20 h-20 bg-rehab-light text-rehab-gold rounded-[2rem] flex items-center justify-center mb-6 group-hover:bg-rehab-gold group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                {item.icon}
              </div>
              
              {/* Текстовая часть */}
              <h3 className="font-bold text-rehab-dark mb-2 text-sm uppercase tracking-wide group-hover:text-rehab-gold transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs max-w-[150px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}