export function TestimonialsSection() {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
          Отзывы наших клиентов
        </h2>
        
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed text-lg">
          Мы гордимся доверием наших путешественников. Читайте реальные отзывы о наших экскурсиях, 
          турах и профессионализме гидов на независимых площадках.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Кнопка Яндекс (бирюзовая) */}
          <a
            href="https://yandex.ru/maps/org/stolitsa/1234567890/" /* ЗАМЕНИТЕ ССЫЛКУ НА ВАШУ */
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-700 hover:bg-cyan-800 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 text-lg border border-transparent"
            style={{ borderRadius: "20px" }}
          >
            <i className="fa-brands fa-yandex text-2xl"></i>
            Отзывы на Яндекс
          </a>

          {/* Кнопка 2ГИС (зеленая) */}
          <a
            href="https://2gis.ru/ufa/firm/1234567890" /* ЗАМЕНИТЕ ССЫЛКУ НА ВАШУ */
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#009B4E] hover:bg-[#007A3D] text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 text-lg border border-transparent"
            style={{ borderRadius: "20px" }}
          >
            <i className="fa-solid fa-map-location-dot text-xl"></i>
            Отзывы в 2ГИС
          </a>
        </div>

      </div>
    </section>
  );
}