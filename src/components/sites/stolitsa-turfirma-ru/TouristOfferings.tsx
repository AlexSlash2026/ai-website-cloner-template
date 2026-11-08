const offerings = [
  { title: "Экскурсии по Уфе", image: "/new/sites/stolitsa-turfirma-ru/images/reciving_guests2.jpg", href: "https://www.stolitsa-turfirma.ru/index.php/ekskursii-v-ufe" },
  { title: "Маршруты по Башкирии", image: "/new/sites/stolitsa-turfirma-ru/images/routs_rb.jpg", href: "https://www.stolitsa-turfirma.ru/" },
  { title: "Санатории", image: "/new/sites/stolitsa-turfirma-ru/images/sanatorium.jpg", href: "#" },
  { title: "Туры по России", image: "/new/sites/stolitsa-turfirma-ru/images/saintp.jpg", href: "https://www.stolitsa-turfirma.ru/" },
  { title: "Научно-популярные маршруты", image: "/new/sites/stolitsa-turfirma-ru/images/fontan_7d.png", href: "https://www.stolitsa-turfirma.ru/index.php/priem-gostei-v-ufe" },
  { title: "Отдых за рубежом", image: "/new/sites/stolitsa-turfirma-ru/images/sea_holiday_250.jpg", href: "#" },
];

export function TouristOfferings() {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Строгий, единый заголовок */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-12">
          Туристические предложения
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <a
              key={index}
              href={offering.href}
              className="text-center group bg-white transition-all duration-300 w-full p-4 flex flex-col items-center border border-[#E5E0D8] hover:shadow-md"
              style={{ 
                borderRadius: "24px", 
                boxShadow: "0 4px 20px rgba(0,0,0,0.03)" 
              }}
            >
              <div 
                className="mb-4 overflow-hidden flex justify-center w-full" 
                style={{ borderRadius: "16px" }}
              >
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ maxHeight: "188px" }}
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-auto">
                {offering.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}