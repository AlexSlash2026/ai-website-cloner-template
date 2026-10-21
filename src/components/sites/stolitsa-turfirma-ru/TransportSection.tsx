import Image from "next/image";

const transportTypes = [
  {
    title: "Легковые авто представительского класса для 2-4 человек",
    image: "/sites/stolitsa-turfirma-ru/images/transport1.jpg",
  },
  {
    title: "Комфортабельные мини-автобусы группам до 10 человек",
    image: "/sites/stolitsa-turfirma-ru/images/transport2.jpg",
  },
  {
    title: "Радиофицированные экскурсионные автобусы  на 12-50 человек",
    image: "/sites/stolitsa-turfirma-ru/images/transport3.jpg",
  },
];

export function TransportSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Наш экскурсионный транспорт
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transportTypes.map((transport, index) => (
            <div key={index} className="text-center">
              <p className="mb-4 text-base text-gray-700">{transport.title}</p>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={transport.image}
                  alt={transport.title}
                  width={250}
                  height={188}
                  className="w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
