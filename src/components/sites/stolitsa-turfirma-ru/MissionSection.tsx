export function MissionSection() {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Заголовок выделен фирменным голубым цветом */}
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-12">
  Наша миссия
</h2>
          
          {/* Декоративная линия (оставили нейтральной) */}
          <div className="w-24 h-px bg-[#D4C8B8] mx-auto mb-8"></div>

          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Обеспечить Вам незабываемый отдых в Уфе и за ее пределами, познакомить с историей 
            башкирской столицы, уникальной природой и культурой республики, достоверно рассказать 
            о местных традициях и известных людях. Коллектив «Столицы» — не просто квалифицированные 
            экскурсоводы, а настоящие профессионалы, увлеченные любимым делом.
          </p>
        </div>
      </div>
    </section>
  );
}