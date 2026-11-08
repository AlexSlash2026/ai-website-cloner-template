const transports = [
  { title: "Легковые авто", description: "Представительского класса для 2-4 человек", image: "/new/sites/stolitsa-turfirma-ru/images/transport1.jpg" },
  { title: "Мини-автобусы", description: "Комфортабельные для групп до 10 человек", image: "/new/sites/stolitsa-turfirma-ru/images/transport2.jpg" },
  { title: "Автобусы", description: "Радиофицированные экскурсионные на 12-50 человек", image: "/new/sites/stolitsa-turfirma-ru/images/transport3.jpg" },
];

const pricing = [
  { transport: "Hyundai Tuscon / Subaru Outback", capacity: "4 места", price: "6 500" },
  { transport: "Hyundai / Mercedes", capacity: "7-8 мест", price: "14 000" },
  { transport: "KIA Carnival", capacity: "10 мест", price: "16 500" },
  { transport: "Volkswagen / Mercedes", capacity: "17-19 мест", price: "21 500" },
  { transport: "Iveco Neman / Volkswagen / KIA / Hyundai", capacity: "20-35 мест", price: "25 000" },
  { transport: "Mercedes / KingLong / Neoplan", capacity: "44-50 мест", price: "35 000" },
];

export function TransportSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 text-center mb-12">
          Наш экскурсионный транспорт
        </h2>
        
        {/* Блок с карточками транспорта */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {transports.map((transport, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              style={{ borderRadius: "16px" }}
            >
              <div className="relative w-full h-40 overflow-hidden mb-6" style={{ maxWidth: "280px", borderRadius: "12px" }}>
                <img
                  src={transport.image}
                  alt={transport.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-center flex flex-col flex-grow">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{transport.title}</h3>
                <p className="text-gray-600 leading-relaxed">{transport.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Блок с ценами на транспорт (Таблица) */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Стоимость экскурсии
          </h3>
          
          <div 
            className="overflow-x-auto shadow-sm border border-gray-200"
            style={{ borderRadius: "16px" }}
          >
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-cyan-600 text-white">
                  <th className="p-4 font-medium border-b border-cyan-700 w-2/3">Вид транспорта</th>
                  <th className="p-4 font-medium border-b border-cyan-700 text-center w-1/3">Стоимость (3 часа)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {pricing.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="p-4">
                      <div className="font-medium text-gray-900">{item.transport}</div>
                      <div className="text-sm text-gray-500 mt-1">{item.capacity}</div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-xl font-bold text-cyan-700">{item.price}</span>
                      <span className="text-sm text-gray-500 ml-1">руб.</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}