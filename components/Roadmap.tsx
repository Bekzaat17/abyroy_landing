import { PhoneCall, ClipboardCheck, LayoutList, HeartPulse, Home } from "lucide-react";

const steps = [
  { title: "Консультация", icon: <PhoneCall size={32} />, desc: "Звонок или визит в центр." },
  { title: "Диагностика", icon: <ClipboardCheck size={32} />, desc: "Комплексное обследование." },
  { title: "План лечения", icon: <LayoutList size={32} />, desc: "Индивидуальный подход." },
  { title: "Реабилитация", icon: <HeartPulse size={32} />, desc: "Терапия и поддержка." },
  { title: "Ресоциализация", icon: <Home size={32} />, desc: "Возврат в общество." },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16 text-rehab-dark">Этапы выздоровления</h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group flex flex-col items-center">
              <div className="w-20 h-20 bg-rehab-light text-rehab-gold rounded-[2rem] flex items-center justify-center mb-6 group-hover:bg-rehab-gold group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                {step.icon}
              </div>
              <h3 className="font-bold text-rehab-dark mb-2 text-sm uppercase tracking-wide">{step.title}</h3>
              <p className="text-gray-400 text-xs max-w-[150px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}