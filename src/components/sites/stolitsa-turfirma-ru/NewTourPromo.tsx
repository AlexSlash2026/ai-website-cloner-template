import Image from "next/image";

export function NewTourPromo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Текстовая часть */}
          <div>
            <span 
              className="inline-block py-1 px-3 bg-cyan-50 text-cyan-700 text-sm font-semibold mb-4"
              style={{ borderRadius: "20px" }}
            >
              Новинка
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">
              Экскурсия в Самару и Чебоксары!
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-8">
              Приглашаем вас в увлекательное путешествие по городам России. 
              Вас ждут великолепные виды на Волгу, богатая история и незабываемые впечатления.
            </p>
            <a
              href="#"
              className="inline-block bg-cyan-600 text-white font-medium px-6 py-3 hover:bg-cyan-700 transition-colors duration-200 shadow-sm"
              style={{ borderRadius: "8px" }}
            >
              Забронировать тур
            </a>
          </div>

          {/* Журнальный коллаж */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Главная картинка (сверху, на всю ширину) */}
            <div 
              className="col-span-2 relative w-full h-64 md:h-72 overflow-hidden group"
              style={{ borderRadius: "16px" }}
            >
              <Image
                src="/sites/stolitsa-turfirma-ru/images/hit_p1.jpg"
                alt="Самара"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Две маленькие картинки (снизу) */}
            <div 
              className="col-span-1 relative w-full h-40 md:h-48 overflow-hidden group"
              style={{ borderRadius: "16px" }}
            >
              <Image
                src="/sites/stolitsa-turfirma-ru/images/hit_p2.jpg"
                alt="Чебоксары"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            <div 
              className="col-span-1 relative w-full h-40 md:h-48 overflow-hidden group"
              style={{ borderRadius: "16px" }}
            >
              <Image
                src="/sites/stolitsa-turfirma-ru/images/hit_p3.jpg"
                alt="Природа"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}