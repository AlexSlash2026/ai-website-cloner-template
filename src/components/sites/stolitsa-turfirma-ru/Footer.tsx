import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#f5f5f5] py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Company name */}
          <div>
            <h2 className="text-xl font-bold mb-2">Турфирма &quot;Столица&quot;</h2>
            <h3 className="text-lg">
              В &quot;Столице&quot; история Уфы бережно хранится!
            </h3>
          </div>

          {/* Column 2: Information links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/index.php/partnerskaya-programma"
                  className="hover:underline text-gray-700"
                >
                  Грамоты и благодарности
                </a>
              </li>
              <li>
                <a
                  href="https://tourism.gov.ru/operators/show.php?id=102269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gray-700"
                >
                  Мы в реестре туроператоров
                </a>
              </li>
              <li>
                <a
                  href="https://stolitsa-turfirma.ru/index.php/tur-po-evrope"
                  className="hover:underline text-gray-700"
                >
                  Отзывы туристов
                </a>
              </li>
              <li>
                <a
                  href="/index.php/stolitsa-na-tv"
                  className="hover:underline text-gray-700"
                >
                  &quot;Столица&quot; на ТВ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Map */}
          <div>
            <h3 className="text-lg font-bold mb-4">Схема проезда</h3>
            <a
              href="https://yandex.ru/maps/?um=constructor%3A372558e9169ea87eaf9b28dc33b140893746755ada2c3e068d4befa6099aacee&source=constructorLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/sites/stolitsa-turfirma-ru/images/-100.jpg"
                alt="Схема проезда"
                width={200}
                height={150}
                className="w-full h-auto"
              />
            </a>
          </div>

          {/* Column 4: Contacts */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-700">
              <p>
                Адрес: Уфа, ул. Менделеева 25,
                <br /> оф. 305 (ост. &quot;Трикотажная фабрика&quot;)
              </p>
              <p>Телефон: 8 (347) 277-70-99, 8-917-789-66-55</p>
              <p>Е-майл: stolitsa-turfirma@yandex.ru</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="mt-12 pt-8 border-t border-gray-300">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-600">
            © 2026. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
