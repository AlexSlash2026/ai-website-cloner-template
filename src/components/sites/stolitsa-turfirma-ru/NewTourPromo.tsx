"use client";

import Image from "next/image";
import { useState } from "react";

const carouselImages = [
  "/sites/stolitsa-turfirma-ru/images/hit_p1.jpg",
  "/sites/stolitsa-turfirma-ru/images/hit_p2.jpg",
  "/sites/stolitsa-turfirma-ru/images/hit_p3.jpg",
];

export function NewTourPromo() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Новинка - экскурсия в Самару и Чебоксары!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text column */}
          <div>
            <p className="text-base leading-relaxed text-gray-700">
              Наше уникальное предожение - познавательный и разнообразный трехдневный
              круиз в Самару и Чебоксары! Во время путешествия вы прикоснетесь к
              совершенно разным культурам и традцициям, лучше узнаете историю этих
              городов и местные обычаи, отведаете необыкновенные блюда, насладитесь
              видами Волги, привезете домой самарские сладости и уникальные чувашские
              сувениры. Торопитесь! Стартуем навстречу приключениям уже 24 сентября!
            </p>
          </div>

          {/* Carousel column */}
          <div className="relative max-w-md mx-auto">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={carouselImages[activeSlide]}
                alt={`Slide ${activeSlide + 1}`}
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>

            {/* Carousel controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
              aria-label="Previous slide"
            >
              <i className="fa fa-chevron-left text-gray-800"></i>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
              aria-label="Next slide"
            >
              <i className="fa fa-chevron-right text-gray-800"></i>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeSlide ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
