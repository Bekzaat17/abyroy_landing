export default function Team() {
  const team = [
    { name: "Жаңабай Бахтияр", role: "Амбулаториялық бағдарлама жетекшісі", img: "/bahtiyar.jpg" },
    { name: "Андас Гүлназ", role: "Психолог, жақындармен жұмыс жасау бөлімі", img: "/gulnaz.jpg" },
    { name: "Мансуров Қанат", role: "Психолог-аддиктолог", img: "/kanat.jpg" },
    { name: "Аман", role: "Бағдарлама директоры", img: "/aman.jpg" },
    { name: "Скеметр Мақсат", role: "Координатор", img: "/maksat_kordinator.jpg" },
    { name: "Әліпбай Нұрислам", role: "Директор", img: "/nurislam.jpg" },
    { name: "Журумбай Гаухар", role: "Психолог", img: "/gauhar.jpg" },
    { name: "Сейдалиев Мақсат", role: "Үй жетекшісі", img: "/maksat.jpg" },
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Біздің команда</h2>
        </div>

        {/* Карусель контейнері (өз жобаңыздағы слайдер компонентін пайдаланыңыз) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 shadow-soft">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
              </div>
              <h3 className="text-xl font-bold text-rehab-dark">{member.name}</h3>
              <p className="text-rehab-gold font-medium text-sm uppercase tracking-wider">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}