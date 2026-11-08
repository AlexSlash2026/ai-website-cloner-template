export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">
          Отзывы наших клиентов
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Мы гордимся доверием наших путешественников. Читайте реальные отзывы о наших экскурсиях, 
          турах и профессионализме гидов на независимых площадках.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Кнопка Яндекс */}
          <a
            href="https://yandex.ru/maps/org/stolitsa/1234567890/" /* ЗАМЕНИТЕ ССЫЛКУ НА ВАШУ */
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FC3F1D] hover:bg-[#E23212] text-white font-medium transition-all duration-300 shadow-sm hover:shadow-md text-lg"
            style={{ borderRadius: "12px" }}
          >
            <i className="fa-brands fa-yandex text-2xl"></i>
            Отзывы на Яндекс
          </a>

          {/* Кнопка 2ГИС */}
          <a
            href="https://2gis.ru/ufa/firm/1234567890" /* ЗАМЕНИТЕ ССЫЛКУ НА ВАШУ */
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#00A34A] hover:bg-[#008C40] text-white font-medium transition-all duration-300 shadow-sm hover:shadow-md text-lg"
            style={{ borderRadius: "12px" }}
          >
            <i className="fa-solid fa-map-location-dot text-xl"></i>
            Отзывы в 2ГИС
          </a>
        </div>
      </div>
    </section>
  );
}