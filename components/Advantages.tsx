import { ShieldCheck, Users, Activity, HeartHandshake } from "lucide-react";

const items = [
  { icon: <ShieldCheck size={28}/>, title: "100% Анонимно", desc: "Конфиденциально" },
  { icon: <Users size={28}/>, title: "Лучшие спецы", desc: "Опыт более 15 лет" },
  { icon: <Activity size={28}/>, title: "Методики", desc: "Доказанная медицина" },
  { icon: <HeartHandshake size={28}/>, title: "Поддержка", desc: "Помогаем после" },
];

export default function Advantages() {
  return (
    <section className="py-20 px-4 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] shadow-soft flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
            <div className="mb-6 p-4 bg-rehab-light rounded-2xl text-rehab-gold">
              {item.icon}
            </div>
            <h3 className="text-rehab-dark font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}