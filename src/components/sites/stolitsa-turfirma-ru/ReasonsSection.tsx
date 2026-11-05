import Image from "next/image";

const leftReasons = [
  "17 лет на рынке туристических услуг",
  "Дипломированные экскурсоводы (входят в гильдию экскурсоводов РБ)",
  "Участие в региональных туристических мероприятиях",
  "Опыт работы с иностранными делегациями",
  "Помощь в получении визы",
];

const rightReasons = [
  "Комфортабельные радиофицированные автобусы",
  "Более 30 уникальных экскурсионных программ",
  "Проведение экскурсий для школьников",
  "Разработка индивидуальных туров",
  "Удобство расположения офиса и графика работы",
];

export function ReasonsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 text-center mb-16">
          10 причин обратиться в &quot;Столицу&quot;
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
          {/* Left column */}
          <div className="space-y-6">
            {leftReasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4 lg:justify-end lg:text-right">
                <div className="flex-1">
                  <p className="text-base text-gray-700">{reason}</p>
                </div>
                <div className="text-xl text-cyan-600 flex-shrink-0">
                  <i className="fas fa-check-circle"></i>
                </div>
              </div>
            ))}
          </div>

          {/* Center column with map */}
          <div className="flex items-center justify-center">
            <div className="rounded-xl overflow-hidden shadow-sm">
<img
  src="/new/sites/stolitsa-turfirma-ru/images/map_rb3.jpg"
  alt="Карта Башкортостана"
  className="w-full h-auto object-cover"
/>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {rightReasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-xl text-cyan-600 flex-shrink-0">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="flex-1">
                  <p className="text-base text-gray-700">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}