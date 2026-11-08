"use client";

import { useState } from "react";

const guides = [
  { 
    id: 1, 
    name: "Ирина Николаевна", 
    title: "Дипломированный экскурсовод", 
    photo: "/new/sites/stolitsa-turfirma-ru/images/guide_1_main.jpg", 
    diploma: "/new/sites/stolitsa-turfirma-ru/images/guide_1_diploma.jpg",
    otherDiplomas: [
      "/new/sites/stolitsa-turfirma-ru/images/guide_1_diploma.jpg",
      // Сюда можно добавить вертикальные грамоты, они автоматически отцентрируются
      // "/new/sites/stolitsa-turfirma-ru/images/guide_1_diploma_vertical.jpg" 
    ] 
  },
  { 
    id: 2, 
    name: "Татьяна Владимировна", 
    title: "Дипломированный экскурсовод", 
    photo: "/new/sites/stolitsa-turfirma-ru/images/guide_2_main.jpg", 
    diploma: "/new/sites/stolitsa-turfirma-ru/images/guide_2_diploma.jpg",
    otherDiplomas: ["/new/sites/stolitsa-turfirma-ru/images/guide_2_diploma.jpg"] 
  },
  { id: 3, name: "Екатерина Савельева", title: "Дипломированный экскурсовод", photo: "/new/sites/stolitsa-turfirma-ru/images/guide_3_main.jpg", diploma: "/new/sites/stolitsa-turfirma-ru/images/guide_3_diploma.jpg", otherDiplomas: [] },
  { id: 4, name: "Екатерина Детинина", title: "Дипломированный экскурсовод", photo: "/new/sites/stolitsa-turfirma-ru/images/guide_4_main.jpg", diploma: "/new/sites/stolitsa-turfirma-ru/images/guide_4_diploma.jpg", otherDiplomas: [] },
];

export function TourGuidesSection() {
  const [activeGuide, setActiveGuide] = useState(guides[0]);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <section className="py-16 bg-transparent relative">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-10">
          Экскурсоводы турфирмы «Столица»
        </h2>

        {/* Кнопки-вкладки */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {guides.map((guide) => (
            <button
              key={guide.id}
              onClick={() => setActiveGuide(guide)}
              className={`px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeGuide.id === guide.id
                  ? "bg-cyan-700 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-[#E5E0D8]"
              }`}
              style={{ borderRadius: "30px" }}
            >
              {guide.name}
            </button>
          ))}
        </div>

        {/* Карточка активного экскурсовода */}
        <div 
          className="bg-white p-6 md:p-10 shadow-lg border border-[#E5E0D8] mx-auto"
          style={{ borderRadius: "32px" }}
        >
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 items-start">
            
            {/* Левая колонка: Текст */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {activeGuide.name}
              </h3>
              <p className="text-cyan-700 font-medium mb-4">
                {activeGuide.title}
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Наши специалисты регулярно проходят аттестацию и подтверждают свою квалификацию. 
                Гордость компании — это их профессионализм и любовь к родному краю.
              </p>
            </div>
            
            {/* Правая колонка: Заголовок грамоты */}
            <div className="flex flex-col justify-end h-full">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest block mt-4 md:mt-0">
                Награда и квалификация
              </span>
            </div>

            {/* Фото экскурсовода */}
            <div 
              className="relative w-full overflow-hidden shadow-md bg-gray-100"
              style={{ aspectRatio: "4/5", maxHeight: "450px", borderRadius: "24px" }}
            >
              <img
                src={activeGuide.photo}
                alt={activeGuide.name}
                className="object-cover object-top w-full h-full"
              />
            </div>

            {/* Фото грамоты и кнопка */}
            <div className="flex flex-col h-full">
              {/* Заменили aspectRatio на фиксированную высоту, чтобы грамоты любого формата смотрелись хорошо */}
              <div 
                className="relative w-full overflow-hidden border border-[#E5E0D8] shadow-sm bg-white flex items-center justify-center p-3 h-[300px] md:h-[350px] cursor-pointer"
                style={{ borderRadius: "16px" }}
                onClick={() => setIsGalleryOpen(true)}
              >
                <img
                  src={activeGuide.diploma}
                  alt={`Грамота ${activeGuide.name}`}
                  className="object-contain max-h-full max-w-full hover:scale-105 transition-transform duration-300"
                />
              </div>

              <button
                className="mt-6 inline-block border-2 border-cyan-700 text-cyan-700 font-medium px-6 py-3 hover:bg-cyan-700 hover:text-white transition-colors duration-200 w-full md:w-auto self-start shadow-sm"
                style={{ borderRadius: "20px" }}
                onClick={() => setIsGalleryOpen(true)}
              >
                Смотреть все грамоты
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* МОДАЛЬНОЕ ОКНО (Галерея грамот) */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative p-6 md:p-8">
            {/* Кнопка закрытия */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors p-2"
            >
              <i className="fa fa-times text-2xl"></i>
            </button>

            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Грамоты: {activeGuide.name}
            </h3>

            {/* Используем flex-wrap для центрирования грамот любого размера */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              {activeGuide.otherDiplomas && activeGuide.otherDiplomas.length > 0 ? (
                activeGuide.otherDiplomas.map((diploma, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center border border-[#E5E0D8] p-2 rounded-xl bg-gray-50 shadow-sm"
                    style={{ maxHeight: "70vh" }}
                  >
                    <img 
                      src={diploma} 
                      alt={`Грамота ${index + 1}`} 
                      // object-contain + max-h не даст вертикальным грамотам обрезаться или вылезти за экран
                      className="object-contain w-auto h-auto max-w-full max-h-[65vh] rounded-lg" 
                    />
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center w-full py-10">Дополнительные грамоты пока не загружены.</p>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}