export function EventsSection() {
  return (
    <section className="py-16 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ЛЕВАЯ ЧАСТЬ: Текст и кнопка */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
              Проведение мероприятий
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Мы создаем яркие экскурсионные программы для детей и взрослых, а также организуем 
              прием делегаций, приезжающих на выставки и деловые события. Любите путешествовать? 
              Мы разработаем для вас индивидуальный тур по Башкирии с учетом всех пожеланий — 
              от природных маршрутов до гастрономических открытий.
            </p>

            {/* Список направлений */}
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-gray-700">
                <i className="fa fa-check-circle text-cyan-700 text-lg"></i>
                <span>Экскурсии для детей и взрослых</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <i className="fa fa-check-circle text-cyan-700 text-lg"></i>
                <span>Прием гостей на выставках и форумах</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <i className="fa fa-check-circle text-cyan-700 text-lg"></i>
                <span>Индивидуальные туры по Башкирии</span>
              </li>
            </ul>

            <a
              href="/new/events"
              className="inline-flex items-center justify-center gap-3 bg-cyan-700 text-white font-medium px-8 py-4 hover:bg-cyan-800 transition-colors duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
              style={{ borderRadius: "20px" }}
            >
              <i className="fa fa-video text-lg"></i>
              Перейти в видеогалерею
            </a>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Видео-окно */}
          <div className="order-1 lg:order-2">
            <a
              href="/new/events"
              className="group block relative w-full overflow-hidden bg-gray-200 border border-[#E5E0D8] shadow-md hover:shadow-lg transition-all duration-300"
              style={{ 
                aspectRatio: "4/3", 
                borderRadius: "24px" // Привели к единому стандарту
              }}
            >
              <img
                src="/new/sites/stolitsa-turfirma-ru/images/fontan_7d.png" 
                alt="Проведение мероприятий"
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Легкий градиент для читаемости текста */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Плашка "Смотреть видео" */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <span className="text-white/90 text-sm font-medium tracking-wide uppercase">Видео-репортаж</span>
                  <h3 className="text-white text-xl font-semibold mt-1">Моменты наших экскурсий</h3>
                </div>
                
                {/* Кнопка Play */}
                <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <i className="fa fa-play text-cyan-700 text-xl ml-1"></i>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}