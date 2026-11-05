import Image from "next/image";

const transports = [
  { title: "Легковые авто", description: "Представительского класса для 2-4 человек", image: "/new/sites/stolitsa-turfirma-ru/images/transport1.jpg" },
  { title: "Мини-автобусы", description: "Комфортабельные для групп до 10 человек", image: "/new/sites/stolitsa-turfirma-ru/images/transport2.jpg" },
  { title: "Автобусы", description: "Радиофицированные экскурсионные на 12-50 человек", image: "/new/sites/stolitsa-turfirma-ru/images/transport3.jpg" },
];

export function TransportSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 text-center mb-12">
          Наш экскурсионный транспорт
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {transports.map((transport, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
              style={{ borderRadius: "16px" }}
            >
              {/* Компактная картинка с центрированием */}
              <div 
                className="relative w-full h-40 overflow-hidden mb-6"
                style={{ maxWidth: "280px", borderRadius: "12px" }}
              >
                <Image
                  src={transport.image}
                  alt={transport.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Текстовая часть */}
              <div className="text-center flex flex-col flex-grow">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {transport.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {transport.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}