"use client";

import { useState } from "react";

const guides = [
  {
    id: 1,
    name: "Ирина Николаевна",
    title: "Дипломированный экскурсовод",
    photo: "/new/sites/stolitsa-turfirma-ru/images/guide_1_main.jpg",
    diploma: "/new/sites/stolitsa-turfirma-ru/images/guide_1_diploma.jpg",
  },
  {
    id: 2,
    name: "Татьяна Владимировна",
    title: "Дипломированный экскурсовод",
    photo: "/new/sites/stolitsa-turfirma-ru/images/guide_2_main.jpg",
    diploma: "/new/sites/stolitsa-turfirma-ru/images/guide_2_diploma.jpg",
  },
  {
    id: 3,
    name: "Екатерина Савельева",
    title: "Дипломированный экскурсовод",
    photo: "/new/sites/stolitsa-turfirma-ru/images/guide_3_main.jpg",
    diploma: "/new/sites/stolitsa-turfirma-ru/images/guide_3_diploma.jpg",
  },
  {
    id: 4,
    name: "Екатерина Детинина",
    title: "Дипломированный экскурсовод",
    photo: "/new/sites/stolitsa-turfirma-ru/images/guide_4_main.jpg",
    diploma: "/new/sites/stolitsa-turfirma-ru/images/guide_4_diploma.jpg",
  },
  {
    id: 5,
    name: "Экскурсовод 5",
    title: "Дипломированный экскурсовод",
    photo: "/new/sites/stolitsa-turfirma-ru/images/guide_5_main.jpg",
    diploma: "/new/sites/stolitsa-turfirma-ru/images/guide_5_diploma.jpg",
  },
  {
    id: 6,
    name: "Экскурсовод 6",
    title: "Дипломированный экскурсовод",
    photo: "/new/sites/stolitsa-turfirma-ru/images/guide_6_main.jpg",
    diploma: "/new/sites/stolitsa-turfirma-ru/images/guide_6_diploma.jpg",
  },
  {
    id: 7,
    name: "Экскурсовод 7",
    title: "Дипломированный экскурсовод",
    photo: "/new/sites/stolitsa-turfirma-ru/images/guide_7_main.jpg",
    diploma: "/new/sites/stolitsa-turfirma-ru/images/guide_7_diploma.jpg",
  },
];

export function TourGuidesSection() {
  const [activeGuide, setActiveGuide] = useState(guides[0]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 text-center mb-10">
          Экскурсоводы турфирмы «Столица»
        </h2>

        {/* Навигация (переключатель экскурсоводов) */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {guides.map((guide) => (
            <button
              key={guide.id}
              onClick={() => setActiveGuide(guide)}
              className={`px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeGuide.id === guide.id
                  ? "bg-cyan-600 text-white shadow-md transform scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
              style={{ borderRadius: "30px" }}
            >
              {guide.name}
            </button>
          ))}
        </div>

        {/* Активный профиль */}
        <div className="bg-white p-6 md:p-10 shadow-lg transition-all duration-500" style={{ borderRadius: "24px" }}>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 items-start">
            
            {/* СТРОКА 1: Текст слева, Заголовок справа */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {activeGuide.name}
              </h3>
              <p className="text-cyan-600 font-medium mb-4">
                {activeGuide.title}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Наши гиды регулярно проходят аттестацию и подтверждают свою квалификацию. 
                Гордость турфирмы — их профессионализм и любовь к родному краю.
              </p>
            </div>
            
            <div className="flex flex-col justify-end h-full">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest block mt-4 md:mt-0">
                Награда и квалификация
              </span>
            </div>

            {/* СТРОКА 2: Фото слева, Грамота справа */}
            <div 
              className="relative w-full overflow-hidden shadow-md bg-gray-100"
              style={{ aspectRatio: "4/5", borderRadius: "16px", maxHeight: "450px" }}
            >
              <img
                src={activeGuide.photo}
                alt={activeGuide.name}
                className="object-cover object-top w-full h-full"
              />
            </div>

            <div className="flex flex-col h-full">
              <div 
                className="relative w-full overflow-hidden border-4 border-gray-100 shadow-sm bg-gray-50 flex items-center justify-center p-2"
                style={{ aspectRatio: "3/2", borderRadius: "12px" }}
              >
                <img
                  src={activeGuide.diploma}
                  alt={`Грамота ${activeGuide.name}`}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Кнопка под грамотой */}
              <button
                className="mt-6 inline-block border-2 border-cyan-600 text-cyan-600 font-medium px-6 py-2 hover:bg-cyan-600 hover:text-white transition-colors duration-200 w-full md:w-auto self-start"
                style={{ borderRadius: "8px" }}
                onClick={() => alert("Здесь будет открываться галерея с другими грамотами!")}
              >
                Еще грамоты
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}