export function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-[#E5E0D8]" style={{ backgroundColor: "#F0EBE1" }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Название и слоган */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Турфирма «Столица»
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 font-medium">
              В «Столице» история Уфы бережно хранится!
            </p>
            <div className="text-sm text-gray-500 mt-auto">
              © {new Date().getFullYear()} Все права защищены.
            </div>
          </div>

          {/* 2. Информация */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6">Информация</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-cyan-700 transition-colors">О компании</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-700 transition-colors">Награды и достижения</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-700 transition-colors">Мы в реестре туроператоров</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-700 transition-colors">Отзывы туристов</a></li>
              <li><a href="#" className="text-gray-600 hover:text-cyan-700 transition-colors">СМИ о нас</a></li>
            </ul>
          </div>

          {/* 3. Схема проезда (Карта) */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6">Схема проезда</h3>
            <div 
              className="w-full h-40 overflow-hidden bg-white shadow-sm border border-[#E5E0D8]"
              style={{ borderRadius: "16px" }} // Привели к стандарту
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-sm text-gray-500">
                <i className="fa fa-map-marker-alt text-2xl mb-2 text-cyan-700"></i>
                <span>Карта загружается...</span>
              </div>
            </div>
          </div>

          {/* 4. Контакты */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fa fa-map-marker-alt text-cyan-700 mt-1 mr-3 w-4 text-center"></i>
                <span className="text-gray-700 leading-relaxed">
                  Уфа, ул. Менделеева 25,<br />оф. 305 (ост. "Трикотажная фабрика")
                </span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-phone-alt text-cyan-700 mt-1 mr-3 w-4 text-center"></i>
                <div className="flex flex-col text-gray-700">
                  <a href="tel:+73472777099" className="hover:text-cyan-700 transition-colors">8 (347) 277-70-99</a>
                  <a href="tel:+79177896655" className="hover:text-cyan-700 transition-colors">8-917-789-66-55</a>
                </div>
              </li>
              <li className="flex items-start">
                <i className="fa fa-envelope text-cyan-700 mt-1 mr-3 w-4 text-center"></i>
                <a href="mailto:stolitsa-turfirma@yandex.ru" className="text-gray-700 hover:text-cyan-700 transition-colors">
                  stolitsa-turfirma@yandex.ru
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}