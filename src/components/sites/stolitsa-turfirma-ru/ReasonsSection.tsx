const reasons = [
  "17 лет на рынке туристических услуг", "Дипломированные экскурсоводы", "Участие в региональных туристических мероприятиях", "Опыт работы с иностранными делегациями", "Помощь в получении визы",
  "Комфортабельные радиофицированные автобусы", "Более 30 уникальных экскурсионных программ", "Проведение экскурсий для школьников", "Разработка индивидуальных туров", "Удобство расположения офиса и графика работы"
];

export function ReasonsSection() {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Строгий, единый заголовок */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-16">
          10 причин обратиться в «Столицу»
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Левая колонка (5 причин) */}
          <div className="space-y-6 text-right">
            {reasons.slice(0, 5).map((reason, i) => (
              <div key={i} className="flex justify-end items-center gap-4">
                <span className="text-base text-gray-700">{reason}</span>
                <i className="fa fa-check-circle text-cyan-700 text-xl"></i>
              </div>
            ))}
          </div>

          {/* Карта в центре */}
          <div className="flex justify-center my-8 lg:my-0">
            <div 
              className="overflow-hidden w-full max-w-[320px] shadow-md border border-[#E5E0D8] bg-white"
              style={{ borderRadius: "24px" }}
            >
              <img
                src="/new/sites/stolitsa-turfirma-ru/images/map_rb3.jpg"
                alt="Карта Башкортостана"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Правая колонка (5 причин) */}
          <div className="space-y-6 text-left">
            {reasons.slice(5, 10).map((reason, i) => (
              <div key={i} className="flex items-center gap-4">
                <i className="fa fa-check-circle text-cyan-700 text-xl"></i>
                <span className="text-base text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}