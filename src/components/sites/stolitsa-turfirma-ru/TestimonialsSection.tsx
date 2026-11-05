const testimonials = [
  {
    text: "Очень интересная и подробная информация была во время экскурсии. Узнали много интересного о монастыре, об истории церкви и о церковном искусстве! Посетили так же родник Красный ключ и озеро Сарва. Спасибо большое экскурсоводу Елене за увлекательную и познавательную экскурсию!",
    author: "Коллектив д/сада «Акбузат» д. Шамонино",
    date: "май, 2022 г."
  },
  {
    text: "Посчастливилось провести два дня с очень профессиональным гидом города Уфы - Татьяной Горской. Обширные знания и способность увлекательно рассказать об истории этого города делают Татьяну незаменимым спутником по городу. Когда горящие глаза гида зажигают интерес и любовь к посещаемой области – это успех!",
    author: "Группа туристов из Челябинской области",
    date: "июль 2021"
  },
  {
    text: "Мне поездка очень понравилась, так как было весело, интересно и увлекательно. Я очень много узнал о старинном городе нашей страны. В дальнейшем я хотел бы ещё поехать с Вами по другим интересным маршрутам. Спасибо Вам за поездку.",
    author: "Гусев Илья, 6 класс 82 гимназия г. Уфы",
    date: "2019 г."
  },
  {
    text: "Организованная группа туристов Карталинского муниципального района искренне благодарит гида Горскую Татьяну за непередаваемые впечатления от экскурсионного тура по городу Уфа. После такой обширной и запоминающейся экскурсии хочется снова вернуться в республику Башкортостан.",
    author: "Группа из Челябинской обл. г. Карталы",
    date: "2021 г."
  },
  {
    text: "Мой отдых помогли мне спланировать и осуществить турфирма «Столица», с которой я дружу уже пятый год. Спасибо за советы, оперативную работу, доброжелательность и профессионализм. Надеюсь с вашей помощью объехать весь мир!",
    author: "Светлана",
    date: "Поездка в Чехию, 2019 г."
  },
  {
    text: "Учителя и ученики МАОУ гимназия №47 выражают огромную благодарность турфирме «Столица» за организацию поездки по маршруту «Уфа – Санкт-Петербург – Уфа». Хочется отметить очень высокий уровень и высокое качество «Столицы» в организации любой экскурсии.",
    author: "Трофимова Татьяна, учитель гимназии №47",
    date: "2018 г."
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 text-center mb-12">
          Отзывы туристов
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
              style={{ borderRadius: "16px" }}
            >
              <i className="fa fa-quote-left text-cyan-200 text-4xl mb-4"></i>
              <p className="text-gray-600 leading-relaxed italic mb-6 flex-grow">
                «{review.text}»
              </p>
              <div className="mt-auto border-t border-gray-100 pt-4">
                <h4 className="font-semibold text-gray-900">{review.author}</h4>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.stolitsa-turfirma.ru/index.php/otzyvy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-cyan-600 text-cyan-600 font-medium px-8 py-3 hover:bg-cyan-600 hover:text-white transition-colors duration-200"
            style={{ borderRadius: "8px" }}
          >
            Читать все отзывы
          </a>
        </div>
      </div>
    </section>
  );
}