import Image from "next/image";

const leftReasons = [
  "17 лет на рынке туристических услуг",
  "Дипломированные экскурсоводы  (входят в гильдию экскурсоводов РБ)",
  "Участие в региональных туристических мероприятиях",
  "Опыт работы с иностранными делегациями",
  "Помощь в получении визы",
];

const rightReasons = [
  "Комфортабельные радиофицированные  автобусы",
  "Более 30 уникальных экскурсионных программ",
  "Проведение экскурсий для школьников",
  "Разработка индивидуальных туров",
  "Удобство расположения офиса и графика работы",
];

export function ReasonsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          10 причин обратиться в &quot;Столицу&quot;
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="space-y-6">
            {leftReasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4 justify-end text-right">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{reason}</h4>
                </div>
                <div className="text-2xl text-cyan-500 flex-shrink-0">
                  <i className="fas fa-check-circle"></i>
                </div>
              </div>
            ))}
          </div>

          {/* Center column with map */}
          <div className="flex items-center justify-center">
            <Image
              src="/sites/stolitsa-turfirma-ru/images/map_rb3.jpg"
              alt="Карта Башкортостана"
              width={250}
              height={313}
              className="w-full h-auto"
            />
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {rightReasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-2xl text-cyan-500 flex-shrink-0">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{reason}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
