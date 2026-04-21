export default function Reviews() {
  const reviews = [
    { name: "Александр", text: "Профессиональный подход. Врачи действительно знают свое дело, помогли вернуться к жизни.", date: "12.03.2026" },
    { name: "Мария", text: "Очень благодарна центру за анонимность и поддержку на каждом этапе. Условия проживания отличные.", date: "05.04.2026" },
  ];

  return (
    <section id="reviews" className="py-24 bg-rehab-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-rehab-dark">Отзывы наших пациентов</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-black/5 border border-gray-50 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className="text-rehab-gold text-xl">★</span>
                  ))}
                </div>
                {/* Исправлено: используем &quot; вместо обычных кавычек */}
                <p className="text-rehab-muted mb-8 italic text-lg leading-relaxed">
                  &quot;{rev.text}&quot;
                </p>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                <span className="font-bold text-rehab-dark text-lg">{rev.name}</span>
                <span className="text-sm text-gray-400 font-medium">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}