"use client";

import { useState } from "react";

// Сюда вы будете добавлять пути к грамотам компании
const companyAwards = [
  "/new/sites/stolitsa-turfirma-ru/images/award_company_1.jpg",
  "/new/sites/stolitsa-turfirma-ru/images/award_company_2.jpg",
  "/new/sites/stolitsa-turfirma-ru/images/award_company_3.jpg",
  "/new/sites/stolitsa-turfirma-ru/images/award_company_4.jpg",
];

export function CompanyAwardsSection() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 max-w-6xl">
        <div 
          className="bg-white p-8 md:p-12 shadow-md border border-[#E5E0D8] flex flex-col md:flex-row items-center gap-10"
          style={{ borderRadius: "24px" }}
        >
          {/* Текстовая часть */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
              Награды и достижения
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              За годы работы турфирма «Столица» была отмечена множеством благодарственных писем, 
              дипломов и почетных грамот от государственных структур и партнеров. 
              Мы гордимся тем, что наш труд помогает развивать туризм в родном Башкортостане.
            </p>
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="inline-flex items-center justify-center gap-3 bg-cyan-700 text-white font-medium px-8 py-3 hover:bg-cyan-800 transition-colors duration-300 shadow-md"
              style={{ borderRadius: "20px" }}
            >
              <i className="fa fa-award text-lg"></i>
              Смотреть все награды
            </button>
          </div>

          {/* Превью наград (показываем первые 3) */}
          <div className="flex-1 grid grid-cols-3 gap-3 w-full">
            {companyAwards.slice(0, 3).map((award, index) => (
              <div 
                key={index} 
                className="relative aspect-[3/4] overflow-hidden border border-[#E5E0D8] shadow-sm cursor-pointer group bg-gray-50"
                style={{ borderRadius: "12px" }}
                onClick={() => setIsGalleryOpen(true)}
              >
                <img
                  src={award}
                  alt={`Награда ${index + 1}`}
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300 p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* МОДАЛЬНОЕ ОКНО (Галерея наград компании) */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative p-6 md:p-8">
            
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors p-2 z-10"
            >
              <i className="fa fa-times text-2xl"></i>
            </button>

            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Награды турфирмы «Столица»
            </h3>

            {/* Используем Grid с place-items-center для идеального центрирования */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
              {companyAwards.map((award, index) => (
                <div 
                  key={index} 
                  className="w-full flex items-center justify-center border border-[#E5E0D8] p-3 rounded-xl bg-gray-50 shadow-sm"
                  style={{ minHeight: "250px" }} // Задаем минимальную высоту ячейки
                >
                  <img 
                    src={award} 
                    alt={`Грамота ${index + 1}`} 
                    // Картинка будет масштабироваться, сохраняя пропорции, и всегда стоять по центру
                    className="object-contain w-auto h-auto max-w-full max-h-[60vh] rounded-lg mx-auto" 
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </section>
  );
}