import Image from "next/image";

const offerings = [
  {
    title: "Экскурсии по Уфе",
    image: "/sites/stolitsa-turfirma-ru/images/fontan_7d.png",
    href: "https://www.stolitsa-turfirma.ru/index.php/ekskursii-v-ufe",
  },
  {
    title: "Маршруты по Башкирии",
    image: "/sites/stolitsa-turfirma-ru/images/routs_rb.jpg",
    href: "https://www.stolitsa-turfirma.ru/",
  },
  {
    title: "Санатории",
    image: "/sites/stolitsa-turfirma-ru/images/sanatorium.jpg",
    href: "#",
  },
  {
    title: "Туры по России",
    image: "/sites/stolitsa-turfirma-ru/images/saintp.jpg",
    href: "https://www.stolitsa-turfirma.ru/",
  },
  {
    title: "Прием гостей в Уфе",
    image: "/sites/stolitsa-turfirma-ru/images/reciving_guests2.jpg",
    href: "https://www.stolitsa-turfirma.ru/index.php/priem-gostei-v-ufe",
  },
  {
    title: "Отдых за рубежом",
    image: "/sites/stolitsa-turfirma-ru/images/sea_holiday_250.jpg",
    href: "#",
  },
];

export function TouristOfferings() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Туристические предложения
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {offerings.map((offering, index) => (
            <a
              key={index}
              href={offering.href}
              className="text-center group hover:opacity-80 transition-opacity w-full"
              style={{ maxWidth: "350px" }}
            >
               <div 
    className="mb-4 flex justify-center"
    style={{ borderRadius: "8px", overflow: "hidden" }}
  >
    <Image
      src={offering.image}
      alt={offering.title}
      width={250}
      height={188}
      className="h-auto"
      style={{ borderRadius: "8px" }}
    />
  </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {offering.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}